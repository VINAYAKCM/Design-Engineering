export default function Die(props){
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "#FFFFFF"
    }

    return(
    <button className="btn" 
            style = {styles}
            onClick={() => props.hold(props.id)}>
        {props.value}
    </button>
    )
}