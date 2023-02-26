import { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";

let controler={check: false, after: true};

export default function ContactElements(props) {
 const ref=useRef(null)
const observer= new IntersectionObserver(animate,{margin: '0px', threshold: 1 })
const [intro, setIntro] = useState(0)
useEffect(
  ()=>{
    controler={check: false, after: true}
  },[]
)
useEffect(
()=>{
ref.current && observer.observe(ref.current)
},[ref])

function animate()
{
  if(controler.check && controler.after)
  {
    setInterval(()=>setIntro((state)=>state+1),1000)
    controler.after=false
  }else controler.check=true
}


  const jsxElements = props.elements.map((element, index) => {
    return (
      <CSSTransition in={intro>index} appear timeout={1000} classNames='fru' key={index}>
      <div className="contact-element" >
        <img src={element.photo} alt='' loading="lazy"/>
        <b>{element.text}</b>
      </div></CSSTransition>
    );
  });
  return <div className="contact-elements" ref={ref}>{jsxElements}</div>;
}
