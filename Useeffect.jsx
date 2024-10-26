import { useEffect, useState } from "react";
import Usestate from "./Usestate";

function Useeffect() {

    let [count, setcount] = useState(0);

    function demo() {
        setcount(count + 1);
    }

    useEffect(() => {
        alert("helllooooooo")
    }, [])

    return (
        <>
            <h1>Useeffect</h1>
            <p>{count}</p>
            <button onClick={demo}>submit</button>
        </>
    )
}

export default Useeffect;