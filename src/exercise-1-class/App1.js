import Contact from './Contact';

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