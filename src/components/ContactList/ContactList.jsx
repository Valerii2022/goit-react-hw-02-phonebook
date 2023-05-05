import React, { Component } from 'react';
import { List, ListItem, Name, DeleteBtn, PhoneNumber } from './styled';
// import PropTypes from 'prop-types';

export class ContactList extends Component {
  render() {
    return (
      <List>
        {this.props.contacts.map(({ name, id, number }) => {
          return (
            <ListItem key={id}>
              <Name>
                {name}: <PhoneNumber>{number}</PhoneNumber>
              </Name>
              <DeleteBtn id={id} onClick={this.props.handleContactsDelete}>
                Delete
              </DeleteBtn>
            </ListItem>
          );
        })}
      </List>
    );
  }
}
