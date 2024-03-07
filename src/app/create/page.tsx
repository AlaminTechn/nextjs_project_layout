"use client"
import {useState} from "react";
import {useRouter} from "next/navigation";

const Page = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const router = useRouter()

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        setIsLoading(true)

        const newValue = {
            name,
            email
        }

        await fetch('/author/create', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({newValue})
        }).then((res) => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })

        setIsLoading(false)
        router.push('/')

    }

    return (
        <>
            <h2>Update Post</h2>
            <form className='w-[500px] mx-auto pt-20 flex flex-col gap-2' onSubmit={handleSubmit}>
                <input type="text" placeholder='Input your title' value={name} onChange={(e) => setName(e.target.value)} className='w-full border p-2 rounded-md'/>
                <textarea rows={10} placeholder='Input your content' value={email} onChange={(e) => setEmail(e.target.value)} className='w-full border p-2 rounded-md'/>
                <button disabled={isLoading}>{isLoading ? 'Loading ...' : 'Submit'}</button>
            </form>
        </>
    )
}

export default Page;