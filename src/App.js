import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
    ]
  }
])

function App() {
  return (
    <div className="App overflow-x-hidden min-h-screen">
      <div>
        <RouterProvider router={router} />
      </div>
    </div>
  );
};

export default App;
