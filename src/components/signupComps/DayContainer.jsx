import React from "react";

const DayContainer = ({
  formData,
  setFormData,
  dayIsChecked,
  setDayIsChecked,
}) => {
  return (
    <div className="day-container ">
      <div className="day-header">
        <h3>Ticket Duration</h3>
        <p>*Whitch day are you attending?</p>
      </div>
      <div className="day-body ticket-day">
        {dayIsChecked.map((d, index) => (
          <div key={index}>
            <input
              type="radio"
              id={d.id}
              value={d.value}
              checked={d.select}
              onChange={(event) => {
                let checked = event.target.checked;
                setDayIsChecked(
                  dayIsChecked.map((data) => {
                    if (d.id === data.id) {
                      data.select = checked;
                    } else {
                      data.select = !checked;
                    }
                    return data;
                  })
                );
                setFormData({ ...formData, ticketDay: event.target.value });
              }}
            ></input>
              <label htmlFor={d.id}>{d.value}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DayContainer;
