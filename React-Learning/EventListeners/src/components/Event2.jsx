export default function Event1(){

    function handleClick(){
        console.log("I was hovered!")
    }

    return(
        <>
            <section>
                <button className="Button2" onMouseOver={handleClick}>
                    Button 2
                </button>
            </section>
        </>
    )
}