import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Vans, { loader as vansLoader } from "./pages/Vans";
import VanDetails, { loader as vanDetailsLoader } from "./pages/VanDetails";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Host from "./pages/host/Host";
import HostDashboard, {loader as hostDashboardLoader} from "./pages/host/HostDashboard";
import HostIncome from "./pages/host/HostIncome";
import HostReviews from "./pages/host/HostReviews";
import HostVans, {loader as hostVansLoader} from "./pages/host/HostVans";
import SignOut from "./pages/SignOut";
import HostVanDetails, {loader as hostVansDetailsLoader} from "./pages/host/HostVanDetails";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} loader={vansLoader} />
          <Route
            path="vans/:id"
            element={<VanDetails />}
            loader={vanDetailsLoader}
          />
          <Route path="signUp" element={<SignUp />} />
          <Route path="signIn" element={<SignIn />} />
          <Route path="signOut" element={<SignOut />} />
          <Route path="host" element={<Host />}>
            <Route index element={<HostDashboard />} loader={hostDashboardLoader}/>
            <Route path="income" element={<HostIncome />} />
            <Route path="reviews" element={<HostReviews />} />
            <Route path="vans" element={<HostVans />} loader={hostVansLoader}/>
            <Route path="vans/:id" element={<HostVanDetails />} loader={hostVansDetailsLoader}/>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
