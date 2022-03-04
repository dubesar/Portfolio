import Contributions from "../components/Contributions";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Stack from "../components/Stack";
import axios from 'axios';

export default function Home({article}) {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Stack />
      <Contributions article={article} />
    </div>
  )
}

export async function getStaticProps(context) {
  const res = await axios.get('http://localhost:3000/api/article?page=0&username=dubesar');

  return {
      props: {
          article: res.data
      },
      revalidate: 10 // 10 seconds 
  }
}