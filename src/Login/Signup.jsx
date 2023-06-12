import { useState } from "react";
import "./Login.css";
import { useNavigate, useLocation } from "react-router";

const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [userData, setUserData] = useState({
    fullname: "",
    username: "",
    password: "",
  });

  const signupHandler = async (event) => {
    event.preventDefault();

    if (
      userData.fullname === "" ||
      userData.username === "" ||
      userData.password === ""
    ) {
      return;
    }

    console.log(event.target.value);
    console.log(userData);

    try {
      let response = await fetch("/api/auth/signup", {
        method: "POST",

        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (data?.encodedToken) {
        localStorage.setItem("token", data?.encodedToken);
        localStorage.setItem("userInformation", JSON.stringify(userData));
        navigate(location?.state?.from.pathname || "/login", { replace: true });
      }

      console.log(data);
    } catch (error) {}
  };

  return (
    <div className="login_container">
      <form onSubmit={signupHandler} className="login_form_container">
        <div id="name-block">
          <label className="login_label">Full Name</label>
          <input
            className="login_input"
            type="text"
            value={userData?.fullname}
            onChange={(event) =>
              setUserData({ ...userData, fullname: event.target.value })
            }
            name="name"
            placeholder="Full Name"
          />
        </div>
        <div id="email-block">
          <label className="login_label">Username</label>
          <input
            className="login_input"
            type="username"
            name="username"
            value={userData?.username}
            onChange={(event) =>
              setUserData({ ...userData, username: event.target.value })
            }
            placeholder="Username"
          />
        </div>

        <div id="password-block">
          <label>password</label>
          <input
            className="login_input"
            type="password"
            name="password"
            value={userData?.password}
            onChange={(event) =>
              setUserData({ ...userData, password: event.target.value })
            }
            placeholder="Password"
          />
        </div>

        <button className="login_button" type="submit">
          SignUp
        </button>
      </form>
    </div>
  );
};

export default Signup;
