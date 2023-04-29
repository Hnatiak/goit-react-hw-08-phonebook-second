// import { useEffect } from "react";
// import { connect } from "react-redux";
// import ContactForm from "../components/ContactForm/ContactForm";
// import ContactList from "../components/ContactList/ContactList";
// import Filter from "../components/Filter/Filter";
// import appActions from "../redux/app/app-actions";
// import appOperations from "../redux/app/app-operations";
// import selectors from "../redux/app/app-selectors";
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function ContactsView({
//   isLoadingContacts,
//   contacts,
//   filter,
//   visibleArray,
//   fetchContacts,
//   formSubmitHandler,
//   contactDelete,
//   filterSet,
// }) {
//   useEffect(() => {
//     fetchContacts();
//   }, [fetchContacts]);

//   return (
//     <div className="contacts" style={{ marginTop: 65 }}>
//       {/* <h1 className={styles.title}>
//          {/* Phone<span className={styles.title__color}>book</span>
//        </h1> */}
//       {isLoadingContacts && <h2>Loading ...</h2>}
//       <ContactForm onSubmitData={formSubmitHandler} />
//       <h1 style={{ marginBottom: 25 }}>Contacts</h1>
//       <Filter setFilterToState={filterSet} />
//       <ToastContainer />
//       <ContactList contacts={visibleArray} del={contactDelete} />
//     </div>
//   );
// }

// const mapStateToProps = (state) => ({
//   isLoadingContacts: selectors.getIsLoading(state),
//   contacts: selectors.getContacts(state),
//   filter: selectors.getFilter(state),
//   visibleArray: selectors.getVisibleFilterArray(state),
// });

// const mapDispatchToProrps = (dispatch) => ({
//   fetchContacts: () => dispatch(appOperations.fetchContacts()),
//   formSubmitHandler: (contactData) =>
//     dispatch(appOperations.addContact(contactData)),
//   contactDelete: (contactId) =>
//     dispatch(appOperations.deleteContact(contactId)),
//   filterSet: (str) => dispatch(appActions.filterSet(str)),
// });

// export default connect(mapStateToProps, mapDispatchToProrps)(ContactsView);


import { useEffect } from "react";
import { connect } from "react-redux";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import Filter from "../components/Filter/Filter";
import appActions from "../redux/app/app-actions";
import appOperations from "../redux/app/app-operations";
import selectors from "../redux/app/app-selectors";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './ContactsView.module.css'

function ContactsView({
  isLoadingContacts,
  contacts,
  filter,
  visibleArray,
  fetchContacts,
  formSubmitHandler,
  contactDelete,
  filterSet,
}) {
  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  return (
    <div className={css.container}> 
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="contacts" style={{ marginTop: 65 }}>
            {isLoadingContacts && <h2>Loading ...</h2>}
            <ContactForm onSubmitData={formSubmitHandler} />
            <h1 style={{ marginBottom: 25 }}>Contacts</h1>
            <Filter setFilterToState={filterSet} />
            <ToastContainer />
            <ContactList contacts={visibleArray} del={contactDelete} />
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isLoadingContacts: selectors.getIsLoading(state),
  contacts: selectors.getContacts(state),
  filter: selectors.getFilter(state),
  visibleArray: selectors.getVisibleFilterArray(state),
});

const mapDispatchToProrps = (dispatch) => ({
  fetchContacts: () => dispatch(appOperations.fetchContacts()),
  formSubmitHandler: (contactData) =>
    dispatch(appOperations.addContact(contactData)),
  contactDelete: (contactId) =>
    dispatch(appOperations.deleteContact(contactId)),
  filterSet: (str) => dispatch(appActions.filterSet(str)),
});

export default connect(mapStateToProps, mapDispatchToProrps)(ContactsView);