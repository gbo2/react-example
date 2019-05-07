import React from 'react';

class List extends React.Component {
    constructor(props){
        super(props);
        this.props.ItemsService.setListComponent(this);
    }

    render () {
        const listItems = this.props.ItemsService.getList().map((d) => <li key={d.valeur1}>{d.valeur1} {d.valeur2}</li>);

        return <form>
            <div>
                <h2>List of values</h2>
                <ul>  
                    {listItems}
                </ul>
            </div>
        </form>;
    }
  }
  
  export default List;