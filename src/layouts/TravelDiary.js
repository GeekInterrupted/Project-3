import React, { Component } from "react";
import { connect } from "react-redux";

//use the spread operator to spread one object state into a second one
const mapStateToProps = (state) => ({
    ...state
});

const mapDispatchToProps = (dispatch) => ({
});

class TravelDiary extends Component {
    constructor(props) {
        super(props);
     }
    render() {
        console.log("console logging them props : ", this.props);
        return (
            <div>
            <h1>TEST OF THE TRAVEL DIARY</h1>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TravelDiary);