import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

function Home(props) {
    return (

        <>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
            ></AuthenticatedLayout>

            <div>aliiiiii</div>
        </>
    )
}

export default Home
