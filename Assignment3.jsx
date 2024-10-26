import { useState } from "react"

function Assignment3() {
    let [person, setPerson] = useState(
        [
            {
                name: "manish",
                age: 20,
                gender: "male",
                phone: 99938839
            },
            {
                name: "Roshan",
                age: 21,
                gender: "male",
                phone: 889938839
            },
            {
                name: "Priya",
                age: 22,
                gender: "female",
                phone: 777888999
            },
            {
                name: "Rahul",
                age: 23,
                gender: "male",
                phone: 666777888
            },
            {
                name: "Aisha",
                age: 24,
                gender: "female",
                phone: 555666777
            },
            {
                name: "Vijay",
                age: 25,
                gender: "male",
                phone: 444555666
            }
        ]
    )
    return (
        <>
            <table border={1} cellSpacing={0} cellPadding={10}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        person.map((value,index) => {
                            return (
                                <>
                                    <tr key={index}>
                                        <td>{value.name}</td>
                                        <td>{value.age}</td>
                                        <td>{value.gender}</td>
                                        <td>{value.phone}</td>
                                    </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Assignment3