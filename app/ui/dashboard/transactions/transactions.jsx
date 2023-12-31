import React from 'react'
import styles from '../transactions/transactions.module.css';
import Image from 'next/image';

const Tranasctions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
         <tr>
            <td>
              <div className={styles.user}>
              <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage}/> Ahmad 
              </div>
              </td>
            <td><span className={`${styles.status} ${styles.pending}`}>Pending</span></td>
            <td>12/19/2023</td>
            <td>$50000</td>
         </tr>
          
         <tr>
            <td> 
              <div className={styles.user}>
              <Image src="/noavatar.png" 
              alt="" 
              width={40} 
              height={40}
               className={styles.userImage}/>
                Ahmad 
              </div> 
              </td>
            <td><span className={`${styles.status} ${styles.done}`}>Done</span></td>
            <td>12/19/2023</td>
            <td>$50000</td>
         </tr>

          <tr>
            <td>
            <div className={styles.user}>
              <Image src="/noavatar.png" 
              alt="" 
              width={40} 
              height={40}
               className={styles.userImage}/>
                Ahmad 
              </div> 
            </td>
            <td><span className={`${styles.status} ${styles.cancelled}`}>Cancelled</span></td>
            <td>12/19/2023</td>
            <td>$50000</td>
          </tr>

          <tr>
            <td>
            <div className={styles.user}>
              <Image src="/noavatar.png" 
              alt="" 
              width={40} 
              height={40}
               className={styles.userImage}/>
                Ahmad 
              </div> 
            </td>
            <td><span className={`${styles.status} ${styles.pending}`}>Pending</span></td>
            <td>12/19/2023</td>
            <td>$50000</td>

          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Tranasctions