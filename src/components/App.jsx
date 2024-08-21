import React, { useState, useMemo, useCallback } from 'react';
import ContactForm from './ContactForm';
import { ContactList } from './ContactList';
import Filter from './Filter';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const handleAddContact = useCallback(
    newContact => {
      if (contacts.some(contact => contact.name === newContact.name)) {
        alert(`${newContact.name} is already in the contact list.`);
        return;
      }
      setContacts(prevContacts => [...prevContacts, newContact]);
    },
    [contacts]
  );

  const handleFilterChange = useCallback(e => {
    setFilter(e.target.value);
  }, []);

  const handleDeleteContact = useCallback(contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  }, []);

  // Correcting the naming here
  const filteredContacts = useMemo(() => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [contacts, filter]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactList
        contacts={filteredContacts} // Use the correct reference here
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

export default App;
