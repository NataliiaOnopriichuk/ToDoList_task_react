import React, { memo } from 'react';
import { Checkbox } from '../Checkbox/Checkbox';
import PropTypes from 'prop-types';

export const TodoItem = memo(({ id, title, description, status }) => {
  return (
    <>
      <td>{id}</td>
      <td>{title}</td>
      <td>{description}</td>
      <td>
        <Checkbox idTodo={id} statusTodo={status} />
      </td>
    </>
  );
});

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};
