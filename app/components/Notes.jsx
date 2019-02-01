import React from 'react';

import Note from './Note';
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
export default ({notes}) => (
    <ul>
        {notes.map(({id, task}) => 
            // <li key={note.id}>{note.task}</li>)
            <li key={id}>
                <Note 
                    onDelete = {onDelete.bind(null, id)}
                    task={task} 
                />
            </li>
        )}
    </ul>
)
