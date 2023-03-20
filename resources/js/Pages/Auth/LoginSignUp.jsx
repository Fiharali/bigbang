import React, { useState } from "react";
import "./style.css";
import { Head, Link, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';


function LoginSignUp() {
  const [isSignInOpen, setIsSignInOpen] = useState(true);

  const openSignUp = () => {
    setIsSignInOpen(false);
  };

  const openSignIn = () => {
    setIsSignInOpen(true);
  };
  //////////////////////////////////////////////////
  /////////////////////////////////////////////////
  const { data, setData, post, errors } = useForm({
    category: '',
    university: '',
    SocietName: '',
    etablessement: '',
    filere: '',
    UserName: '',
    email: '',
    number: '',
    password: '',

  });

  console.log(data.UserName)


  const submitSignUp = (e) => {
    e.preventDefault();



    post(route('register'));

  };
  const submitSignIn = (e) => {
    e.preventDefault();

    post(route('login'));
  };



  return (
    <div className="container">
      <div className={`overlay ${isSignInOpen ? "open-sign-in" : "open-sign-up"}`}>
        <div className="sign-in">
          <h1>Welcome Back!</h1>
          <button className="switch-button" id="slide-right-button" onClick={openSignIn}>Sign In</button>
        </div>
        <div className="sign-up">
          <h1>Join our community today</h1>
          <button className="switch-button" id="slide-left-button" onClick={openSignUp}>Sign Up</button>
        </div>
      </div>
      <div className="form">
        <div className={`sign-in ${isSignInOpen ? "" : "hidden"}`}>
          <form onSubmit={submitSignIn} id="sign-in-form">
            <div >
              <img src="./image/utilisateur.png" width="150" height="150" />
            </div>
            <div >

              <input id="email" type="email" name="email" value={data.email} onChange={(e) => setData("email", e.target.value)}/>
              <InputError message={errors.email} />
            </div>

            <div >
              <input
                id="password" type="password" name="password" value={data.password} onChange={(e) => setData("password", e.target.value)} />
              <InputError message={errors.password}  />
            </div>

            <div >
              <input type="checkbox" name="checkbox" id="checkbox" />
              <label for="checkbox">Remember me ?</label>
            </div>
            <button className="control-button in">Sign In</button>
          </form>
        </div>
        <div className={`sign-up ${isSignInOpen ? "hidden" : ""}`}>
          <h1>Create Account</h1>
          <form id="sign-up-form" onSubmit={submitSignUp}>
            <div >
              <img src="./image/utilisateur.png" width="150" height="150" />
            </div>

            <div >
              <input type="text" value={data.UserName} name="UserName" onChange={(e) => setData("UserName", e.target.value)} />

            </div>

            <div >
              <input type="email" placeholder='email'
                value={data.email} name="email" onChange={(e) => setData("email", e.target.value)} />
              <InputError message={errors.email}  />

            </div>

            <div >
              <input type='number' placeholder='number' value={data.number} name="number" onChange={(e) => setData("number", e.target.value)} />


            </div>
            <>

              <select name="category" onChange={(e) => setData("category", e.target.value)}>
                <option value="" > choose</option>
                <option value="bac+2"  > bac+2</option>
                <option value="license"  >License </option>
                <option value="master"  >Master </option>
                <option value="phd"  >PHD </option>
                <option value="phd_project"  >PHD Project </option>
                <option value="proffeseur"  >Proffeseur </option>
                <option value="proffessionnel"  >Proffessionnel </option>
              </select>
            </>
            <>

              {
                data.category === "bac+2" || data.category === "license" || data.category === "master" || data.category === "phd" || data.category === "phd_project" || data.category === "Proffeseur" ?
                  (
                    <>
                      <select name="university" onChange={(e) => setData("university", e.target.value)} >
                        <option value="" > choose university</option>
                        <option value="u1"  > U1</option>
                        <option value="u2"  >U2 </option>
                      </select>

                      {
                        data.university === "u1" ? (
                          <>
                            <select name="etablessement" onChange={(e) => setData("etablessement", e.target.value)} >
                              <option value="" > choose etablessement </option>
                              <option value="e1"  > E1</option>
                              <option value="e2"  >E2 </option>
                            </select>
                            {
                              data.etablessement === "e1" ? (
                                <>
                                  <select name="filere" onChange={(e) => setData("filere", e.target.value)} >
                                    <option value="" > choose filere </option>
                                    <option value="f1"  > F1</option>
                                    <option value="f2"  >F2 </option>
                                  </select>
                                </>

                              ) : data.etablessement === "e2" ? (
                                <>
                                  <select name="filere" onChange={(e) => setData("filere", e.target.value)} >
                                    <option value="" > choose filere </option>
                                    <option value="f3"  > F3</option>
                                    <option value="f4"  >F4</option>
                                  </select>
                                </>

                              ) : (
                                <h1>chose etablessement</h1>
                              )
                            }

                          </>

                        ) : data.university === "u2" ? (
                          <>
                            <select name="etablessement" onChange={(e) => setData("etablessement", e.target.value)} >
                              <option value="" > choose etablessement</option>
                              <option value="e3"  > E3</option>
                              <option value="e4"  >E4</option>
                            </select>
                            {
                              data.etablessement === "e3" ? (
                                <>
                                  <select name="filere" onChange={(e) => setData("filere", e.target.value)} >
                                    <option value="" > choose filere </option>
                                    <option value="f1"  > F1</option>
                                    <option value="f2"  >F2 </option>
                                  </select>
                                </>

                              ) : data.etablessement === "e4" ? (
                                <>
                                  <select name="filere" onChange={(e) => setData("filere", e.target.value)} >
                                    <option value="" > choose filere </option>
                                    <option value="f3"  > F3</option>
                                    <option value="f4"  >F4</option>
                                  </select>
                                </>

                              ) : (
                                <h1>chose etablessement</h1>
                              )
                            }

                          </>
                        ) : (
                          <h1> choice</h1>
                        )
                      }
                    </>


                  ) : data.category === "proffessionnel" ? (
                    <input type="text" placeholder='SocietName' value={data.SocietName} name="SocietName" onChange={(e) => setData("SocietName", e.target.value)} />
                  ) : (
                    <h1>
                      welcom
                    </h1>
                  )

              }
            </>
            <div >
              <input type="password" placeholder='password' name="password" value={data.password} onChange={(e) => setData("password", e.target.value)} />

            </div>

            <div >
              <input type="checkbox" name="checkbox" id="checkbox" />
              <label for="checkbox">Remember me ?</label>
            </div>
            <button className="control-button up">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginSignUp;