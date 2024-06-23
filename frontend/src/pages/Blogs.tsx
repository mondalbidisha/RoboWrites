import Appbar from '../components/Appbar';
import BlogsList from '../components/BlogsList';
import Meteors from '../components/magic-ui/meteors';

const Blogs = () => (
  <>
    <Appbar skipAuthCheck />
    <div className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-800 to-slate-950 scroll-smooth">
      <Meteors number={50}/>
      <BlogsList />
    </div>
  </>
);

export default Blogs;