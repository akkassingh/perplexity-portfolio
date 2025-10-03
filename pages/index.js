import Layout from "../components/Layout";
import About from "../components/About";
import Companies from "../components/Companies";
import Projects from "../components/Projects";
import MediumArticles from "../components/MediumArticles";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <Layout>
      <About />
      <Companies />
      <Projects />
      <MediumArticles />
      <Contact />
    </Layout>
  );
}
