// import { useState } from "react"

// export default function Comp(){
//     const [count, setCount] = useState(0)
//     return(
//         <>
//             <h1>Count: {count}</h1>
//             <button className="btn btn-outline-info px-5 p-3" onClick={() => setCount(count - 1)}> - </button>
//             <button className="btn btn-outline-info px-5 p-3" onClick={() => setCount(count + 1)}> + </button>
//         </>
//     )
// }




import { useState } from "react"

export default function Comp(){
    const [name, setName] = useState({
        fname: '',
        lname:''
    })
    return(
        <>
            <input type="text" placeholder="Enter first name" onChange={(e) => setName({...name, fname: e.target.value})}></input>
            <input type="text" placeholder="Enter last name" onChange={(e) => setName({...name, lname: e.target.value})}></input>
            <h2>First name: {name.fname}</h2>
            <h2>Last name: {name.lname}</h2>
        </>
    )
}