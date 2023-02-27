import { useEffect, useReducer } from "react";
import { Link, useLoaderData, useOutletContext } from "react-router-dom";
import Line from "../universal_files/line";

export default function ProductData(params) {
  const id = Number(useLoaderData());
  const data = useOutletContext();
  const element = data.filter((product) => product.id === id);
  const InitValue = {
    image: element[0].allPhotos[0],
    number: 0,
  };
  const [value, dispatch] = useReducer(reducer, InitValue);
  function reducer(state, action) {
    const leng = element[0].allPhotos.length;
    if (action === "next") {
      const newState =
        state.number === leng - 1
          ? { image: element[0].allPhotos[0], number: 0 }
          : {
              image: element[0].allPhotos[state.number + 1],
              number: state.number + 1,
            };
      return newState;
    } else if (action === "prev") {
      const newState =
        state.number === 0
          ? { image: element[0].allPhotos[leng - 1], number: leng - 1 }
          : {
              image: element[0].allPhotos[state.number - 1],
              number: state.number - 1,
            };
      return newState;
    } else return InitValue;
  }
  useEffect(() => {
    const timeout = setTimeout(() => dispatch("next"), 4000);
    return () => clearTimeout(timeout);
  }, [value.image, dispatch]);
  return (
    <>
      <div className="darkness"></div>
      <div className="product-details">
        <Link to="../">x</Link>
        <h1>{element[0].name}</h1>
        <Line />
        <div className="photo-carusel">
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch("prev");
            }}
          >
            {"<"}
          </button>
          <img src={value.image} alt="zdjęcie produktu"></img>
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch("next");
            }}
          >
            {">"}
          </button>
        </div>
        < section dangerouslySetInnerHTML={{__html: 
          (element[0].fullText === ""
            ? element[0].shortText
            : element[0].fullText)}} ></section>
        
        <div className="red-label">
          <img
            src="/images/logo-uprp.png"
            alt="logo urzędu patentowego"
            loading="lazy"
          />
          <b>Produkt chroniony</b>
        </div>
      </div>
    </>
  );
}
