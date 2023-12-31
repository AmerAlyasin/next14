import React from 'react'
import Link from 'next/link'
import styles from '@/app/ui/dashboard/pl_coc/pl_coc.module.css'
const Pl_cocPage = () => {
  return (
    <div className={styles.container}>
      <Link href='/dashboard/pl_coc/addPl'>
      <button className={styles['button-86']} role="button">Pick List</button>
      </Link>
      <Link href='/dashboard/pl_coc/addCoc'>
      <button className={styles['button-86']} role="button">CoC</button>
      </Link>
      
      </div>
    
  )
}

export default Pl_cocPage