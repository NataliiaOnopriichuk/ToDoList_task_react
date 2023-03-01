import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getTodos } from '../../redux/selectors';
import { Modal } from '../Modal/Modal';
import { TodoItem } from '../TodoItem/TodoItem';
import css from './TodoList.module.css';

export const TodoList = () => {
  const todos = useSelector(getTodos);
  const [modalData, setModalData] = useState(null);

  const toggleModal = (todo = null) => {
    setModalData(todo);
  };

  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th>ID</th>
          <th>TITLE</th>
          <th>DESCRIPTION</th>
          <th>STATUS</th>
        </tr>
      </thead>
      <tbody>
        {todos.length > 0 &&
          todos.map(todo => (
            <tr
              key={todo.id}
              onClick={event => {
                if (event.target.tagName !== 'INPUT') toggleModal(todo);
              }}
            >
              <TodoItem {...todo} />
            </tr>
          ))}
        {modalData && <Modal modalData={modalData} closeModal={toggleModal} />}
      </tbody>
    </table>
  );
};
