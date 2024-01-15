import { createPortal } from 'react-dom';
import { useEffect } from 'react';

import sprite from '../../images/sprite.svg';

import { ModalBtnClose, ModalContent, ModalOverlay, ModalSvgClose } from './BasicModalWindow.styled';

const BasicModalWindow = (props) => {
  const { children, open, onClose } = props;

  const onClickOverlay = ({ currentTarget, target }) => {
    if (currentTarget === target) {
      onClose();
    }
  };

  useEffect(() => {
    const pressEsc = (evt) => {
      if (evt.code === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', pressEsc);

    return () => {
      document.removeEventListener('keydown', pressEsc);
    };
  }, [onClose]);

  const basicModalElement = (
    <ModalOverlay onClick={onClickOverlay}>
      <ModalContent>
        <ModalBtnClose onClick={onClose}>
          <ModalSvgClose>
            <use href={`${sprite}#icon-x`}></use>
          </ModalSvgClose>
        </ModalBtnClose>
        {children}
      </ModalContent>
    </ModalOverlay>
  );

  if (open) {
    return createPortal(basicModalElement, document.querySelector('#root_modal'));
  }

  return null;
};

export default BasicModalWindow;
