import React from 'react'
import { useSelector } from 'react-redux'
import { useGetAdminStatsQuery } from '../../../../redux/features/stats/statsApi';
import AdminStats from './AdminStats';
import AminStatsChart from './AminStatsChart';
const AdminDMain = () => {
    const {user} = useSelector((state) => state.auth);
    const {data:stats,error,isLoading}=useGetAdminStatsQuery();
    if(isLoading) return <div>Loading...</div>
    if(!stats) return <div>No stats found</div>
    if(error) return <div>Failed to load stats!</div>
  return (
    <div className='p-6 '>
      <div>
        <h1 className='text-2xl font-semibold md-4'>Admin Dashboard</h1>
        <p className='text-gray-500'>Hi,{user?.username}! Welcome to the admin dashboard.</p>
        <AdminStats stats={stats}/>
        <AminStatsChart stats={stats} />
      </div>
    </div>
  )
}

export default AdminDMain
