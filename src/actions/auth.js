import { db, firebaseApp } from '../firebase/firebaseConfig'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth"
import { doc, setDoc } from "firebase/firestore";

import { types } from "../types/types"
import { finishtLoading, startLoading } from './ui';
import Swal from 'sweetalert2';

const auth = getAuth( firebaseApp );

export const startRegisterWithEmailPasswordName= (email, password, name) => {
    return( dispatch ) => {
        createUserWithEmailAndPassword(auth, email, password).then(({ user })  => {
            updateProfile(user,{
                displayName: name
            })
            return user
        }).then((user) => {
            dispatch ( login( user.uid , user.displayName ));

            const data = {
                rol: 'seller'
            }

            return setDoc(doc(db, 'usuarios' , user.uid), data)
        }).catch( (e) => {
            console.log(e)
            Swal.fire('Error', e.message, 'error');
        });
    }
}

// export const startRegisterWithEmailPasswordName= (email, password, name) => {
//     return( dispatch ) => {
//         createUserWithEmailAndPassword(auth, email, password)
//             .then ( async ({ user }) => {
//                 await updateProfile(user,{
//                     displayName: name
//                 })

//                 try {
//                     await setDoc(doc(db, 'usuarios' , user.uid), {
//                         rol: "seller",
//                     });
//                 } catch (e) {
//                     Swal.fire('Error', e.message, 'error');
//                 }

//                 dispatch ( login( user.uid , user.displayName ));
//             })
//             .catch ( e => {
//                 console.log ( e.message );
//                 Swal.fire('Error', e.message, 'error');
//             })
//     }
// }



export const startLoginEmailPassword = ( email, password ) => {
    return ( dispatch) => {

    dispatch(startLoading());

    signInWithEmailAndPassword( auth, email, password)
        .then( ({ user }) => {
            dispatch(finishtLoading());
            dispatch ( login( user.uid , user.displayName ));
        })
        .catch ( e => {
            dispatch(finishtLoading());
            console.log ( e );
            Swal.fire('Error', e.message, 'error');
        })
    }
}

export const login = ( uid, displayName ) => ({
    type: types.login,
    payload: {
        uid,
        displayName,
    }
})


export const startLogout = () => {
    return async ( dispatch ) => {
        await signOut( auth )
        dispatch( logout() )
    }
}

export const logout = () => ({
    type: types.logout,
})