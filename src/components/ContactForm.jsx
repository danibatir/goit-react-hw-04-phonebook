import React, { useState, useCallback } from 'react';
import { nanoid } from 'nanoid';

const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = useCallback(e => {
    setName(e.target.value);
  }, []);

  const handleNumberChange = useCallback(e => {
    setNumber(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      onAddContact({ id: nanoid(), name, number });
      setName('');
      setNumber('');
    },
    [name, number, onAddContact]
  );

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleNameChange}
      />
      <input
        type="tel"
        name="number"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleNumberChange}
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
