import Contributions from "../components/Contributions";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Stack from "../components/Stack";
import axios from 'axios';
import Articles from "../components/Articles";
import client from "../lib/graphql";
import { gql } from '@apollo/client';

export default function Home({article}) {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Stack />
      <Contributions />
      <Articles article={article}/>
    </div>
  )
}

export async function getStaticProps({context}) {
  const { data } = await client.query({
    query: gql`
        query {
            user(username: "dubesar") {
                publication {
                    posts(page: 3) {
                        title
                        brief
                        slug
                        coverImage
                    }
                }
            }
        }
    `
  });

  return {
      props: {
          article: data
      },
      revalidate: 100000
  }
}