import React from 'react'
import styles from '@/app/ui/dashboard/clients/addClient/addClient.module.css';
import { addSupplier } from '@/app/lib/actions';


const AddSupplier = () => {
  return (
    <div className={styles.container}>
        <form action={addSupplier} className={styles.form}>
        <input type="text" placeholder="Supplier Name" name="name" required />
        <input type="phone" placeholder="Supplier Phone" name="phone" required />
        <input type="text" placeholder="Contact Name" name="contactName" />
        <input type="phone" placeholder="Contact Mobile" name="contactMobile" />
        <input type="email" placeholder="Email Adress" name="email" />
        <textarea
          name="address"
          id="address"
          rows="16"
          placeholder="Address"
        ></textarea>
        <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default AddSupplier