import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleNameInput = e => {
    this.setState({ name: e.currentTarget.value });
  };

  handleNumberInput = e => {
    this.setState({ number: e.currentTarget.value });
  };

  handleFindNameInput = e => {
    const searchName = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(e.currentTarget.value.toLowerCase())
    );

    this.setState({
      filter: e.currentTarget.value,
      contacts: [...searchName],
    });
  };

  handleAddContacts = e => {
    e.preventDefault();

    const addedName = this.state.contacts.some(contact =>
      contact.name.toLowerCase().includes(this.state.name.toLowerCase())
    );

    if (addedName) {
      return alert(`${this.state.name} is already in contacts`);
    }

    const id = nanoid(10);
    this.setState({
      contacts: [
        ...this.state.contacts,
        { name: this.state.name, id: id, number: this.state.number },
      ],
      name: '',
      number: '',
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
    return (
      <>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleAddContacts}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={this.state.name}
              onChange={this.handleNameInput}
              required
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              value={this.state.number}
              onChange={this.handleNumberInput}
              required
            />
          </label>
          <button>Add contacts</button>
        </form>
        <h2>Contacts</h2>
        <label>
          Find contacts by name
          <input
            type="text"
            name="searchName"
            value={this.state.filter}
            onChange={this.handleFindNameInput}
          />
        </label>
        <ContactList
          contacts={this.state.contacts}
          handleContactsDelete={this.handleContactsDelete}
        />
      </>
    );
  }
}
