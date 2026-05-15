import { useEffect, useState } from 'react'

import { getDashboardData } from '../api/dashboardApi'

import TrafficCard from '../components/TrafficCard'
import SignalCard from '../components/SignalCard'

const Dashboard = () => {

  const [dashboard, setDashboard] = useState(null)

  useEffect(() => {
    fetchDashboard()
  }, [])

  const fetchDashboard = async () => {

    try {

      const res = await getDashboardData('INT001')

      setDashboard(res.data.data)

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='space-y-8'>

      <div>
        <h1 className='text-5xl font-extrabold text-slate-800'>
          Smart City Dashboard
        </h1>

        <p className='text-gray-500 mt-2 text-lg'>
          AI Powered Traffic Monitoring & Signal Optimization
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>

        <TrafficCard
          title='Total Vehicles'
          value={dashboard?.traffic?.totalVehicles || 0}
        />

        <TrafficCard
          title='Violations'
          value={dashboard?.violations?.length || 0}
        />

        <TrafficCard
          title='Emergency Cases'
          value={dashboard?.emergency ? 1 : 0}
        />

        <TrafficCard
          title='Weather'
          value={dashboard?.traffic?.weatherCondition || 'Clear'}
        />

      </div>

      <SignalCard signal={dashboard?.signal} />

    </div>
  )
}

export default Dashboard