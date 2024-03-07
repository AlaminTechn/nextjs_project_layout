import Link from "next/link";
import Post from "./post/post";
import process from 'process';
import getPosts from "./api/authors";



const Page = async () => {

    const posts = await getPosts()

    return (
        <div className='w-[1200px] flex flex-col justify-start items-center mx-auto py-20 gap-10'>

            <h3>Total Data of Authors : {posts?.length}</h3>

            <Link href={"/create"} className='w-[150px] mx-10 px-3 py-2 bg-zinc-900 hover:bg-zinc-800 rounded-md text-white'>Create</Link>


            <div className='grid grid-cols-3 gap-5 mt-8'>

                {posts?.map((post: any, i: number) => (
                    <Post key={i} post={post} />
                )).sort().reverse()}
            </div>
        </div>
    )
}

export default Page
