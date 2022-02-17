import { FC } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import PostInfo from "../../components/PostInfo";
import { postType} from "../../types";

type contactsTypeProps = {
  post: postType,
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
  const data = await response.json();

  const paths = data.map(({ id }: any) => ({
    params: { id: id.toString() }
  }));

  return {
    paths,
    fallback: false,
  }
};

export const getStaticProps:  GetStaticProps = async (context) => {
  const { id }: any = context.params;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { post: data },
  }
};

const Post: FC <contactsTypeProps> = ({ post }) => (
  <>
    <Head>
      <title>Contact page</title>
    </Head>
    <PostInfo post={post} />
  </>
);

export default Post;
