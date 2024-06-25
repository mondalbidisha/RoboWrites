import { Link } from 'react-router-dom';

interface PillProps {
  id: string;
  tagName: string;
}
export function Pill({ id, tagName }: PillProps) {
  return (
    <Link to={`/blogs?tag=${id}`}>
      <div className="p-2" key={id}>
        <div className="bg-slate-700 border border-gray-300 text-white font-semibold py-2 px-4 rounded-3xl flex items-center justify-center text-sm cursor-pointer">
          {tagName}
        </div>
      </div>
    </Link>
  );
}