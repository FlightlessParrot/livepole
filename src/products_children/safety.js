import Procedure from "../product_files/procedure";
import { Link, useNavigate } from "react-router-dom";
import Line from "../universal_files/line";
import {  useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import Carusel from "../universal_files/carusel";
import { safePhotos } from "../server/safe_data";
export default function Safety() {
  const [intro, setIntro] = useState({ title: false, elem: true });
  const navigate=useNavigate();
  const proc = useRef(null);
  const ref = useRef(null);
  const obs = () => {
 
      setIntro((state) => {
        return { title: state.title, elem: !state.elem };
      });
    
  };

  useEffect(() => {
    setIntro({ title: true, elem: true});

    console.log(1);
    const observer = new IntersectionObserver(obs, {
      margin: "0px",
      threshold: 0.9,
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [ref]);

  console.log(intro);
  const array = [
    {
      title: "Stały montaż",
      option: [],
    },
    {
      title: "Szybki montaż",
      option: ["wersja czarna", "wersja nierdzewna"],
    },
    {
      title: "Montaż do silników z funkcją GPS",
      option: ["Minn Kota ULTREX", "Lowrance Ghost", "Garmin Force"],
    },
  ];

  return (
    <>
      <div className="darkness" onClick={()=>navigate('../')}></div>
      <div className="product-details" id="safety">
        <Link to="../">x</Link>

        <h1>UCHWYTY MONTAŻOWE LIVEPOLE</h1>
        <Line />
        <CSSTransition classNames="appear" timeout={1000} in={intro.title}>
          <h2>UWAGA - CHROŃ SWOJĄ INWESTYCJĘ!!!!</h2>
        </CSSTransition>
        <Line></Line>
        <Carusel elements={safePhotos}/>
        <p>
          Inwestowanie w sprzęt skanujący <b>TO JEST TO</b> w co wkładasz{" "}
          <u>dużo myśli, czasu i pieniędzy,</u> dlatego zalecamy, a wręcz gorąco
          zachęcamy do zakupu dowolnego stabilizatora dostępnego w wielu
          sklepach internetowych, podpora chroni twój sprzęt podczas transportu,
          zapewniając długą żywotność. <br />
          <br />
          Ten dodatkowy element ma wpierać powstałą dźwignię z czujnikiem,
          stabilizując go podczas podróży po wzburzonej wodzie i podczas podróży
          po polskich <i>„super”</i> drogach!
        </p>
        <CSSTransition
          classNames="fru"
          timeout={1000}
          in={intro.elem}
          nodeRef={proc}
        >
          <Procedure elements={array} setRef={proc} />
        </CSSTransition>
        <div
          ref={ref}
          style={{
          
            width: "2px",
            height: "2px",
          
          }}
        ></div>
      </div>
    </>
  );
}
