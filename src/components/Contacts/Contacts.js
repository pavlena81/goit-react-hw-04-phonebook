import PropTypes from 'prop-types';

import { ListContacts, ItemContacts, Btn } from './Contacts.styled';

export const FormContacts = ({ contacts, deleteContact }) => {
  console.log(contacts)
  return (
    < ListContacts >
    
      {contacts.map(({ id, name, number }) => {
        
        return (
          <ItemContacts key={id}>
            {name}:     {number}
            <Btn type="button" onClick={() => deleteContact(id)}>
              Delete
            </Btn>
          </ItemContacts>
        );
      })}
    </ListContacts>
  );
};



FormContacts.propTypes = {
     contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
    deleteContact: PropTypes.func.isRequired,
};