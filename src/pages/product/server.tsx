import React from 'react'

import ProductView from "@/views/product"

import { ProductType } from "@/types/product.type";

export default function Server({products}: {products : ProductType[]}) {
    return (
        <div>
            <ProductView products={products} />           
        </div>
    )
}

// dipanggil setiap melakukan request
export async function getServerSideProps() {
    // fetch data
    const res = await fetch('http://localhost:3000/api/product');
    const response = await res.json();
    console.log(response)

    return {
        props: {
            products: response.data
        }
    }
}