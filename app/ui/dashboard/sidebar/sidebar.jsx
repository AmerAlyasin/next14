import MenuLinks from "./menuLinks/menuLinks";
import styles from "./sidebar.module.css";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";


const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Clients",
        path: "/dashboard/clients",
        icon: <MdShoppingBag />,
      },
      {
        title: "Suppliers",
        path: "/dashboard/suppliers",
        icon: <MdShoppingBag />,
      },
      {
        title: "Quotations",
        path: "/dashboard/quotations",
        icon: <MdShoppingBag />,
      },
      {
        title: "PurchaseOrder",
        path: "/dashboard/purchaseOrder",
        icon: <MdShoppingBag />,
      },
      {
        title: "Job Order",
        path: "/dashboard/jobOrder",
        icon: <MdAttachMoney />,
      },
      {
        title: "PL&CoC",
        path: "/dashboard/pl_coc",
        icon: <MdAttachMoney />,
      },
      
    ],
  },
  {
    title: "Analytics",
    list: [
    
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },

    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];
const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <img src="/noavatar.png" alt="" width='50' height='50' className={styles.userImage} />
        <div className={styles.userDetail}>
          <span className={styles.userName}>Amer</span>
          <span className={styles.userTitle}>Boss</span>

        </div>
      </div>
      
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLinks item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <button className={styles.logout}><MdLogout/> Logout</button>
    </div>
  );
};

export default Sidebar