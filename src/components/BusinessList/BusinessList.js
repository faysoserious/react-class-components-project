import React from "react";
import './BusinessList.css';
import { Business } from "../Business/Business";

export class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
        <div className="row">
          <div className="item"><Business /></div>
          <div className="item"><Business /></div>
          <div className="item"><Business /></div>
        </div>
        <div className="row">
          <div className="item"><Business /></div>
          <div className="item"><Business /></div>
          <div className="item"><Business /></div>
        </div>
      </div>
    );
  }
}