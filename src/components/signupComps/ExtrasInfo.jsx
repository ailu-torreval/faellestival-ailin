import React, { useState, useContext, useEffect } from "react";
import { AddOnContext } from "../../Contexts/AddOnContext";
import SectionTitle from "../UI/SectionTitle";
import AddOnCard from "../UI/AddOnCard";
import AddOnCheckOut from "../UI/AddOnCheckOut";
import CardTitle from "../UI/CardTitle";
import CardContent from "../UI/CardContent";
import Btn from "../UI/Btn";

function OtherInfo({ formData, setFormData, index }) {
  const [tentSetAdded, setTentSetAdded] = useState(false);
  const [luxeAdded, setLuxeAdded] = useState(false);
  const [greenCampAdded, setGreenCampAdded] = useState(false);

  useEffect(() => {
    setFormData({
      ...formData,
      firstName: formData.extraGuests[0].firstName,
      lastName: formData.extraGuests[0].lastName,
      userName: formData.extraGuests[0].lastName,
      userEmail: formData.extraGuests[0].userEmail,
    });
    // setFormData({ ...formData, lastName: formData.extraGuests[0].lastName });
    // setFormData({ ...formData, userName: formData.extraGuests[0].userName });
  }, []);

  const xtraData = useContext(AddOnContext);

  let guestQty = formData.ticketAmount;
  let luxePrice = 120;
  let tentValue;
  let luxeValue = luxePrice * guestQty;
  let greenValue = 245;

  // console.log(formData);

  guestQty % 2 == 0 ? (tentValue = (guestQty / 2) * 299) : [];
  guestQty == 1 ? (tentValue = 299) : [];
  guestQty == 3 ? (tentValue = 399) : [];
  guestQty == 5 ? (tentValue = 698) : [];

  function addTentSet() {
    setTentSetAdded(true);
    setFormData({ ...formData, tentSetup: tentValue });
    // console.log(formData.tentSetup);
    // console.log(tentSetAdded);
  }
  function addLuxe() {
    setLuxeAdded(true);
    setFormData({ ...formData, luxePack: luxeValue });
    // console.log(luxeAdded);
    // console.log(luxeValue);
  }
  function addGreenCamp() {
    setGreenCampAdded(true);
    setFormData({ ...formData, greenCamp: greenValue });
  }
  // console.log(formData);

  return (
    <section className="addOnSection">
      <SectionTitle
        className="formTitle"
        content="Get the Full Faellestival Experience"
      />
      <div className="cardGrid extrasCardGrid">
        <div>
          <AddOnCard  key={index}>
            <CardTitle
              key={index}
              head={xtraData[0].title}
              className="addOnCardTitle"
            />
            <CardContent key={index} content={xtraData[0].content} />

            {guestQty % 2 == 0 && (
              <AddOnCheckOut key={index}>
                {guestQty / 2} x 2 people tent (299kr.)
              </AddOnCheckOut>
            )}
            {guestQty == 1 && (
              <AddOnCheckOut key={index}>
                {guestQty} x 2 people tent (299kr.)
              </AddOnCheckOut>
            )}
            {guestQty == 3 && (
              <AddOnCheckOut key={index}>
                1 x 3 people tent (399kr.)
              </AddOnCheckOut>
            )}
            {guestQty == 5 && (
              <AddOnCheckOut key={index}>
                1 x 2 people tent (299kr.) <br></br> 1 x 3 people tent (399kr.){" "}
              </AddOnCheckOut>
            )}

            <Btn className="primBtn" action={addTentSet}>
              {tentSetAdded ? "Added" : `Add ${tentValue}kr.`}
            </Btn>
          </AddOnCard>
        </div>
        <div>
          <AddOnCard key={index}>
            <CardTitle
              key={index}
              head={xtraData[1].title}
              className="addOnCardTitle"
            />
            <CardContent key={index} content={xtraData[1].content} />
            <AddOnCheckOut key={index}>
              {guestQty} x Luxury Pack 120kr.
            </AddOnCheckOut>
            <Btn className="primBtn" action={addLuxe} key={index}>
              {luxeAdded ? "Added" : `Add ${luxeValue}kr.`}
            </Btn>
          </AddOnCard>
        </div>
        <div>
          <AddOnCard key={index}>
            <CardTitle
              key={index}
              head={xtraData[2].title}
              className="addOnCardTitle"
            />
            <CardContent key={index} content={xtraData[2].content} />
            <AddOnCheckOut key={index}>
              1 x Green Camping Spot {greenValue}kr.
            </AddOnCheckOut>
            <Btn key={index} className="primBtn" action={addGreenCamp}>
              {greenCampAdded ? "Added" : `Add ${greenValue}kr.`}
            </Btn>
          </AddOnCard>
        </div>
      </div>
    </section>
  );
}

export default OtherInfo;
