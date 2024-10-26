// import { FaStar } from "react-icons/fa";
// import { GrClose } from "react-icons/gr";
// import './Rating/Rating.css'
// import { useEffect, useState } from "react";

// function Rating() {
//     let [rate, setRate] = useState([]);
//     let [hover, setHover] = useState(0);
//     let [close, setClose] = useState(true);
//     let [review, setReview] = useState({});
//     let [data, setData] = useState([]);

//     let handleReview = ((e) => {
//         setReview({ ...review, [e.target.name]: e.target.value })
//     })

//     useEffect(() => {
//         let get = JSON.parse(localStorage.getItem('Feedback'));
//         //( console.log(get);
//         get ? setData(get) : setData([]);

//     }, setData);

//     let submitData = ((e) => {
//         e.preventDefault();
//         let newList = {
//             ...review,
//             ['rating']: rate,
//         }
//         let set = [...data, newList]
//         setData(set);
//         localStorage.setItem('Feedback', JSON.stringify(set))
//     })
//     // console.log(data);

//     let setRating = (index) => {

//         let rateArray = [];
//         for (let i = 1; i <= index; i++) {
//             rateArray.push(i);
//         }
//         setRate(rateArray)
//         setHover(index)

//         console.log(rateArray)
//     }

//     return (
//         <>

//             <h1>Rating</h1>
//             <form onSubmit={submitData}>
//                 {close ?
//                     <span>
//                         {
//                             [1, 2, 3, 4, 5].map((value, index) => {
//                                 index = index + 1;
//                                 return (
//                                     <FaStar className="star" name="rating"
//                                         onClick={() => setRating(index)}
//                                         onMouseOver={() => setHover(index)}
//                                         style={(hover) >= index ? { color: "yellow" } : { color: "black" }} />
//                                 )
//                             })
//                         }
//                         <GrClose style={{ cursor: "pointer" }} className="close" onClick={() => setClose(false)} />
//                     </span>
//                     :
//                     <a style={{ cursor: "pointer" }} onClick={() => setClose(true)}>Undo</a>
//                 }
//                 <br /><br />
//                 <textarea placeholder="Review" name="review" onChange={handleReview}></textarea>
//                 <button type="submit">Submit</button>
//             </form>
//             {
//                 data.map((v, i) => {
//                     return (
//                         <>
//                             <h1>{(v.review)}</h1>
//                             {
//                                 v.rating.map((v1, i1) => {
//                                     return (
//                                         <span key={i1}>{/* Add a key for better performance */}
//                                             <FaStar style={{ color: "blue" }} />
//                                         </span>
//                                     )
//                                 })
//                             }
//                         </>
//                     )
//                 })
//             }
//         </>
//     )
// }

// export default Rating;




import { FaStar } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import './Rating/Rating.css'
import { useEffect, useState } from "react";

function Rating() {
    let [rate, setRate] = useState(0);
    let [hover, setHover] = useState(0);
    let [close, setClose] = useState(true);
    let [review, setReview] = useState({});
    let [data, setData] = useState([]);

    let handleReview = ((e) => {
        setReview({ ...review, [e.target.name]: e.target.value })
    })

    let resetRate = () => {
        setRate("")
    }

    useEffect(() => {
        let get = JSON.parse(localStorage.getItem('Feedback'));
        get ? setData(get) : setData([]);
    }, setData);

    let submitData = ((e) => {
        e.preventDefault();
        let newList = {
            ...review,
            ['rating']: rate,
        }
        let set = [...data, newList]
        setData(set);
        localStorage.setItem('Feedback', JSON.stringify(set))
        setRate(0)
        setReview({ review: "" });
    })
    console.log(data);

    return (
        <>
            <h1>Rating</h1>
            <form onSubmit={submitData}>
                {close ?
                    <span>
                        {
                            [1, 2, 3, 4, 5].map((value, index) => {
                                index = index + 1;
                                return (
                                    <FaStar className="star" name="rating"
                                        onClick={() => setRate(index)}
                                        onMouseEnter={() => setHover(index)}
                                        onMouseLeave={() => setHover(0)}
                                        style={(rate || hover) >= index ? { color: "yellow" } : { color: "black" }} />
                                )
                            })
                        }
                        <GrClose style={{ cursor: "pointer" }} className="close" onClick={() => setClose(false)} />
                    </span>
                    :
                    <a style={{ cursor: "pointer" }} onClick={() => setClose(true)}>Undo</a>

                }
                <br /><br />
                <textarea placeholder="Review" name="review" onChange={handleReview} value={review.review ? review.review : ""}></textarea>
                <button type="submit">Submit</button>
                <button type="reset" onClick={() => resetRate()}>Reset</button>
            </form>
            {
                data.map((v, i) => {
                    return (
                        <>
                            {
                                <p>
                                    {v.review}
                                    {
                                        v.rating == 1 ?
                                            <FaStar style={{ color: "yellow" }} />
                                            :
                                            v.rating == 2 ?
                                                <span>
                                                    <FaStar style={{ color: "yellow" }} />
                                                    <FaStar style={{ color: "yellow" }} />
                                                </span>
                                                :
                                                v.rating == 3 ?
                                                    <span>
                                                        <FaStar style={{ color: "yellow" }} />
                                                        <FaStar style={{ color: "yellow" }} />
                                                        <FaStar style={{ color: "yellow" }} />
                                                    </span>
                                                    :
                                                    v.rating == 4 ?
                                                        <span>
                                                            <FaStar style={{ color: "yellow" }} />
                                                            <FaStar style={{ color: "yellow" }} />
                                                            <FaStar style={{ color: "yellow" }} />
                                                            <FaStar style={{ color: "yellow" }} />
                                                        </span>
                                                        :
                                                        v.rating == 5 ?
                                                            <span>
                                                                <FaStar style={{ color: "yellow" }} />
                                                                <FaStar style={{ color: "yellow" }} />
                                                                <FaStar style={{ color: "yellow" }} />
                                                                <FaStar style={{ color: "yellow" }} />
                                                                <FaStar style={{ color: "yellow" }} />
                                                            </span>
                                                            :
                                                            ""
                                    }
                                </p>
                            }
                        </>
                    )
                })
            }
        </>
    )
}

export default Rating;