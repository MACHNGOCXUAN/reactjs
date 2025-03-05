import React from "react";

class Contact extends React.Component {
  render() {
    const { firstname, lastname, phone, address } = this.props.data;

    return (
      <div
        className="contact-card"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        <div style={{ borderRadius: "10px", border: "1px solid #fff" }}>
          <div className="contact-header" style={{ padding: "2px 20px" }}>
            <h2 style={{ margin: 0 }}>{firstname}</h2>
            <p className="lastname" style={{ margin: 0 }}>
              {lastname}
            </p>
          </div>
          <hr />
          <p style={{ margin: 0, padding: "2px 20px" }}>
            <strong>Phone:</strong> {phone}
          </p>
          <hr />
          <p style={{ margin: 0, padding: "4px 20px" }}>
            <strong>Address:</strong> {address}
          </p>
        </div>
      </div>
    );
  }
}

export default Contact;
