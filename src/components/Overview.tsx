import { DataContext } from '@/context/dataContext';
import { useContext } from "react"
import { SimpleAreaChart } from './SimpleAreaChart';

export default function Overview() {
  const data = useContext(DataContext)

  const [overviewData] = data.filter(d => d.id === 'overview')

  return <div>
    <div className="grid grid-cols-12 gap-7">
      {/* cards */}
      {overviewData.data.map(d => (
        <div key={d.label} className="card bg-primary col-span-4 border border-border rounded-2xl p-7 flex gap-5 justify-between">
        <div className="card-text flex flex-col gap-3">
          <p className="text-sm text-[#90A1B9]">{d.label}</p>
          <p className="text-3xl text-white">{d.value}</p>
          <p className="text-sm text-[#05DF72]">{d.percentage}</p>
        </div>
        <div className="card-icon">
          <img src={d.icon} alt="" />
        </div>
      </div>
      ))} 

      {/* Chart */}
      <div className='p-6 rounded-2xl border border-border col-span-12 bg-primary'>
        <h3 className='text-xl'>Call Trends - This Week</h3>
        <p className='text-sm text-[#90A1B9] mb-6'>Total: 472 calls</p>
        <SimpleAreaChart></SimpleAreaChart>
      </div>

      {/* activity */}
      <div className='p-8 bg-primary rounded-2xl col-span-6 border border-border'>
        <h3 className='text-xl mb-5'>Recent Activity</h3>
        {/* card container */}
        <div className='flex flex-col gap-3'>
          {/* card */}
          <div className='bg-[#1D293D80] rounded-md px-3 py-4 flex gap-5'>
            <span className='w-2 h-2 rounded-2xl bg-green-400 block mt-2'></span>
            <div>
              <p>AI booked appointment for iPhone 13 screen repair</p>
              <span className='text-sm text-[#90A1B9]'>2 min ago</span>
            </div>
          </div>
          {/* card */}
          <div className='bg-[#1D293D80] rounded-md px-3 py-4 flex gap-5'>
            <span className='w-2 h-2 rounded-2xl bg-orange-400 block mt-2'></span>
            <div>
              <p>Warm transfer to technician - Software issue</p>
              <span className='text-sm text-[#90A1B9]'>5 min ago</span>
            </div>
          </div>
          {/* card */}
          <div className='bg-[#1D293D80] rounded-md px-3 py-4 flex gap-5'>
            <span className='w-2 h-2 rounded-2xl bg-green-400 block mt-2'></span>
            <div>
              <p>Quote provided for iPad battery replacement</p>
              <span className='text-sm text-[#90A1B9]'>8 min ago</span>
            </div>
          </div>
          {/* card */}
          <div className='bg-[#1D293D80] rounded-md px-3 py-4 flex gap-5'>
            <span className='w-2 h-2 rounded-2xl bg-red-400 block mt-2'></span>
            <div>
              <p>Call dropped after 12 seconds</p>
              <span className='text-sm text-tertiary'>15 min ago</span>
            </div>
          </div>
        </div>
      </div>

      {/* repair */}
      <div className='p-8 bg-primary rounded-2xl col-span-6 border border-border'>
        <h3 className='text-xl mb-5'>Top Repair Requests</h3>
        {/* range card container */}
        <div className='flex flex-col gap-4'>
          {/* range card */}
          <div className='grid grid-cols-12 gap-y-3'>
            <span className='col-span-6 inline-block'>Screen Repair</span>
            <span className='col-span-6 inline-block justify-self-end text-tertiary'>156 requests</span>
            <input className='range-hidden-thumb col-span-12 disabled' value={80} type="range"></input>
          </div>
          {/* range card */}
          <div className='grid grid-cols-12 gap-y-3'>
            <span className='col-span-6 inline-block'>Battery Replacement</span>
            <span className='col-span-6 inline-block justify-self-end text-tertiary'>89 requests</span>
            <input className='range-hidden-thumb col-span-12 disabled' value={33} type="range"></input>
          </div>
          {/* range card */}
          <div className='grid grid-cols-12 gap-y-3'>
            <span className='col-span-6 inline-block'>Back Glass Repair</span>
            <span className='col-span-6 inline-block justify-self-end text-tertiary'>63 requests</span>
            <input className='range-hidden-thumb col-span-12 disabled' value={25} type="range"></input>
          </div>
          {/* range card */}
          <div className='grid grid-cols-12 gap-y-3'>
            <span className='col-span-6 inline-block'>Software Issues</span>
            <span className='col-span-6 inline-block justify-self-end text-tertiary'>45 requests</span>
            <input className='range-hidden-thumb col-span-12 disabled' value={20} type="range"></input>
          </div>
        </div>
      </div>
    </div>
  </div>
}