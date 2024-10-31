'use server'

import {redirect} from "next/navigation";
import Error from "@/app/auth/login/error";

function invalidFormInput(text: any){
    return !text || text.trim() === " ";
}

export async function loginFormData(formData: FormData) {
    const login = {
        email: formData.get('email'),
        password: formData.get('password'),
    };
    // console.log(login);

    if(login.email === 'test@test.com' && login.password === 'password'){
        redirect(process.env.DASHBOARD_URL);
    }
    if(invalidFormInput(login.email) || invalidFormInput(login.password) || !login.email.includes('@') ) {
       return Error()
    }
    // redirect(process.env.LOGIN_URL);
}