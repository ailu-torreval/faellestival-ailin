import React, { useContext } from "react";
import Link from "./Link";
import { LoginContext } from "../../Contexts/LoginContext";

function FestLinks(props) {
  const { setIsLogin } = useContext(LoginContext);

  function goToProgramPage() {
    props.setShowProgramPage(true);
    props.showBurgerMenu ?   props.setShowBurgerMenu(false)  :  [] 
    props.showFestLandPage ?   props.setShowFestLandPage(false)  :  [] 
    props.showMapPage ?   props.setShowMapPage(false)  :  [] 
    props.showArtistPage ?   props.setShowArtistPage(false)  :  [] 
    window.location = "#";
    // console.log("go to programpage");
  }

  function goToMapPage() {
    props.setShowMapPage(true);
    props.showBurgerMenu ?   props.setShowBurgerMenu(false)  :  [];
    props.showFestLandPage ?   props.setShowFestLandPage(false)  :  [] 
    props.showProgramPage ?   props.setShowProgramPage(false)  :  [] 
    props.showArtistPage ?   props.setShowArtistPage(false)  :  [] 
    window.location = "#";
    // console.log("go to artistprogrampage");
  }

  function goTomainPage() {
    // console.log("go to mainpage");
    setIsLogin(false);
    props.showBurgerMenu ?   props.setShowBurgerMenu(false)  :  [] 
    window.location = "#";
  }
  // function goTofaellescardPage() {
  //   props.setShowFestLandPage(false);
  //   props.setShowProgramPage(false);
  //   props.setShowFCardPage(true);
  //   props.setShowMapPage(false);
  //   console.log("go to mainpage");
  //   window.location = "#";
  // }
  return (
    <ul className={props.globalClassName}>
      <Link
        className="link gradientTxt"
        content="Program"
        action={goToProgramPage}
      />
      <Link className="link" content="Map" action={goToMapPage} />
      <Link
        className="link gradientTxt"
        content="Log Out"
        action={goTomainPage}
      />
    </ul>
  );
}

export default FestLinks;
