import React from 'react';

class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const data = this.props.data;
        return (
            <div>
                <div>
                    <h2>{data.firstname}</h2>
                    <p>{data.lastname}</p>
                </div>
                <span>Phone: {data.phone}</span>
                <span>Address: {data.address}</span>
            </div>
        );
    }
}

const chidi = {
    firstname: "Chidi",
    lastname: "Anagonye",
    phone: "555-366-8987",
    address: "Dai hoc Cong Nghiep TPHCM"
};

class App1 extends React.Component {
    render() {
        return (
            <Contact data={chidi} />
        );
    }
}

export default App1;
