import { Container } from "@/components/Container";
import { RichText } from "@/components/RichText";
import { client, urlFor } from "@/sanity/lib/client";
import { Post } from "@/types";
import { groq, PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaX } from "react-icons/fa6";

interface Props {
  params: {
    slug: string;
  };
}

export const revalidate = 30;

export const generateStaticParams = async () => {
  const query = groq`*[_type == 'post']{
        slug
    }`;
  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug?.slug?.current);
  return slugRoutes?.map((slug) => ({
    slug,
  }));
};

const SlugPage = async ({ params: { slug } }: Props) => {
  const query = groq`*[_type == 'post' && slug.current == $slug][0]{
        ...,
        body,
        author->
    }`;
  const post: Post = await client.fetch(query, { slug });

  return (
    <Container className="mb-10">
      <div className="flex items-center m-10">
        <div className="w-full md:w-2/3">
          <Image
            src={urlFor(post?.mainImage).url()}
            alt="main image"
            width={500}
            height={500}
            className="object-cover w-full"
          />
        </div>
        <div className="w-1/3 hidden md:inline-flex flex-col items-center gap-5 px-4">
          <Image
            src={urlFor(post?.author?.image).url()}
            width={200}
            height={200}
            alt="author image"
            className="w-32 h-32 rounded-full object-cover"
          />
          <p className="text-3xl text-[#5442ae] font-semibold">
            {post?.author?.name}
          </p>
          <p className="text-center tracking-wide text-small">
            {post?.description}
          </p>
          <div className="flex items-center gap-3">
            <Link
              href={"https://github.com/ShivaKrishna-07"}
              target="blank"
              className="w-10 h-10 bg-gray-500 text-white text-xl rounded-full flex items-center justify-center hover:bg-[#5442ae] duration-200"
            >
              <FaGithub />
            </Link>
            <Link
              href={""}
              target="blank"
              className="w-10 h-10 bg-[#3e5b98] text-white text-xl rounded-full flex items-center justify-center hover:bg-[#5442ae] duration-200"
            >
              <FaFacebookF />
            </Link>
            <Link
              href={""}
              target="blank"
              className="w-10 h-10 bg-[#bc1888] text-white text-xl rounded-full flex items-center justify-center hover:bg-[#5442ae] duration-200"
            >
              <FaInstagram />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/shivaaa07/"}
              target="blank"
              className="w-10 h-10 bg-blue-500 text-white text-xl rounded-full flex items-center justify-center hover:bg-[#5442ae] duration-200"
            >
              <FaLinkedin />
            </Link>
            <Link
              href={"https://twitter.com/shiva_123_"}
              target="blank"
              className="w-10 h-10 bg-blue-500 text-white text-xl rounded-full flex items-center justify-center hover:bg-[#5442ae] duration-200"
            >
              <FaTwitter />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <PortableText value={post?.body} components={RichText} />
      </div>
    </Container>
  );
};

export default SlugPage;
