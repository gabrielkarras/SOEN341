import React, { Component } from "react";
import axios from "axios";

/*
 Add your React App code here
 Feel free to delete the code below
*/
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCreated: false,
      clientList: [],
      modal: false,
      activeItem: {
        name: "",
        email: "",
        created: false,
      },
    };
  }
}

export default App;
