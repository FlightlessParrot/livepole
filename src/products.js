import HamburgerMenu from "./hamburger_menu"
import ProductElements from "./product_files/product_elements"
import { Outlet, useLoaderData } from "react-router-dom"
import { useEffect } from "react"


export default function Products()
{
    useEffect(() => {
       
        window.scrollTo(0, 0);
     
    }, []);
    const loaderData=useLoaderData();
    console.log(loaderData)
    return(<>
        <HamburgerMenu />
    <div id="product-top-div"><h1>LivePole <br /> nasze produkty</h1>
    <video autoPlay="autoplay" muted="muted" loop="loop">
          <source src="/images/movies/product.mp4" type="video/mp4"></source>
        </video>
        <img loading='lazy' src="/images/loga/Logo_LivePole_300.png" alt='logo'/>
        </div>
        <div id='product-title'>
            <h2>Nasze produkty</h2>
            </div>
        <ProductElements elements={loaderData}/>
        <Outlet context={loaderData}/>
            </>)
}
