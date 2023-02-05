import Image from 'next/image';

const fetchComments = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 3000))
  // throw new Error('Error al cargar los comentarios')
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: { revalidate: 60 },
  }).then((res) => res.json());
 };

export default async function Comments({ params }) {
  const { id } = params;
  const comments = await fetchComments(id);

  return (
    <ul style={{background: '#444', fontSize:'10px'}}>
      {comments.map((c) => (
        <li key={c.id}>
          <Image width='50' height='50' alt={c.name} src={`https://avatars.dicebear.com/api/pixel-art-neutral/${c.email}.svg`} />
          <h4>{c.name}</h4>
          <small>{c.body}</small>
        </li>
      ))}
    </ul>
  );
}
