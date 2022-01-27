import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import * as sodaApi from '../../sodaApi/api'


// const sodaTest = [
//     {"_id":{"$oid":"61c8cef81aca48e3ce06ace0"},"name":"Cola","desc":"A basic no nonsense cola that is the perfect pick me up for any occasion.","price":"1.0","quantity":"100","maxQuantity":"200","available":true,"hexColorCode":"F6AF65"},
//     {"_id":{"$oid":"61c8cf571aca48e3ce06ace1"},"name":"MegaPop","desc":"Not for the faint of heart. So flavorful and so invigorating, it should probably be illegal.","price":"1.0","quantity":"25","maxQuantity":"50","available":true,"hexColorCode":"823038"},
//     {"_id":{"$oid":"61c8cf6b1aca48e3ce06ace2"},"name":"Pop","desc":"An explosion of flavor that will knock your socks off!","price":"1.0","quantity":"100","maxQuantity":"200","available":true,"hexColorCode":"00C2D1"},
//     {"_id":{"$oid":"61c8cf9f1aca48e3ce06ace3"},"name":"Fizz","desc":"An effervescent fruity experience with hints of grape and coriander.","price":"1.0","quantity":"100","maxQuantity":"200","available":true,"hexColorCode":"F9E900"}
//   ]

//get soda to set initial state (thunk)
export const fetchSodaData = createAsyncThunk(
    'soda/getSodas',
    async () => {
        const response = await sodaApi.getSodas();
        return response;
});

//update soda price
////Return error or success for each and update the UI accordingly
export const postSodaPrice = createAsyncThunk(
    'sodas/updateSodaPrice',
    async (data) => {
        const response = await sodaApi.updateSodaPrice(data.id, data.price);
        return response;
})

//update soda stock after purchase
export const postSodaStock = createAsyncThunk(
    'sodas/updateSodaStock',
    async (data) => {
        const response = await sodaApi.updateSodaStock(data.id, data.purchaseAmount, data.remainingStock);
        return response;
    }
)

//restock soda
export const postRestockSoda = createAsyncThunk(
    'sodas/restockSoda',
    async (data) => {
        const respone = await sodaApi.restockSoda(data.id, data.maxQty)
        return respone;
    }
)


//redux-slice
const SodaSlice = createSlice({
    name: 'sodaSlice',
    initialState: {
        loading: 'loading',
        apiStatus: '',
        sodas: []
    },
    reducers : {
        purchaseSoda: (state, action) => {
            console.log(action)
            return action.payload
        },
        updateSodaPrice: (state, action) => {
            //call API
            return action.payload
            console.log(state)
        },
        restockSoda: (state, action) => {
            return action.payload
            console.log(state)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSodaData.fulfilled, (state, action) => {
            state.sodas = action.payload
        })
        builder.addCase(postSodaPrice.fulfilled, (state, action) => {
            state.apiStatus = action.payload
        })
        builder.addCase(postSodaStock.fulfilled, (state, action) => {
            state.apiStatus = action.payload
        })
        builder.addCase(postRestockSoda.fulfilled, (state, action) => {
            state.apiStatus = action.payload
        })
    }
})

//I'll need to get soda data after every update to soda data
//to be more efficient send only updated soda information vs all soda data


//need to create a thunk for each API call and then dispatch fetchSodaData after each operation

export const {purchaseSoda, updateSodaPrice, restockSoda, loadingData, dataLoaded} = SodaSlice.actions
export default SodaSlice.reducer