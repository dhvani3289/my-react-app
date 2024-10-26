function ForOf() {

    console.log("");
    console.log("\x1b[1mFor Of\x1b[22m");   

    let list = [4, 5, 6];
    for (let i of list) {
        console.log(i); // "4", "5", "6"
    }

    let arr = [10, 11, 12, 13, "dhvani"];
    for (const item of arr)
        console.log(item);  //would print 10  11  12  13

    for (let x of ['a', 'b', 'c', 'd']) {
        console.log(x);
    }
    // Output
    // a
    // b
    // c
    // d

    const person = { name: 'John', age: 31 };
    for (let [key, value] of Object.entries(person)) {
        console.log(key, ': ', value); // The same output
    }
    // Object.entries() makes it simpler to use objects in loops
    // The Object.entries() method returns an array of the key/value pairs of an object.
    // The Object.entries() method does not change the original object.

    const array = { 0: "a", 1: "b", 2: "c" };
    console.log(Object.entries(array)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

    const Room = {
        area: 1000,
        height: 7,
        floor: 2
      }
     
     for(let prop of Object.entries(Room)) {
       console.log(prop);
      } 



    return (
        <>
            <h1>for of loop</h1>
            <h2>for...of Loop = iterates over the object of objects.</h2>
            <h2>for of, iterates values in an array or any iterable</h2>
            <br />
            <h2>for in returns object indices (keys) while for of returns values</h2>
        </>
    )
}

export default ForOf