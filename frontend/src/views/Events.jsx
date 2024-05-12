import NavBar from "../components/NavBar.jsx";
import Event from "../components/Event.jsx";
import Footer from "../components/Footer.jsx";


export default function Events({isMobile}) {
    return (
        <div id="event-page">
            <NavBar isMobile={isMobile} />
            <Event isMobile={isMobile} />
            <Footer isMobile={isMobile} />
        </div>
    );
}