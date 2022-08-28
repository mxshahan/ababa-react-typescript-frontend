import React, { FormEvent } from "react";
import { Link } from "react-router-dom";
import formStyle from "../../styles/form.module.scss";

export const Register = () => {
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div className="h-screen flex items-center justify-center bg-slate-100">
      <div className="w-1/4 p-3 ">
        <h3 className="text-center text-3xl mb-10 font-bold tracking-wide	">Login</h3>
        <form onSubmit={onSubmit}>
          <div className={formStyle.formField}>
            <label className={formStyle.formLabel}>Firstname</label>
            <input placeholder="Firstname" className={formStyle.formInput} />
          </div>
          <div className={formStyle.formField}>
            <label className={formStyle.formLabel}>Lastname</label>
            <input placeholder="Lastname" className={formStyle.formInput} />
          </div>
          <div className={formStyle.formField}>
            <label className={formStyle.formLabel}>Email</label>
            <input placeholder="Email" className={formStyle.formInput} />
          </div>
          <div className={formStyle.formField}>
            <label className={formStyle.formLabel}>Password</label>
            <input placeholder="Password" className={formStyle.formInput} />
          </div>
          <div className={formStyle.formField}>
            <label className={formStyle.formLabel}>Confirm Password</label>
            <input placeholder="Confirm Password" className={formStyle.formInput} />
          </div>
          <button className={formStyle.formButton + " text-white mt-4 uppercase"}>Signu Up</button>
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
