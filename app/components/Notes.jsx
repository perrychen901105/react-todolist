import React from 'react';

import Note from './Note';

import Editable from './Editable';
// import uuid from 'uuid';

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

// export default () => (
// export default (props) => (
//     <ul>
//         {props.notes.map(({id, task}) => 
//             // <li key={note.id}>{note.task}</li>)
//             <li key={id}>
//                 {/* <Note 
//                     onDelete = {props.onDelete.bind(null, id)}
//                     task={task} 
//                 /> */}
            
//                 <Note>
//                     <span>{task}</span>
//                     <button onClick={onDelete.bind(null, id)}>x</button>
//                 </Note>
//             </li>
//         )}
//     </ul>
// )

export default ({
    notes,
    onNoteClick=() => {}, onEdit=() => {}, onDelete= () => {}
}) => (
    <ul className="notes">{notes.map(({id, editing, task}) => 
        <li key={id}>
            <Note className='note' onClick={onNoteClick.bind(null, id)}>
                <Editable
                    className='editable'
                    editing = {editing}
                    value = {task}
                    onEdit = {onEdit.bind(null, id)}
                />
                <button className='delete' onClick={onDelete.bind(null, id)}>x</button>
            </Note>
            {/* <Note>
                <span>{task}</span>
                <button onClick={onDelete.bind(null, id)}>x</button>
            </Note> */}
        </li>
    )}</ul>
)

