import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, NavLink } from 'react-router-dom'; // You missed importing NavLink
import { useLogoutUserMutation } from '../../redux/features/auth/authApi';
import { logout } from '../../redux/features/auth/authSlice'; // Assuming you have a logout action

const AdminDasgoard = () => {
  const [logoutUser] = useLogoutUserMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navItems = [
    { path: '/dashboard/admin', label: 'Dashboard' },
    { path: '/dashboard/add-new-post', label: 'Add New Products' },
    { path: '/dashboard/manage-products', label: 'Manage Products' },
    { path: '/dashboard/users', label: ' All Users' },
    { path: '/dashboard/manage-orders', label: 'Manage Orders' },
  ];

  const handleLogout = async () => {
    try {
      await logoutUser().unwrap();
      dispatch(logout());
      alert('Logged out successfully');
      navigate('/');
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  return (
    <div className='space-y-5 bg-white p-8 md:h-screen flex flex-col justify-between'>
      <div>
        <div className='nav__logo'>
          <Link to="/">Sroka<span>.</span></Link>
          <p className='text-xs italic'>Admin DashBoard</p>
        </div>
        <hr className='mt-5' />
        <ul className='space-y-5 pt-5'>
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'text-blue-600 font-bold' : 'text-black'
                }
                end
                to={item.path}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className='mb-3'>
        <hr className='mb-3' />
        <button
          onClick={handleLogout}
          className='text-white bg-primary font-medium px-5 py-1 rounded-sm'
        >
          LogOut
        </button>
      </div>
    </div>
  );
};

export default AdminDasgoard;
