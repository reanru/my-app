import React from 'react'

import Navbar from "../layouts/navbar";

type AppProps = {
    children: React.ReactNode;
}

export default function Index(props : AppProps) {

    const { children } = props;
 
    return (
        <div>
            <Navbar />
            { children }
        </div>
    )
}
