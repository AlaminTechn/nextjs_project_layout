
export default async function getPosts() {
      const apiUrl = process.env.API_URL
      const res = await fetch(apiUrl + '/authors', { next: { revalidate: 0 } })
      const json = await res.json()
      const result = json.data
      return result
}