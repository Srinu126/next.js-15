"use client";
import { redirect, useRouter } from "next/navigation";
import React from "react";

const OrderProduct = () => {
  const router = useRouter();
  const handleClick = () => {
    console.log("order placed");
    router.push("/");
  };
  const handleNavigation = () => {
    console.log("redirect")
    redirect("/");
  }
  return (
    <div>
      <h1>Order Product</h1>
      <button
        className="rounded-lg p-3 bg-slate-600 text-white hover:opacity-90"
        onClick={handleClick}
      >
        Place Order
      </button>
      <button className="rounded-lg p-3 bg-slate-600 text-white hover:opacity-90" onClick={handleNavigation}>
           Back to Home
      </button>
    </div>
  );
};

export default OrderProduct;
