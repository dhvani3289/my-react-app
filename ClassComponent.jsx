import React from "react";
import { Component } from "react";
class ClassComponent extends React.Component {
    constructor() {
        super();
        this.state = { color: "red" };
    }
    render() {
        return <h2>I am a Car!</h2>;
    }
}
export default ClassComponent;
//  <ClassComponent/> 