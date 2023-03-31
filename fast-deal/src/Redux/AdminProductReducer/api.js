import axios from "axios";

export const deleteProductApi = async(id) => {
    let responce = await axios.delete(`https://calm-blue-cobra-wig.cyclic.app/products/${id}`)
    return responce.data 
}