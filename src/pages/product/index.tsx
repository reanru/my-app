import React, { useEffect, useState } from 'react'

import { useRouter } from "next/router"
import ProductView from "@/views/product"
import  { fetcher } from "@/lib/swr/fetcher"
import useSWR from "swr"

export default function Index() {
  const router = useRouter();

  const [isLogin, setIsLogin] = useState(true)
  const [products, setProducts] = useState([]);

  const { data, error, isLoading } = useSWR("/api/product", fetcher);

  // console.log('check ', error, isLoading);

  useEffect(() => {

    if(!isLogin){
      router.push("/auth/login");
    }

    // fetch("/api/product")
    // .then(res => res.json())
    // .then(res => {
    //   console.log('res ', res.data);
    //   setProducts(res.data);
    // })
  }, [])
  
  return (
    <>
      <ProductView products={isLoading ? [] : data.data} />
    </>
  )
}
