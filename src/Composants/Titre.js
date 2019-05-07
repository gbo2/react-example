import React from 'react';

class Titre extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          titleSuffix: ' (example) '
        }  
    }
    render () {
      return <div>
          <h2>Simple form {this.state.titleSuffix}</h2>
      </div>;
    }
  }
  
  export default Titre;
  