import React, { useEffect, useState } from 'react'

type productType = {
  id: number;
  name: string;
  price: number;
  size: string;
};

export default function Index() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/product")
    .then(res => res.json())
    .then(res => {
      console.log('res ', res.data);
      setProducts(res.data);
    })
  }, [])
  

  return (
    <div>
        <h1>Product Page</h1>
        {products.map((data: productType) => (
          <div key={data.id}>{data.name}</div>
        ))}
    </div>
  )
}
