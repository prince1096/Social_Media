import { useContext, useState } from "react";
import styles from "./Signup.module.css";
import { useNavigate, useLocation } from "react-router";

import { BiHide } from "react-icons/bi";

import { BiShow } from "react-icons/bi";
import { DataUserContext } from "../Context/DataUser/DataUserProvider";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { dispatch } = useContext(DataUserContext);

  const navigate = useNavigate();
  const location = useLocation();
  const [userData, setUserData] = useState({
    email: "",
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const signupHandler = async (event) => {
    event.preventDefault();

    if (
      userData.firstname === "" ||
      userData.lastname === "" ||
      userData.username === "" ||
      userData.email === "" ||
      userData.password === "" ||
      userData?.confirmPassword === ""
    ) {
      return;
    }

    // console.log(event.target.value);
    // console.log(userData);

    if (userData?.password !== userData?.confirmPassword) {
      return;
    }

    try {
      let response = await fetch("/api/auth/signup", {
        method: "POST",

        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (data?.encodedToken) {
        localStorage.setItem("token", data?.encodedToken);
        localStorage.setItem("userInformation", JSON.stringify(userData));
        dispatch({ type: "LOGINDATA", payload: data?.foundUser });

        navigate(location?.state?.from.pathname || "/login", { replace: true });
      }

      console.log(data);
    } catch (error) {}
  };

  return (
    <div className={styles.login_container}>
      <form onSubmit={signupHandler} className={styles.login_form_container}>
        <div className={styles.firstname_block}>
          <label htmlFor="first" className={styles.login_label}>
            First Name
          </label>
          <input
            className={styles.login_input}
            type="text"
            id="first"
            value={userData?.firstname}
            onChange={(event) =>
              setUserData({ ...userData, firstname: event.target.value })
            }
            name="name"
            placeholder="First Name"
          />
        </div>

        <div id="lastname-block">
          <label htmlFor="last" className={styles.login_label}>
            Last Name
          </label>
          <input
            className={styles.login_input}
            type="text"
            id="last"
            value={userData?.lastname}
            onChange={(event) =>
              setUserData({ ...userData, lastname: event.target.value })
            }
            name="name"
            placeholder="Last Name"
          />
        </div>

        <div className={styles.email_block}>
          <label className={styles.login_label} htmlFor="email">
            Email
          </label>
          <input
            className={styles.login_input}
            id="email"
            type="email"
            name="email"
            value={userData?.email}
            onChange={(event) =>
              setUserData({ ...userData, email: event.target.value })
            }
            placeholder="email"
          />
        </div>

        <div className={styles.username_block}>
          <label htmlFor="user" className={styles.login_label}>
            Username
          </label>
          <input
            className={styles.login_input}
            type="username"
            name="username"
            id="user"
            value={userData?.username}
            onChange={(event) =>
              setUserData({ ...userData, username: event.target.value })
            }
            placeholder="Username"
          />
        </div>

        <div>
          <label htmlFor="pass" className={styles.login_label}>
            password
          </label>

          <div className={`${styles.password_block} ${styles.passworddiv}`}>
            <input
              className={styles.login_input_password}
              type={showPassword ? "text" : "password"}
              // type="password"
              name="password"
              id="pass"
              value={userData?.password}
              onChange={(event) =>
                setUserData({ ...userData, password: event.target.value })
              }
              placeholder="Password"
            />
            <button
              className={styles.showhidelogo}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <BiShow className={styles.showhidelogo} />
              ) : (
                <BiHide className={styles.showhidelogo} />
              )}
            </button>
          </div>
        </div>

        <div>
          <label htmlFor="confirm" className={styles.login_label}>
            {" "}
            confirm password
          </label>
          <div className={`${styles.password_block} ${styles.passworddiv}`}>
            <input
              className={styles.login_input_password}
              type="password"
              name="password"
              id="confirm"
              value={userData?.confirmPassword}
              onChange={(event) =>
                setUserData({
                  ...userData,
                  confirmPassword: event.target.value,
                })
              }
              placeholder=" Confirm Password"
            />
            <button
              className={styles.showhidelogo}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <BiShow className={styles.showhidelogo} />
              ) : (
                <BiHide className={styles.showhidelogo} />
              )}
            </button>
          </div>
        </div>

        <button className={styles.login_button} type="submit">
          SignUp
        </button>
      </form>
    </div>
  );
};

export default Signup;
