import HamburgerMenu from "./hamburger_menu"
import Line from "./universal_files/line"
import ContactElements from "./contact_files/contact_elements"
import GoogleMaps from "./contact_files/google_maps";
import Foot from "./foot";
import { useEffect } from "react";
export default function Contact()
{
    useEffect(() => {
       
          window.scrollTo(0, 0);
       
      }, []);
    const contactElements=[
        {
            photo:'/images/icons/phone-call.png',
            text: <>tel. <a href='tel:+48531030373'>+48 531 030 373</a> <br /> <br />
            tel. <a href='tel:+48535933875'>+48 535 933 875 </a></>
        },
        {
            photo:'/images/icons/email.png',
            text: <>mail: <a href='mailto:livepolepl@gmail.com'>livepolepl@gmail.com</a></>
        },
        {
            photo:'/images/icons/home.png',
            text: <>adres: ul. T. Kościuszki 112, <br/>83-250 Starogard Gdański'</>
        },
        {
            photo:'/images/icons/fb-100.png',
            text: <a href="https://www.facebook.com/sztyca/">Znajdź nas na facebook'u</a>
        }
    ]
    return(<>
        <HamburgerMenu />
    <div id='contact-top-div'><h1>Skontaktuj się z nami</h1>
    <img src="/images/loga/Logo_LivePole_300.png" /></div>
    <Line />
    <div id='contact-data'>
        
        <ContactElements elements={contactElements}/>
        
        <div className="vert-line"></div>
        <Line />
        <div id='order'>
            <h2>Chcesz złożyć zamówienie?</h2>
            <h2>Zadzwoń lub napisz do nas!</h2>
            <img src='images/loga/Logo_LivePole_300.png' alt='logo' />

        </div>

    </div>

    <GoogleMaps />
    <Foot />
    </>
    )
}