import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Layout } from '../components/layouts';
import { aireApi } from '../api';


export default function Home({ data }) {
  console.log(data.results);
  return (
    <Layout>
      <div>Hola</div>
    </Layout>
  )
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps = async (ctx) => {
  const { data } = await  aireApi.get('/calidadAire');// your fetch function here 
  console.log(data)

  return {
    props: {
      data
    }
  }
}
