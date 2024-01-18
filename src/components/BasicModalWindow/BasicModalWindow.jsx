import { createPortal } from 'react-dom';
import { useEffect } from 'react';

import sprite from '../../images/sprite.svg';

import { ModalBtnClose, ModalContent, ModalOverlay, ModalSvgClose } from './BasicModalWindow.styled';

const BasicModalWindow = (props) => {
  const { children, onClick } = props;

  const onCloseBtnClick = () => {
    onClick();
  };

  const onClickOverlay = ({ currentTarget, target }) => {
    if (currentTarget === target) {
      onClick();
    }
  };

  useEffect(() => {
    const pressEsc = (evt) => {
      if (evt.code === 'Escape') {
        onClick();
      }
    };

    document.addEventListener('keydown', pressEsc);

    return () => {
      document.removeEventListener('keydown', pressEsc);
    };
  }, [onClick]);

  const basicModalElement = (
    <ModalOverlay onClick={onClickOverlay}>
      <ModalContent>
        <ModalBtnClose onClick={onCloseBtnClick}>
          <ModalSvgClose>
            <use href={`${sprite}#icon-x`}></use>
          </ModalSvgClose>
        </ModalBtnClose>
        {children}
      </ModalContent>
    </ModalOverlay>
  );

  return createPortal(basicModalElement, document.querySelector('#root_modal'));
};

export default BasicModalWindow;
