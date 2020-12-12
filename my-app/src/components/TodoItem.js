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
        const{id, title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
                {title} 
            </div>
        )
    }
}

/*const itemStyle = {
    backgroundColor: '#f4f4f4'
}*/
TodoItem.propTypes = {
   todo: PropTypes.object.isRequired 
}
export default TodoItem
