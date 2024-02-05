import {defineStore} from "pinia";
import {getAuth, signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut} from "firebase/auth";
import {auth} from '@/js/firebase.js'
import {useNotesStore} from "@/stores/useNotesStore.js";



export const useStoreAuth = defineStore('storeAuth', {
    state: () => {
        return {
            user: {}
        }
    },
    actions: {
        init() {
            const storeNotes = useNotesStore()

            onAuthStateChanged(auth, (user) => {
                if(user) {
                    this.user.id = user.uid
                    this.user.email = user.email
                    this.router.push('/')
                    storeNotes.init()
                } else {
                    this.user = {}
                    this.router.replace('/login')
                    storeNotes.clearNotes()
                }
            })
        },
        registerUser(credentials) {
            console.log(credentials)
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
                .then((userCredential) => {
                    // Signed up
                    const user = userCredential.user;
                    // console.log(user)
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                    // console.log(errorMessage)
                });
        },
        loginUser(credentials) {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, credentials.email, credentials.password)
                .then((userCredential) => {
                    // Signed up
                    const user = userCredential.user;
                    // console.log(user)
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                    // console.log(errorMessage)
                });
        },
        logoutUser() {
            signOut(auth).then(() => {
                // console.log('out')
                // router.push({name: '/auth'})
            }).catch((err) => {
                // console.log(err)
            })
        }

    },
    getters: {},
})
