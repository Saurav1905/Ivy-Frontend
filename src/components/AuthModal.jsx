import React, { useContext, useState } from "react";
import ReactModal from "react-modal";
import AuthContext from "../contexts/auth/AuthContext";
import { useHistory } from "react-router-dom";

const AuthModal = () => {
  const {
    user,
    isLoginModalOpen,
    login,
    setLoginModalOpen,
    logout,
  } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Logging In");
    const body = {
      email,
      password,
    };
    console.log(body);
    try {
      const res = await fetch("https://skilltracks.herokuapp.com/user/login", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      // authToken comes seperately from the API, but the context needs it inside the user
      if (!data.error) {
        data.user.authToken = data.authToken;
        console.log(data);
        login(data.user);
        console.log(user);
        history.push("/track/browse");
      } else {
        throw Error(data.message);
      }
    } catch (error) {
      console.log(error);
      logout();
      // history.push("/");
    }
  };

  return (
    <ReactModal
      isOpen={isLoginModalOpen}
      onRequestClose={() => setLoginModalOpen(false)}
      style={{
        overlay: {
          background: "rgba(0, 0, 0, 0.3)",
        },
        content: {
          width: "80vh",
          maxWidth: "450px",
          borderRadius: "20px",
          margin: "auto",
          height: "300px",
        },
      }}
    >
      <form className="loginform" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="email"
        />
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="password"
        />
        <button className="submit" type="submit">
          Submit
        </button>
      </form>
    </ReactModal>
  );
};

export default AuthModal;
