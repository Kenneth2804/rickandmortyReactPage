import axios from "axios";

export function getAllCharacters(){
    return async(dispatch) =>{
        try {
            let data  = await axios.get("/getAll",{

            });
            return dispatch({
                type: "GET_FOOD",
                payload: data.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}