'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function login(formData: FormData) {
    const email = formData.get('email');
    const password = formData.get('password');

    // Hardcoded credentials check
    if (email === 'admin@kaaveristeels.com' && password === 'Admin@123456') {
        cookies().set('admin_session', 'authenticated', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24, // 1 day
            path: '/',
        });
        redirect('/admin');
    } else {
        redirect('/admin/login?error=Invalid credentials');
    }
}

export async function logout() {
    cookies().delete('admin_session');
    redirect('/admin/login');
}