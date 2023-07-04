import "./Login.css";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { getUserDataService } from "../Services/user/userServices";
import { DataUserContext } from "../Context/DataUser/DataUserProvider";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Loader from "../Components/Loader/Loader";

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const { state, dispatch } = useContext(DataUserContext);

  const { setToken } = useContext(AuthContext);
  const { setIsLoggedIn } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({ username: "", password: "" });

  const guestUser = {
    username: "adarshuserhu",
    password: "adarshUser123",
  };

  // const userId = state?.user?.find(
  //   ({ username }) => username === guestUser?.username
  // );

  const findUser = state?.user?.find(
    (userr) => userr.username === loginData?.username
  );

  const getLoginData = async (event) => {
    event.preventDefault();

    if (loginData?.username === "" || loginData?.password === "") {
      event.preventDefault();
      return;
    }
    setLoggedIn(true);
    setTimeout(async () => {
      setLoggedIn(false);
      try {
        const response = await fetch("/api/auth/login", {
          method: "POST",
          body: JSON.stringify(loginData),
        });

        const data = await response.json();

        if (!data?.encodedToken) {
          event.preventDefault();
          return;
        }

        if (data?.encodedToken) {
          setIsLoggedIn(true);

          localStorage.setItem("token", data?.encodedToken);
          localStorage.setItem("userInformation", JSON.stringify(findUser));

          setToken(data?.encodedToken);
          navigate(location?.state?.from.pathname || "/", { replace: true });
        }

        console.log(data);
      } catch (error) {
        console.log(error);
      } finally {
      }
    }, 2000);
  };

  const guestLoginHandler = async () => {
    setLoginData();

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(guestUser),
      });

      const data = await response.json();

      console.log(data, "loggedIn");

      if (data?.encodedToken) {
        setIsLoggedIn(true);
        localStorage.setItem("token", data?.encodedToken);
        localStorage.setItem(
          "userInformation",
          JSON.stringify(data?.foundUser)
        );

        dispatch({ type: "LOGINDATA", payload: data?.foundUser });

        setToken(data?.encodedToken);

        navigate(location?.state?.from.pathname || "/", { replace: true });
      }

      // console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  return (
    <div>
      <div></div>

      <div className="login_half">
        {/* <div>{loggedIn && <Loader />}</div> */}

        {!loggedIn && (
          <div className="login_container">
            <form onSubmit={getLoginData} className="login_form_container">
              <div id="email-block">
                <label className="login_label">User Name</label>
                <input
                  className="login_input"
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={loginData?.username}
                  onChange={(event) =>
                    setLoginData({ ...loginData, username: event.target.value })
                  }
                />
              </div>
              {/* <div> */}
              {/* <label>password</label> */}

              <div id="password-block">
                <label>password</label>

                <input
                  className="login_input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={loginData?.password}
                  onChange={(event) =>
                    setLoginData({ ...loginData, password: event.target.value })
                  }
                />
              </div>
              {/* </div> */}

              <button className="login_button" type="submit">
                Login
              </button>
            </form>

            <div className="guest_login_container">
              <button
                className="login_button guest_login"
                onClick={guestLoginHandler}
                type="submit"
              >
                Login as Guest
              </button>
            </div>

            {/* <ToastContainer
            position="bottom-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          /> */}

            <Link to="/signup" className="link_to_signup">
              {" "}
              Create a New Account{" "}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
