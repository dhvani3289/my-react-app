function ForIn() {

    console.log("\x1b[1mFor In\x1b[22m");

    let list = [4, 5, 6];
    for (let i in list) {
        console.log(i); // "0", "1", "2",
    }

    let obj = { a: 1, b: 2 }
    for (const key in obj) {
        console.log(obj[key]); //would print 1 and 2
        console.log(key);      //would print a and b
    }

    let arr = [10, 11, 12, 13];
    for (const item in arr)
        console.log(item[0]);   //would print 0 1 2 3

    for (let x in ['a', 'b', 'c', 'd']) {
        console.log(x);
    }
    // Output
    // 0
    // 1
    // 2
    // 3

    const person = { name: 'John', age: 31 };
    for (let key in person) {
        console.log(key, ': ', person[key]);  // name: John
    }

    const Room = {
        area: 1000,
        height: 7,
        floor: 2
    }
    for (let prop in Room) {
        console.log(prop);
    }
    // Result area, height, floor

    return (
        <>
            <h1>for in loop</h1>
            <h2>for...in Loop = iterates over the index in the array.</h2>
            <h2>for in, iterates keys in an object and indexes in an array</h2>
        </>
    )
}

export default ForIn