"use client"

import React from 'react'
import { useRouter } from "next/navigation";



interface Props {
    author: any
}

const Authors: React.FC<Props> = ({ author }) => {
    const router = useRouter()

    const handleDelete = async (id: number) => {

        try {
            await fetch(`/author/create/${id}`, {
                method: 'DELETE',
            })
            router.refresh()

        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div className='border-2 border-black p-3 rounded-md'>

            <h2 className='mb-2'>ID: {author.id}</h2>
            <h1 className='text-xl font-semibold'>{author.name}</h1>

            <p>{author.email}</p>

            <div className='flex justify-end gap-3 mt-4 text-sm'>
                <button className='font-semibold' onClick={() => router.push(`/update/${author.id}`)}>Update</button>
                <button className='font-semibold text-red-500' onClick={() => handleDelete(author.id)}>Delete</button>
            </div>
        </div>
    )
}


export default Authors;


