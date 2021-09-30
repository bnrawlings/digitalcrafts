import { useState } from "react";

function Form(){
    const [signupForm, setSignupForm] = useState({});
    const array1 = [1, 2];
    const array2 = [3, 4];
    const array3 = [...array1, ...array2];
    // spread operator
    const obj1 = { firstName: "joe" };
    const obj2 = { lastName: "frasier" };
    const obj3 = { ...obj1, ...obj2 };
    console.log(signupForm);
    return (
      <div>
        <h1>LinkedIn Signup Form</h1>
        <form action="">
          <input
            type="text"
            onChange={(e) =>
              setSignupForm({ ...signupForm, [e.target.name]: e.target.value })
            }
            name="firstName"
            placeholder="First Name"
          />
          <input
            type="text"
            onChange={(e) =>
              setSignupForm({ ...signupForm, [e.target.name]: e.target.value })
            }
            name="lastName"
            placeholder="Last Name"
          />
          <input
            type="text"
            onChange={(e) =>
              setSignupForm({ ...signupForm, [e.target.name]: e.target.value })
            }
            name="email"
            placeholder="Email"
          />
          <input
            type="text"
            onChange={(e) =>
              setSignupForm({ ...signupForm, [e.target.name]: e.target.value })
            }
            name="Street"
            placeholder="Street"
          />
          <input
            type="text"
            onChange={(e) =>
              setSignupForm({ ...signupForm, [e.target.name]: e.target.value })
            }
            name="City"
            placeholder="City"
          />
          <input
            type="text"
            onChange={(e) =>
              setSignupForm({ ...signupForm, [e.target.name]: e.target.value })
            }
            name="State"
            placeholder="State"
          />
          <input type="button" value="Submit" />
        </form>
      </div>
    );
  }
export default Form;

onClick={() => setUser([...users, signup])}