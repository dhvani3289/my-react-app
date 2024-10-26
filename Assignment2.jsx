import { useEffect, useState } from "react";
function Assignment2() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        //Implementing the setInterval method
        const interval = setInterval(() => {
            setCount(count + 1);
            console.log(count);
            
        }, 100);

        //Clearing the interval
        return () => clearInterval(interval);
    },[]);

    return (
        <h1>{count}</h1>
    );
}

export default Assignment2