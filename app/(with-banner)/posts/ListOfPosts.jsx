import Link from "next/link";
import { LikeButton } from "./LikeButton";

const fetchPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 },
  }).then((res) => res.json());
};

export async function ListOfPosts() {
  const posts = await fetchPosts();

  return (
    <>
      {posts.slice(0, 5).map((p) => (
        <article key={p.id}>
          <Link href="/posts/[id]" as={`/posts/${p.id}`}>
            <h2 style={{ color: "#09f" }}>{p.title}</h2>
            <p>{p.body}</p>
            <LikeButton id={p.id} />
          </Link>
        </article>
      ))}
    </>
  );
}
