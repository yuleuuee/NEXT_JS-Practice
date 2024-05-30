"use client"

import { useRouter } from "next/navigation"

const UseRouter = () => {

const router = useRouter()
console.log("Routers : ",router)
  return (
    <>
      <button type="button" onClick={()=>router.push("/admin/")} className="p-1 border-2 border-black rounded-xl ">Admin page</button>
    </>
  )
}

export default UseRouter
