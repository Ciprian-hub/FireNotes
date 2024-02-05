import {defineStore} from "pinia";
import {
    collection, onSnapshot,
    doc, deleteDoc, updateDoc,
    addDoc,
    orderBy,
    query
} from "firebase/firestore";
import {db} from '@/js/firebase.js'
import {useStoreAuth} from "@/stores/useStoreAuth.js";


let notesCollectionRef
let q
let getNotesSnapshot = null

export const useNotesStore = defineStore('storeNotes', {
    state: () => {
        return {
            notes: [],
            loading: false
        }
    },
    actions: {
        init() {
            const authStore = useStoreAuth()
            // console.log(authStore.user.id)
            notesCollectionRef = collection(db, 'users', authStore.user.id, 'notes')
            q = query(notesCollectionRef, orderBy('date', 'desc'))
            this.getNotes()
        },
        async getNotes() {
            this.loading = true
            getNotesSnapshot = onSnapshot(q, (querySnapshot) => {
                let notes = []
                querySnapshot.forEach((doc) => {
                    let note = {
                        id: doc.id,
                        content: doc.data().content,
                        date: doc.data().date
                    }
                    notes.push(note);
                    this.notes = notes
                    this.loading = false
                });
            }, err => {
                console.log(err.message)
            });
        },

        clearNotes() {
            this.notes = []
            if(getNotesSnapshot) {
                getNotesSnapshot() //unsubscribe from any active listeners
            }
        },

        async addNote(newNoteContent) {
            let currDate = new Date().getTime()
            let date = currDate.toString()
            await addDoc(notesCollectionRef, {
                content: newNoteContent,
                date: date
            });
        },

        async deleteNote(id) {
            await deleteDoc(doc(notesCollectionRef, id));
            // this.notes = this.notes.filter(note => note.id !== id)
        },

        async updateNote(id, content) {
            await updateDoc(doc(notesCollectionRef, id), {
                content: content
            })
            // let index = this.notes.findIndex(note => note.id === id)
            // this.notes[index].content = content
        }

    },
    getters: {
        getNoteContent: (state) => {
            return (id) => {
                return state.notes.filter(n => n.id === id)[0].content
            }
        },
        totalNotes: (state) => {
            return state.notes.length
        }
    },
})