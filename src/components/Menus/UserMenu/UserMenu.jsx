import Avatar from '../../Avatar/Avatar';
import { ButtonProfile } from '../../Buttons';
import { UserMenuWrapper } from './UserMenu.styled';

const UserMenu = () => {
  return (
    <UserMenuWrapper>
      <ButtonProfile />
      <Avatar />
    </UserMenuWrapper>
  );
};

export default UserMenu;
