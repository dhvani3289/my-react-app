// import { useState } from "react";

// function Practise() {

//     let [data, setData] = useState({});
//     let [list, setlist] = useState([]);
//     function handle(e) {
//         let key = e.target.name
//         let value = e.target.value;
//         setData({ ...data, [key]: value })
//         console.log(data);
//     }

//     function update(e) {
//         e.preventDefault();
//         setlist([...list, data]);

//     }
//     console.log(list);
//     return (
//         <>
//             <form onSubmit={update}>
//                 <input type="text" name="firstname" placeholder="firstname" onChange={handle} />
//                 <input type="password" name="password" placeholder="password" onChange={handle} />
//                 <button type="submit">submit</button>
//                 <br />
//                 <table border={1} cellPadding={10} cellSpacing={5}>
//                     <thead>
//                         <tr>
//                             <th>Name</th>
//                             <th>Password</th>
//                         </tr>
//                     </thead>
//                     {
//                         list.map((val) => {
//                             return (
//                                 <>
//                                     <tbody>
//                                         <tr>
//                                             <td>{val.firstname}</td>
//                                             <td>{val.password}</td>
//                                         </tr>
//                                     </tbody>
//                                 </>
//                             )
//                         })
//                     }
//                 </table>
//             </form>
//             <br />

//         </>
//     )
// }
// export default Practise


import { useEffect, useState } from "react";

function Practise() {

    let [data, setData] = useState({});
    let [list, setList] = useState([]);

    function handle(e) {
        let key = e.target.name
        let value = e.target.value
        setData({ ...data, [key]: value })  // the key here is kept in [] which is not an array, these are brackets...by which the key becomes dynamic
    }

    useEffect(() => {
        let getData = JSON.parse(localStorage.getItem('userDetails'))  // setting the data in the table
        let demo = getData ? getData : [];
        setList(demo)
        setList(getData);
    }, [setList])

    function addData(e) {
        e.preventDefault();
        // setList([...list, data]);
        let storeData = [...list, data];
        setList(storeData);
        localStorage.setItem('userDetails', JSON.stringify(storeData))
        setData({});  //emptying the input field after submitting
    }
    console.log(list);

    // function updateData(position) {
    //     let edit = list.filter((v, i) => {
    //         if (position == i) {
    //             return v;
    //         }
    //     })
    //     console.log(edit);
    //     // setData(edit)
    // }

    return (
        <>
            <form method="post" onSubmit={addData}>

                <label>Firstname : </label>
                <input type="text" name="firstname" onChange={handle} value={data.firstname ? data.firstname : ""} />

                <label>Password : </label>
                <input type="password" name="password" onChange={handle} value={data.password ? data.password : ""} />

                <label>Email : </label>
                <input type="email" name="email" onChange={handle} value={data.email ? data.email : ""} />

                <label>Phone : </label>
                <input type="number" name="phone" onChange={handle} value={data.phone ? data.phone : ""} />

                <button type="submit">Submit</button>
                <br /><br />
                <table border={1} cellSpacing={0} cellPadding={10} align="center">
                    <thead>
                        <tr>
                            <th>Firstname</th>
                            <th>Password</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    {
                        list.map((val, index) => {
                            return (
                                <>
                                    <tbody>
                                        <tr>
                                            <td>{val.firstname}</td>
                                            <td>{val.password}</td>
                                            <td>{val.email}</td>
                                            <td>{val.phone}</td>
                                            {/* <td><button onClick={() => (updateData(index))}>Update</button></td> */}
                                            <td><button>Delete</button></td>
                                        </tr>
                                    </tbody>
                                </>
                            )
                        })
                    }
                </table>
            </form>
        </>
    )
}
export default Practise




    // const deleteData = (index) => {
    //     const filteredList = list.filter((item, i) => i !== index); // Filter out item at index
    //     setList(filteredList);
    //     localStorage.setItem("userDetails", JSON.stringify(filteredList)); // Update local storage
    // };
