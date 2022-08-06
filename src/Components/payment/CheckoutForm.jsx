import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../Firebase/Firebase.init";


const CheckoutForm = ({ order }) => {
    const location = useLocation();
    const [verifiedUser, setVerifedUser] = useState(true);
    const [clientSecret, setClientSecret] = useState("");
    const handleSignOut = () => {
        signOut(auth);
        localStorage.removeItem("accessToken");
    };

    const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();
    const [cardErr, setCardErr] = useState("");
    const [orderSuccess, setOrderSuccess] = useState("");
    const [paymentProccessing, setPaymentProccesing] = useState(false);
    const [transId, setTransId] = useState("");
    const { subTotal, buyerName, buyerEmail, _id } = order;
    useEffect(() => {
        fetch("https://elctrofy.herokuapp.com/create-payment-intent", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify({ subTotal }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                } else {
                    setVerifedUser(false);
                }
            });
    }, [navigate, order, setVerifedUser, subTotal]);
    if (verifiedUser === false) {
        handleSignOut();
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });

        setCardErr(error?.message || "");
        setOrderSuccess("");
        setPaymentProccesing(true);
        // confirem order payment
        const { paymentIntent, error: intentError } =
            await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: `${buyerName}`,
                        email: `${buyerEmail}`,
                    },
                },
            });
        if (intentError) {
            setCardErr(intentError?.message);
            setPaymentProccesing(false);
        } else {
            setCardErr("");
            setTransId(paymentIntent.id);

            setOrderSuccess("Congrat your paymet is successfull.");

            // upadate payment info on the database

            const paymet = {
                orderId: _id,
                transactionId: paymentIntent.id,
            };
            fetch(`https://elctrofy.herokuapp.com/order/${_id}`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${localStorage.getItem(
                        "accessToken"
                    )}`,
                },
                body: JSON.stringify(paymet),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data?.acknowledged) {
                        console.log(data.acknowledged);
                        setPaymentProccesing(false);
                        toast.success(`${buyerName} Your order is Success.`);
                    }
                });
        }
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: "16px",
                                color: "#424770",
                                "::placeholder": {
                                    color: "#aab7c4",
                                },
                            },
                            invalid: {
                                color: "#9e2146",
                            },
                        },
                    }}
                />
                <button
                    type="submit"
                    disabled={!stripe || !clientSecret || orderSuccess}
                    className="btn h-16 w-full rounded-sm bg-indigo-600 tracking-wide font-semibold text-white"
                >
                    Pay
                </button>
            </form>
            <p className="text-warning">{cardErr}</p>
            {paymentProccessing && (
                <p className="text-center text-blue-500">Loading....</p>
            )}
            {orderSuccess && <p className="text-green-500">{orderSuccess}</p>}
            {transId && (
                <p className="text-green-500">
                    Your transaction Id:{" "}
                    <span className="text-orange-400">{transId}</span>
                </p>
            )}
        </>
    );
};

export default CheckoutForm;