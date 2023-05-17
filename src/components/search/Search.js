import React from 'react'
import styles from './Search.module.scss'
import {AiOutlineSearch} from 'react-icons/ai'



const Search = () => {
  return (
    <>
    <div className={styles.inputWrapper}>
        <form action="">
        <input type="search" placeholder='Search for anything' />
        <button>
            <AiOutlineSearch/>
        </button>
        </form>
    </div>
    </>
  )
}

export default Search