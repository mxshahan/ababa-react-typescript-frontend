import React, { BaseSyntheticEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { LoginRequest } from "../../dto";
import { RequestError } from "../../interfaces";
import { useLoginMutation } from "../../store/apis/auth.api";
import formStyle from "../../styles/form.module.scss";

export const Login = () => {
  const [state, setState] = useState<LoginRequest>({
    email: "",
    password: "",
  });

  const [loginUser, { isLoading, isError, error: apiError }] = useLoginMutation();

  const onChange = (e: BaseSyntheticEvent) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    loginUser(state);
  };

  const ApiError = apiError as RequestError;

  return (
    <div className="h-screen flex items-center justify-center bg-slate-100">
      <div className="w-1/4 p-3 ">
        <h3 className="text-center text-3xl mb-10 font-bold tracking-wide	">Login</h3>
        <form onSubmit={onSubmit}>
          <div className={formStyle.formField}>
            <label className={formStyle.formLabel}>Email</label>
            <input placeholder="Email" className={formStyle.formInput} name="email" onChange={onChange} />
            {/* <p className="text-red-400">{error?.email}</p> */}
          </div>
          <div className={formStyle.formField}>
            <label className={formStyle.formLabel}>Password</label>
            <input
              type="password"
              placeholder="Password"
              className={formStyle.formInput}
              name="password"
              onChange={onChange}
            />
            {state.password && state.password.length < 6 && (
              <p className="text-red-400">Password must be more than 6 character</p>
            )}
          </div>

          <button
            disabled={isLoading || !state.email || !state.password}
            className={formStyle.formButton + " text-white mt-4 uppercase"}
          >
            {isLoading ? "Processing" : "Login"}
          </button>
        </form>

        {isError && (
          <span className="block bg-red-100 rounded-md p-2 mt-4">
            <p className="text-center text-red-600">{ApiError.data.message}</p>
          </span>
        )}
        <div className="flex items-center">
          <span className="h-0.5 bg-slate-300 w-full"></span>
          <span className="p-5 text-slate-400">O</span>
          <span className="h-0.5 bg-slate-300 w-full"></span>
        </div>

        <Link to="/register" className={formStyle.formButton + " bg-orange-600 text-white"}>
          Signup
        </Link>
      </div>
    </div>
  );
};
