import './App.css';

//import { Component } from 'react';
import { useEffect, useState } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-Box/search-box.component';


const App = () => {

  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
     .then((response) => response.json())
     .then((users) => setMonsters(users))
  },
  []
  )

  useEffect(() => {
    const newfilteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField))

    setFilteredMonsters(newfilteredMonsters);

  },
  [monsters, searchField])


  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  }


  return (
    <div className="App">
    <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox onChangeHandler={onSearchChange} className="monsters-search-box" placeholder="search monsters" />
      <CardList monsters = {filteredMonsters} />
    </div>
  );
}  


// (classes) extends Component 

//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       filter: "",
//     };
//   }

//   onSearchEvent = (event) => {
          
//     this.setState(() => ({
//       filter: event.target.value.toLowerCase()
// }))
  
// }


//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((users) => 
//       this.setState(() => ({
//         monsters: users
//       })
//       ,
//        () => {
//         console.log(this.state)
//        }
//        )
//     )
//   }
  
//   render () {

//     const {monsters, filter} = this.state;

//     const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(filter))


//     return (
//       <div className="App">
//         <h1 className='app-title'>Monsters Rolodex</h1>
//         <SearchBox onChangeHandler={this.onSearchEvent} className="monsters-search-box" placeholder="search monsters" />
//         <CardList monsters = {filteredMonsters} />
//       </div>
//     );
//   }
  
// }


 

export default App;
