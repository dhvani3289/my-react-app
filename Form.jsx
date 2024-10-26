// Create, Read, Update, and Delete (CRUD)

// Create: Input a new name.
// Read: Display the current name.
// Update: Modify the existing name.
// Delete: Clear the name.

import React, { useEffect, useState } from "react";

function Form() {
    let [data, setData] = useState({});
    let [list, setList] = useState([]);
    let [pos, setPos] = useState(-1);
    let [error, setError] = useState({});
    let [currentPage, setcurrentPage] = useState(1);
    let [perPageData, setperPageData] = useState(3);
    let [page, setPage] = useState([]);

    let pagination = () => {
        const getData = JSON.parse(localStorage.getItem('userDetails'));
        let totalPages = Math.ceil(getData.length / perPageData);

        let num = [];
        for (let i = 1; i <= totalPages; i++) {
            num.push(i);
        }
        setPage(num);

        let lastIndex = currentPage * perPageData;
        let firstIndex = lastIndex - perPageData;

        let paginationData = getData.slice(firstIndex, lastIndex);
        // console.log(paginationData);

        let pageDetails = paginationData ? paginationData : [];
        setList(pageDetails);
    }

    useEffect(() => {
        // const getData = JSON.parse(localStorage.getItem('userDetails'));
        // let totalPages = Math.ceil(getData.length / perPageData);

        // let num = [];
        // for (let i = 1; i <= totalPages; i++) {
        //     num.push(i);
        // }
        // setPage(num);

        // let lastIndex = currentPage * perPageData;
        // let firstIndex = lastIndex - perPageData;

        // let paginationData = getData.slice(firstIndex, lastIndex);
        // // console.log(paginationData);

        // let pageDetails = paginationData ? paginationData : [];
        // setList(pageDetails);
        pagination();
    }, [setList, currentPage]);

    const createData = (e) => {
        const { name, value } = e.target; // Destructure name and value
        setData({ ...data, [name]: value }); // Update data state with new value
    };

    const validation = () => {
        let errorData = {};
        if (!data.firstname) {
            errorData.name = "Name is required"
        }
        else if (!(data.firstname.length > 3)) {
            errorData.name = "minimum 5 characters"
        }
        return errorData;
    }

    // submit data
    const readData = (e) => {
        e.preventDefault();

        let getData = JSON.parse(localStorage.getItem('userDetails'));
        setList(getData);

        let validate = validation();
        if (Object.keys(validate).length > 0) {
            setError(validate);
        }
        else {
            setError({});
            if (pos != -1) {
                getData.map((v, i) => {
                    if (pos == i) {
                        getData[pos] = data;
                    }
                })
                setList(getData);
                setPos(-1);
            }
            else {
                const newList = [...getData, data];
                setList(newList);
                localStorage.setItem("userDetails", JSON.stringify(newList));
            }
            setData({});
        }
        pagination();
    };

    const updateData = (pos) => {
        setPos(pos);
        console.log(pos)
        const updatedList = list.filter((v, i) => {
            if (i === pos) {
                return v;
            }
        });
        console.log(updatedList[0]);

        setData(updatedList[0]);
    };

    let deleteData = (index) => {
        list.splice(index, 1);
        localStorage.setItem("userDetails", JSON.stringify([...list]));
        setList([...list]);
    }

    let sorting = (e) => {
        let value = e.target.value;
        console.log(value);

        let sortData = [...list];

        if (value == 'ascending') {
            sortData.sort((a, b) => a.firstname.localeCompare(b.firstname));
        }
        else {
            sortData.sort((a, b) => b.firstname.localeCompare(a.firstname));
        }
        setList(sortData);
    }

    return (
        <>
            <form method="post" onSubmit={readData}>

                <label>Firstname: </label>
                <input type="text" name="firstname" onChange={createData} value={data.firstname ? data.firstname : ""} />
                {error.name && <p>{error.name}</p>}

                <label>Password: </label>
                <input type="password" name="password" onChange={createData} value={data.password ? data.password : ""} />

                <button type="submit">Submit</button>
                <br /> <br />

            </form>

            <table border={1} cellSpacing={0} cellPadding={10} align="center">
                <thead>
                    <tr>
                        <th><button>Firstname</button></th>
                        <th>Password</th>
                        <th>Actions</th>
                        <th>
                            <select onClick={sorting} name="sorting">
                                <option value="ascending" >ascending</option>
                                <option value="descending">descending</option>
                            </select>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((val, index) => (
                        <tr key={index}>
                            <td>{val.firstname}</td>
                            <td>{val.password}</td>
                            <td>
                                <button onClick={() => updateData(index)}>Update</button>
                                <button onClick={() => deleteData(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td>
                            {
                                page.map((v, i) => {
                                    return (
                                        <button onClick={() => setcurrentPage(v)}>{v}</button>
                                    )
                                })
                            }
                        </td>
                    </tr>
                </tfoot>
            </table>
        </>
    );
}

export default Form;

