import { Link, Outlet } from "react-router-dom"


export const Dashboard = () => {
  return (
    <div>
      <h1> The Dashboard</h1>
      <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
        <nav style={{ width: "20%", backgroundColor: "gray", color: "white", display: "flex", flexDirection: "column", gap: "20px" }}>
          <Link to={"/dashboard"}>chart</Link>
          <Link to={"history"}>History</Link>
          <Link to={"manage"}>Manage</Link>
          <Link to={"payment"}>Payment</Link>
          <Link to={"settings"}>Setting</Link>
          <Link to={"addproduct"}>Create Product</Link>
        </nav>
        <main style={{ width: "80%", marginInline: "20px" }}>
          <Outlet />
        </main>
      </div>
    </div>
  )
}
