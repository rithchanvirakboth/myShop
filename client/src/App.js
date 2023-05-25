import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Content from "./components/content/content";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { dispatchGetUser, dispatchLogin, fetchUser } from "./redux/actions/authAction";

function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    if (firstLogin) {
      const getToken = async () => {
        const res = await axios.post("/user/refresh_token", null);
        dispatch({ type: "GET_TOKEN", payload: res.data.access_token });
      };
      getToken();
    }
  }, [auth.isLogged, dispatch]);

  useEffect(() => {
    if (token) {
      const getUser = () => {
        dispatch(dispatchLogin());

        return fetchUser(token).then((res) => {
          dispatch(dispatchGetUser(res));
        });
      };
      getUser();
    }
  }, [token, dispatch]);

  return (
    <Router>
      <div>
        {/* Navbar */}
        <div className="sticky-top">
          <Navbar />
        </div>

        {/* Content */}
        <Content />

        {/* Jumbotron */}
        <Jumbotron />
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
