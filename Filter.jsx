import React from "react"
function Filter() {
    let age = [23, 56, 44, 67, 34, 6];
    let names = ["khushi", "chavi", "priya", "dhvani", "maanal", "Divya", "muskan", "nehal"]
    let data = [
        {
            name: "dhvani",
            age: 20,
            isPass: "true"
        },
        {
            name: "khushi",
            age: 21,
            isPass: "true"
        },
        {
            name: "priya",
            age: 19,
            isPass: "false"
        },
        {
            name: "nehal",
            age: 20,
            isPass: "false"
        },
        {
            name: "koyal",
            age: 19,
            isPass: "true"
        }
    ]

    return (
        <>
            <ul>
                {
                    age.filter((value) => {
                        return value > 30
                    }).map((value, index) => {
                        return (
                            <li key={index}>{value}</li>
                        )
                    })
                }
            </ul>

            {/* <h1>Filter by name</h1> */}
            {/* <ul>
                {
                    names.filter((value) => {
                        return (
                            filter.match('a')
                        )
                    })
                }
            </ul> */}

            <table border={1} cellPadding={10}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Age</td>
                        <td>isPass</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.filter((value) => {
                            return value.isPass === "true"

                        }).map((value, index) => {
                            return (
                                <tr key={index}>
                                    <td>{value.name}</td>
                                    <td>{value.age}</td>
                                    <td>{value.isPass}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}
export default Filter