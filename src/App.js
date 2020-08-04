import React, { Component } from 'react';
import Person from './Person/Person'
import classes from './App.module.css'


class App extends Component {
  state = {
    persons: [{ id:'vsvsv', name: 'Max', age: 21 },
      { id: 'fefef', name: 'Manu', age: 29 },
    { id: 'kjjkj', name: 'Stephanie', age: 26 }],
    
    otherState: ['some other value'],
    showPersons: false
  }
  
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    // Alt Approach: -
    //   const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex] = person;
    this.setState({
      persons: persons
    

    }
    )
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons:persons})
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow });
  };
  render() { 

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
          return <Person
            Click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)} />
        })}
        </div>
      );
    }

    return ( 
      <div className={classes.App}>
        <h1>Hi,I am a react app</h1>
        <p>This is really working</p>
        <button className={classes.Button} onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}

        
          
      </div>
     )
  }
}
 

export default App;
