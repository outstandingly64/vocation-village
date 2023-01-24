import Wrapper from "../../assets/wrappers/SharedLayout";
import { Outlet } from "react-router-dom";
import { NavBar, BigSidebar, SmallSidebar } from "../../components";

// Wrapper for Shared Layout has a two column style
const SharedLayout = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <NavBar/>
            <div className="dashboard-page">
              <Outlet />
            </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default SharedLayout;
