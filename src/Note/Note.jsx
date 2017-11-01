import React, {Component} from 'react';
import './Note.css';
import PropTypes from 'prop-types';

class Note extends Component {
constructor(props){
    super(props);
    this.noteContent = props.noteContent;
    this.noteId = props.noteId;
}

handleRemove(id) {
    this.props.removeNote(id);
}

render(){
    return(
        <div className="Note">
            <span
                className="btn-close"
                onClick={() => this.handleRemove((this.noteId))}
            >
            &times;	
            </span>
            <p>{this.noteContent}</p>
        </div>
    )
}
}

Note.PropTypes = {
	noteContent: PropTypes.String	
};

export default Note;