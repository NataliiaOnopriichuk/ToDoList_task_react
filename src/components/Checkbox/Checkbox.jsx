import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeStatus } from '../../redux/todoSlice';
import PropTypes from 'prop-types';

export const Checkbox = ({ idTodo, statusTodo }) => {
  const [isChecked, setIsChecked] = useState(statusTodo);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsChecked(statusTodo);
  }, [statusTodo]);

  const handleStatusChange = event => {
    const newStatus = event.target.checked;
    setIsChecked(newStatus);
    dispatch(changeStatus({ id: idTodo, status: newStatus }));
  };

  return (
    <input
      id={`status-input-${idTodo}`}
      type="checkbox"
      checked={isChecked}
      onChange={handleStatusChange}
    />
  );
};

Checkbox.propTypes = {
  idTodo: PropTypes.number.isRequired,
  statusTodo: PropTypes.bool.isRequired,
};
