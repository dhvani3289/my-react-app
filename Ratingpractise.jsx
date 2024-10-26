import { FaStar } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import './Rating/Rating.css'
import { useState } from "react";

function Ratingpractise() {
    let [rate, setRate] = useState(0);
    let [data, setData] = useState([]);

    
    let handleClick = ((index) => {
        console.log(index);
        setRate(index);
    })
    console.log("rating", rate);
    let submitData = ((e) => {
        e.preventDefault();
        setData([...data, rate, review]);
    })
    console.log(data);
   
    return (
        <>

            <h1>Rating on click</h1>

            <form onSubmit={submitData}>

                {
                    [1, 2, 3, 4, 5].map((value, index) => {
                        index = index + 1;
                        return (
                            <FaStar className="star" name="rating"
                                onClick={() => handleClick(index)}
                                style={rate >= index ? { color: "yellow" } : { color: "black" }} />
                        )
                    })
                }

            </form>
        </>
    )
}

export default Ratingpractise;