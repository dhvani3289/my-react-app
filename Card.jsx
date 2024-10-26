import { useState } from "react"

function Card() {
    let [card, setcard] = useState([
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJj1mMK7Bpy8eKnZosGQxdk1rDouIqasTqdQ&s",
            title: "burger",
            text: "avfefgwebvvh",
            paragraph: "paragraph........"
        }
    ])
    return (
        <>
            {
                card.map((val) => {
                    return (
                        <div style={{ border: "5px black solid", display: "inline-block", padding: "10px", textAlign: "center" }}>
                            <img src={val.image} />
                            <h1>{val.title}</h1>
                            <h2>{val.text}</h2>
                            <p>{val.paragraph}</p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Card