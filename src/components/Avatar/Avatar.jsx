import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Icon from '../Icon/Icon';
import { ProfileAvatar } from './Avatar.styled';
import { NavLink } from 'react-router-dom';

const Avatar = () => {
  const { profile } = useSelector((state) => state.profile);
  const [loading, setLoading] = useState(false);
  const [imageURL, setImageURL] = useState();

  useEffect(() => {
    if (profile) {
      setLoading(true);
      setImageURL(profile.avatarURL);
    }
    setLoading(false);
  }, [profile]);

  return (
    <ProfileAvatar data-avatar={imageURL} data-loading={loading}>
      <NavLink to="/profile" activeclassname="active">
        {!imageURL && <Icon name="avatar" />}
      </NavLink>
    </ProfileAvatar>
  );
};

export default Avatar;
