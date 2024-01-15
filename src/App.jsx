import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage'));
const SignInPage = lazy(() => import('./pages/SignInPage/SignInPage'));
const UserPage = lazy(() => import('./pages/UserPage/UserPage'));
const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage'));
const DiaryPage = lazy(() => import('./pages/DiaryPage/DiaryPage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage/ProductsPage'));
const WaistPage = lazy(() => import('./pages/WaistPage/WaistPage'));
const ExercisesPage = lazy(() => import('./pages/ExercisesPage/ExercisesPage'));

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from './redux/auth/operations';
import { useAuth } from './hooks/useAuth';

function App() {
  const dispatch = useDispatch();
  const { goToParams, isLoggedIns } = useAuth();
  const isLoggedIn = true;

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/" element={isLoggedIn ? <Navigate to="diary" replace /> : <HomePage />}>
          <Route path="signup" element={<SignUpPage />} />
          <Route path="signin" element={<SignInPage />} />
        </Route>

        <Route path="diary" element={isLoggedIn ? <DiaryPage /> : <Navigate to="/signin" />} />
        <Route path="profile" element={isLoggedIn ? <UserPage /> : <Navigate to="/signin" />} />
        <Route path="products" element={isLoggedIn ? <ProductsPage /> : <Navigate to="/signin" />} />
        <Route path="waist" element={isLoggedIn ? <WaistPage /> : <Navigate to="/signin" />} />
        <Route path="exercises" element={isLoggedIn ? <ExercisesPage /> : <Navigate to="/signin" />} />
        <Route path="/404" element={<ErrorPage />} />
        <Route path="*" element={<Navigate to="404" replace />} />
      </Route>
    </Routes>
  );
}
export default App;
