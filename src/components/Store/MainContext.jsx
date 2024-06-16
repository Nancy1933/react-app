import React from "react"
const MainContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItemToCart: (item) => { },
    removeItemFromCart: (id) => { },
})
export default MainContext