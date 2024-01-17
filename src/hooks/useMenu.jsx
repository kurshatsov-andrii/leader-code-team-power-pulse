import { createContext, useContext, useState, useEffect, useRef } from 'react';
import { bodyLock, bodyUnlock } from '../helpers/menuFunctions.js';

const MenuContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useMenu = () => useContext(MenuContext);

export const MenuProvider = ({ children }) => {
  const containerRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeClass, setActiveClass] = useState('');

  const menuToggle = () => {
    if (isMenuOpen) {
      setActiveClass('');
      setTimeout(() => {
        setIsMenuOpen(false);
        bodyUnlock();
      }, 400);
      return;
    }
    bodyLock(window.innerWidth - document.body.clientWidth);
    setIsMenuOpen(true);
    setTimeout(() => {
      setActiveClass('isOpen');
    }, 10);
  };

  const menuClose = () => {
    bodyUnlock();
    setActiveClass('');
    setTimeout(() => {
      setIsMenuOpen(false);
    }, 400);
  };

  //CLOSE MENU WITH ESCAPE
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Escape') {
        if (isMenuOpen) {
          menuToggle();
        }
      }
    };
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  });

  return (
    <MenuContext.Provider
      ref={containerRef}
      value={{
        isMenuOpen,
        activeClass,
        menuToggle,
        menuClose,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
