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
        <div key={d.label} className="card bg-primary col-span-4 border border-border rounded-2xl p-6 flex gap-5 justify-between">
        <div className="card-text flex flex-col gap-3">
          <p className="text-sm text-[#90A1B9]">{d.label}</p>
          <p className="text-3xl text-white">{d.value}</p>
          <p className={`text-sm ${d.percentage > 0 ? 'text-green-500': 'text-red-500'}`}>{d.percentage}</p>
        </div>
        <div className="card-icon">
          <img src={d.icon} alt="" />
        </div>
      </div>
      ))} 

      {/* Chart */}
      <div className='p-6 rounded-2xl border border-border col-span-12 bg-primary'>
        <div className='flex justify-between items-center'>
          <div>
            <h3 className='text-xl mb-1'>Call Trends - This Week</h3>
            <p className='text-sm text-[#90A1B9] mb-6'>Total: 472 calls</p>
          </div>
          <select className='bg-[#1D293D] rounded-lg px-5 py-2.5' name="" id="">
            <option value="">This Week</option>
            <option value="">This Month</option>
            <option value="">This Year</option>
          </select>
        </div>
        
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
            <div className='h-2.5 bg-secondary col-span-12 rounded-2xl'>
              <div className='h-2.5 w-2/3 bg-linear-to-r from-[#2B7FFF] to-[#00B8DB] rounded-2xl'></div>
            </div>
          </div>
          {/* range card */}
          <div className='grid grid-cols-12 gap-y-3'>
            <span className='col-span-6 inline-block'>Battery Replacement</span>
            <span className='col-span-6 inline-block justify-self-end text-tertiary'>89 requests</span>
            <div className='h-2.5 bg-secondary col-span-12 rounded-2xl'>
              <div className='h-2.5 w-5/12 bg-linear-to-r from-[#2B7FFF] to-[#00B8DB] rounded-2xl'></div>
            </div>
          </div>
          {/* range card */}
          <div className='grid grid-cols-12 gap-y-3'>
            <span className='col-span-6 inline-block'>Back Glass Repair</span>
            <span className='col-span-6 inline-block justify-self-end text-tertiary'>63 requests</span>
            <div className='h-2.5 bg-secondary col-span-12 rounded-2xl'>
              <div className='h-2.5 w-4/12 bg-linear-to-r from-[#2B7FFF] to-[#00B8DB] rounded-2xl'></div>
            </div>
          </div>
          {/* range card */}
          <div className='grid grid-cols-12 gap-y-3'>
            <span className='col-span-6 inline-block'>Software Issues</span>
            <span className='col-span-6 inline-block justify-self-end text-tertiary'>45 requests</span>
            <div className='h-2.5 bg-secondary col-span-12 rounded-2xl'>
              <div className='h-2.5 w-3/12 bg-linear-to-r from-[#2B7FFF] to-[#00B8DB] rounded-2xl'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}