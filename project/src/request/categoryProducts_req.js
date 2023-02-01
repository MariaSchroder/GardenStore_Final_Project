import { loadCategoryProducts } from "../store/reducers/categoryProducts"


export const load_category_products = category => {
    return dispatch => {
        fetch(`http://localhost:3333/categories/${category} `)
            .then(resp => resp.json())
            .then(json => dispatch(loadCategoryProducts(json)))
    }    
}