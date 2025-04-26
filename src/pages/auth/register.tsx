import React from 'react'
import Link from "next/link"


export default function Register() {
    return (
        <div>
            <div>register</div>
            <span>Sudah punya akun? <Link href={"/auth/login"}>masuk</Link></span>
        </div>
    )
}
