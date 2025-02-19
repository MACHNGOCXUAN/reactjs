import { useState } from "react"

const BaiTap = ()=>{
    const [name, setName] = useState("");

    return (
        <div>
            <input onChange={(e)=>e.target.value} type="text"/>
            <button onClick={()=>setName(e.target.value)}>Click</button>
            <span>{name}</span>
        </div>
    )
}


export default BaiTap