import { useState } from 'react';
import Appbar from '../components/Appbar';
import BlogsList from '../components/BlogsList';
import Meteors from '../components/magic-ui/meteors';
import TopicsSlider from '../components/TopicsSlider';

const Blogs = () => {
  const [selectedTopic, setSelectedTopic] = useState<string>('');
  
  return (
    <>
      <Appbar skipAuthCheck />
      <TopicsSlider selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic} />
      <div className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-800 to-slate-950 scroll-smooth">
        <Meteors number={50}/>
        <BlogsList />
      </div>
    </>
  )
};

export default Blogs;