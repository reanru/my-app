import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";
import app from "./init";


const firestore = getFirestore(app);

export async function retreiveData(collectionName: string){
    const snapshot = await getDocs(collection(firestore, collectionName));

    // console.log('check ', snapshot.docs);

    const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))

    return data;
}

export async function retreiveDataById(collectionName: string, id: string) {
    const snapshot = await getDoc(doc(firestore, collectionName, id));

    const data = snapshot.data();
    return data;
}