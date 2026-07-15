import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BlogIndex from "./pages/BlogIndex";
import BlogPost from "./pages/BlogPost";

const MARQUEE_TEXT =
  "ZERO P0 OUTAGES /// 5M+ RPM • 2M+ CONCURRENT USERS /// DREAM11 SDE-2 /// PYTHON • KAFKA • JAVA • AWS /// IIT GUWAHATI /// ";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>

      {/* Sticky marquee ticker */}
      <div className="fixed bottom-0 left-0 w-full bg-black py-2 marquee border-t-4 border-accent z-[100]">
        <div className="marquee-content text-accent font-mono font-black uppercase text-xs tracking-widest">
          {MARQUEE_TEXT.repeat(2)}
        </div>
      </div>
    </>
  );
}
