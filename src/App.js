import React from 'react';

import './App.scss';

import { tasks as tasksFromServer } from './api/tasks';
import { notes } from './api/notes';
import Card from './components/Card';

// notes = [
//   {
//     id: '1',
//     text: 'Sunday',
//     tasks: ['6', '7', '9'],
//     tasks: [
//       { id: '6', name: 'Milk' },
//       { id: '7', name: 'Milk' },
//       { id: '9', name: 'Milk' },
//     ],
//   },
// ];
// const tasks = [
//   { id: '6', name: 'Milk' },
//   { id: '7', name: 'Bread' },
//   { id: '9', name: 'Eggs' },
// ];

const preparedNotes = notes.map((note) => {
  const tasks = note.tasks.map(
    taskId => tasksFromServer.find(task => task.id === taskId),
  );

  return { ...note, tasks };
});

const App = () => (
  <div className="container">
    {preparedNotes.map(note => (
      <Card {...note} key={note.id} />
    ))}
  </div>
);

export default App;
