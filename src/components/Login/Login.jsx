import { useContext } from 'react';
import { Context } from '../..';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import styles from './Login.module.css';


const Login = () => {
  const {auth} = useContext(Context);

  const login = async () => {
    const provider = new GoogleAuthProvider();
    const {user} = await signInWithPopup(auth, provider);
    console.log(user)
  }

  return (
    <div className={styles.container}>
        <h3>SignIn</h3>
        <button onClick={login} className={styles.button}>With Google</button>
    </div>
  )
}

export default Login;