import { useEffect, useReducer } from "react";
export default function Carusel(props)
{
    const InitValue = {
        image: props.elements[0].photo,
        text: props.elements[0].name,
        number: 0,
      };
      const [value, dispatch] = useReducer(reducer, InitValue);
      function reducer(state, action) {
        const leng = props.elements.length;
        if (action === "next") {
          const newState =
            state.number === leng - 1
              ? {
                  image: props.elements[0].photo,
                  text: props.elements[0].name,
                  number: 0,
                }
              : {
                  image: props.elements[state.number + 1].photo,
                  text: props.elements[state.number + 1].name,
                  number: state.number + 1,
                };
          return newState;
        } else if (action === "prev") {
          const newState =
            state.number === 0
              ? { image: props.elements[leng - 1].photo, text: props.elements[leng-1].name, number: leng - 1 }
              : {
                  image: props.elements[state.number - 1].photo,
                  text: props.elements[state.number - 1].name,
                  number: state.number - 1,
                };
          return newState;
        } else return InitValue;
      }
      useEffect(() => {
        const timeout = setTimeout(() => dispatch("next"), 4000);
        return () => clearTimeout(timeout);
      }, [value.image, dispatch]);
    return(<>
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
      <h3>{value.text}</h3></>
    )
}