import PropTypes from 'prop-types';
import React from 'react';

const Task = ({ name }) => (
  <p>
    <span>*</span>
    {name}
  </p>
);

Task.propTypes = { name: PropTypes.string.isRequired };

export default Task;
