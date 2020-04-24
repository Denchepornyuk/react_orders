import PropTypes from 'prop-types';
import React from 'react';
import Task from './Task';

const TasksList = ({ tasks }) => {
  if (tasks.length === 0) {
    return <b>No tasks yet</b>;
  }

  return (
    <ul className="ui list">
      {tasks.map(task => (
        <li key={task.id}>
          <Task {...task} />
        </li>
      ))}
    </ul>
  );
};

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TasksList;
