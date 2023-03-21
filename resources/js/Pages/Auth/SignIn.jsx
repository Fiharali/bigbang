import React from "react";
import InputError from '@/Components/InputError';
import { useForm } from '@inertiajs/react';

function SignIn() {
    const { data, setData, post, errors } = useForm({
        emailSignIn: '',
        passwordSignIn: '',

    });
    const submitSignIn = (e) => {
        e.preventDefault();

        post(route('login'));
    };
    return (
        <>
            <h1>Create Account</h1>
            <form onSubmit={submitSignIn} id="sign-in-form">
                <div >
                    <img src="./image/utilisateur.png" width="150" height="150" />
                </div>
                <div >

                    <input id="emailSignIn" type="email" name="emailSignIn" value={data.emailSignIn} onChange={(e) => setData("emailSignIn", e.target.value)} placeholder='email' />
                    <InputError message={errors.emailSignIn} />
                </div>

                <div >
                    <input
                        id="passwordSignIn" type="password" name="passwordSignIn" value={data.passwordSignIn} onChange={(e) => setData("passwordSignIn", e.target.value)} placeholder='password' />
                    <InputError message={errors.passwordSignIn} />
                </div>

                <div >
                    <input type="checkbox" name="checkbox" id="checkbox" />
                    <label for="checkbox">Remember me ?</label>
                </div>
                <button className="control-button in">Sign In</button>
            </form>
        </>
    )
}
export default SignIn;