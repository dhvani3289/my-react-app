import { useState } from "react"

function Assignment1() {
    let [count, setcount] = useState(0);

    function increment() {
        setcount(count + 1);
    }

    function decrement() {
        setcount(count - 1);
    }
    return (
        <>
            <h1>App Component</h1>
            <div style={{ display: "flex"}}>
                <button onClick={increment} style={{backgroundColor:"#004aad", color:"white", border:"none"}}>Increment</button>

                <p style={{ padding: "10px" }}>{count}</p>
                
                <button onClick={decrement} style={{backgroundColor:"#004aad", color:"white", border:"none"}}>Decrement</button>
            </div>
        </>
    )
}

export default Assignment1