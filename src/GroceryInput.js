import React from 'react'



const GroceryInput = () => {
    function handleListSubmit() {}
    return (
    <form onSubmit={handleListSubmit}>
        <input type="text" />
        <button type="submit">Add To List</button>
    </form>
    )
}



export default GroceryInput