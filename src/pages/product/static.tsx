import React from 'react'

import ProductView from "@/views/product"
import { ProductType } from "@/types/product.type";

export default function Static({products}: {products : ProductType[]}) {
  return (
    <div>
        <ProductView products={products} />           
    </div>
  )
}

export async function getStaticProps(){
    // fetch data
    const res = await fetch('http://localhost:3000/api/product');
    const response = await res.json();

    return {
        props: {
            products: response.data
            // products: []
        }
    }
}
