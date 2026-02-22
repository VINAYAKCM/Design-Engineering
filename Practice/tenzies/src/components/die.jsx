export default function Die(props){
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }

    return(                                                    // This is the function you should run when the die is clicked, which is the hold function
        <button className="die-button" style={styles} onClick={() => props.holdDice(props.id)}>
            {props.value}
        </button>
    )
}