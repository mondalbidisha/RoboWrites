import { useEffect, useState } from 'react';
import BlogCard from '../components/BlogCard';
import { useBlogs } from '../hooks';
// import BlogSkeleton from '../skeletons/BlogsSkeleton';
// import AnimatedMessage from '../components/Blog/AnimatedMessage';
import ScrollToTopButton from '../components/ScrollToTop';
import { Loader } from './Loader';

const BlogsList = () => {
  const [infiniteScrollRef, setInfiniteScrollRef] = useState<HTMLDivElement | null>(null);
  // const [showEndMessage, setShowEndMessage] = useState(false);
  // const [showConfetti, setShowConfetti] = useState(false);

  const { blogs, loading, handleLoadMore } = useBlogs();

  useEffect(() => {
    if (!infiniteScrollRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !loading) {
          handleLoadMore();
        }
      },
      { threshold: 0.1 }
    );

    infiniteScrollRef && observer.observe(infiniteScrollRef);

  }, [infiniteScrollRef, loading]);

  // useEffect(() => {
  //   if (!loading && blogs.length > 0) {
  //     const timer = setTimeout(() => {
  //     setShowEndMessage(true);
  //     setShowConfetti(true);
  //     }, 4000);
  //     return () => clearTimeout(timer);
  //   }
  // }, [blogs, loading]);


  return (
    <>
      <div className="h-full flex flex-col justify-center items-center scroll-smooth py-10 overflow-x-hidden">
        {blogs.length > 0 &&
          blogs.map((blog) => (
            <BlogCard
              key={blog?.id}
              id={blog?.id}
              author={blog?.author}
              publishedDate={blog?.publishedDate}
              title={blog.title}
              content={blog.content}
              tagsOnPost={blog.tagsOnPost}
            />
          ))}
          {blogs.length === 0 && !loading && <div className="text-center text-3xl text-slate-300 p-24">No posts found</div>}
      </div>
      {loading && (
        <div className="flex flex-col items-center gap-4 py-8">
          <Loader 
            message={"Hang tight, syncing with the tech universe..."}
          />
        </div>
      )}
      {!loading && (
        <div
          ref={(e) => {
            setInfiniteScrollRef(e);
          }}
          style={{ width: '100%', backgroundColor: 'transparent'}}
        />
      )}
      <ScrollToTopButton />
    </>
  );
};

export default BlogsList;