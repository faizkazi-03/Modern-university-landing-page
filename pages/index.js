import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Programs from '../components/Programs';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>UniVerse - Shape Your Future With World-Class Education</title>
        <meta
          name="description"
          content="Join a premier university offering world-class education in Computer Science, Business, Design, Engineering, and more. Start your academic journey today."
        />
        <meta name="keywords" content="university, education, college, academic programs, computer science, business administration, design, engineering" />
        <meta name="author" content="UniVerse" />
        
        {/* Open Graph */}
        <meta property="og:title" content="UniVerse - Shape Your Future With World-Class Education" />
        <meta property="og:description" content="Join a premier university offering world-class education. Start your academic journey today." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://university.edu" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="UniVerse - Shape Your Future With World-Class Education" />
        <meta name="twitter:description" content="Join a premier university offering world-class education. Start your academic journey today." />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <Hero />
        <About />
        <Programs />
        <WhyChooseUs />
        <Testimonials />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
