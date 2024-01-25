import { lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import SharedLayout from './components/SharedLayout/SharedLayout';

//redux imports
import { useSelector, useDispatch } from 'react-redux';
import { refreshUser } from './redux/auth/operations';
import { useAuth } from './hooks/useAuth';
import { getUserProfile } from './redux/userProfile/operations.js';

//pages imports
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage'));
const SignInPage = lazy(() => import('./pages/SignInPage/SignInPage'));
const UserPage = lazy(() => import('./pages/UserPage/UserPage'));
const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage'));
const DiaryPage = lazy(() => import('./pages/DiaryPage/DiaryPage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage/ProductsPage'));
const ExercisesPage = lazy(() => import('./pages/ExercisesPage/ExercisesPage'));
const ListCategory = lazy(() => import('./components/Exercises/ListCategory'));
const ExercisesList = lazy(() => import('./components/Exercises/ExerciseList'));

function App() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getUserProfile());
      await dispatch(refreshUser());
    };
    fetchData();
  }, [dispatch]);

  const birthday = useSelector((state) => state.profile.profile.birthday) || null;

  const isFilled = birthday ? true : false;

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          path="/"
          element={isLoggedIn && isFilled ? <Navigate to="/diary" replace /> : isLoggedIn ? <Navigate to="/profile" replace /> : <HomePage />}
        >
          <Route
            path="signup"
            element={isLoggedIn && isFilled ? <Navigate to="/diary" replace /> : isLoggedIn ? <Navigate to="/profile" replace /> : <SignUpPage />}
          />
          <Route
            path="signin"
            element={isLoggedIn && isFilled ? <Navigate to="/diary" replace /> : isLoggedIn ? <Navigate to="/profile" replace /> : <SignInPage />}
          />
        </Route>
        <Route
          path="diary"
          element={
            isLoggedIn && isFilled ? <DiaryPage /> : isLoggedIn && !isFilled ? <Navigate to="/profile" replace /> : <Navigate to="/signin" replace />
          }
        />
        <Route path="profile" element={isLoggedIn ? <UserPage /> : <Navigate to="/signin" replace />} />
        <Route path="products" element={isLoggedIn ? <ProductsPage /> : <Navigate to="/signin" replace />} />
        <Route path="exercises" element={isLoggedIn ? <ExercisesPage /> : <Navigate to="/signin" />}>
          <Route path=":category" element={<ListCategory />} />
          <Route path=":category/:subcategory" element={<ExercisesList />} />
        </Route>
        <Route path="404" element={<ErrorPage />} />
      </Route>
      <Route path="*" element={<Navigate to="404" replace />} />
    </Routes>
  );
}
export default App;
