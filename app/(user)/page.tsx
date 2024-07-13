import { BlogContent } from "@/components/BlogContent";
import { Hero } from "@/components/Hero";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";


const query = groq`*[_type == 'post']{
  ...,
  author->,
  categories[]->
} | order(_createdAt asc)`;
 
export const revalidate = 30;

export default async function Home() {

  const posts = await client.fetch(query);

  

  return (
    <main>
      <Hero/>
      <BlogContent posts={posts}/>
    </main>
  );
}
