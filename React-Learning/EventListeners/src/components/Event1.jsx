export default function Event1(){

    function handleClick(){
        console.log("I was clicked!")
    }

    return(
        <>
            <section>
                <button className="Button1"onClick={handleClick}>
                    Button 1
                </button>
            </section>
        </>
    )
}