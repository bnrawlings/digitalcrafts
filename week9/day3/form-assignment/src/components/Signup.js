

function SignupForm (props) {
 const { signup } = props;
 const { setSignup } = props;
 const { users } = props
 const { setUser } = props
 console.log(users)

    return(
        <div>
            <h1>Sign Up</h1>
           
                <input onChange={(e) =>setSignup({ ...signup, [e.target.name]: e.target.value })} name="firstName" placeholder=" First Name" type="text"></input>
                <input onChange={(e) =>setSignup( { ...signup, [e.target.name]: e.target.value })} name="lastName" placeholder="Last Name" type="text"></input>
                <input onChange={(e) =>setSignup( { ...signup, [e.target.name]: e.target.value })} name="dob" placeholder="Date of Birth" type="date"></input>
                <input onChange={(e) =>setSignup( { ...signup, [e.target.name]: e.target.value })} name="address" placeholder="Address" type="text"></input>
                <input onChange={(e) =>setSignup( { ...signup, [e.target.name]: e.target.value })} name="city" placeholder="City" type="text"></input>
                <input onChange={(e) =>setSignup( { ...signup, [e.target.name]: e.target.value })} name="state" placeholder="State" type="text"></input>
                <input onChange={(e) =>setSignup( { ...signup, [e.target.name]: e.target.value })} name="zipcode" placeholder="Zipcode" type="text"></input>
                <input onChange={(e) =>setSignup( { ...signup, [e.target.name]: e.target.value })} name="userName" placeholder="Username" type="text"></input>
                <input onChange={(e) =>setSignup( { ...signup, [e.target.name]: e.target.value })} name="email" placeholder="Email" type="text"></input>
                <button onClick={() => setUser([...users, signup])} >Sign Up</button>
                
           
           
        </div>
        
    );
    
}
export default SignupForm;