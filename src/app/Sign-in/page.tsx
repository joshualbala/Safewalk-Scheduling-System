import styles from "@/app/Sign-in/page.module.css"
import whichPage from "@/app/layout"

export default function Page(){
    return (
        
        <div className={styles.holdEverything}>
            <div className={styles.signIn}>
                <div className = {styles.inpDesc}> 
                    <h1>Username:</h1> 
                    <div className={styles.spanBet}></div>
                    <input/>
                </div>
                <br></br>
            <div className = {styles.inpDesc}>
                    <h1 >Password:</h1> 
                    <div className={styles.spanBet}> </div>
                    <input/>
                    
            </div>
            <br></br>
            <button>Sign In</button>
            </div>
        </div>
    );
}