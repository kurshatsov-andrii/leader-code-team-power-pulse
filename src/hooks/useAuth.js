import { useSelector } from 'react-redux';
import { selectIsRefreshing, selectIsLoggedIn, selectUsers } from '../redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const userDate = useSelector(selectUsers);

  return {
    isLoggedIn,
    isRefreshing,
    userDate,
  };
};
