import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Footer from "./common/Footer";
import Navbar from "./common/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./common/ProtectedRoute";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

function Root() {
  return (
    <main className="relative">
      <AuthProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </AuthProvider>
    </main>
  );
}
