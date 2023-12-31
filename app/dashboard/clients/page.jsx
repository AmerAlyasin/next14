import React from 'react'
import styles from '@/app/ui/dashboard/clients/clients.module.css';
import Search from '@/app/ui/dashboard/search/search';
import Link from 'next/link';
import Image from 'next/image';
import Pagination from '@/app/ui/dashboard/pagination/pagination';
 import { fetchClients } from '@/app/lib/data';
import { deleteClient } from '@/app/lib/actions';

const ClientsPage = async ({searchParams}) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const {count , clients} = await fetchClients(q, page);
  
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href='/dashboard/clients/add'>
          <button className={styles.addButton}>Add New</button>        
        </Link>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <td>Client Name</td>
              <td>Client Phone</td>
              <td>Contact Name</td>
              <td>Contact Mobile</td>
              <td>Email Address</td>
              <td>Created At</td>
              <td>Address</td>
              <td>Action</td>

            </tr>
          </thead>
          <tbody>
            {clients.map((client) =>(
            <tr key={client.id}>
              <td>{client.name}</td>
              <td>{client.phone}</td>
              <td>{client.contactName}</td>
              <td>{client.contactMobile}</td>
              <td>{client.email}</td>
              <td>{client.createdAt?.toString().slice(4,16)}</td>
              <td>{client.address}</td>
              <td>
              <div className={styles.buttons}>
                <Link href={`/dashboard/clients/${client.id}`} >
                  <button className={`${styles.button} ${styles.view}`}>View</button>
                  </Link>
                  <form action={deleteClient}>
                    <input type='hidden' name='id' value={client.id}/>
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
};

export default ClientsPage

