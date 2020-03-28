import axios from 'axios'

import {REGISTER_SUCCESS, REGISTER_FAIL} from  '../../action/types'
import { setAlert } from '../../action/alert'


export default register = ({name, email, password}) => async dispatch=>{
    const header = {

    }
    const body = JSON.stringify({name,email,password})

    try{
        const res = axios.post('api/user', header, body)
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
    }catch(er){
        const errors = res.data.errors
        if(errors){
            errors.forEach( err => setAlert(err,'danger'))
        }
    }
}