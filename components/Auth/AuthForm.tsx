"use client";
import { loginAction } from "@/actions/authAction";
import { useFormState, useFormStatus } from "react-dom";
import cn from "clsx";

const AuthForm = () => {
  const [errorMessage, dispatch] = useFormState(loginAction, "");
  const { pending } = useFormStatus();
  return (
    <div className="row justify-content-center">
      <div className="col-4">
        <form action={dispatch}>
          <div className="mb-3">
            <input
              type="email"
              name="identifier"
              placeholder="Enter email"
              className={cn("form-control", errorMessage && "is-invalid")}
            />
            <div className="invalid-feedback">{errorMessage}</div>
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              className={cn("form-control", errorMessage && "is-invalid")}
            />
            <div className="invalid-feedback">{errorMessage}</div>
          </div>
          <div className="text-center">
            {pending ? (
              <button className="btn btn-primary" type="button" disabled>
                <span className="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
                <span role="status">Loading...</span>
              </button>
            ) : (
              <button className="btn btn-info">Войти</button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
