import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBlog } from "./PostsSlice";
import { selectAllUsers } from "../Posts/UsersSlice";
// import { nanoid } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  body: "",
  userId: "",
};

const AddPostForm = () => {
  const users = useSelector(selectAllUsers);
  const [form, setForm] = useState(initialState);

  const dispatch = useDispatch();

  const { title, body, userId } = form;

  const UsersOption = users.map((user) => (
    <option key={user.id} value={user.id}>
        {user.name}
    </option>
  ));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleUser = (e) => {
    const { value } = e.target;
    setForm({ ...form, userId: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if(title && body) {
        dispatch(addBlog(title, body));
        setForm({ title: "", body: "" });
    }
  };

  return (
    <section>
      <h2>Add Blog</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="userId">User:</label>
        <select id="userId" value={userId} onChange={handleUser}>
          <option value=""></option>
          {UsersOption}
        </select>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleChange}
        />
        <label htmlFor="body">Body:</label>
        <textarea id="body" name="body" value={body} onChange={handleChange} />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
