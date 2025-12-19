 import loc from "../assets/loc.png"

export default function Entry(props) {
 

   return (
     <>

     <div className="col-1">
        <section className="img">
            <img className="fuji" src={props.img} alt={props.alt} />
        </section>

        <section className="details">
            <div className="line-1">
                <img className="loc" src={loc} alt="loc" />
                <h2>{props.country}</h2>
                <a href={props.maps}>View on Google Maps</a>
            </div>
            <h1>{props.title}</h1>

            <h4>{props.dates}</h4>

            <p>{props.text}</p>
        </section>
    </div>
        
        
     </>
   )
 }