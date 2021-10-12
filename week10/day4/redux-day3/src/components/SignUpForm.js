import React, { useState, useMemo } from "react";
import "./SignUpStyles.css";
import { useDispatch } from "react-redux";
import debounce from "lodash.debounce";
import { useSelector } from "react-redux";
import { createUserFromLogin } from "./DatabaseFunctions";
// import { FaSpinner } from "react-icons/fa";

export default function SignUpForm() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state);
  const counter = useSelector((state) => state.Counter);
  // this delays the dispatch function for 300 milliseconds
  const debouncedChangeHandler = useMemo(() => {
    return debounce(dispatch, 300);
  }, [dispatch]);

  return (
    <div className="signupform">
      <form>
        <input
          onChange={(e) =>
            debouncedChangeHandler({
              type: "SIGNUPFORM_FIRSTNAME",
              payload: e.target.value,
            })
          }
          type="text"
          placeholder="FirstName"
        />
        <input
          onChange={(e) =>
            debouncedChangeHandler({
              type: "SIGNUPFORM_LASTNAME",
              payload: e.target.value,
            })
          }
          type="text"
          placeholder="LastName"
        />
        <input
          onChange={(e) =>
            debouncedChangeHandler({
              type: "SIGNUPFORM_EMAIL",
              payload: e.target.value,
            })
          }
          type="text"
          placeholder="Email"
        />
        <input
          onChange={(e) =>
            debouncedChangeHandler({
              type: "SIGNUPFORM_PASSWORD",
              payload: e.target.value,
            })
          }
          type="password"
          placeholder="Password"
        />
        {loading ? (
          <button>
           
          </button>
        ) : (
          <input
            type="submit"
            disabled={loading}
            value={loading ? "Loading" : "Submit"}
            onClick={(e) => createUserFromLogin(e, user, setLoading)}
          />
        )}
      </form>
      {/* {counter} */}
      <div>
      <button onClick ={() => dispatch({type: "INCREMENT_COUNTER"})}>Increment Counter</button>
      <button>Decrement Counter</button>
      </div>
    </div>
  );
}