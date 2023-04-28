import PropTypes from "prop-types";
import { Button } from "@mui/material";
import css from "./ContactList.module.css";

function ContactList({ contacts, del }) {
const deleteId = (Id) => {
del(Id);
};

const createList = () => {
  return contacts.map((contact) => {
    return (
    <li key={contact.id} id={contact.id} className={css.contacts_list}>
    <Button
    className={css.button_second}
    data-id={contact.id}
    variant="contained"
    color="primary"
    onClick={() => deleteId(contact.id)}
    >
    Delete
    </Button>
      {`${contact.name}: ${contact.number}`}
    </li>
    );
  });
};

return <ul>{createList()}</ul>;
}

ContactList.propTypes = {
contacts: PropTypes.array,
del: PropTypes.func.isRequired,
};

ContactList.defaultProps = {
contacts: [],
};

export default ContactList;