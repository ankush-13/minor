const TrafficCard = ({ title, value }) => {
  return (
    <div className='bg-gradient-to-br from-slate-900 to-blue-900 text-white p-6 rounded-2xl shadow-2xl border border-slate-700 hover:scale-105 transition duration-300'>

      <h2 className='text-lg font-semibold text-gray-300'>
        {title}
      </h2>

      <p className='text-5xl font-bold mt-5 text-cyan-400'>
        {value}
      </p>

    </div>
  )
}

export default TrafficCard