//react imports
import { lazy, useState, useEffect } from 'react';
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
  const [userBlood, setUserBlood] = useState('0');
  const { profile } = useSelector((state) => state.profile);

  useEffect(() => {
    if (profile) {
      setUserBlood(profile.blood);
    }
  }, [profile]);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getUserProfile());
    };
    fetchData();
    dispatch(refreshUser());
  }, [dispatch]);

  const isFilled = Number(userBlood) > 0 ? true : false;

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
          element={isLoggedIn && isFilled ? <DiaryPage /> : isLoggedIn ? <Navigate to="/profile" replace /> : <Navigate to="/signin" replace />}
        />

        <Route
          path="/exercises"
          element={isLoggedIn && isFilled ? <ExercisesPage /> : isLoggedIn ? <Navigate to="/profile" replace /> : <Navigate to="/signin" replace />}
        />
        <Route
          path="/products"
          element={isLoggedIn && isFilled ? <ProductsPage /> : isLoggedIn ? <Navigate to="/profile" replace /> : <Navigate to="/signin" replace />}
        />
        <Route
          path="/waist"
          element={isLoggedIn && isFilled ? <WaistPage /> : isLoggedIn ? <Navigate to="/profile" replace /> : <Navigate to="/signin" replace />}
        />
        <Route path="/profile" element={isLoggedIn ? <UserPage /> : <Navigate to="/signin" replace />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/404" element={<ErrorPage />} />
      </Route>
      <Route path="*" element={<Navigate to="404" replace />} />
    </Routes>
  );
}
export default App;
