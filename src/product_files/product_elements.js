import Line from "../universal_files/line"
import { Link } from "react-router-dom"

export default function ProductElements(props)
{
    const jsxElements = props.elements.map((element)=>{
        return(
            <div className="product" key={element.id}>
               <div className="product-image"> <img src={element.mainPhoto} alt='zdjęcie produktu' loading='lazy' />
               <div><img src='/images/logo-uprp.png' alt='logo urzędu patentowego' loading='lazy' /><b>Produkt chroniony</b></div>
               </div>
                <div className="product-text">
                    <b>{element.name}</b>
                    <section dangerouslySetInnerHTML={{__html: element.shortText}}></section>
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