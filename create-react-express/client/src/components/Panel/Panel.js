import React, { Component } from "react";
import Form from "../../components/Form/Form";
import {List} from "../../components/List/List";
import "./style.css";

class Panel extends Component {
    render(){
        return(
            <div className="Panel">
                <Form />
                <List />
            </div>
        );
    }
}

export default Panel;