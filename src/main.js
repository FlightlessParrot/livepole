import HamburgerMenu from "./hamburger_menu";
import { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import Infographics from "./main_files/infographics";
import Items from "./main_files/items";
import Foot from "./foot";
import { useNavigate } from "react-router-dom";

let controler = {
  h1: false,
  exp: false
};

export default function Main() {

  const navigate = useNavigate();
  const ref = useRef(null);
  const h1Ref = useRef(null);
  const expRef=useRef(null)
  const [intro, setIn] = useState({h1: false, exp: false});

  useEffect(() => {

      window.scrollTo(0, 0);
  
    
   controler= {
      h1: false,
      exp: false
    };
    setIn({
      h1: false,
      exp: false
    }); 

  }, []);
 
  const graphicElements = [
    {
      photo: "/images/icons/fish.png",
      text: "Intuicyjne działanie",
    },
    {
      photo: "/images/icons/fishing.png",
      text: "Kontrola kąta widzenia",
    },
    {
      photo: "/images/icons/palm-of-hand.png",
      text: "Bez użycia rąk",
    },
  ];
  const items = [
    {
      photo: "/images/items/Igen3.png",
      text: "Podświetlana strzałka kierunku obrotu",
    },
    {
      photo: "/images/items/IIGEN.png",
      text: "Wolne ręce",
    },
    {
      photo: "/images/items/IIGEN5.png",
      text: "Zrobiliśmy to",
    },
  ];


  const observer = new IntersectionObserver(observator, {
    margin: "0px",
    threshold: 0.3,
  });
  const observer2 = new IntersectionObserver(observatorExp, {
    margin: "0px",
    threshold: 0.3,
  });

  useEffect(() => {
    h1Ref && observer.observe(h1Ref.current);
 
  }, [h1Ref]);
  useEffect(() => {
    expRef && observer2.observe(expRef.current);
  
  }, [expRef]);



  function observator() {
    controler.h1 ? setIn((state)=> {return {h1: true, exp: state.exp}}) : (controler.h1 = true);
  }
  function observatorExp() {
    controler.exp ? setIn((state)=> {return {h1: state.h1, exp: true}}) : (controler.exp = true);
  }


  return (
    <>
      <HamburgerMenu />
      <div id="video-div">
        <video autoPlay="autoplay" muted="muted" loop="loop">
          <source src="/images/movies/boat.mp4" type="video/mp4"></source>
        </video>
        <img loading='lazy' src="/images/loga/logo_tackle.png" alt="logo" />
      </div>
      <div id="title">
        <CSSTransition classNames="appear" timeout={1000} in={intro.h1}>
          <h1>LIVEPOLE - POLSKA SZTYCA</h1>
        </CSSTransition>
      </div>
      <div ref={h1Ref} id="circle-boat">
        <div>
          <h2>Z PASJI DO WĘDKARSTWA</h2>
        </div>
        <section>
          Najlepszy na rynku sterowany elektrycznie uchwyt do przetworników LIVE
          marek Garmin Panoptix LiveScope, Humminbird Mega Live Imaging,
          Lowrance Active Target.
          <br /> <br />
          POLSKA SZTYCA dostępna w wersji do montażu do boku łodzi z różnymi
          opcjami montażu, jak również do wielu silników elektrycznych
          dziobowych z funkcją kotwicy. Umożliwia kontrolę kąta widzenia
          przetwornika LIVE za pomocą pilota bezprzewodowego. lub nożnego panelu
          sterowania bez użycia rak!
          <br /> <br />
          Sfrustrowani kręceniem tradycyjnymi ręcznymi uchwytami, które wymagają
          posiadania najlepiej dodatkowej pary rąk, a w realu kolegi który nie
          łowi, postanowiliśmy ulepszyć i unowocześnić nasze hobby. Intuicyjne
          działanie, panel sterownia nożnego. Zmienna sterowana prędkość obrotu.
          Podświetlana strzałka kierunku obrotu dzięki czemu zawsze wiesz gdzie
          jest skierowany Twój czujnik. Przeszukiwanie automatyczne.
        </section>
      </div>
      <div id="infographics" >
        <Infographics elements={graphicElements} div={ref} key={"info"} />
      </div>
      <div id="boat_div" ref={ref}>
        Live Pole prezentuje samodzielną jednostkę zasilaną i sterowaną
        elektrycznie do montażu w zależności od wersji produkcyjnej na burcie
        Twojej łodzi lub bezpośrednio do silnika dziobowego .
        <br />
        <br />
        Praca zestawu może odbywać się ze zmienną prędkością obrotu w celu
        dokładniejszego skanowania obszaru obserwacji.
        <br />
        <br />
        System umożliwia niezależną pracę w stosunku do pracy silnika dziobowego{" "}
        <br />- zwłaszcza po włączeniu opcji utrzymania pozycji. Funkcja kotwica
        / Funkcja niezależnej pracy ma zastosowanie także przy montażu
        bezpośrednio do kadłuba silnika dziobowego. Nasz produkt: Live Pole
        otrzymasz zapakowany w karton transportowy.
        <div id="explore">
        <CSSTransition classNames="appear" timeout={1000} in={intro.exp}>
          <h2>Eksploruj naszą stronę</h2>
          </CSSTransition>
        </div>
        <div id="items" ref={expRef}>
          <Items elements={items} div={expRef}/>
        </div>
        <div id="last-main">
          <b>Nie czekaj!!!</b>{" "}
          <button
            className="button"
            onClick={(e) => {
              e.preventDefault();
              navigate("/contact");
            }}
          >
            Zamów
          </button>{" "}
          <b>Już dziś!!!</b>
        </div>
      </div>
    
      <Foot />
    </>
  );
}
