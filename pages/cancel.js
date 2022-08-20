import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";

import { useStateContext } from "../context/StateContex";

const Cancel = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
  }, []);

  return (
    <div className="cancel-wrapper">
      <div className="cancel">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Order Cancelled!</h2>
        If you have any questions, please email
        <a className="email" href="mailto:order@example.com">
          order@example.com
        </a>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Cancel;
