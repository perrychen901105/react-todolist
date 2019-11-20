import React from 'react';

import uuid from 'uuid';
import Notes from './Notes';

import connect from '../libs/connect';
import Lanes from './Lanes';
import LaneActions from '../actions/LaneActions';
import NoteActions from '../actions/NoteAction';

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
const App = ({LaneActions, lanes}) => {
    const addLane = () => {
      LaneActions.create({
        id: uuid.v4(),
        name: 'New lane'
      });
    };
  
    return (
      <div>
        <button className="add-lane" onClick={addLane}>+</button>
        <Lanes lanes={lanes} />
      </div>
    );
  };
  
  export default connect(({lanes}) => ({
    lanes
  }), {
    LaneActions
  })(App)
// export default class App extends React.Component {
// class App extends React.Component {
//     // constructor(props) {
//     //     super(props);

//     //     this.state = {
//     //         notes: [
//     //             {
//     //                 id: uuid.v4(),
//     //                 task: 'Learn React'
//     //             },
//     //             {
//     //                 id: uuid.v4(),
//     //                 task: 'Do laundry'
//     //             }
//     //         ]
//     //     }
//     // }

//     render() {
//         // const {notes} = this.state;

//         const {notes} = this.props;

//         return (
//             <div>
//                 {/* <button onClick={this.addNote} >+</button> */}
                
//                 {/* {this.props.test} */}
//                 <button className="add-note" onClick={this.addNote} >+</button>

//                 {/* <input type="text" ref={element => element.focus()} /> */}
//                 {/* <Notes notes = {notes} onDelete={this.deleteNote} /> */}
//                 <Notes
//                     notes={notes}
//                     onNoteClick={this.activateNoteEdit}
//                     onEdit={this.editNote}
//                     onDelete={this.deleteNote}
//                     />
//             </div>
//         );
//     }

//     addNote = () => {
//         // this.setState({
//         //     notes: this.state.notes.concat([{
//         //         id: uuid.v4(),
//         //         task: 'New task'
//         //     }])
//         // });
        
//         this.props.NoteActions.create({
//             id: uuid.v4(),
//             task: 'New task'
//         });
//     }

//     deleteNote = (id, e) => {
//         e.stopPropagation();
//         console.log(`the delete object is ${this}`);
//         // this.setState({
//         //     notes: this.state.notes.filter(note => note.id !== id)
//         // });
//         this.props.NoteActions.delete(id);
//     }

//     activateNoteEdit = (id) => {
//         console.log(`the activate edit is ${id}`);
//         // this.setState({
//         //     notes: this.state.notes.map(note => {
//         //         if(note.id === id) {
//         //             note.editing = true;
//         //         }

//         //         return note;
//         //     })
//         // });
//         this.props.NoteActions.update({id, editing: true});
//     }

//     editNote = (id, task) => {
//         // this.setState({
//         //     notes: this.state.notes.map(note => {
//         //         if(note.id === id) {
//         //             note.editing = false;
//         //             note.task = task;
//         //         }
//         //         return note;
//         //     })
//         // });
//         this.props.NoteActions.update({id, task, editing: false});
//     }
// }

// // export default connect(() => ({
// //     test: 'test'
// // }))(App);

// export default connect(({notes}) => ({
//     notes
// }), {
//     NoteActions
// })(App)
