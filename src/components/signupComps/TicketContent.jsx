import React, { useState, useEffect } from "react";
import TicketAmountHandler from "./TicketAmountHandler";
import DayContainer from "./DayContainer";

function TicketContent({ formData, setFormData, checkboxLabels, ticketSelection, setTicketSelection }) {
  const [typeIsChecked, setTypeIsChecked] = useState([]);
  const [durationIsChecked, setDurationIsChecked] = useState([]);
  const [dayIsChecked, setDayIsChecked] = useState([]);
  const [showDays, setShowDays] = useState(false);

  useEffect(() => {
    let typeIsChecked = [
      { id: 1, ticketType: checkboxLabels[0] },
      { id: 2, ticketType: checkboxLabels[1] },
    ];

    setTypeIsChecked(
      typeIsChecked.map((d) => {
        return {
          select: false,
          ticketType: d.ticketType,
          id: d.id,
          value: d.ticketType,
        };
      })
    );
  }, []);

  useEffect(() => {
    let durationIsChecked = [
      { id: 3, ticketDuration: checkboxLabels[2] },
      { id: 4, ticketDuration: checkboxLabels[3] },
      { id: 5, ticketDuration: checkboxLabels[4] },
    ];

    setDurationIsChecked(
      durationIsChecked.map((d) => {

        if (d.id === ticketSelection) {
          return { 
            select: true,
              ticketDuration: d.ticketDuration,
              id: d.id,
              value: d.ticketDuration
        }} else {
          return {
            select: false,
            ticketDuration: d.ticketDuration,
            id: d.id,
            value: d.ticketDuration
          }
        }})
    );
  }, []);

  useEffect(() => {
    let dayIsChecked = [
      { id: 6, ticketDay: checkboxLabels[5] },
      { id: 7, ticketDay: checkboxLabels[6] },
      { id: 8, ticketDay: checkboxLabels[7] },
      { id: 9, ticketDay: checkboxLabels[8] },
      { id: 10, ticketDay: checkboxLabels[9] },
      { id: 11, ticketDay: checkboxLabels[10] },
      { id: 12, ticketDay: checkboxLabels[11] },
    ];

    setDayIsChecked(
      dayIsChecked.map((d) => {
        return {
          select: false,
          ticketDay: d.ticketDay,
          id: d.id,
          value: d.ticketDay,
        };
      })
    );
  }, []);

  return (
    <div className="ticket-container">
      <div className="check-container">
        <div className="check-header">
          <h3>Ticket Type</h3>
          <p>*Ticket type determines how many perks you have</p>
        </div>
        <div className="check-body ticket-type">
          {typeIsChecked.map((d, index) => (
            <div key={index}>
              <input
                type="radio"
                id={d.id}
                value={d.value}
                checked={d.select}
                onChange={(event) => {
                  let checked = event.target.checked;

                  setTypeIsChecked(
                    typeIsChecked.map((data) => {
                      if (d.id === data.id) {
                        data.select = checked;
                      } else {
                        data.select = !checked;
                      }
                      return data;
                    })
                  );
                  setFormData({ ...formData, ticketType: event.target.value });
                }}
              ></input>
              <label htmlFor={d.id}>{d.value}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="duration-container">
        <div className="duration-header">
          <h3>Ticket Duration</h3>
          <p>*What days are you attending?</p>
        </div>
        <div className="duration-body ticket-duration">
          {durationIsChecked.map((d, index) => (
            <div key={index}>
              <input
                type="radio"
                id={d.id}
                value={d.value}
                checked={d.select}
                onChange={(event) => {
                  let checked = event.target.checked;
                  setTicketSelection(d.id)
                  setDurationIsChecked(
                    durationIsChecked.map((data) => {
                      if (d.id === data.id) {
                        data.select = checked;
                      } else {
                        data.select = !checked;
                      }
                      return data;
                    })
                  );
                  setFormData({ ...formData, ticketDuration: event.target.value });
                }}
              ></input>
              <label htmlFor={d.id}>{d.value}</label>
            </div>
          ))}
        </div>

        <div>
{          ticketSelection === 3 &&             <DayContainer
              formData={formData}
              setFormData={setFormData}
              dayIsChecked={dayIsChecked}
              setDayIsChecked={setDayIsChecked}
            />}


        </div>
      </div>
      <div className="Amount-container">
        <div>
          <TicketAmountHandler formData={formData} setFormData={setFormData} />
        </div>
      </div>
    </div>
  );
}

export default TicketContent;
