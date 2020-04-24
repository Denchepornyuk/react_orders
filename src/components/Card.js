import PropTypes from 'prop-types';
import React from 'react';
import TasksList from './TasksList';

const Card = ({ text, tasks }) => (
  <div className="ui card">
    <div className="ui content">
      <div className="ui description">
        <p>{text}</p>

        <TasksList tasks={tasks} />
      </div>
    </div>
  </div>
);

Card.propTypes = {
  text: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Card;
