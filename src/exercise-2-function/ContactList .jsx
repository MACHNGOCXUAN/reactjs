import Contact from "./Contact";
import data from "../data";

function ContactList() {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {data.map((contact) => (
        <div key={contact.id}>
          <Contact data={contact} />
        </div>
      ))}
    </div>
  );
}

export default ContactList;
