import css from './Modal.module.css';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { createPortal } from 'react-dom';
import { Checkbox } from '../Checkbox/Checkbox';

const modalRoot = document.querySelector('#modal-root');

export const Modal = memo(({ closeModal, modalData }) => {
  const closeModalOnBtn = () => {
    closeModal();
  };

  const { id, title, description, status } = modalData;

  return createPortal(
    <div className={css.overlay}>
      <div className={css.modal}>
        <h2 className={css.title}>{title}</h2>
        <p>Description: {description}</p>
        <p className={css.status}>
          Status:
          <Checkbox idTodo={id} statusTodo={status} />
        </p>
        <button
          className={css.btnClose}
          type="button"
          onClick={closeModalOnBtn}
        >
          Close
        </button>
      </div>
    </div>,
    modalRoot
  );
});

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  modalData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
  }).isRequired,
};
