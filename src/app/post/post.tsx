"use client"

import React from 'react'
import {useRouter} from "next/navigation";
// import {useRouter} from "next/router";


interface Props {
    post: Post
}

export default function Post({post}: Props) {
    const router = useRouter()

    const handleDelete = async (id: number) => {
        await fetch(`/author/create?id=${id}`, {
            method: 'DELETE',
        })
        
        router.refresh()
    }

    return (
        <div className='border-2 border-black p-3 rounded-md'>

            <h2 className='mb-2'>ID: {post.id}</h2>
            <h1 className='text-xl font-semibold'>{post.name}</h1>
            
            <p>{post.email}</p>

            <div className='flex justify-end gap-3 mt-4 text-sm'>
                <button className='font-semibold' onClick={() => router.push(`/update/${post.id}`)}>Update</button>
                <button className='font-semibold text-red-500' onClick={() => handleDelete(post.id)}>Delete</button>
            </div>
        </div>
    )
}





