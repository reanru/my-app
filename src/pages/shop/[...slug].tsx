import React from 'react'
import { useRouter } from "next/router"

export default function ShopPage() {
    const { query } = useRouter();
   
    // console.log('check ', query);
    

   return (
       <div>
            <h1>Detail Page</h1>
            <p>Shop : {`${query.slug && query.slug[0] + ' - ' + query.slug[1]}`}</p>
       </div>
   )
}
