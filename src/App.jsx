
import Studentregistration from "./pages/StudentRegistration";
import Authentication from "./middleware/Authentication";
import Login from "./pages/Login";
import RevAuthentication from "./middleware/Revauthentication";
import Layout from "./layouts/layout";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login Route */}
        <Route element={<RevAuthentication />}>
          <Route path="/" element={<Login />} />
        </Route>

        {/* Protected Routes */}
        <Route element={<Authentication />}>
          
          <Route element={<Layout />}>

            <Route
              path="/studentregistration"
              element={<Studentregistration />}
            />

           


          </Route>

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;