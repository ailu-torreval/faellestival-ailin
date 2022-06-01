import React, { useContext } from "react";
import { LoginContext } from "../../Contexts/LoginContext";
import Btn from "./Btn";
import NavBrand from "./NavBrand.jsx";
import BtnGrid from "../UI/BtnGrid.jsx";

function NavBar(props) {
  const { isLogin, setIsLogin } = useContext(LoginContext);

  function goToLineup() {
    props.setShowLineup(true);
    props.setShowTicketsPage(false);
    props.setShowLandPage(false);
  }
  function goToFestApp() {
  props.setShowLogin(true);
  }

  function openBurger() {
    console.log("openburger");
    props.showBurgerMenu
      ? props.setShowBurgerMenu(false)
      : props.setShowBurgerMenu(true);
  }
  function goToTicketsPage() {
    props.setShowLineup(false);
    props.setShowTicketsPage(true);
    props.setShowLandPage(false);
    props.setShowFaqPage(false);
    console.log("gototickets");
  }
  let user = props.guestName;

  return (
    <nav className={props.className} id={props.id}>
      {props.showLandPage || props.showFestLandPage ? (
        []
      ) : (
        <NavBrand
          {...props}
          logoClassName="navLogo"
          className="navTitle"
          content="Faellestival"

        />
      )}

{props.showFaqPage && (
        <Btn
        action={goToTicketsPage}
        content="Tickets"
        className="secBtn"
      />
      )}

      {props.showTicketsPage && (
        <BtnGrid
          btn1action={goToLineup}
          btn1content="Line Up"
          btn1className="secBtn"
          btn2action={goToFestApp}
          btn2content="Fest App"
          btn2className="secBtn"
          btn3content="☰"
          btn3action={openBurger}
          btn3className="burgerBtn"
        />
      )}
      {props.showLineup && (
        <BtnGrid
          btn1action={goToFestApp}
          btn1content="Fest App"
          btn1className="secBtn"
          btn2action={goToTicketsPage}
          btn2content="Tickets"
          btn2className="secBtn"
          btn3content="☰"
          btn3action={openBurger}
          btn3className="burgerBtn"
        />
      )}
      {props.showLandPage && (
        <Btn
          action={goToFestApp}
          content="Fest App"
          className="primBtn"
          id="festApp"
        />
      )}
      {props.showLandPage && (
        <Btn content="☰" action={openBurger} className="burgerBtn" />
      )}
      {isLogin && (
        <BtnGrid
          btn1action={openBurger}
          btn1content={user}
          btn1className="name"
          id="userInfo"
          btn2content="☰"
          btn2action={openBurger}
          btn2className="festburgerBtn"
        />
      )}
    </nav>
  );
}

export default NavBar;
