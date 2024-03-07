import Link from "next/link";
import getAuthors from "./api/authors";
import Authors from "./authors/page";


const Page = async () => {

    const authors = await getAuthors()

    return (
        <div className='w-[1200px] flex flex-col justify-start items-center mx-auto py-20 gap-10'>

            <h3>Total Data of Authors : {authors?.length}</h3>

            <Link href={"/create"} className='w-[150px] mx-10 px-3 py-2 bg-zinc-900 hover:bg-zinc-800 rounded-md text-white'>Create</Link>

            <div className='grid grid-cols-1 sm:grid-cols-3 gap-5 mt-8'>

                {authors?.map((author: any, i: number) => (
                    <Authors key={i} author={author} />
                )).sort().reverse()}
            </div>
        </div>
    )
}

export default Page
