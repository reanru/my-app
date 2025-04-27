import React from 'react'
import Link from "next/link"
import { useRouter } from "next/router"

import styles from "./login.module.scss"

export default function Index() {
    const router = useRouter();

    const handleLogin = () => {
        router.push('/product');
    }

    return (
        <div className={styles.login}>
            <div>login</div>

            <button onClick={handleLogin}>Login</button>

            <h1 className="text-yellow-300 text-3xl font-bold underline">Hello, Next.js!</h1>

            <div>
                <span>Belum punya akun? <Link href={"/auth/register"}>klik disini</Link></span>
            </div>
        </div>
    )
}
