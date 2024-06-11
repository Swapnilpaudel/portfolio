import Hero from "./component/Hero";
import About from "./component/About";

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className="container mt-24 mx-auto py-4 px-12">
        <Hero id="header" />
        <About id="body" />
        <Footer id="footer" />
      </div>
    </main>
  );
}
