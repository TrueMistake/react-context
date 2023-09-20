import {Route, Routes} from "react-router-dom";
import CharactersDetail from "./pages/CharactersDetail";
import Episode from "./pages/Episode";
import Location from "./pages/Location";
import Characters from "./pages/Characters";
import EpisodeDetail from "./pages/EpisodeDetail";
import LocationDetail from "./pages/LocationDetail";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Layout from "./layout/Layout";
import Login from "./pages/Login";
import AuthProvider from "./context/AuthProvider";
import PrivateRouter from "./components/PrivateRoute/PrivateRouter";

function App() {
  return (
    <div className="App">
      <div className="container">
        <AuthProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route index path="/" element={<Home />} />
              <Route path="/characters">
                <Route index element={<PrivateRouter><Characters /></PrivateRouter>} />
                <Route path=":id" element={<PrivateRouter><CharactersDetail /></PrivateRouter>} />
              </Route>
              <Route path="/episode">
                <Route index element={<PrivateRouter><Episode /></PrivateRouter>} />
                <Route path=":id" element={<PrivateRouter><EpisodeDetail /></PrivateRouter>} />
              </Route>
              <Route path="/location">
                <Route index element={<PrivateRouter><Location /></PrivateRouter>} />
                <Route path=":id" element={<PrivateRouter><LocationDetail /></PrivateRouter>} />
              </Route>
              <Route path="/login" element={<Login />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </div>
    </div>
  );
}

export default App;
