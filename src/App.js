import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Agro from "./pages/Agro";
import ItService from "./pages/ItService";
import ImportandExport from "./pages/ImportandExport";
import GeneralContractor from "./pages/GeneralContractor";
import Contact from "./pages/Contact";

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
      {path:'/about', element:<About />},
      {path:'/agro', element:<Agro />},
      {path:'/it-service', element:<ItService />},
      {path:'/import-and-export', element:<ImportandExport />},
      {path:'/general-contractor', element:<GeneralContractor />},
      {path:'/contact', element:<Contact />},
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
