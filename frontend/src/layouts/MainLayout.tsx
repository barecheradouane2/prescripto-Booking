import { Link, Outlet } from "react-router-dom";


const MainLayout = () => {
  return (
    <>
      <nav className="bg-gray-800 text-white p-4 flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <main className="p-4">
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout