import { useEffect, useState } from "react";

function Searching() {

    let [record, setRecord] = useState({});
    let [data, setData] = useState([]);
    let [search, setSearch] = useState([]);

    useEffect(() => {
        const getData = JSON.parse(localStorage.getItem('userDetails'));
        setData(getData ? getData : []);
    }, [setData]);

    function changeInput(e) {
        const { name, value } = e.target;
        setRecord({ ...record, [name]: value });
    }

    function submitData(e) {
        e.preventDefault();
        const newList = [...data, record];
        setData(newList);
        localStorage.setItem("userDetails", JSON.stringify(newList));
        setRecord({});
    }

    function searchData(e) {
        e.preventDefault();
        // console.log(e.target.find.value);
        setSearch(e.target.find.value);
    }

    return (
        <>
            <form method="post" onSubmit={submitData}>
                <table border={1} cellPadding={10} align="center">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>
                                <input type="text" name="name"
                                    onChange={(e) => changeInput(e)}
                                    value={record.name ? record.name : ""} />
                            </th>
                            <th>
                                <button type="submit">SUBMIT</button>
                            </th>
                        </tr>
                    </thead>
                </table>
            </form>

            <div style={{ display: "flex", justifyContent: "center", margin: "40px" }}>
                <form method="post" onSubmit={searchData}>
                    <input type="text" name="find" placeholder="Search" style={{ padding: "10px" }} />
                    <button type="submit">Search</button>
                </form>
            </div>

            <table border={1} cellPadding={10} align="center">
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {data.filter((v) => {
                        if (search == "") {
                            return v;
                        }
                        else if (v.name.match(search)) {
                            return v;
                        }
                    }).map((val, index) => (
                        <tr key={index}>
                            <td>{val.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
export default Searching;