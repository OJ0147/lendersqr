import { customerData } from "./sidebarData";
import { settingsData } from "./sidebarData";
import { businessData } from "./sidebarData";
import briefcase from '../../assets/briefcase.svg'
import arrowdown from '../../assets/arrow-down.svg'
import home from '../../assets/home.svg'
import signout from '../../assets/sign-out.svg'
import { NavLink } from "react-router-dom";
import styles from './Sidebar.module.scss'



const Sidebar = () => {

    

    return ( 
        <div className={styles.sidebar} >
            <ul className={styles.headnav} >
                <li>
                  <span><img src={briefcase} alt="icon" /></span> Switch Organization <span><img src={arrowdown} alt="icon" /></span>
                </li>
                <li>
                  <span><img src={home} alt="icon" /></span> Dashboard
                </li>
            </ul>

            <div className={styles.sidebar__links}>
            <small>Customers</small>
                {customerData.map((customer, index)=>{
                    const{name, url, img}=customer
                    return(
                        <ul key={index}>
                            <li >
                                <NavLink to={url}>
                                    <span><img src={img} alt="icon" /></span>{name}
                                </NavLink>
                            </li>
                        </ul>
                    )
                })}
            </div>

            <div className={styles.sidebar__links}>
            <small>Businesses</small>
                {businessData.map((business, index)=>{
                    const{name, url, img}=business
                    return(
                        <ul key={index}>
                            <li>
                                <NavLink to={url} >
                                    <span><img src={img} alt="icon" /></span>{name}
                                </NavLink>
                            </li>
                        </ul>
                    )
                })}
            </div>

            <div className={styles.sidebar__links}>
            <small>Settings</small>
                {settingsData.map((setting, index)=>{
                    const{name, url, img}=setting
                    return(
                        <ul key={index}>
                            <li>
                                <NavLink to={url}>
                                    <span><img src={img} alt="icon" /></span>{name}
                                </NavLink>
                            </li>
                        </ul>
                    )
                })}
            </div>

            <div className={styles.sidebar__base}>
                <button><img src={signout} alt="" /> Logout</button>

                <small>v1.2.0</small>
            </div>


        </div>
    );
}
 
export default Sidebar;