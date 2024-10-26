import { FaStar } from "react-icons/fa";

function Rating() {
    return (
        <>
            <h1>Rating</h1>
            {[1, 2, 3, 4, 5].map(() => {
                return (
                    <FaStar className="star" style={{ padding: "10px", fontSize: "30px" }} />
                )
            })
            }

        </>
    )
}

export default Rating;