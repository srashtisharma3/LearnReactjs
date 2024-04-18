import { useEffect, useState } from "react";


export default function Count(){
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title = `Clicked ${count} times`
    })

    return(
        <div>
            <button onClick={() => setCount(count+1)}>Clicked {count} times</button>
        </div>
    )
}