import { useState } from "react"

function Usestate() {
    let [data, setData] = useState(30);

    function demo() {
        console.log(data);
        data = 40;
        setData(data)
        console.log(data);
    }

    // let [data, setData] = useState(
    //     [
    //         { rollNo: 1, name: 'Alice Johnson', age: 20, percentage: 95, gender: 'Female' },
    //         { rollNo: 2, name: 'Bob Smith', age: 22, percentage: 88, gender: 'Male' },
    //         { rollNo: 3, name: 'Charlie Brown', age: 19, percentage: 75, gender: 'Male' },
    //         { rollNo: 4, name: 'David Lee', age: 21, percentage: 92, gender: 'Male' },
    //         { rollNo: 5, name: 'Eve Miller', age: 23, percentage: 80, gender: 'Female' }
    //     ]
    // )

    return (
        <>
            <h1>marks are {data}</h1>
            <button onClick={demo}>Change</button>
            {/* <table border={1} cellPadding={20} style={{ textAlign: "center" }}>
                <thead>
                    <tr>
                        <td>Roll No.</td>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Percentage</td>
                        <td>Gender</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((value) => {
                            return (
                                <>
                                    <tr>
                                        <td>{value.rollNo}</td>
                                        <td>{value.name}</td>
                                        <td>{value.age}</td>
                                        <td>{value.percentage}</td>
                                        <td>{value.gender}</td>
                                    </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </table> */}
        </>
    )
}

export default Usestate