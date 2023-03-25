import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard(props) {
    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors} >
            <div className="py-12">

            </div>
        </AuthenticatedLayout>
    );
}
