import React from 'react';
import PropTypes from 'prop-types';

import './App.scss';

import { tasks as tasksFromServer } from './api/tasks';
import { notes } from './api/notes';

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

function getTaskById(taskId) {
  return tasksFromServer.find(task => task.id === taskId);
}

const preparedNotes = notes.map((note) => {
  return {
    ...note,
    tasks: note.tasks.map(taskId => getTaskById(taskId)),
  };
});

function App() {
  return (
    <div className="container">
      {preparedNotes.map(note => (
        <Card {...note} key={note.id} />
      ))}
    </div>
  );
}

const Card = ({ text, tasks }) => (
  <div className="ui card">
    <div className="ui content">
      <div className="ui description">
        <p>{text}</p>
        <ul className="ui list">
          {tasks.map(task => (
            <li key={task.id}>
              {task.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

Card.propTypes = {
  text: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default App;
