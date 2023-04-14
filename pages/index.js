import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Date from "../components/date";
import styles from "../styles/Home.module.css";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  // const res = await fetch("https://fakestoreapi.com/products");
  // const products = await res.json();
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
      // products,
    },
  };
}

export default function Home({ allPostsData, products }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello I'm Shravan. I'm a Front-end Developer. Working as a Lead at HTC
          Global Services You can contact me on{" "}
          <a href="https://www.twitter.com">Twitter</a>
        </p>
        <br />
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              {/* {id}
              <br /> */}
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
          {/* {products.map(({ id, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
            </li>
          ))} */}
        </ul>
      </section>
    </Layout>
  );
}
