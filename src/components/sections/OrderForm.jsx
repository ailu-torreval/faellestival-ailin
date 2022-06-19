import React from "react";
import TicketForm from "../signupComps/TicketForm";

function OrderForm(props) {
  function closeForm() {
    props.setShowForm(false);
    // console.log("close form");
  }
  return (
    <div className="formBase">
      <button className="closeFormBtn" onClick={closeForm}>✖</button>
      <TicketForm {...props} />
    </div>
  );
}

export default OrderForm;
