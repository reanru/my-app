import React, { useEffect } from 'react'
import Link from "next/link"
import { useRouter } from "next/router"

export default function Login() {

    useEffect(() => {
        console.log('check');
        
    }, [])
    

    const router = useRouter();

    const handleLogin = () => {
        router.push('/product');
    }

    return (
        <div>
            <div>login</div>

            <button onClick={handleLogin}>Login</button>

            <div>
                <span>Belum punya akun? <Link href={"/auth/register"}>klik disini</Link></span>
            </div>
        </div>
    )
}
