import React, { useContext } from 'react'
import { GroceryContext } from "./context/context"



function List() {
    const {
        listItem: { id, items },
    } = useContext(GroceryContext)
    return (
        <div>
            {items}
        </div>
    )
}



export default List
