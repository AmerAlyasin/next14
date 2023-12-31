import React from 'react';
import styles from '@/app/ui/dashboard/quotations/quotations.module.css';
import Search from '@/app/ui/dashboard/search/search';
import Link   from 'next/link';
import Pagination from '@/app/ui/dashboard/pagination/pagination';
 import { fetchQuotations } from '@/app/lib/data';
import { deleteQuotation, } from '@/app/lib/actions';

 
const QuotationPage = async ({searchParams}) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const {count , quotations} = await fetchQuotations(q, page);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..." />
        <Link href='/dashboard/quotations/add'>
          <button className={styles.addButton}>Add New</button>        
        </Link>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <td>Client Name</td>
              <td>Project Name</td>
              <td>Project Location Address</td>
              <td>Created At</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {quotations.map((quotation) => (
              
            <tr key={quotation.id}>
              <td>
                <div className={styles.quotation}>{quotation.clientName}</div>
              </td>
              <td>{quotation.projectName}</td>
              <td>{quotation.projectLA}</td>
              <td>{quotation.createdAt?.toString().slice(4,16)}</td>
              <td> 
                <div className={styles.buttons}>
                <Link href={`/dashboard/quotations/${quotation.id}`}>
                  <button className={`${styles.button} ${styles.view}`}>View</button>
                  </Link>
                  <form action={deleteQuotation}>
                  <input type='hidden' name='id' value={quotation.id}/>
                  <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                  
                  </form>
                  </div>
                  
              </td>
              
            </tr>
            
           ))}
          </tbody>
        </table>
      <Pagination count={count}/>
    </div>
    
  )
}



export default QuotationPage;

 