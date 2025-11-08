import { GoogleAuthProvider } from 'firebase/auth/web-extension';
import { auth } from './firebase'; 
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export const CreateUserWithEmailAndPassword = async (email,password)  => {
    return createUserWithEmailAndPassword(auth, email ,password)
}
export const SignInWithEmailAndPassword = async (email,password)  => {
    return signInWithEmailAndPassword(auth, email ,password)
}
export const SignInWithGoogle = async ()  => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider)
    //  result.user
        return result
}
export const SignOut =() =>{
    return auth.signOut();
}