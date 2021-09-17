import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    /* Layout is a custom component that wraps the navigation bar */
    <Layout>
      {/* Swtich: Wrap the route components so that only one route is active at a time */}
      <Switch>
        {/* Route: Different URLs paths for which components will be loaded */}
        {/* The / will be matched and AllmeetupsPage will be loaded and React won't do further search, hence we need "exact" */}
        <Route path="/" exact={true}>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupsPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
