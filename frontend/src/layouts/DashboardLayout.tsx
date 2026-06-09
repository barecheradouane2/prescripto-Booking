import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
     <div className="flex">
      <aside className="w-64 bg-gray-800 text-white min-h-screen">
        Sidebar
      </aside>

      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  )
}

export default DashboardLayout