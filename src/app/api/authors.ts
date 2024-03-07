
// import { getServerSideProps } from 'next/dist/build/templates/pages';



// export async function getServerSideProps() {
//     const authors = await getAuthors()
//     return {
//         props: {
//             authors
//         }
//     }

// }



export default async function getAuthors() {
      try {
            const apiUrl = process.env.API_URL
            const res = await fetch(`${apiUrl}/authors`, { next: { revalidate: 0 } })
            if (!res.ok) {
                  throw new Error("Data not found")
            }
            const json = await res.json()

            const result = json.data
            return result

      } catch (error) {
            console.error(error);
      }
}