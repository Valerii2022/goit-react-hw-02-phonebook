import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleFindNameInput = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  handleAddContacts = (contactName, contactNumber) => {
    const addedName = this.state.contacts.some(contact =>
      contact.name.toLowerCase().includes(contactName.toLowerCase())
    );

    if (addedName) {
      return alert(`${contactName} is already in contacts`);
    }

    const id = nanoid(10);
    this.setState({
      contacts: [
        ...this.state.contacts,
        { name: contactName, id: id, number: contactNumber },
      ],
    });
  };

  handleContactsDelete = e => {
    const names = this.state.contacts.filter(
      contact => contact.id !== e.currentTarget.id
    );

    this.setState({
      contacts: [...names],
    });
  };

  render() {
    const renderNames = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm handleAddContacts={this.handleAddContacts} />
        <h2>Contacts</h2>
        <Filter
          filter={this.state.filter}
          findName={this.handleFindNameInput}
        />
        <ContactList
          contacts={renderNames}
          handleContactsDelete={this.handleContactsDelete}
        />
      </>
    );
  }
}
