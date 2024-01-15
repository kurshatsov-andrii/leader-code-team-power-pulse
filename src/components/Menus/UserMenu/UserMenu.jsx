import Avatar from '../../Avatar/Avatar';
import { ButtonProfile, LogoutButton } from '../../Buttons';
import { UserMenuWrapper } from './UserMenu.styled';

const UserMenu = () => {
  return (
    <UserMenuWrapper>
      <ButtonProfile />
      <Avatar foto="https://pics.craiyon.com/2023-06-22/8fceeb61a05549559e0a5f303cb72122.webp" />
      <LogoutButton />
    </UserMenuWrapper>
  );
};

export default UserMenu;
