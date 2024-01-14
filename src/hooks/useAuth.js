import { useSelector } from 'react-redux';
import { selectUser, selectIsLoggedIn, selectIsRefreshing, selectGoToParams, selectError } from '../redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const goToParams = useSelector(selectGoToParams);
  const isError = useSelector(selectError);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    goToParams,
    isError,
  };
};
