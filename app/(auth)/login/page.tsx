import type { Metadata } from "next"

//static metadata object
export const metadata: Metadata = {
    title: "Login Page",
    description: "Login Page Description"
}


export default function Login(){
    return(
        <h1>Login Page</h1>
    )
}