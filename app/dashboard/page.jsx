import Card from "../ui/dashboard/card/card";
import styles from "../ui/dashboard/dashboard.module.css"; 
import Rightbar from "../ui/dashboard/rightbar/rightbar";
import Tranasctions from "../ui/dashboard/transactions/transactions";
import Chart from "../ui/dashboard/chart/chart";


const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}> 
      <Card />
      <Card />
      <Card />
        </div>
        <Tranasctions />
        <Chart />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  )
}

export default Dashboard