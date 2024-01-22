import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Icon from '../Icon/Icon';
import { ProfileAvatar } from './Avatar.styled';
import { NavLink } from 'react-router-dom';

const Avatar = () => {
  const { userData } = useSelector((state) => state.auth);
  const loading = useSelector((state) => state.auth.isAvatarLoading);
  const [imageURL, setImageURL] = useState('');

  useEffect(() => {
    if (userData) {
      setImageURL(userData.avatarURL);
    }
  }, [userData]);

  return (
    <ProfileAvatar data-avatar={imageURL} data-loading={loading}>
      <NavLink to="/profile" activeclassname="active">
        {!imageURL && <Icon name="avatar" />}
      </NavLink>
    </ProfileAvatar>
  );
};

export default Avatar;
