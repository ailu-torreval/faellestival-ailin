import React, { useState } from "react";
import PushAllData from "./PushAllData";
import TicketContent from "./TicketContent";
import PersonalInfo from "./PersonalInfo";
import ExtrasInfo from "./ExtrasInfo";
import CampInfo from "./CampInfo";
import TimeCount from "./TimeCount";
import TicketCheckout from "./TicketCheckout";

function TicketForm(props) {
  const [page, setPage] = useState(0);
  //  const [reservationTime, setReservationTime] = useState();
  const [required, setRequired] = useState(true)
  const reservationTime = 42000;

  const [formData, setFormData] = useState({
    userEmail: "",
    userPassword: "",
    confirmPassword: false,
    firstName: "",
    lastName: "",
    userName: "",
    checkoutTotal: "",
    authKey: "",
    ticketType: "",
    ticketDuration: "",
    ticketDay: "",
    agreeTerms: "",
    agreeSocial: "",
    ticketAmount: 0,
    cardFee: 99,
    campsite: "",
    tentSetup: 0,
    luxePack: 0,
    greenCamp: 0,
    faellesCard: 0,
    extraGuests: [],
    fulfilled: "",
  });

  const FormTitles = [
    "Select Tickets",
    "Choose Campsite",
    "Personal Info",
    "Choose Extras",
    "Checkout Cart",
    "Congratulations!",
  ];
  const checkboxLabels = [
    "Standard Ticket",
    "VIP Ticket",
    "One Day",
    "Weekend",
    "Full Festival",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "Merch Pack",
    "Tent Setup",
    "Agree to Terms",
    "Agree to Membership",
    "Helheim",
    "Svartheim",
    "Nilfheim",
    "Muspelheim",
    "Alfheim",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return (
        <TicketContent
          className="transition-ease"
          ticketType={props.ticketType}
          checkboxLabels={checkboxLabels}
          formData={formData}
          setFormData={setFormData}
          {...props}
        />
      );
    } else if (page === 1) {
      return (
        <CampInfo
          formData={formData}
          setFormData={setFormData}
          checkboxLabels={checkboxLabels}
        />
      );
    } else if (page === 2) {
      return (
        <PersonalInfo
          setRequired={setRequired}
          required={required}
          className="transition-ease"
          formData={formData}
          setFormData={setFormData}
          setPage={setPage}
        />
      );
    } else if (page === 3) {
      return <ExtrasInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 4) {
      return (
        <TicketCheckout
          formData={formData}
          setFormData={setFormData}
          page={page}
        />
      );
    } else if (page === 5) {
      return <PushAllData formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="ticket-form draw">
      <div className="progressbar transition-ease">
        <div
          className="transition-ease"
          style={{
            width:
              page === 0
                ? "16.6%"
                : page == 1
                ? "33.3%"
                : page == 2
                ? "50%"
                : page == 3
                ? "66.6%"
                : page == 4
                ? "83.3%"
                : "100%",
          }}
        ></div>
      </div>
      <div className="form-container ">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="countdown-timer">
          <TimeCount
            reservationTime={reservationTime}
            setPage={setPage}
            PageDisplay={PageDisplay}
          />
        </div>
        <div className="body ">{PageDisplay()}</div>
        <div className="footer">
          {page >= 1 && (
            <button
              disabled={page == 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              Prev
            </button>
          )}
          {page == 4 ? (
            <button onClick={() => setPage((currPage) => currPage + 1)}>
              PAY {formData.checkoutTotal}kr.
            </button>
          ) : (
            <button
              onClick={() => {
                if (page === FormTitles.length - 1) {
                  props.setShowForm(false);
                  props.setShowTicketsPage(false);
                  props.setShowLandPage(true);
                  window.location = "#";
                  // console.log(formData);
                } else if (page === 2) {
                  // console.log(formData);
                  if (formData.extraGuests[0].firstName) {
                    setPage((currPage) => currPage + 1);
                    setRequired(false);
                  } else {
                    setRequired(true);
                  }
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}
            >
              {page === FormTitles.length - 1 ? "Done" : "Next"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default TicketForm;
