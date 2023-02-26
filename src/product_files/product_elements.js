import Line from "../universal_files/line"
import { Link } from "react-router-dom"

export default function ProductElements(props)
{
    const jsxElements = props.elements.map((element)=>{
        return(
            <div className="product" key={element.id}>
               <div className="product-image"> <img src={element.mainPhoto} alt='zdjęcie produktu' loading='lazy' /></div>
                <div className="product-text">
                    <b>{element.name}</b>
                    <p dangerouslySetInnerHTML={{__html: element.shortText}}></p>
                    <Link to={'./'+element.id} onClick={window.scrollTo(0,0)}> Zobacz więcej</Link>
                    <Link to='./safety' onClick={window.scrollTo(0,0)}>Zobacz nasze uchwyty</Link>
                </div>
                <Line />
            </div>
        )
    }
        
    )

    return(
        <div id='products-list'>
            {jsxElements.reverse()}
        </div>
    )
}