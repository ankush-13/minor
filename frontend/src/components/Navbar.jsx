import { FaTrafficLight } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white shadow-xl px-8 py-5 flex items-center justify-between border-b border-blue-500'>

      <div className='flex items-center gap-3'>
        <FaTrafficLight className='text-3xl text-yellow-400' />

        <div>
          <h1 className='text-3xl font-bold tracking-wide'>
            Smart Traffic Management
          </h1>

          <p className='text-sm text-gray-300'>
            AI Based Smart City Monitoring System
          </p>
        </div>
      </div>

      <div className='bg-blue-600 px-5 py-2 rounded-full shadow-lg'>
        Intersection : INT001
      </div>

    </div>
  )
}

export default Navbar