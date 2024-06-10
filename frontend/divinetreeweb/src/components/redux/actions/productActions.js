import { ActionTypes } from "../contants/action-types"

export const addCart=(products)=>{
    return {
        type:ActionTypes.ADD_CART,
        payload:products,
    };

};

export const delCart=(products)=>{
    return {
        type:ActionTypes.REMOVE,
        payload:products,
    };

};

export const qtyInc=(products)=>{
    return {
        type:ActionTypes.QTYINC,
        payload:products,
    };

};

export const qtyDec=(products)=>{
    return {
        type:ActionTypes.QTYDEC,
        payload:products,
    };

};

export const concatProd=(products)=>{
    return {
        type:ActionTypes.CONCAT,
        payload:products,
    };

};

export const showvis=()=>{
    return {
        type:ActionTypes.SHOW_VIS,
        payload:null
        
    };

};