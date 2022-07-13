import React, { Component } from "react";
import { nanoid } from 'nanoid'
import { Container } from './App.styled'
import ContactForm from './Form'
import Filter from "./Filter";
import ContactList from "./ContactList";


export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }

  addContact = (name, number) => {
    const contact = {
      name,
      number,
      id: nanoid()
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact]
    })
    )
  }

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value })
  }


  render() {
    const normalizedFilter = this.state.filter.toLowerCase()
    const visibleContacts = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
    return (
      <Container className="Container">
        <div>
          <h2>Phonebook</h2>
        </div >
        <ContactForm
          onSubmit={this.addContact}
        />
        <div>
          <h2>Contacts</h2>
        </div>
        <Filter
          value={this.state.filter}
          id={this.state.contacts.id}
          onChange={this.changeFilter}
        />
        <ContactList contacts={visibleContacts} />
      </Container>
    )
  }

};
