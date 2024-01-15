import { useState, useEffect } from 'react';
import Icon from '../Icon/Icon';
import { ProfileAvatar } from './Avatar.styled';

const Avatar = ({ foto = '' }) => {
  const [isAvatar, setIsAvatar] = useState('');

  useEffect(() => {
    setIsAvatar(foto);
  }, [foto]);

  return <ProfileAvatar data-avatar={isAvatar}>{!isAvatar && <Icon name="avatar" />}</ProfileAvatar>;
};

export default Avatar;
