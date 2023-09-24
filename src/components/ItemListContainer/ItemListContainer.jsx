import { useEffect, useState } from "react"
// import { fetchProducts, fetchProductsByCategory} from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"
import { useParams } from "react-router-dom"
import { db } from "../../services/firebase/firebaseConfig"
import Footer from "../footer/footer"

import { getDocs, collection, query, where } from "firebase/firestore"

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    


    const { categoryId } = useParams()

    useEffect ( () => {
        setLoading(true)


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
            }).finally (() => {
                setLoading(false)
            })
    }, [categoryId])

    if(loading) {
        return <span className="loader"></span>
    }

    return (
    <>
        <div className="ItemListContainer">
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
        <Footer />
    </>

    )
}

export default ItemListContainer