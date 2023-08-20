//import logo from './logo.svg';
import './App.css';
import ContactCard from './ContactCard';
import { useEffect, useState } from 'react';

function App() {
  const [ results, setResults ] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=100")
    .then(res => res.json())
    .then(data => {
      setResults(data.results)
    })
  }, [])
  

  return (
    <div className="App">
      {
        results.map((person, index) => (
          <ContactCard 
          key={index}
          avatarUrl={person.picture.large} 
          name={`${person.name.first} ${person.name.last}`} 
          email={person.email} 
          age={person.dob.age}/>
        ))
      }
      

    </div>
  );
}

export default App;
