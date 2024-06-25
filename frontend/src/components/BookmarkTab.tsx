import BlogCard from './BlogCard';
import { Link } from 'react-router-dom';
import { Post } from '../types/post';
import Meteors from './magic-ui/meteors';

type BookmarkTabProps = {
  bookmarks: Post[];
};
const BookmarkTab = ({ bookmarks }: BookmarkTabProps) => {
  return (
    <div className="min-h-screen p-4 md:p-10 bg-gradient-to-b from-slate-950 via-slate-800 to-slate-950">
      <Meteors number={50}/>
      <h1 className="text-3xl font-bold mb-2 text-white">Bookmarks</h1>
      <div className="flex flex-col justify-center items-center">
        {bookmarks.length > 0 &&
          bookmarks.map((bookmark) => (
            <BlogCard
              key={bookmark?.id}
              id={bookmark?.id}
              author={bookmark?.author}
              publishedDate={bookmark?.publishedDate}
              title={bookmark?.title}
              content={bookmark?.content}
              tagsOnPost={bookmark.tagsOnPost}
            />
          ))}
      </div>
      {bookmarks.length === 0 && (
        <div className="flex justify-center mt-10">
          <h6 className="text-xl font-bold py-2">
            No bookmarks yet! You can bookmark blogs in the blogs page{' '}
            <Link to="/signin" className="underline">
              here
            </Link>
          </h6>
        </div>
      )}
    </div>
  );
};

export default BookmarkTab;