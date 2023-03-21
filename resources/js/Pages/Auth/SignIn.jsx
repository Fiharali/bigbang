import React from "react";
import InputError from '@/Components/InputError';
import { useForm } from '@inertiajs/react';

function SignIn() {
    const { data, setData, post, errors } = useForm({
        email: '',
        password: '',

    });
    const submitSignIn = (e) => {
        e.preventDefault();

        post(route('login'));
    };
    return (
        <>
            <h1>Create Account</h1>
            <form onSubmit={submitSignIn} id="sign-in-form" className='form-group bg-success'>
                <div >
                    <img src="./image/utilisateur.png" width="150" height="150" />
                </div>
                <div >

                    <input className="form-control" id="email" type="email" name="email" value={data.email} onChange={(e) => setData("email", e.target.value)} placeholder='email' />
                    <InputError message={errors.email} />
                </div>

                <div >
                    <input className="form-control mb-3"
                        id="passwordSignIn" type="password" name="password" value={data.password} onChange={(e) => setData("password", e.target.value)} placeholder='password' />
                    <InputError message={errors.password} />
                </div>

                <div >
                    <input type="checkbox" name="checkbox" id="checkbox" className="form-control" />
                    <label for="checkbox">Remember me ?</label>
                </div>
                <button className="control-button in btn btn-primary">Sign In</button>
            </form>
        </>
    )
}
export default SignIn;