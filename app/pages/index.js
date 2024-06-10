import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold">Welcome to Whatbytes Dashboard</h1>
        <p className="mt-4">This is the home page. Navigate using the sidebar.</p>
      </div>
    </div>
  );
}
