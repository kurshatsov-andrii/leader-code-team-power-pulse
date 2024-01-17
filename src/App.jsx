import { lazy } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage'));
const SignInPage = lazy(() => import('./pages/SignInPage/SignInPage'));
const UserPage = lazy(() => import('./pages/UserPage/UserPage'));
const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage'));
const DiaryPage = lazy(() => import('./pages/DiaryPage/DiaryPage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage/ProductsPage'));
// const ExercisesPage = lazy(() => import('./pages/ExercisesPage/ExercisesPage'));


import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from './redux/auth/operations';
import { useAuth } from './hooks/useAuth';
import ExercisesList from './components/Exercises/ExercisesList';
import { ListCategory } from './components/Exercises/ListCategory';
import ExerciseLayout from './components/Exercises/ExerciseLayout';

function App() {
  const dispatch = useDispatch();
  const { goToParams, isLoggedIn } = useAuth();

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

        <Route path="/" element={isLoggedIn ? <Outlet /> : <Navigate to="/" />}>
          <Route path="diary" element={<DiaryPage />} />
          <Route path="profile" element={<UserPage />} />
          <Route path="products" element={<ProductsPage />} />
        </Route>

        <Route path="/exercises" element={isLoggedIn ? <ExerciseLayout /> : <Navigate to="/" />}>
          <Route path=":category" element={<ListCategory />} />
          <Route path=":category/:subcategory" element={<ExercisesList />} />
        </Route>

        <Route path="/404" element={<ErrorPage />} />
        <Route path="*" element={<Navigate to="404" replace />} />
      </Route>
    </Routes>
  );
}
export default App;
