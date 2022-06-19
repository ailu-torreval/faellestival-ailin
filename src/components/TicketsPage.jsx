import React, { useState, useContext } from "react";
import { TicketsContext } from "../Contexts/TicketsContext";
import { AvailableContext } from "../Contexts/AvailableContext";
import MainSect from "./sections/MainSect";
import CardGrid from "./UI/CardGrid";
import OrderForm from "./sections/OrderForm";
import Title from "./UI/Title";
import Breadcrumbs from "./UI/Breadcrumbs";
//  import ticketContent from "./content.json?raw";

function TicketsPage(props) {
  const ticketsData = useContext(AvailableContext);
  const ticketsContent = useContext(TicketsContext);
  const [showForm, setShowForm] = useState(false);
  const [soldOut, setSoldOut] = useState(false);
  const [ticketSelection, setTicketSelection] = useState();

  //check if there is tickets available
  const initialValue = 0;
  let sum = ticketsData.reduce(
    (previousValue, currentValue) => previousValue + currentValue.available,
    initialValue
  );
  sum == 0 ? setSoldOut(true) : "";

  function goToMain() {
    props.setShowTicketsPage(false);
    props.setShowLandPage(true);
    window.location = "#";
  }

  return (
    <main>
      {showForm ? (
        []
      ) : (
        <>
          <Breadcrumbs
            className="gobackLineup"
            bcReg="Main"
            {...props}
            action={goToMain}
          />
          <Title className="headLine gradientTxt" content="Tickets" />
          <CardGrid
            className="cardGrid hidden"
            ticketsContent={ticketsContent}
            setShowForm={setShowForm}
            soldOut={soldOut}
            setTicketSelection={setTicketSelection}
            ticketSelection={ticketSelection}
          />
        </>
      )}

      {showForm && <OrderForm setShowForm={setShowForm} ticketSelection={ticketSelection} setTicketSelection={setTicketSelection}
 />}
    </main>
  );
}

export default TicketsPage;
