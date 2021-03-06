import { Routes, Route } from "react-router-dom";

import { Typography } from "@mui/material";

import ProfileInput from "./components/ProfileInput";
import Navbar from "./components/Navbar";
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/github_profiles/" element={<ProfileInput />} />
        <Route
          path="/github_profiles/users/:username"
          element={<UserDetails />}
        />
        <Route
          path="*"
          element={<Typography variant="h2">Página Não Encontrada</Typography>}
        />
      </Routes>
    </div>
  );
}

export default App;
