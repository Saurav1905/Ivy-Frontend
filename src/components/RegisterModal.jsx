import React, { useContext, useState } from "react";
import ReactModal from "react-modal";
import AuthContext from "../contexts/auth/AuthContext";
import { useHistory } from "react-router-dom";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   const body = {
    //     email,
    //     password,
    //     name,
    //   };
    //   console.log(body);
    //   console.log("Fetching Register Route");
    //   const res = await fetch(
    //     "https://skilltracks.herokuapp.com/user/register",
    //     {
    //       method: "POST",
    //       body: JSON.stringify(body),
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );
    //   const data = await res.json();
    //   // authToken comes seperately from the API, but the context needs it inside the user
    //   if (!data.error) {
    //     data.user.authToken = data.authToken;
    //     console.log(data);
    //     login(data.user);
    //     console.log(user);
    //   } else {
    //     throw Error(data.message);
    //   }
    // } catch (error) {
    //   console.log(error);
    //   logout();
    //   // history.push("/");
    // }
    history.push("/track/browse");
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
