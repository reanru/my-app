 import React from 'react'
 import { useRouter } from "next/router"
import useSWR from "swr";
import { fetcher } from "@/lib/swr/fetcher";
 
import DetailProduct from "@/views/detailProduct";

 export default function DetailProductPage() {
    const { query } = useRouter();
    
    // const { data, error, isLoading } = useSWR(`/api/product/${query.id}`, fetcher);

    return (
        <div>
            {/* <DetailProduct product={isLoading ? {} : data.data} /> */}
        </div>
    )
 }
 
 export async function getServerSideProps({params}: {params: string}) {
    // fetch data
    // const res = await fetch('http://localhost:3000/api/product');
    // const response = await res.json();
    console.log(params)

    return {
        props: {
            products:{}
        }
    }
}