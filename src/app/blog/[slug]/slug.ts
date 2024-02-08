export async function generateStaticParams(): Promise<{ slug: number }[]> {
      try {
    
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
    
          throw new Error("Error fetching")
    
        }
    
        const postData = await response.json();
        return postData.map((post: { id: number }) => ({
          slug: post.id,
        }));
      } catch (error) {
    
        console.error("Error fetching", error);
    
        return []
    
      }
    }