import React from 'react'
import styles from '@/app/ui/dashboard/clients/singleClients/singleClients.module.css';
import Image from 'next/image';
import {  updateSupplier} from '@/app/lib/actions';
import { fetchSupplier } from '@/app/lib/data';


const SingleSupplierPage = async ({params}) => {
  const {id} = params;
  const supplier = await fetchSupplier(id);
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.imgContainer}>
                <Image src='/noavatar.png' alt='' fill />
            </div>
            {supplier.name}
        </div>
        <div className={styles.formContainer}>
            <form action={updateSupplier} className={styles.form}>
            <input type='hidden' name='id' value={supplier.id}/>
            <label>Name</label>
            <input type='text' name='name' placeholder={supplier.name} />
            <label>Phone</label>
            <input type='text' name='phone' placeholder={supplier.phone} />
            <label>Contact Name</label>
            <input type='text' name='contactName' placeholder={supplier.contactName} />
            <label>Contact Mobile</label>
            <input type='text' name='contactMobile' placeholder={supplier.contactMobile} />
            <label>Email</label>
            <input type='email' name='email' placeholder={supplier.email} />
            <label>Address</label>
            <textarea type='text' name='address' placeholder={supplier.address} />
            <button className={styles.button}>Update</button>
            </form>
        </div>
    </div>
  );
}

export default SingleSupplierPage