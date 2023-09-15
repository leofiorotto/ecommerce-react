import { useEffect, useState } from "react"
// import { fetchProducts, fetchProductsByCategory} from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"
import { useParams } from "react-router-dom"
import { db } from "../../services/firebase/firebaseConfig"

import { getDocs, collection, query, where } from "firebase/firestore"

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect ( () => {


        const productsRef = !categoryId
            ? collection(db, 'products')
            : query (collection(db, 'products'), where('category', '==', categoryId))
        getDocs(productsRef)
            .then(QuerySnapshot => {
                const productsAdapted = QuerySnapshot.docs.map(doc => {
                    const fields = doc.data()
                    return { id: doc.id, ...fields}
                })
                setProducts(productsAdapted);
            }).catch (error => {
                console.error(error)
            })
    

        // const asyncFunct = categoryId ? fetchProductsByCategory : fetchProducts
       
        // asyncFunct(categoryId)
        //     .then (response => {
        //         setProducts(response)
        //     })
        //     .catch (error => {
        //         console.error(error)
        //     })
    }, [categoryId])

    return (
        <div className="ItemListContainer">
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer