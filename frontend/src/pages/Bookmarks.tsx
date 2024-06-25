import Appbar from '../components/Appbar';
import Spinner from '../components/Spinner';
import { useBookmarks } from '../hooks/index';
import BookmarkTab from '../components/BookmarkTab';

const Bookmarks = () => {
  const { bookmarks, loading } = useBookmarks();
  return (
    <>
      <Appbar />
      {loading ? (
        <div className="min-w-screen min-h-screen flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <BookmarkTab bookmarks={bookmarks} />
      )}
    </>
  );
};

export default Bookmarks;