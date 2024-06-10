import { ActionTypes } from "../contants/action-types";




const initialState = {
    products: JSON.parse(localStorage.getItem('products')) || []
};


const handlecart=async(userid,cart)=>{

    const temp1=localStorage.getItem('products')
    console.log('hi',userid)
    console.log('hello',cart);
    const stri=JSON.stringify({userid,cart});
    console.log("stringy-",stri);
    const response = await fetch('/api/cart/', {
method: 'PATCH',
body: stri,
headers: {
'Content-Type': 'application/json'
}
});

const json = await response.json();
console.log('resp,-',json);

if (!response.ok) {
console.log('ERROR',json.error);
}

if (response.ok) {
console.log('Update successful', json);
}

}

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_CART:
            const existingProductIndex = state.products.findIndex(prod => prod.id === payload.id);
            if (existingProductIndex !== -1) {
                // If product already exists, update the quantity
                const updatedProducts = state.products.map((prod, index) => {
                    if (index === existingProductIndex) {
                        console.log("inside boss",(payload.qty));
                        return { ...prod, qty: prod.qty + payload.qty};
                    }
                    return prod;
                });
                const updatedState = { ...state, products: updatedProducts };
                localStorage.setItem('products', JSON.stringify(updatedState.products)); // Update local storage
                if(localStorage.getItem('veri')==='true'){
                    const temp5=localStorage.getItem('loggedinuser')
                    const tempid5=JSON.parse(temp5).userid
                    handlecart(tempid5,updatedState.products) }
                return updatedState;
            } else {
                // If product doesn't exist, add it to the list
                const updatedState = { ...state, products: [...state.products, payload] };
                localStorage.setItem('products', JSON.stringify(updatedState.products)); // Update local storage
                if(localStorage.getItem('veri')==='true'){
                    const temp5=localStorage.getItem('loggedinuser')
                    const tempid5=JSON.parse(temp5).userid
                    handlecart(tempid5,updatedState.products) }
                return updatedState;
            }
            

        case ActionTypes.REMOVE:
            const newStateAfterRemove = {
                ...state,
                products: state.products.filter(prod => prod.id !== payload.id)
            };
            localStorage.setItem('products', JSON.stringify(newStateAfterRemove.products)); // Update local storage
            
            if(localStorage.getItem('veri')==='true'){
            const temp4=localStorage.getItem('loggedinuser')
            const tempid4=JSON.parse(temp4).userid
            handlecart(tempid4,newStateAfterRemove.products)   }         
            return newStateAfterRemove;

        case ActionTypes.QTYINC:
            const newStateAfterQtyInc = {
                ...state,
                products: state.products.map(prod => {
                    if (prod.id === payload.id) {
                        return { ...prod, qty: prod.qty + 1 };
                    }
                    return prod;
                })
            };
            localStorage.setItem('products', JSON.stringify(newStateAfterQtyInc.products)); // Update local storage
            if(localStorage.getItem('veri')==='true'){
            const temp3=localStorage.getItem('loggedinuser')
            const tempid3=JSON.parse(temp3).userid
            handlecart(tempid3,newStateAfterQtyInc.products)}
            return newStateAfterQtyInc;

        case ActionTypes.QTYDEC:
            const newStateAfterQtyDec = {
                ...state,
                products: state.products.map(prod => {
                    if (prod.id === payload.id) {
                        const newQty = prod.qty - 1;
                        if (newQty <= 0) {
                            // Remove the product if the quantity becomes zero or negative
                            return null; // Mark for removal
                        }
                        return { ...prod, qty: newQty };
                    }
                    return prod;
                }).filter(Boolean) // Filter out null entries
            };
            localStorage.setItem('products', JSON.stringify(newStateAfterQtyDec.products)); // Update local storage
            if(localStorage.getItem('veri')==='true'){
            const temp2=localStorage.getItem('loggedinuser')
            const tempid2=JSON.parse(temp2).userid
            handlecart(tempid2,newStateAfterQtyDec.products)}
            
            return newStateAfterQtyDec;

        case ActionTypes.CONCAT:
            //---------------------

            // localStorage.getItem()
            console.log("payl",payload);
            console.log("stprod",state.prod);
            const temparr=[...payload, ...state.products];
            console.log("temparr",temparr);
            if(localStorage.getItem('veri')==='true'){
            localStorage.setItem('products', JSON.stringify(temparr)); // Update local storage
            const temp1=localStorage.getItem('loggedinuser')
            const tempid=JSON.parse(temp1).userid
            handlecart(tempid,temparr)}
            break


            //---------------------
        

        default:
            return state;
    }
};


