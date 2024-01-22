//react imports
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
const WaistPage = lazy(() => import('./pages/WaistPage/WaistPage'));
const ExercisesPage = lazy(() => import('./pages/ExercisesPage/ExercisesPage'));
const TestPage = lazy(() => import('./pages/TestPage/TestPage'));

function App() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();
  const birthday = useSelector((state) => state.profile.profile.birthday) || null;

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getUserProfile());
      await dispatch(refreshUser());
    };
    fetchData();
  }, [dispatch]);

  const isFilled = birthday ? true : false;
  console.log(isFilled);

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
          element={!isLoggedIn ? <Navigate to="/signin" replace /> : isLoggedIn && !isFilled ? <Navigate to="/profile" replace /> : <DiaryPage />}
        />
        <Route
          path="exercises"
          element={!isLoggedIn ? <Navigate to="/signin" replace /> : isLoggedIn && !isFilled ? <Navigate to="/profile" replace /> : <ExercisesPage />}
        />
        <Route
          path="products"
          element={!isLoggedIn ? <Navigate to="/signin" replace /> : isLoggedIn && !isFilled ? <Navigate to="/profile" replace /> : <ProductsPage />}
        />
        <Route
          path="waist"
          element={!isLoggedIn ? <Navigate to="/signin" replace /> : isLoggedIn && !isFilled ? <Navigate to="/profile" replace /> : <WaistPage />}
        />
        <Route path="profile" element={!isLoggedIn ? <Navigate to="/signin" replace /> : <UserPage />} />
        <Route path="test" element={<TestPage />} />
        <Route path="404" element={<ErrorPage />} />
      </Route>
      <Route path="*" element={<Navigate to="404" replace />} />
    </Routes>
  );
}
export default App;
