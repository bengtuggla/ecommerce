

export default{
  state: {
    cart: []
  },
  getters: {
   shoppingCart: state=>state.cart,
   cartItemCount: state => {
     let counter = 0
     state.cart.forEach(item=>{
       counter += item.quantity
     })
     return counter
   },
   shoppingCartTotal: state =>{
     let total = 0
     if(state.cart.length !==0){
       state.cart.forEach(item=>{
         if(item.quantity > 0)
         total += item.product.price * item.quantity
       })
     }
     return total
   }

  },
  mutations: {
    ADD_TO_CART: (state, {product, quantity})=>{
     let exists = state.cart.find(item=>item.product._id === product._id)
     if(exists){
      exists.quantity += quantity
      return
     }
     state.cart.push({product, quantity})
    },
      SUB_FROM_CART: (state, {product, quantity})=>{
     let exists = state.cart.find(item=>item.product._id === product._id)
     if(exists){
      exists.quantity -= quantity
      return
     }
    state.cart.push({product, quantity})
    
    }
  },
  actions: {
   addProductToCart: ({commit}, {product, quantity})=>{
    commit('ADD_TO_CART', {product, quantity})
   },
   subProductFromCart: ({commit}, {product, quantity})=>{
     commit('SUB_FROM_CART', {product, quantity})
   }
  }
}