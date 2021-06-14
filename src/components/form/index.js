import React from "react";
import Button from "../button";
import "./index.css";
import { setUser } from "../../store/actions";
import { useDispatch } from "react-redux";

const Form = () => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    setFormData({ email: "", password: "" });
    dispatch(setUser(formData));
  };

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="formComponent" data-test="formComponent">
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            value={formData.email}
            onChange={onChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={onChange}
          />
        </div>
        <div className="form-control">
          <Button text="Submit" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Form;
