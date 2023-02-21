import { loadAllProducts } from "../store/reducers/allProducts"


export const load_all_products = dispatch => {
    fetch('http://localhost:3333/products/all')
        .then(resp => resp.json())
        .then(json => {
            const payload = json.map(el => ({
                ...el,
                hide: false
            }))
            dispatch(loadAllProducts(payload))
        })
}    

