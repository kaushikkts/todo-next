'use server'

import {redirect} from "next/navigation";

export async function getFormData(formData: FormData) {
    const login = {
        email: formData.get('email'),
        password: formData.get('password'),
    };
    console.log(login);

    if(login.email === 'test@test.com' && login.password === 'password'){
        redirect("/");
    }
    else {
        redirect('http://localhost:3000/login');
    }
}