import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import PreviewSuspense from "../../components/PreviewSuspense";
import PreviewBlogList from "../../components/PreviewBlogList";
import BlogList from "../../components/BlogList";

const query = groq`
  *[_type == 'post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

// - ISR
// revalidate this page every 30 seconds
export const revalidate = 30;

async function HomePage() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="animate-pulse text-center text-lg text-[#e07a5f]">
              Loading Preview Data...
            </p>
          </div>
        }
      >
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }
  const posts = await client.fetch(query);
  // BlogList
  return <BlogList posts={posts}></BlogList>;
}

export default HomePage;
