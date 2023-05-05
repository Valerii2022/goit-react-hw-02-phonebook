import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ContactList extends Component {
  render() {
    return (
      <ul>
        {this.props.contacts.map(({ name, id, number }) => {
          return (
            <li key={id}>
              <p>
                {name}: {number}
              </p>
              <button id={id} onClick={this.props.handleContactsDelete}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}
