import React from "react";
import TicketCard from "./TicketCard";

function CardGrid(props) {
  return (
    <div className={props.className} >
      {props.ticketsContent &&
        props.ticketsContent.map((ticket, index) => (
          <TicketCard
          cardClass="ticketCard"
            contentClass="ticketContent"
            head={ticket.ticketOpt}
            content={ticket.specs}
            price={ticket.price}
            key={index}
            value= {index +3}
            {...props}
          />
        ))}
    </div>
  );
}

export default CardGrid;
