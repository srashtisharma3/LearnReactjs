import axios from "axios"
import url from "./url"


const readAction = (records) => {
    return {
        type: 'FETCH', value: records
    }
}
export const getProducts = () => {
    return (dispatch) => {
        axios.get(url + '/fetch')
            .then((posRes) => {
                dispatch(readAction(posRes.data))
            }, (errRes) => {
                console.log(errRes)
            })
    }
}

const insertAction = (apiResponse) => {
    return {
        type: 'INSERT', value: apiResponse
    }
}

export const insertProduct = (record) => {
    return (dispatch) => {
        return axios.post(url + '/insert', record)
            .then((posRes) => {
                dispatch(insertAction(posRes.data))
            }, (errRes) => {
                console.log(errRes)
            })
    }
}

const updateAction = (apiResponse) => {
    return {
        type: 'UPDATE', value: apiResponse
    }
}

export const updateProduct = (record) => {
    return (dispatch) => {
        return axios.post(url + '/update', record)
            .then((posRes) => {
                dispatch(updateAction(posRes.data))
            }, (errRes) => {
                console.log(errRes)
            })
    }
}

const deleteAction = (apiResponse) => {
    return {
        type: 'DELETE', value: apiResponse
    }
}

export const deleteProduct = (record) => {
    return (dispatch) => {
        return axios.post(url + '/delete', record)
            .then((posRes) => {
                dispatch(deleteAction(posRes.data))
            }, (errRes) => {
                console.log(errRes)
            })
    }
}
