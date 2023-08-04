import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePostById, getAllPosts } from "../features/adminPostSlice";

const Uploads = () => {
  const { posts, loading } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  const handleDeletePost = (item) => {
    dispatch(deletePostById(item.id));
    // console.log(item);
  };

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  return (
    <>
      <div className="uploads">
        <div className="uploads_search">
          <img className="search__icon" src="./icons/search.svg"></img>
          <input
            type="text"
            placeholder="Search in page"
            className="input__search"
          />

          <button className="btn">Search</button>
        </div>

        <a href="#">
          <img className="filter__icon" src="./icons/filter2.svg" alt="" />
        </a>

        <div className="parent_box">
          {posts?.map((item) => {
            const { id, description, name, userImageId, username } = item;

            return (
              <div className="student__card" key={id}>
                <div className="user__name">
                  <img src="./icons/grill.svg" alt="" />
                  <p className="name">
                    {username === null ? "John Doe" : username}
                  </p>
                  <p className="days">3 days ago</p>
                </div>

                <img
                  className="shedevr"
                  src={
                    userImageId === null ? "./icons/shedevr.png" : userImageId
                  }
                  alt="not found"
                />

                <p className="math">{name}</p>
                <p className="math">{description}</p>

                <button onClick={() => handleDeletePost(item)} className="btn">
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Uploads;
