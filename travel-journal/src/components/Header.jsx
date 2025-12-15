import globe from "../assets/globe.png"

export default function Header() {
 
   return (
     <>
        <header className="header">
            <img className="globe" src={globe} alt="globe" />
            <h3 className= "text">my travel journal.</h3>
        </header>
     </>
   )
 }