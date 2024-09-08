import { firebaseCollection } from "../firebase/firebase";
import { getDocs, query, where } from "firebase/firestore/lite";


export async function getVans() {
   
    const allVansSnapShot = await getDocs(firebaseCollection)
    const vans = []
    allVansSnapShot.forEach((doc) => {
        const data =  doc._document.data.value.mapValue.fields
        vans.push([doc.id, data])
    })
    return vans
}
export async function getVan(id) {
    const q = query(firebaseCollection, where("id", "==", id))
    const querySnapshot = await getDocs(q);
    const van = []
    querySnapshot.forEach((doc) => {
        const data =  doc._document.data.value.mapValue.fields
        van.push([doc.id, data])
      });
      return van
}

export async function getTypeVans(type) {
    const q = query(firebaseCollection, where("type", "==", type))
    const querySnapshot = await getDocs(q)
    const vans = []
    querySnapshot.forEach((doc) => {
        const data =  doc._document.data.value.mapValue.fields
        vans.push([doc.id, data])
    }) 
    return vans
}

export async function getHostVans() {
    const q = query(firebaseCollection, where("hostId", "==", "111"))
    const vans = []
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
        const data =  doc._document.data.value.mapValue.fields
        vans.push([doc.id, data])
    })
    return vans
}