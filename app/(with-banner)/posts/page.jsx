import { Suspense } from 'react'
import { ListOfPosts } from './ListOfPosts.jsx'

export default async function Posts() {
  
  return (
    <section>
      <Suspense fallback={<p>Cargando posts...</p>}>
        <ListOfPosts />
      </Suspense>
    </section>
  )
}