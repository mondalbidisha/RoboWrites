const SingleBlogSkeleton = () => {
    return (
      <div role="status" className="animate-pulse h-full w-full md:w-4/6 shadow-sm px-4 py-8 bg-gradient-to-b from-slate-950 via-slate-800 to-slate-950">
        <div className="my-4 h-32 w-full bg-slate-700 rounded"></div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-slate-700"></div>
          <div>
            <div className="h-3 w-24 bg-slate-700 rounded-full mb-2"></div>
            <div className="h-2.5 w-16 bg-slate-700 rounded-full"></div>
          </div>
        </div>
        <div className="mt-4 h-4 w-48 bg-slate-700 rounded-full"></div>
        <div className="mt-4 h-80 w-full bg-slate-700 rounded"></div>
      </div>
    );
  };
  
  export default SingleBlogSkeleton;