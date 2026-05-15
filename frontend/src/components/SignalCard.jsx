const SignalCard = ({ signal }) => {

  return (
    <div className='bg-white p-8 rounded-2xl shadow-2xl border border-gray-200'>

      <h2 className='text-3xl font-bold mb-6 text-slate-800'>
        Live Signal Status
      </h2>

      <div className='grid grid-cols-2 gap-6'>

        <div className='bg-green-100 p-5 rounded-xl'>
          <p className='text-gray-600'>
            Active Lane
          </p>

          <h3 className='text-2xl font-bold text-green-700 mt-2'>
            {signal?.activeLane}
          </h3>
        </div>

        <div className='bg-red-100 p-5 rounded-xl'>
          <p className='text-gray-600'>
            Emergency Mode
          </p>

          <h3 className='text-2xl font-bold text-red-700 mt-2'>
            {signal?.emergencyMode ? 'ACTIVE' : 'OFF'}
          </h3>
        </div>

      </div>

    </div>
  )
}

export default SignalCard