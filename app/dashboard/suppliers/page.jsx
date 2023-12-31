import React from 'react'
import styles from '@/app/ui/dashboard/clients/clients.module.css';
import Search from '@/app/ui/dashboard/search/search';
import Link from 'next/link';
import Image from 'next/image';
import Pagination from '@/app/ui/dashboard/pagination/pagination';
 import { fetchSuppliers } from '@/app/lib/data';
import { deleteSupplier } from '@/app/lib/actions';

const SupplierPage = async({searchParams}) => {
    const q = searchParams?.q || "";
    const page = searchParams?.page || 1;
    const {count , suppliers} = await fetchSuppliers(q, page);
    
    return (
      <div className={styles.container}>
        <div className={styles.top}>
          <Search placeholder="Search for a supplier..." />
          <Link href='/dashboard/suppliers/add'>
            <button className={styles.addButton}>Add New</button>        
          </Link>
          </div>
          <table className={styles.table}>
            <thead>
              <tr>
                <td>Supplier Name</td>
                <td>Supplier Phone</td>
                <td>Contact Name</td>
                <td>Contact Mobile</td>
                <td>Email Address</td>
                <td>Created At</td>
                <td>Address</td>
              </tr>
            </thead>
            <tbody>
              {suppliers.map((supplier) =>(
              <tr key={supplier.id}>
                <td>{supplier.name}</td>
                <td>{supplier.phone}</td>
                <td>{supplier.contactName}</td>
                <td>{supplier.contactMobile}</td>
                <td>{supplier.email}</td>
                <td>{supplier.createdAt?.toString().slice(4,16)}</td>
                <td>{supplier.address}</td>
                <td>
                <div className={styles.buttons}>
                <Link href={`/dashboard/suppliers/${supplier.id}`} >
                  <button className={`${styles.button} ${styles.view}`}>View</button>
                  </Link>
                  <form action={deleteSupplier}>
                    <input type='hidden' name='id' value={supplier.id}/>
                  <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                  </form>
              </div>
                </td>
                
              </tr>
              ))}
            </tbody>
          </table>
        <Pagination count={count} />
      </div>
      
    );
}

export default SupplierPage