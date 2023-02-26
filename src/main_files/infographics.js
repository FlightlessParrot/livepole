import {  useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
let controler = true;
let controler2 = false;
export default function Infographics(props) {
  const [trans, setTrans] = useState(0);

  useEffect(()=>{
    controler = true;
    controler2 = false;
  },[])
  const startAnimation = () => {
    if (controler2 && controler) {
      controler = false;
      
      setInterval(
        () =>
          setTrans((state) => {
            return state + 1;
          }),
        1000
      );
    } else controler2 = true;
  };
  const options = {
    margin: "0px",
    threshold: 0.3,
  };
  const observer = new IntersectionObserver(startAnimation, options);
  useEffect(() => {
    props.div.current && observer.observe(props.div.current);
  }, [props.div.current]);

  const jsxElements = props.elements.map((element, index) => {
    return (
      <CSSTransition
        timeout={1000}
        in={trans > index ? true : false}
        classNames="group-left-fly"
        key={index + "k"}
      >
        <div>
          <img loading="lazy" src={element.photo} alt="" />
          <span>{element.text}</span>
        </div>
      </CSSTransition>
    );
  });
  return <>{jsxElements}</>;
}
