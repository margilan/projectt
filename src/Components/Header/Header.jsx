import styles from './Header.module.css'
export default function Header() {
  return (
    <>
    
    <div className = {styles.allcontainer}>
        <div className="all">
            <h1 className={styles.haj1}>Admin</h1>
        </div>
        <div className="buton">
            <button className={styles.button}>LogOut</button>
        </div>
    </div>
    
    </>
    )
}
