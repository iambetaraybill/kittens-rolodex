import React, {Component} from 'react';
import { CardList } from "./components/card-list/card-list.component";
// import logo from './logo.svg';
import './App.css';
import {SearchBox} from "./components/search-box/search-box.component"
class App extends Component
{
  constructor()
  {
    super();
    this.state = 
    {
      // string: "Hello Arpan Sarkar"
      monsters: [],
      searchField: ''
      };
      // this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount()
  {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(users => this.setState({monsters:users}));
  }
  handleChange = (e) =>
  {
    this.setState({searchField: e.target.value});
  }
  render()
  {
    const {monsters,searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return(
    <div className="App">
     <h1>Kittens Rolodex</h1>
      {/* <input type="search" placeholder="search kitten" onChange={e =>
        this.setState({searchField: e.target.value})}/> */}
        <SearchBox 
        placeholder="search kitten"
        // handleChange = {e =>this.setState({searchField: e.target.value})}
        handleChange = {this.handleChange}
        />
         
        
      {/* <CardList monsters = {this.state.monsters}> */}
      <CardList monsters = {filteredMonsters}>
      
        </CardList> 
     
    </div>
    );
  }
}

export default App;
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello Yiuha
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Hi Arpan
//         </a>
//       </header>
//     </div>
//   );
// }

// <header className="App-header">
// <img src={logo} className="App-logo" alt="logo" />
// <p>
//   {this.state.string}
// </p>
// <button onClick={() => this.setState({string: "Hello Andrei nigoe"})}>
//   Change text
// </button>
// </header>

 // ,() =>console.log(this.state));