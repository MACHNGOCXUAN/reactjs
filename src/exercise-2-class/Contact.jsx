import React, { Component } from "react";

class Contact extends Component {
  render() {
    const { firstName, lastName, phone, address } = this.props;
    return (
      <div style={{ borderRadius: "10px", border: "1px solid #fff" }}>
        <div style={{ padding: "2px 20px" }}>
          <h2>{firstName}</h2>
          <p>
            <strong>{lastName}</strong>
          </p>
          <p>
            <strong>Phone: </strong>
            {phone}
          </p>
          <p>
            <strong>Address: </strong>
            {address}
          </p>
        </div>
      </div>
    );
  }
}

export default Contact;
