import Procedure from "../product_files/procedure";
import { Link } from "react-router-dom";
import Line from "../universal_files/line";
import { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
export default function Safety() {
   const[intro, setIntro]=useState(false)

    const proc=useRef(null)
    console.log(intro)
    
    useEffect(() => setIntro(true), []);
    console.log(intro)
    
    const array=[
        {
            title: 'Stały montaż',
            option: [] 
        },
        {
            title: 'Szybki montaż',
            option: ['wersja czarna', 'wersja nierdzewna'] 
        },
        {
            title: 'Montaż do silników z funkcją GPS',
            option: ['Minn Kota ULTREX', 'Lowrance Ghost', 'Garmin Force'] 
        },
    ]
 
  return (<>
    <div className="darkness" ></div>
    <div className="product-details" id="safety"> 
    <Link to="../">x</Link>
    
      <h1>UCHWYTY MONTAŻOWE LIVEPOLE</h1>
      <Line />
      <CSSTransition classNames="appear" timeout={1000} in={intro}>
      <h2 >UWAGA - CHROŃ SWOJĄ INWESTYCJĘ!!!!</h2>
      </ CSSTransition>
      <Line></Line>
      <p>
        Inwestowanie w sprzęt skanujący TO JEST TO w co wkładasz dużo myśli,
        czasu i pieniędzy, dlatego zalecamy, a wręcz gorąco zachęcamy do zakupu
        dowolnego stabilizatora dostępnego w wielu sklepach internetowych,
        podpora chroni twój sprzęt podczas transportu, zapewniając długą
        żywotność. Ten dodatkowy element ma wpierać powstałą dźwignię z
        czujnikiem, stabilizując go podczas podróży po wzburzonej wodzie i
        podczas podróży po polskich „super” drogach!
      </p>
      <CSSTransition classNames="fru" timeout={1000} in={intro} nodeRef={proc}>
        <Procedure elements={array} setRef={proc}/></CSSTransition>
    </div></>
    
  );
}
