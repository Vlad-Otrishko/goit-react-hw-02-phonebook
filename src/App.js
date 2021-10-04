
import React from 'react';
import shortid from 'shortid';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList'
import Filter from './components/Filter/Filter';
import s from'./App.module.css';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
  };
  

  formSubmitHandler = newRecord => {
    const normalizedNewName = newRecord.name.toLowerCase();
    const isUnique = !this.state.contacts.some(({ name }) =>
      name.toLowerCase() === normalizedNewName);
    if (!isUnique) {
      alert('THIS NAME IS ALREADY PRESENT IN A PHONEBOOK');
      return
    }
    this.setState(previous => {
      newRecord.id = shortid.generate();
      return {contacts: [...previous.contacts, newRecord]}
    }
     )
  };


  updateFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };
  getFilteredContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
  contact.name.toLowerCase().includes(normalizedFilter));
  }

  deleteContact = toDeleteId => {
    this.setState(previous => {
      return { contacts: previous.contacts.filter(contact => contact.id !== toDeleteId) }
    })
  }

  
  render() {
    return (
      <div className={s.container}>
        <h1 className={s.headline}>Phone book</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2 className={s.headline}>Contacts</h2>
        <Filter value={this.state.filter} onFilter={this.updateFilter} />
        <ContactList
          visibleList={this.getFilteredContacts()}
          onDelete={this.deleteContact}
        />
      </div>
    );
  }

}
export default App;
