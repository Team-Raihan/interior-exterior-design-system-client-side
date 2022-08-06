import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(
    "pk_test_51L2gn9GA0XpGKfvc6Q60V7zNUxJevymIcAnC28fKtUldEYOrJb4mlSncctiBdzp9b46Nubmo800rzozVOU3GAq5d009kNMSbhJ"
);

const Payment = () => {
    const { orderid } = useParams();

    const url = `https://elctrofy.herokuapp.com/order/${orderid}`;
    const {
        data: order,
        isLoading,
        error,
    } = useQuery("order", () =>
        fetch(url, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json())
    );
    if (isLoading) {
        return (
            <p className="text-center mt-10 text-xl text-blue-500">
                Loadig....
            </p>
        );
    }
    return (
        <>
            <div className="h-screen flex items-center">
                <div className="w-96 mx-auto  border border-gray-400 rounded-lg">
                    <div className="w-full h-auto p-4 flex items-center border-b border-gray-400">
                        <h1 className="w-full text-center text-sm font-semibold text-indigo-700">
                            Pay for ${order.productName}
                        </h1>
                    </div>
                    <div className="w-full h-auto p-4">
                        <div>
                            <div className="mb-4 px-3 py-1 bg-white rounded-sm border border-gray-300 focus-within:text-gray-900 focus-within:border-gray-500">
                                <label
                                    htmlFor="cc-name"
                                    className="text-xs tracking-wide uppercase font-semibold"
                                >
                                    Name on card
                                </label>
                                <input
                                    id="cc-name"
                                    type="text"
                                    name="cc-name"
                                    className="w-full h-8 focus:outline-none"
                                    placeholder="e.g. John E Cash"
                                />
                            </div>

                            <div className="mb-4 px-3 py-1 bg-white rounded-sm border border-gray-300 focus-within:text-gray-900 focus-within:border-gray-500">
                                <label
                                    htmlFor="cc-number"
                                    className="text-xs tracking-wide uppercase font-semibold"
                                >
                                    Credit card number
                                </label>
                                <input
                                    id="cc-number"
                                    type="text"
                                    name="cc-number"
                                    className="w-full h-8 focus:outline-none"
                                    placeholder="16-digit card number"
                                />
                            </div>

                            <div className="flex mb-4 px-3 py-1 bg-white rounded-sm border border-gray-300 focus-within:border-gray-500">
                                <div className="w-full focus-within:text-gray-900">
                                    <label
                                        htmlFor=""
                                        className="text-xs tracking-wide uppercase font-semibold"
                                    >
                                        Card expiry
                                    </label>
                                    <input
                                        id="cc-expiry"
                                        type="text"
                                        className="w-full h-8 focus:outline-none"
                                        placeholder="MM / YYYY"
                                    />
                                </div>

                                <div className="w-auto focus-within:text-gray-900">
                                    <label
                                        htmlFor=""
                                        className="text-xs tracking-wide uppercase font-semibold"
                                    >
                                        CVV
                                    </label>
                                    <input
                                        id="cc-cvv"
                                        type="text"
                                        className="w-full h-8 focus:outline-none"
                                        maxLength="3"
                                    />
                                </div>
                            </div>

                            <Elements stripe={stripePromise}>
                                <CheckoutForm order={order} />
                            </Elements>
                        </div>
                    </div>
                </div>
                <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100"></div>
            </div>
        </>
    );
};

export default Payment;