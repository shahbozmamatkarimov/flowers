import { computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useContactStore = defineStore('contact', () => {
    const state = reactive({ products: [], productOne: [], load: true, errorMessage: '' })

    const getProducts = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products')
            const products = await response.json()
            console.log(products);
            state.products.push(products)
            state.load=false
        } catch (error) {
            console.log(error);
        }
    }

    const getOneProduct = async (id) => {
        try {
            console.log(id);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            const products = await response.json()
            state.productOne.value = products
            state.load=false
        } catch (error) {
            console.log(error);
        }
    }

    const List = computed(() => state.products)
    const List1 = computed(() => state.productOne.value)

    return { state, List, List1, getProducts, getOneProduct }
})