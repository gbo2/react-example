import React from 'react';

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          valeur1: '',
          valeur2: ''
        } 
        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
    }
    
    handleOnClick(event) {
        this.props.ItemsService.push(this.state);
    }
    handleChange1(event) {
      this.setState({valeur1: event.target.value});
    }

    handleChange2(event) {
     this.setState({valeur2: event.target.value});
    }

    render () {
      return <form>
          <div>            
            <div><input type="text" id="txbTest1" onChange={this.handleChange1.bind(this)} /></div>
            <div><input type="text" id="txbTest2" onChange={this.handleChange2.bind(this)}/></div>
            <div><input type="button" value="Submit"  onClick={this.handleOnClick.bind(this)} /></div>
          </div>
          <div>{this.state.valeur1} {this.state.valeur2}</div>
      </form>;
    }
  }
  
  export default Form;
  