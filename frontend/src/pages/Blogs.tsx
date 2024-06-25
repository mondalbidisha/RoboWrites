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
      <div className="bg-gradient-to-r from-slate-950 via-slate-800 to-slate-950">
        <TopicsSlider selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic} />
      </div>
      <div className="min-h-screen overflow-x-hidden overflow-y-auto bg-gradient-to-b from-slate-950 via-slate-800 to-slate-950">
        <Meteors number={50}/>
        <BlogsList />
      </div>
    </>
  )
};

export default Blogs;