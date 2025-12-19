import Header from "./components/Header.jsx";
import Entry from "./components/Entry.jsx"
import traveldata from "./traveldata.js";
import fuji from "./assets/fuji.jpg"


export default function App() {
  
  const travelElements = traveldata.map((data) => {
    return (
      <Entry id = {data.id}
             img = {data.img.src}
             title = {data.title}
             country = {data.country}
             googleMapsLink = {data.googleMapsLink}
             dates = {data.dates}
             text = {data.text}
      />
    )

    })

  return (
    <>
      <div className="travel-card">
          <Header/>
          {travelElements}
        
      </div>
      
    </>
  )
}


