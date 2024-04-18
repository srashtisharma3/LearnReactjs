
function func(){
    return "Welcome srashti!!"
}

function func_para(arg1, arg2){
    if ( arg1 == 'admin' && arg2 == 'root' )
        return true
    return false
}

export default func
export { func_para }