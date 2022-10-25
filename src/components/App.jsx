import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { FormLabel } from './Form/Form';
import { Filter } from './Filter/Filter';
import { FormContacts } from './Contacts/Contacts';
import { Component } from 'react';
import { nanoid } from "nanoid";
import { Container, Box } from './App.styled';

export class App extends Component {

  state = {
    contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}, ],
    filter: '',  
  }
  
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

   addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
     
      if (this.state.contacts.filter(contact => contact.name.toLowerCase() === name.toLowerCase()).length>0){
      return Notify.info('Contacts is already in list-contacts');  
       
     } 
     
      this.setState(({ contacts }) => ({
       contacts: [contact, ...contacts],
     }))
          
     console.log(this.state.contacts)
  }


  deleteContact = id => {
      this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id)
    }));    
  };
    
  filterContact = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  findContacts = () => {
    const { contacts, filter } = this.state;
    const normalisedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalisedFilter));
  };

  handleSubmit = ( values, { resetForm }) => {
    console.log(values);
    values.id = nanoid();
    this.addContact(values);
    resetForm();
  };

  componentDidMount() {
    console.log('add componentDidMount');

    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
       this.setState({ contacts: parsedContacts });
    }

    console.log(parsedContacts);  
   
   }


  componentDidUpdate(_, prevState) {
    console.log(prevState);
    console.log(this.state);

    if (this.state.contacts !== prevState.contacts) {
      console.log('update contacts')

      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    
    return (
     <Box>
    <Container >
      <h1>Phonebook</h1> 
        <FormLabel handleSubmit={this.handleSubmit} />

        <h2>Contacts</h2>
        <Filter filter={this.filter} filterContact={this.filterContact} />
         <FormContacts contacts={this.findContacts()}
                      deleteContact={this.deleteContact}   />       
        </Container>
        </Box> 
  );
}
}
  
// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
