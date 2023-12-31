import styles from '@/app/ui/dashboard/login/login.module.css';
const Login = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1>Login</h1>
        <input type='text' placeholder='Username' />
        <input type='passsword' placeholder='password' />        
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login
/*
import React from 'react'
import Link from 'next/link'
import styles from '@/app/ui/dashboard/pl_coc/pl_coc.module.css'
<div className={styles.container}>
<Link href='/dashboard/pl_coc/addPl'>
<button className={styles['button-86']} role="button">Pick List</button>
</Link>
<Link href='/dashboard/pl_coc/addCoc'>
<button className={styles['button-86']} role="button">CoC</button>
</Link>

</div>*/