import React from 'react'

import styles from "./product.module.scss"

import { ProductType } from "@/types/product.type";
import Link from "next/link";

export default function Index({products}: {products: ProductType[]}) {
  return (
    <div className={styles.product}>
        <h1 className={styles.product__title}>Product</h1>
        <div className={styles.product__content}>
            { products.length <= 0 ? (
                <div className={styles.product__content__skeleton}>
                    <div className={styles.product__content__skeleton__image} />
                    <div className={styles.product__content__skeleton__name} />  
                    <div className={styles.product__content__skeleton__category} />         
                    <div className={styles.product__content__skeleton__price} />           
                </div>
            ) : (
                <>
                    {products.map((data: ProductType) => (
                        <Link
                            key={data.id}
                            href={`product/${data.id}`}
                            className={styles.product__content__item}
                        >
                            <div className={styles.product__content__item__image}>
                                <img src={data.image} />
                            </div>
                            <h5 className={styles.product__content__item__name}>{data.name}</h5>
                            <p className={styles.product__content__item__category}>{data.category}</p>
                            <p className={styles.product__content__item__price}>
                                {data.price.toLocaleString('id-ID', {
                                    style: "currency",
                                    currency: "IDR"
                                })}
                            </p>
                        </Link>
                    ))}
                </>
            ) }
        </div>
    </div>
  )
}
