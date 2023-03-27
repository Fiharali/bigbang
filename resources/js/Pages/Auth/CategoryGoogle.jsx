import React from 'react'
import InputError from '@/Components/InputError';
import { useForm } from '@inertiajs/react';

function CategoryGoogle(props) {

    const { data, setData, post,  errors } = useForm({
        category: '',
        university: '',
        SocietName: '',
        etablessement: '',
        filere: '',


    });
    const submitSignUp = (e) => {
        e.preventDefault();
        post(route('storecategory'));
    };

    return (
        <>
            <form id="sign-up-form" onSubmit={submitSignUp}>

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
                                <>
                                    <input type="text" placeholder='SocietName' value={data.SocietName} name="SocietName" onChange={(e) => setData("SocietName", e.target.value)} />
                                    <InputError message={errors.SocietName} /></>
                            ) : (
                                <h1>
                                    welcom
                                </h1>
                            )

                    }
                </>

                <button className="control-button up">Sign Up</button>

            </form>



        </>

    )
}

export default CategoryGoogle
