import React from "react";

export default function State2() {

    const [count, setCount] = React.useState(0);

    /**
     * Note: if you ever need the old value of state
     * to help you determine the new value of state,
     * you should pass a callback function to your
     * state setter function instead of using
     * state directly. This callback function will
     * receive the old value of state as its parameter,
     * which you can then use to determine your new
     * value of state.
     * 
     * Normal Value Method
     *  function add() {
        setCount(count + 1)}
     * 
     * For example: Prev Value Method
     *  function add() {
        setCount(prevCount=> prevCount + 1)
    }*/

    function handleMinus(){
        setCount(prevCount => prevCount - 1);
    }


    function handlePlus(){
        setCount(prevCount => prevCount + 1);
    }   

    return (
      <main className="container">
        <h1 className="title">How many times will Bob say "State" in this section?</h1>

        <div className="counter">
            <button className="minus" aria-label="decrease-count" onClick={handleMinus}>-</button>
            <h2 className="count">{count}</h2>
            <button className="plus" aria-label="increase-count" onClick={handlePlus}>+</button>
        </div>
      </main>
    )
}