import Contributions from "../components/Contributions";
import HeroSection from "../components/HeroSection";
import Stack from "../components/Stack";
import Articles from "../components/Articles";
import client from "../lib/graphql";
import { gql } from '@apollo/client';
import { PopupWidget } from "react-calendly";
import Achievements from "../components/Timeline";

export default function Home({article}) {
  return (
    <div>
      <HeroSection />
      <Stack />
      <Achievements />
      <Contributions />
      <Articles article={article}/>
      <div id="contact"></div>
      {
        process.browser ? <PopupWidget
          url="https://calendly.com/dubeysarvesh5525/check-event"
          /*
          * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
          * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
          */
          rootElement={document.getElementById("contact")}
          text="Know more about me"
          textColor="#ffffff"
          color="#00a2ff"
        /> : null
      }
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