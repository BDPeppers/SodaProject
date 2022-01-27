import axios from "axios";

const url = 'http://localhost:3001/api'; 

export const getSodas = () => axios.get(`${url}/sodas`).then(response => response.data).catch(error => (console.log(error.message)));

export const updateSodaStock = (id, purchaseAmount, remainingStock) => 
axios.patch(`${url}/stock?id=${id}&purchaseAmount=${purchaseAmount}&remainingStock=${remainingStock}`)
.then(response => response.data).catch((error) => (console.log(error.message)));

export const restockSoda = (id, maxQty) => 
axios.post(`${url}/restock`, id, maxQty)
.then(response => response.data).catch((error) => (console.log(error.message)));

export const updateSodaPrice = (id, price) =>
axios.post(`${url}/price`, id, price)
.then(response => response.data).catch((error) => (console.log(error.message)));