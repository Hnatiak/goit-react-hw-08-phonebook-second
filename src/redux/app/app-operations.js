import axios from "axios";
import actions from "./app-actions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fetchContacts = () => async (dispatch) => {
  dispatch(actions.fetchContactRequest());
  try {
    const { data } = await axios.get("/contacts");
    dispatch(actions.fetchContactSuccess(data));
  } catch (error) {
    dispatch(actions.deleteContactError(error.message));
  }
};

// const addContact = (contact) => async (dispatch) => {
//   dispatch(actions.addContactRequest());

//   try {
//     // Send a GET request to retrieve the current list of contacts
//     const { data } = await axios.get("/contacts");

//     // Check if the new contact already exists in the list based on phone number
//     const existingContact = data.find((c) => c.number === contact.number);
//     if (existingContact) {
//       dispatch(actions.addContactError("Такий номер телефону вже є"));
//       toast.warn("Такий номер телефону вже є");
//       return;
//     }

//     // Send a POST request to create the new contact
//     const response = await axios.post("/contacts", contact);
//     dispatch(actions.addContactSuccess(response.data));
//   } catch (error) {
//     dispatch(actions.addContactError(error.message));
//     toast.error(error.message);
//   }
// };

const addContact = (contact) => async (dispatch) => {
  dispatch(actions.addContactRequest());
  
  try {
  // Send a GET request to retrieve the current list of contacts
  const { data } = await axios.get("/contacts");
  
  // Check if the new contact already exists in the list based on phone number
  const existingContact = data.find((c) => c.number === contact.number);
  if (existingContact) {
    dispatch(actions.addContactError("Такий номер телефону вже є"));
    toast.warn("Такий номер телефону вже є");
    return;
  }
  
  // Check if the new contact already exists in the list based on name
  const existingName = data.find((c) => c.name === contact.name);
  if (existingName) {
    dispatch(actions.addContactError("Такий контакт з іменем уже є"));
    toast.warn("Такий контакт з іменем уже є");
    return;
  }
  
  // Send a POST request to create the new contact
  const response = await axios.post("/contacts", contact);
  dispatch(actions.addContactSuccess(response.data));
  } catch (error) {
  dispatch(actions.addContactError(error.message));
  toast.error(error.message);
  }
  };

const deleteContact = (contactId) => (dispatch) => {
  dispatch(actions.deleteContactRequest());
  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(actions.deleteContactSuccess(contactId)))
    .catch((error) => dispatch(actions.deleteContactError(error.message)));
};

const contactsOperations = {
  fetchContacts,
  addContact,
  deleteContact,
};

export default contactsOperations;

