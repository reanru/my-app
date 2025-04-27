import React from 'react'

import Navbar from "../layouts/navbar";
import { useRouter } from "next/router";

type AppProps = {
    children: React.ReactNode;
}

export default function Index(props : AppProps) {

    const { children } = props;
    
    const { pathname } = useRouter();

    const disableNavbar = ["/auth/login", "/auth/register"];

    return (
        <div>

            { !disableNavbar.includes(pathname) && <Navbar /> }

            
            { children }
        </div>
    )
}
