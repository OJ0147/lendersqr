import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.scss';
import union from '../../assets/Union.png';
import lendsqr from '../../assets/lendsqr.png';
import landImage from '../../assets/sign-in-img.png';

const Home = () => {
    let navigate = useNavigate();

    const[userLoginInfo, setUserLoginInfo]=useState({
        email:"",
        password:"",
    });

    const [shouldShowPassword, setShouldShowPassword]= useState(false)
    const toggleShowPassword=()=>{
        setShouldShowPassword(!shouldShowPassword)
    };
    const handleChange=(e)=>{
        setUserLoginInfo(
            Object.assign({},{...userLoginInfo,[e.target.name]:e.target.value})
        )
    }
    console.log(userLoginInfo)
    
    const handleSubmit=(e)=>{
        e.preventDefault();

        navigate("/users-list")
    }

  return (
        <div className={styles.landingPage}>
            <div className={styles.logo}>
                <span ><img src={union} alt="" /></span>
                <span ><img src={lendsqr} alt="" /></span>
            </div>
            <div className={styles.pageWrapper}>
                <div className={styles.imageSide}>
                    <div className={styles.imageWrapper}>
                        <img src={landImage} alt="man" />
                    </div>
                </div>

                <div className={`${styles.formWrapper} ${styles.fontFaceAvenir}`}>
                    <div className="formControl">

                        <h1>Welcome!</h1>
                        <p>Enter details to login.</p>
                        <form onSubmit={handleSubmit}>
                            <section className={styles.formInput}>   
                                <input type="email" placeholder='Email' name='email' value={userLoginInfo.email} onChange={(e)=>handleChange(e)} required />
                            </section>

                            <section className={`${styles.formInput} ${styles.passInput}`}>
                                <input type={!shouldShowPassword? "password":"text"} placeholder='Password' name='password' value={userLoginInfo.password} onChange={(e)=>handleChange(e)} required />
                                <span onClick={toggleShowPassword}>{!shouldShowPassword? "SHOW":"HIDE"} </span>
                            </section>
                            <a href='#reset'>FORGOT PASSWORD?</a>
                    
                            <button className={styles.btn} type="submit">LOG IN</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Home