function Spread() {
    let arr1 = [10, 64, 75, 65, 40, 50];
    let arr2 = [12, 34, 67, 45, 24, 46];
    console.log(arr1, arr2);

    let concat = arr1.concat(arr2);
    console.log(concat);

    let spread = [...arr1, ...arr2]
    console.log(spread);

    let data = [10, 20, 30, 40];
    let [x, y, ...z] = [...data, 50, 60];  // destructuring with array
    console.log("X", x, "Y", y, "Z", z);

    let obj = { name: "dhvani" }
    console.log(obj);
    let course = { courseName: "full stack" }
    let isFees = true
    let dup = { ...obj, age: 19, ...course, ...isFees ? { fees: "paid" } : { fees: 20000 } }
    console.log(dup);

    let person = { name: "nehal", percent: 69 }
    let merge = ((...objects) => {
        return objects
    });
    let mergeObj = merge(person, course, { age: 20 }, isFees);
    console.log(mergeObj);

    let student = { studentName: "priya", age: 18, address: "Surat,Gujarat", isPass: true }
    let { studentName, age } = { ...student };
    console.log(studentName, age);

    let { address, ...studentData } = { ...student }
    console.log(address, studentData);

    return (
        <h1>Spread</h1>
    )
}

export default Spread