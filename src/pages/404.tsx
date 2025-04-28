import React from 'react'

import styles from "@/styles/404.module.scss"

import notfound from "../../public/not-found.png"

export default function NotFoundPage() {
  return (
    <div className={styles.error}>
        <img src="/not-found.png" className={styles.error_image} alt="404" />
        <div>Halaman Tidak Ditemukan</div>
    </div>
  )
}
