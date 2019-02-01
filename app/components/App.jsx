import React from 'react';

import uuid from 'uuid';
import Notes from './Notes';

// const notes = [
//     {
//         // id: '4e81fc6e-bfb6-419b-93e5-0242fb6f3f6a',
//         id: uuid.v4(),
//         task: 'Learn React'
//     },
//     {
//         // id: '11bbffc8-5891-4b45-b9ea-5c99aadf870f',
//         id: uuid.v4(),
//         task: 'Do laundry'
//     }
// ];

// // export default () => <Notes />;

// export default () => (
//     <div>
//         <button onClick={() => console.log(`add note`)} >+</button>
//         <Notes notes = {notes} />
//     </div>
// )

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: [
                {
                    id: uuid.v4(),
                    task: 'Learn React'
                },
                {
                    id: uuid.v4(),
                    task: 'Do laundry'
                }
            ]
        }
        // this.addNote = this.addNote.bind(this);
    }

    render() {
        const {notes} = this.state;

        return (
            <div>
                <button onClick={this.addNote} >+</button>
                <Notes notes = {notes} onDelete={this.deleteNote} />
            </div>
        );
    }

    addNote = () => {
        this.setState({
            notes: this.state.notes.concat([{
                id: uuid.v4(),
                task: 'New task'
            }])
        });
    }

    deleteNote = (id, e) => {
        e.stopPropagation();

        this.setState({
            notes: this.state.notes.filter(note => note.id !== id)
        });
    }
}
