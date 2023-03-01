import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/todoSlice';
import css from './TodoForm.module.css';

export const TodoForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  const options = { title: setTitle, description: setDescription };

  const handleChange = event => {
    const { name, value } = event.target;
    options[name](value);
  };

  const handleReset = () => {
    setTitle('');
    setDescription('');
  };

  const onSubmitForm = event => {
    event.preventDefault();

    if (title === '') {
      setTitleError(true);
    } else {
      setTitleError(false);
    }

    if (description === '') {
      setDescriptionError(true);
    } else {
      setDescriptionError(false);
    }

    if (title !== '' && description !== '') {
      dispatch(addTodo({ title, description, status: false }));
      handleReset();
    }
  };

  return (
    <form className={css.form} onSubmit={onSubmitForm}>
      <div className={css.formDiv}>
        <label className={css.formLabel} htmlFor="title">
          Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Enter title"
          onChange={handleChange}
          value={title}
          style={{ borderColor: titleError ? 'red' : '' }}
        />
        {titleError && <div className={css.error}>This field is empty</div>}
      </div>
      <div className={css.formDiv}>
        <label className={css.formLabel} htmlFor="description">
          Description:
        </label>
        <input
          type="text"
          id="description"
          name="description"
          placeholder="Enter description"
          onChange={handleChange}
          value={description}
          style={{ borderColor: descriptionError ? 'red' : '' }}
        />
        {descriptionError && (
          <div className={css.error}>This field is empty</div>
        )}
      </div>
      <button type="submit">Create</button>
    </form>
  );
};
