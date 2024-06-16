import MainContext from "./MainContext"
const MainProvider = (props) => {
    const addItem = () => {
    }
    const cartInfo = {
        items: [],
        totalAmount: 0,
        addItemToCart: addItem,
        removeItemFromCart: (id) => { },
    }
    return <MainContext.Provider value={cartInfo}>
        {props.children}
    </MainContext.Provider>
}
export default MainProvider