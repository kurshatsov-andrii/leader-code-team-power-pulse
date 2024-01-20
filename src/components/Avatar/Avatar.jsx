import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import Icon from '../Icon/Icon';
import { ProfileAvatar } from './Avatar.styled';
import { NavLink } from 'react-router-dom';
import { refreshUser } from '../../redux/auth/operations';

const Avatar = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.auth);
  const [loading] = useState(false);
  const [imageURL, setImageURL] = useState('');

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

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
