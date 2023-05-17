import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Search from '../../components/search/Search'
import union from '../../assets/Union.png'
import lend from '../../assets/lendsqr.png'
import {BsBell} from 'react-icons/bs'
import {FaBars} from 'react-icons/fa'
import {RiArrowDownSFill} from 'react-icons/ri'
import avatar from '../../assets/avatar.png'
import styles from './UserList.module.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Users from '../users/Users'

const UserList = () => {
    const [showSidebar, setShowSidebar]=useState(false)
    const [myUsers, setMyUsers] = useState([])

    const handleShowSidebar =()=>{
        setShowSidebar(!showSidebar)
    }
    useEffect(()=>{
        fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
        .then((res) => res.json())
        .then((response)=>{
            setMyUsers(response.myUsers)
            // console.log(response)
            // console.log(myUsers)
        })
    })

  return (
    <div className={styles.userlist}>
        <div className={styles.navbar} >
            <span className={styles.menu}><FaBars onClick={handleShowSidebar}/></span>
            <div className={styles.logo}>
                <span> <img src={union} alt="icon" /> </span>
                <span> <img src={lend} alt="icon" /> </span>
            </div>

            <Search/>

            <div className={styles.navbar__left} >
                <a href="#doc">Docs</a>
                <span> <BsBell/> </span>
                <div className={styles.avatar}>
                    <span> <img src={avatar} alt="profile" /> </span>
                    <p>Adedeji <RiArrowDownSFill/></p>
                </div>
            </div>
        </div>
        <div className={styles.userlist__container}>
            <div className={showSidebar? styles["sidebar-inactive"] + " " + styles.active : styles["sidebar-inactive"]}>
                <Sidebar/>
            </div>
            <div>
                {myUsers?.map((user)=>{
                    console.log(user)
                    const{orgName, userName, email, createdAt, PhoneNumber}= user
                    return(

                        <Users orgName={orgName}  userName={userName} email={email} createdAt={createdAt} PhoneNumber={PhoneNumber} />
                    )
                })}

                
            </div>
        </div>


    </div>
  )
}

export default UserList