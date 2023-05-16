import React, { useCallback, useContext } from "react";
import withRouter from "../../withRouter";
import { Navigate } from "react-router";
import app from "../../firebase";
import { AuthContext } from "../../Auth";

const LoginArea = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;

      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Navigate to="/" />;
  }

  return (
    <section className="contact-area black-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="contact-wrap">
              <div className="contact-title">
                <h2 className="title">
                  <span>Welcome back</span>LogIn Account
                </h2>
                <form onSubmit={handleLogin} classname="contact-form">
                  <div className="form-grp">
                    <label htmlFor="name">
                      Email <span>*</span>
                    </label>
                    <input
                      name="email"
                      id="name"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-grp">
                    <label htmlFor="email">
                      Password <span>*</span>
                    </label>
                    <input type="password" id="email" placeholder="Password" />
                  </div>
                  <button type="submit" className="btn">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
// function LoginArea() {
//   return (
//     <section className="contact-area black-bg">
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-lg-7">
//             <div className="contact-wrap">
//               <div className="contact-title">
//                 <h2 className="title">
//                   <span>Welcome back</span>LogIn Account
//                 </h2>
//               </div>
//               <form action="#" className="contact-form">
//                 <div className="form-grp">
//                   <label htmlFor="name">
//                     Email <span>*</span>
//                   </label>
//                   <input type="text" id="name" placeholder="Enter your Email" />
//                 </div>
//                 <div className="form-grp">
//                   <label htmlFor="email">
//                     Password <span>*</span>
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     placeholder="Enter your password"
//                   />
//                 </div>
//                 <button type="submit" className="btn">
//                   Login
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

export default withRouter(LoginArea);
