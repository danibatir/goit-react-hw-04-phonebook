import React from 'react';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};

const ContactItem = ({ contact, onDeleteContact }) => {
  return (
    <li>
      {contact.name}: {contact.number}
      <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
    </li>
  );
};

export { ContactList, ContactItem };
