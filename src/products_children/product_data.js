
import { Link, useLoaderData, useOutletContext } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Line from "../universal_files/line";
import Carusel from "../universal_files/carusel";
export default function ProductData(params) {
  const navigate=useNavigate();
  const id = Number(useLoaderData());
  const data = useOutletContext();
  const element = data.filter((product) => product.id === id);
  const photos= element[0].allPhotos.map((element)=>({photo: element, name: ''}))
  return (
    <>
      <div className="darkness" onClick={()=>navigate('../')}></div>
      <div className="product-details">
        <Link to="../">x</Link>
        <h1>{element[0].name}</h1>
        <Line />
        <Carusel elements={photos}/>
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
