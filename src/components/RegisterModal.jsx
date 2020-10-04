import React, { useContext, useState } from "react";
import ReactModal from "react-modal";
import AuthContext from "../contexts/auth/AuthContext";
import useHistory from "react-router-dom";

const RegisterModal = () => {
  const {
    user,
    isRegisterModalOpen,
    login,
    logout,
    setRegisterModalOpen,
  } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = async () => {
    try {
      const res = await fetch("/user/register", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
          name,
        }),
      });
      const data = await res.json();
      // authToken comes seperately from the API, but the context needs it inside the user
      data.user.authToken = data.authToken;
      login(user);
      history.push("/track/browse");
    } catch (error) {
      console.log(error);
      logout();
      history.push("/");
    }
  };

  return (
    <ReactModal
      isOpen={isRegisterModalOpen}
      onRequestClose={() => setRegisterModalOpen(false)}
      style={{
        overlay: {
          background: "rgba(0, 0, 0, 0.3)",
        },
        content: {
          width: "80vh",
          maxWidth: "450px",
          borderRadius: "20px",
          margin: "auto",
          height: "500px",
        },
      }}
    >
      <form className="loginform" onSubmit={handleSubmit}>
        <h1>Register</h1>
        <input
          type="name"
          name="name"
          id="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="name"
        />
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
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button className="submit" type="submit">
          Submit
        </button>
      </form>
    </ReactModal>
  );
};

export default RegisterModal;
