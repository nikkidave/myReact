import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
            return {
                padding: '10px',
                borderBottom: '1px #ccc dotted',
                textDecoration: this.props.todo.completed ? 'line-through' : 'none',
                background: '#f4f4f4'
            }  
    }

    /*markComplete = event => {
        console.log(this.props)
    }*/

    render() {
       
        const{id, title} = this.props.todo; //destructuring
        return (
            <div style={this.getStyle()}>
                <input type="checkbox" onChange={() => this.props.markComplete(id)}/> {' '}
                {title} 
                <button onClick = {this.props.deleteFn.bind(this, id)} 
                style={btnStyle} > X </button>
            </div>
        )
    }
}

const btnStyle = {
    float: 'right',
    borderBottom: '1px #ccc dotted',
    background: '#fff',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer'

}

/*const itemStyle = {
    backgroundColor: '#f4f4f4'
}*/
TodoItem.propTypes = {
   todo: PropTypes.object.isRequired 
}
export default TodoItem
