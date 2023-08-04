import React from "react";

import { useDispatch } from "react-redux";
import { blockUser } from "../../features/adminProfileSlice";
import "./Table.css";

export const Table = ({ items }) => {
  const dispatch = useDispatch();

  const selectUserToBlock = (user) => {
    dispatch(blockUser(user.id));
  };

  return (
    <table>
      <thead>
        <td>
          <input
            className="checkbox"
            type="checkbox"
            aria-label="Checkbox for following text input"
          ></input>
        </td>
        <p className="img">Image</p>
        <p className="name">Name</p>
        <p className="date">Date</p>
        <p className="type">Type</p>
        <p className="number">Number</p>
        <p className="email">Email</p>
        <p className="block">Block</p>
        <p className="chat">Chat</p>
      </thead>

      <tbody className="table_body">
        {items?.map((user) => {
          const {
            id,
            image,
            userName,
            birth_date,
            type,
            phone,
            email,
            status,
          } = user;

          return (
            <tr className="table_row" key={user.id}>
              <td className="center_item">
                <input
                  className="checkbox"
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                />
              </td>
              <td className="center_item">
                <img src={"./icons/grill.svg"} alt="not found" />
              </td>
              <td className="center_item">
                <p className="user">
                  {userName === null ? "defaultUserName" : userName}
                </p>
              </td>
              <td className="center_item">
                <p className="date">
                  {birth_date === null ? "---" : birth_date}
                </p>
              </td>
              <td className="center_item">
                <p className="study">{type === null ? "---" : type}</p>
              </td>
              <td className="center_item">
                <p className="number">{phone === null ? "---" : phone}</p>
              </td>
              <td className="center_item">
                <p className="mail">{email === null ? "---" : email}</p>
              </td>
              <td className="center_item">
                <button className="btn" onClick={() => selectUserToBlock(user)}>
                  {status === null ? "---" : status}
                </button>
              </td>
              <td className="center_item">
                <img className="mess" src="./icons/message.svg" alt="" />
                <img className="amal" src="./icons/share3.svg" alt="" />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
