import { Link, useLocation } from 'react-router-dom'

import {
  FaChartLine,
  FaRoad,
  FaTrafficLight,
  FaAmbulance,
  FaExclamationTriangle,
} from 'react-icons/fa'

const Sidebar = () => {

  const location = useLocation()

  const links = [
    {
      name: 'Dashboard',
      path: '/',
      icon: <FaChartLine />,
    },
    {
      name: 'Traffic',
      path: '/traffic',
      icon: <FaRoad />,
    },
    {
      name: 'Signals',
      path: '/signals',
      icon: <FaTrafficLight />,
    },
    {
      name: 'Emergency',
      path: '/emergency',
      icon: <FaAmbulance />,
    },
    {
      name: 'Violations',
      path: '/violations',
      icon: <FaExclamationTriangle />,
    },
  ]

  return (
    <div className='w-72 bg-slate-950 text-white min-h-screen p-6 border-r border-slate-800'>

      <h2 className='text-4xl font-extrabold mb-12 text-blue-400'>
        STM
      </h2>

      <div className='flex flex-col gap-4'>

        {links.map((link) => (

          <Link
            key={link.name}
            to={link.path}
            className={`flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300 ${
              location.pathname === link.path
                ? 'bg-blue-600 shadow-lg'
                : 'hover:bg-slate-800'
            }`}
          >
            <span className='text-xl'>{link.icon}</span>

            <span className='text-lg'>
              {link.name}
            </span>
          </Link>

        ))}

      </div>

    </div>
  )
}

export default Sidebar