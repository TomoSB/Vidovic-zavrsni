import React, { useState } from "react";
import UserContext from "../context/UserContext";
import Chat from "../Chat/Chat";
import Login from "../Login/Login";

const CHANNEL_ID = "iwOOeHaaMcpKih7I";

const ChatApp = () => {
  const [user, setUser] = useState("");
  const [drone, setDrone] = useState(null);

  const userLogin = (username) => {
    if (username) {
      const drone = new window.Scaledrone(CHANNEL_ID, {
        data: { username },
      });
      drone.on("open", () => {
        setDrone(drone);
        setUser({ id: drone.clientId, username });
      });
    }
  };

  return (
    <UserContext.Provider value={{ user, drone, userLogin }}>
      {!user ? <Login /> : null}
      {user ? (
        <div className="chat_app-inner">
          <Chat />
        </div>
      ) : null}
    </UserContext.Provider>
  );
};

export default ChatApp;
