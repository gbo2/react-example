import React from 'react';
import './App.css';
import Titre from './Composants/Titre';
import Form from './Composants/Form';
import List from './Composants/List';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render () {
    return <div className="App">
      <header className="App-header">
        <Titre />
        <Form {...this.props}/>
        <List {...this.props}/>
      </header>
    </div>;
  }
}

export default App;
