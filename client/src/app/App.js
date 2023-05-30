import Admin from "./admin/admin";
import { Route, Routes } from "react-router-dom";
import Features from "./features/features";

function App() {
  let isAdmin = false;

  return (
    <>
      {isAdmin ? (
        <Routes>
          <Route path="/" element={<Admin />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      ) : (
        <Features />
      )}
    </>
  );
}

export default App;
