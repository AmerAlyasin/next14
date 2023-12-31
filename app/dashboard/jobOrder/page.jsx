import React from 'react'
import styles from '@/app/ui/dashboard/jobOrder/jobOrder.module.css'
const JobOrderPage = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input placeholder='client' />
        <select placeholder='Quotation Number'></select>
        <input placeholder='Po Number' />
        <input placeholder='Po Date' />
        <button>Upload PO</button>
      </form>
      
    </div>
  )
}

export default JobOrderPage