import React, { useState, useEffect } from "react";
import campMap from "/campingSpots.svg";

function CampInfo({ formData, setFormData, checkboxLabels }) {
  const [areaIsChecked, setAreaIsChecked] = useState([]);

  useEffect(() => {
    let campsites = [
      { id: 1, campsite: checkboxLabels[16] },
      { id: 2, campsite: checkboxLabels[17] },
      { id: 3, campsite: checkboxLabels[18] },
      { id: 4, campsite: checkboxLabels[19] },
      { id: 5, campsite: checkboxLabels[20] },
    ];

    setAreaIsChecked(
      campsites.map((d) => {
        return {
          select: false,
          value: d.campsite,
          id: d.id,
        };
      })
    );
  }, []);

  return (
    <div className="camp-container">
      <div className="check-container">
        <div className="check-header">
          <h3>Campsite</h3>
          <p>*Choose where to camp</p>
        </div>

        <div className="check-body camp-check">
          {areaIsChecked.map((d, index) => (
            <div key={index}>
              <input
                type="radio"
                id={d.id}
                value={d.value}
                checked={d.select}
                onChange={(event) => {
                  let checked = event.target.checked;

                  setAreaIsChecked(
                    areaIsChecked.map((data) => {
                      if (d.id === data.id) {
                        data.select = checked;
                      } else {
                        data.select = !checked;
                      }
                      return data;
                    })
                  );
                  setFormData({ ...formData, campsite: event.target.value });
                }}
              ></input>
              <label htmlFor={d.id}>{d.value}</label>
            </div>
          ))}
        </div>
        <div className={"check-body camp-map"}>
          <img className={"campMap"} src={campMap} alt="Campsite Map" />
        </div>
      </div>
    </div>
  );
}

export default CampInfo;
