import { useState, useEffect } from 'react';
import Icon from '../Icon/Icon';
import { ProfileAvatar } from './Avatar.styled';
import { Link } from 'react-router-dom';

const Avatar = ({ foto = '' }) => {
  const [isAvatar, setIsAvatar] = useState('');

  useEffect(() => {
    setIsAvatar(foto);
  }, [foto]);

  return (
    <Link to="/profile">
      <ProfileAvatar data-avatar={isAvatar}>{!isAvatar && <Icon name="avatar" />}</ProfileAvatar>
    </Link>
  );
};

export default Avatar;
