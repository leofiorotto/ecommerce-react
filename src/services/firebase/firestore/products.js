
import { db } from "../firebaseConfig"
import { getDocs, collection, query, where,  getDoc, doc, } from "firebase/firestore"

export const getProducts = (categoryId) => {

    return new Promise((resolve, reject) => {
        const productsRef = !categoryId
        ? collection(db, 'products')
        : query (collection(db, 'products'), where('category', '==', categoryId))
    getDocs(productsRef)
        .then(QuerySnapshot => {
            const productsAdapted = QuerySnapshot.docs.map(doc => {
                const fields = doc.data()
                return { id: doc.id, ...fields}
            })
            resolve(productsAdapted);
        }) 
        .catch(error => {
            reject(erro)
        })
    })}




export const getProductsById = (productId) => {
    const productRef = doc (db,'products', productId)

    return getDoc (productRef)
        .then (documentSnapshot => {
            const fields = documentSnapshot.data()
            const productsAdapted = {id: documentSnapshot.id, ...fields}
            return productsAdapted
        })
        .catch (error => {
            return error
        })
}

