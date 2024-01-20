import styled from 'styled-components';

export const Overlay = styled.div`
  display: block;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  right: 0px;
  bottom: 0px;
  width: 100%;
  height: 100%;
  z-index: 10;
  transition: 0.2s ease-out 0.4s;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;

  &.isOpen {
    opacity: 1;
    visibility: visible;
    pointer-events: all;
    transition: 0.4s;
  }
`;

export const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  transition: 0.4s;
  width: 100%;
  max-width: 350px;
  padding: 32px;
  height: 100%;
  background: var(--orange-color);
  position: relative;
  margin-left: auto;
  opacity: 1;
  visibility: hidden;
  pointer-events: none;
  transform: translate(100%, 0%);
  overflow-x: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    /* Скрыть полосы прокрутки веб-страницы в Chrome, Safari и других браузерах, поддерживающих вендорные префиксы */
    width: 4px; /* Ширина вертикальной полосы прокрутки */
  }

  &::-webkit-scrollbar-thumb {
    /* Цвет вертикальной полосы прокрутки */
    background-color: var(--orange-light-color);
  }

  &::-webkit-scrollbar-track {
    /* Цвет фона полосы прокрутки */
    background-color: var(--orange-color);
  }

  &:after {
    content: '';
    width: 100%;
    height: 100%;
    background: inherit;
    position: absolute;
    left: 100%;
    top: 0px;
  }

  svg {
    path {
      stroke: var(--white-color) !important;
    }
  }
  @media screen and (max-width: 767px) {
    padding: 20px;
  }
  @media screen and (max-width: 414px) {
    max-width: 100%;
  }

  &.isOpen {
    visibility: visible;
    pointer-events: all;
    transform: translate(0%, 0%);
  }
  ul {
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    gap: 16px;
    margin: 30px 0px;
    li {
      width: 100%;
      text-align: center;
      a {
        display: inline-flex;
        padding: 10px 27px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-radius: 12px;
        border: 1px solid rgba(239, 237, 232, 0.2);
        font-size: 16px;
        line-height: 1.5;
        transition: 0.3s;
        background: rgba(0, 0, 0, 0);
        &:hover,
        &:focus,
        &.active {
          border: 1px solid #efede8;
          background: var(--orange-color);
        }
      }
    }
  }
`;
