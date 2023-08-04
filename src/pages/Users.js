import React, { Component, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../features/adminProfileSlice";
import { Table } from "../UI/Table/Table";

import "./Users.css";

const Users = () => {
  const { view_all_user, loading } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  // console.log(loading);

  useEffect(() => {
    dispatch(getAllUser());
  }, []);

  return (
    <>
      <div className="main__users">
        <div className="users__search">
          <img className="search__icon" src="./icons/search.svg"></img>
          <input
            type="text"
            placeholder="Search in page"
            className="input__search"
          />

          <button className="btn">Search</button>
        </div>

        <Table items={view_all_user} />
      </div>
    </>
  );
};

export default Users;
