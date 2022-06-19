import React from "react";
import CardTitle from "./CardTitle";
import CardContent from "./CardContent";
import Btn from "./Btn";

function TicketCard(props) {
  function openForm() {
    props.setShowForm(true);
    props.setTicketSelection(props.value);
    console.log(props.ticketSelection);
    // console.log("OPEN FORM");
    window.location = "#";
  }
  return (
    <div className={props.cardClass}>
      <CardTitle className="ticketTitle" head={props.head} />
      <section className={props.contentClass}>
        <CardContent content={props.content} price={props.price} />
        {props.soldOut ? (
          <Btn className="inactive out" content="Sold Out" />
        ) : (
          <Btn
            className="primBtn out"
            action={openForm}
            content="Get Your Ticket"
          />
        )}
      </section>
    </div>
  );
}

export default TicketCard;
