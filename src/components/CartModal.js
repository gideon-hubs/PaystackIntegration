import React from "react";
import { useSelector } from "react-redux";

function CartModal({ productImage }) {
  const state = useSelector((state) => 
state.carts);
  const subTotal = state.price * state.count;

  return (
    <>
      <div className="d-flex gap-3 text-grey-50">
        <img src={productImage} alt="" width={50} className="rounded-2" />
        <div>
          <span>Fall Limited Edition Ticket</span>
          <br />
          <span>
            GHS{state.price} x {state.count} =
            <span className="text-black-90 fw-bold"> GHS{subTotal}.00</span>
          </span>
        </div>
      </div>
    </>
  );
}

export default CartModal;




