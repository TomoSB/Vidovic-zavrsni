import { useContext } from "react";
import UserContext from "../context/UserContext";
import ChatContext from "../context/ChatContext";
import "./Sidebar.scss";

const Sidebar = () => {
  const { user } = useContext(UserContext);
  const { membersArray } = useContext(ChatContext);

  return (
    <section className="sidebar">
      <div className="users_container">
        <p className="users_list_title">Online users</p>
        <ul>
          {membersArray.length < 2 ? 'Only you' : ''}
          {membersArray.map((member) => (
            <div key={member.id}>
              {member.clientData.username !== user.username ? (
                <li>{member.clientData.username}</li>
              ) : (
                ""
              )}
           </div>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;