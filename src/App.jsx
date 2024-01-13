import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
// import ErrorPage from './pages/ErrorPage/ErrorPage';
// import SignUpPage from './pages/SignUpPage/SignUpPage';
// import SignInPage from './pages/SignInPage/SignInPage';
// import DiaryPage from './pages/DiaryPage/DiaryPage';
// import ProductsPage from './pages/ProductsPage/ProductsPage';
// import ExercisesPage from './pages/ExercisesPage/ExercisesPage';
// import UserPage from './pages/UserPage/UserPage';
// import MainPage from './pages/MainPage/MainPage';

const MainPage = lazy(() => import('./pages/MainPage/MainPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage'));
const SignInPage = lazy(() => import('./pages/SignInPage/SignInPage'));
const UserPage = lazy(() => import('./pages/UserPage/UserPage'));
const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage'));

// const DiaryPage = lazy(() => import('pages/DiaryPage'));
// const ProductsPage = lazy(() => import('pages/ProductsPage'));
// const ExercisesPage = lazy(() => import('pages/ExercisesPage'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/" element={<MainPage />}>
          <Route path="signup" element={<SignUpPage />} />
          <Route path="signin" element={<SignInPage />} />
        </Route>
        <Route path="profile" element={<UserPage />} />
        <Route path="/404" element={<ErrorPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Route>
    </Routes>
  );
}
export default App;
