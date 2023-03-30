import logo from './logo.svg';
import './App.css';
import { Header } from './componnents/Header';
import { Body } from './componnents/Body';
import { Footer } from './componnents/Footer'
import { createBrowserRouter,Outlet } from 'react-router-dom';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import Error from './pages/Error';
import RestaurentMenu from './pages/RestaurentMenu';
import { lazy, Suspense } from 'react';
import RestaurentInfoShimmer from './componnents/RestaurentInfoShimmer';

const InstaMart = lazy(() => import("./componnents/InstaMart"));

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
export const router = createBrowserRouter([
  {
    path : "/",
    element : <App />,
    errorElement : <Error />,
    children : [
      {
        path : "/",
        element : <Body />
      },
      {
        path : "home",
        element : <App />
      },
      {
        path : "about",
        element : <About />
      },
      {
        path : "contact",
        element : <Contact />
      },
      {
        path : "restaurent/:id",
        element : <RestaurentMenu />
      },
      {
        path : "instamart",
        element : <Suspense fallback={<RestaurentInfoShimmer />}>
                    <InstaMart />
                  </Suspense>
      }
    ]
  }
])
export default App;
