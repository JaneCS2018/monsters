import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list.component.jsx'
import SearchBox from './components/search-box/search-box.component'

class App extends Component{
    constructor(){
      super();
      this.state={
        monsters:[],
        searchField:'' 
      }
      //Add bind this if normal function
      // this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=>response.json())
      .then(ele=> this.setState({monsters:ele}))
    }

    //ES6 define arrow function will automatically bind this, very handy for us
    //This is normal function
    // handleChange(e){
    //   this.setState({searchField: e.target.value})
    // }
    handleChange=(e)=>(
      this.setState({searchField: e.target.value})
    )
    
    render(){
      const {monsters, searchField} = this.state
      const filteredMonsters = monsters.filter(monster=>
        monster.name.toLowerCase().includes(searchField.toLowerCase()));

      return(
        <div className="App">
          {/* If you want to see the whole result, it needs call back function for set state */}
          {/* Build smaller and smaller components */}
          <h1>Monsters Search</h1>
          <SearchBox placeholder="search monsters" handleChange={this.handleChange} /> 
          <CardList monsters={filteredMonsters} />
    </div>
      )
    }

}

export default App;
