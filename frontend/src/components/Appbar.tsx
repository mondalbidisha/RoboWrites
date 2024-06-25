import { Link, useLocation, useNavigate } from 'react-router-dom';
import WriteIcon from './icons/Write';
import ProfileBox from './ProfileBox';
import Search from './Search';

interface AppbarProps {
  skipAuthCheck?: boolean;
  pageActions?: JSX.Element;
  hideWriteAction?: boolean;
}

const Appbar = ({ skipAuthCheck = false, pageActions, hideWriteAction = false }: AppbarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  // const shouldSnapCenter = ( location.pathname === "/" || location.pathname === "/blogs" ) ? "snap-center" : ""
  const isUserLoggedIn = localStorage.getItem('token');
  const renderSearchBar = (location.pathname === "/blogs") ? true : false;

  if (!isUserLoggedIn && skipAuthCheck == false) {
    navigate('/signin');
  }
  return (
    <div className={`border-b border-slate-100 flex flex-row justify-between items-center p-4 md:px-16 md:flex-wrap bg-gradient-to-r from-slate-950 via-slate-800 to-slate-950`}>
      <div className="flex justify-center items-center gap-4">
        <Link to="/" className="text-lg md:text-xl font-medium">
          <span className="text-slate-50">The Gizmo Gazette</span>
        </Link>
      </div>

      <div className="flex items-center gap-1">
        {renderSearchBar && <Search />}
      </div>

      <div className="flex items-center gap-1">
        {isUserLoggedIn ? (
          <>
            {hideWriteAction === false && (
              <Link to="/publish">
                <button
                  type="button"
                  className="focus:outline-none hover:bg-gray-100 rounded-3xl focus:ring-4 focus:ring-gray-100 font-medium flex items-center gap-2 text-sm px-3 md:px-5 py-2.5"
                >
                  <WriteIcon /> Write
                </button>
              </Link>
            )}
            {pageActions}
            <div className="ml-4">
              <ProfileBox />
            </div>
          </>
        ) : (
          <div className="ml-4">
            <Link
              to="/signup"
              className="focus:outline-slate-50 text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-3xl text-sm px-5 py-2.5"
            >
              Sign Up
            </Link>
            <Link
              to="/signin"
              className="ml-4 focus:outline-slate-50 text-white border border-gray-700 hover:bg-gray-800 hover:text-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-3xl text-sm px-5 py-2.5"
            >
              Sign In
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Appbar;