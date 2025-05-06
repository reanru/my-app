import React from 'react'

import styles from "./detailProduct.module.scss"

import { ProductType } from "@/types/product.type";

export default function Index({product}: {product: ProductType}) {
    return (
        <div>
            <h1 className={styles.title}>Detail Product</h1>
            <div
                className={styles.productDetail}
            >
                <div className={styles.productDetail__image}>
                    <img src={product.image} />
                </div>
                <h5 className={styles.productDetail__name}>{product.name}</h5>
                <p className={styles.productDetail__category}>{product.category}</p>
                <p className={styles.productDetail__price}>
                    {product.price && product.price.toLocaleString('id-ID', {
                        style: "currency",
                        currency: "IDR"
                    })}
                </p>
            </div>
        </div>
    )
}
