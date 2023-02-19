"use client";
import Image from "next/image";
import urlFor from "../lib/urlFor";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import ClientSideRoute from "./ClientSideRoute";
import { motion } from "framer-motion";

type Props = {
  posts: Post[];
};

function BlogList({ posts }: Props) {
  return (
    <div className=" max-w-7xl mx-auto">
      <hr className="mb-10 border-[#f7ab0a]" />
      <motion.div
        className=" grid grid-cols-1 gap-x-10 gap-y-16 px-10 pb-24 md:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        {/* Posts */}
        {posts.map((post) => (
          <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
            <div className=" group flex flex-col">
              <div className="relative w-full h-80 transform-gpu drop-shadow-xl transition-transform duration-200 ease-out group-hover:scale-105">
                <Image
                  className="object-cover object-left lg:object-center"
                  src={urlFor(post.mainImage).url()}
                  alt={post.author.name}
                  fill
                />
                <div className="absolute bottom-0 w-full flex justify-between rounded bg-neutral-900 backdrop-blur-lg bg-opacity-20 p-5 text-white drop-shadow-lg">
                  <div>
                    <p className="font-bold">{post.title}</p>
                    <p className="transform-gpu subpixel-antialiased">
                      {new Date(post._createdAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>

                  <div className="flex flex-col gap-y-2 md:flex-row md:gap-x-2 pt-1.5">
                    {post.categories.map((category) => (
                      <div
                        key={category._id}
                        className="h-fit rounded-full bg-[#F7AB0A] px-3 py-2 text-center text-sm font-semibold text-black"
                      >
                        <p>{category.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-5 flex-1">
                <p className="text-lg font-bold underline">{post.title}</p>
                <p className="text-gray-500 line-clamp-2">{post.description}</p>
              </div>
              <p className="mt-5 flex items-center font-bold group-hover:underline hover:decoration-4 decoration-[#e07a5f]">
                Read Post
                <ArrowUpRightIcon className="ml-2 h-4 w-4"></ArrowUpRightIcon>
              </p>
            </div>
          </ClientSideRoute>
        ))}
      </motion.div>
    </div>
  );
}

export default BlogList;
