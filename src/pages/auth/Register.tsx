import React, { BaseSyntheticEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { RegisterUserRequest, RequestError } from "../../interfaces";
import { useRegisterMutation } from "../../store/apis/auth.api";
import formStyle from "../../styles/form.module.scss";

export const Register = () => {
  const [state, setState] = useState<RegisterUserRequest>({
    name: "",
    email: "",
    password: "",
  });

  const [cpassword, setCpassword] = useState<string>("");

  const [registerUser, { isLoading, isError, error: apiError }] = useRegisterMutation();

  const onChange = (e: BaseSyntheticEvent) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    registerUser(state);
  };

  const ApiError = apiError as RequestError;
  return (
    <div className="h-screen flex items-center justify-center bg-slate-100">
      <div className="w-1/4 p-3 ">
        <h3 className="text-center text-3xl mb-10 font-bold tracking-wide	">Login</h3>
        <form onSubmit={onSubmit}>
          <div className={formStyle.formField}>
            <label className={formStyle.formLabel}>Name</label>
            <input placeholder="Fullname" className={formStyle.formInput} name="name" onChange={onChange} />
          </div>
          <div className={formStyle.formField}>
            <label className={formStyle.formLabel}>Email</label>
            <input placeholder="Email" className={formStyle.formInput} name="email" onChange={onChange} />
          </div>
          <div className={formStyle.formField}>
            <label className={formStyle.formLabel}>Password</label>
            <input
              placeholder="Password"
              type="password"
              className={formStyle.formInput}
              name="password"
              onChange={onChange}
            />
            {state.password && state.password.length < 6 && (
              <p className="text-red-400">Password must be more than 6 character</p>
            )}
          </div>
          <div className={formStyle.formField}>
            <label className={formStyle.formLabel}>Confirm Password</label>
            <input
              placeholder="Confirm Password"
              type="password"
              className={formStyle.formInput}
              onChange={(e) => setCpassword(e.target.value)}
            />
            {cpassword && state.password !== cpassword && (
              <p className="text-red-400">Password and Confirm Password Missmatch</p>
            )}
          </div>

          <button
            disabled={isLoading || !state.email || !state.password || !state.name || state.password !== cpassword}
            className={formStyle.formButton + " text-white mt-4 uppercase"}
          >
            {isLoading ? "Processing" : "Signup"}
          </button>
        </form>

        <div className="flex items-center">
          <span className="h-0.5 bg-slate-300 w-full"></span>
          <span className="p-5 text-slate-400">O</span>
          <span className="h-0.5 bg-slate-300 w-full"></span>
        </div>

        <Link to="/login" className={"text-center block text-red-500"}>
          Already have account?
        </Link>
      </div>
    </div>
  );
};
