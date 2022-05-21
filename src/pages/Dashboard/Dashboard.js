import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import UseAdmin from '../../hooks/UseAdmin';


const Dashboard = () => {
  const [user] = useAuthState(auth)
  const [admin] = UseAdmin(user);
  return (
    <div class="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content ">
        <h2 className='text-purple-500 text-3xl font-bold'>Dashboard</h2>
        <Outlet />
      </div>
      <div class="drawer-side">
        <label for="dashboard-sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li className=''><Link to="/dashboard">Dashboard</Link></li>
          <li className='mt-1'><Link to="/dashboard/review">Review</Link></li>
          {admin && <li className='mt-1'><Link to="/dashboard/user">User</Link></li>
          }          </ul>

      </div>
    </div>
  );
};

export default Dashboard;