import { useState, useEffect } from 'react';
import Icon from '../Icon/Icon';
import { ProfileAvatar } from './Avatar.styled';
import { NavLink } from 'react-router-dom';

const Avatar = ({ foto = '' }) => {
  const [isAvatar, setIsAvatar] = useState('');

  useEffect(() => {
    setIsAvatar(foto);
  }, [foto]);

  return (
    <ProfileAvatar data-avatar={isAvatar}>
      <NavLink to="/profile" activeclassname="active">
        {!isAvatar && <Icon name="avatar" />}
      </NavLink>
    </ProfileAvatar>
  );
};

export default Avatar;
