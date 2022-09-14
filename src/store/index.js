// import state from "./state"
// import getters from "./getters"
// import mutations from "./mutations"
// import actions from "./actions"

// const storeConfig = {
//     state, 
//     getters, 
//     mutations, 
//     actions, 
// }

// export default storeConfig;

import modulesCart from "./Cart"
const storeConfig =({
    modules: {
        modulesCart,
    }
  })
export default storeConfig;