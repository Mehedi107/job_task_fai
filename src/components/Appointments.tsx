import { DataContext } from "@/context/dataContext"
import { useContext } from "react"
import calenderIcon from '../assets/calender.png'
import successIcon from '../assets/success-icon.png'
import copyIcon from '../assets/copy-icon.png'
import infoIcon from '../assets/info-icon.png'
import { ChevronLeft, ChevronRight } from "lucide-react"

const tableData = [
  { name: 'Jane.D', phone: '01960685765', mail: 'admin@gmail.com', device: 'Apple/Iphone 13pro', repair: 'Screen', date: '02/06/2026', slot: '1', time: '09:00' },
  { name: 'Jane.D', phone: '01960685765', mail: 'admin@gmail.com', device: 'Apple/Iphone 13pro', repair: 'Screen', date: '02/06/2026', slot: '1', time: '10:00' },
  { name: 'Jane.D', phone: '01960685765', mail: 'admin@gmail.com', device: 'Apple/Iphone 13pro', repair: 'Screen', date: '02/06/2026', slot: '1', time: '11:00' },
  { name: 'Jane.D', phone: '01960685765', mail: 'admin@gmail.com', device: 'Apple/Iphone 13pro', repair: 'Screen', date: '02/06/2026', slot: '1', time: '12:00' },
  { name: 'Jane.D', phone: '01960685765', mail: 'admin@gmail.com', device: 'Apple/Iphone 13pro', repair: 'Screen', date: '02/06/2026', slot: '1', time: '02:00' },
];

export default function Appointments() {
  
  const data = useContext(DataContext)
      
  const [overviewData] = data.filter(d => d.id === 'appointments')

  return <div className="grid grid-cols-12 gap-10">
    {/* card */}
    <div className="card bg-primary col-span-4 border border-border rounded-2xl p-7 flex flex-col gap-2">
      <div className="flex gap-3 items-center">
        <img className="h-5 w-5" src={calenderIcon} alt="" />
        <span className="text-tertiary text-sm">Total Booked</span>
      </div>
      <h3 className="text-2xl">34</h3>
      <p className="text-sm text-[#05DF72]">+8 this week</p>
    </div>

    {/* card */}
    <div className="card bg-primary col-span-4 border border-border rounded-2xl p-7 flex flex-col gap-2">
      <div className="flex gap-3 items-center">
        <img className="h-5 w-5" src={successIcon} alt="" />
        <span className="text-tertiary text-sm">AI Booked</span>
      </div>
      <h3 className="text-2xl">28</h3>
      <p className="text-sm text-[#05DF72]">82% of total</p>
    </div>

    {/* card */}
    <div className="card bg-primary col-span-4 border border-border rounded-2xl p-7 flex flex-col gap-2">
      <div className="flex gap-3 items-center">
        <img className="h-5 w-5" src={infoIcon} alt="" />
        <span className="text-tertiary text-sm">Pending</span>
      </div>
      <h3 className="text-2xl">3</h3>
      <p className="text-sm text-[#05DF72]">Awaiting confirmation</p>
    </div>

    {/* url container */}
    <div className="col-span-12 rounded-2xl p-6 bg-linear-to-b from-[#1A1A2E] to-[#16213E]">
      <p>Booking Link</p>
      <div className="flex gap-3 mt-3">
        <input className="bg-[#0A0A0F80] rounded-xl w-full inline-block px-5" type="text" name="" id="" placeholder="https://techstore.com/book?id=store123"/>
        <button className="flex items-center justify-center gap-2.5 p-5 bg-radial from-white/5 from-1% to-white/30 min-w-40"><img src={copyIcon} alt="" />Copy Link</button>
      </div>
    </div>

    {/* table */}
    <div className="overflow-hidden rounded-xl border border-border bg-primary backdrop-blur-sm col-span-12">
          <table className="w-full border-collapse table-auto text-center">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 text-sm uppercase tracking-wider">
                <th className="px-6 py-5 font-medium">Client Name</th>
                <th className="px-6 py-5 font-medium">Client Phone</th>
                <th className="px-6 py-5 font-medium">Client Mail</th>
                <th className="px-6 py-5 font-medium">Device</th>
                <th className="px-6 py-5 font-medium">Repair Type</th>
                <th className="px-6 py-5 font-medium">Date</th>
                <th className="px-6 py-5 font-medium">Slot No</th>
                <th className="px-6 py-5 font-medium">Start Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              {tableData.map((row, idx) => (
                <tr key={idx} className="hover:bg-blue-600/5 transition-colors group">
                  <td className="px-6 py-4 text-blue-400 font-medium cursor-pointer hover:underline">
                    {row.name}
                  </td>
                  <td className="px-6 py-5 text-slate-300">{row.phone}</td>
                  <td className="px-6 py-5 text-slate-300">{row.mail}</td>
                  <td className="px-6 py-5 text-slate-300">{row.device}</td>
                  <td className="px-6 py-5 text-slate-300">{row.repair}</td>
                  <td className="px-6 py-5 text-slate-300">{row.date}</td>
                  <td className="px-6 py-5 text-slate-300">{row.slot}</td>
                  <td className="px-6 py-5 text-slate-300">{row.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
    </div>

    {/* pagination */}
    <div className="flex items-center justify-center gap-6 text-sm font-medium col-span-12">
      <button className="flex items-center gap-2 text-[#697077] transition-colors hover:text-slate-300">
        <ChevronLeft size={20} />
        <span>Previous</span>
      </button>
      
      <div className="flex items-center gap-1">
        <button className="h-10 w-10 text-blue-600 transition-colors hover:text-blue-400">1</button>
        <button className="flex h-10 w-10 items-center justify-center bg-[#a5c5ff] text-[#050b18] font-bold shadow-lg shadow-blue-600/10">
          2
        </button>
        <button className="h-10 w-10 text-blue-600 transition-colors hover:text-blue-400">3</button>
        <button className="h-10 w-10 text-blue-600 transition-colors hover:text-blue-400">4</button>
        <button className="h-10 w-10 text-blue-600 transition-colors hover:text-blue-400">5</button>
        <span className="px-2 text-blue-600">...</span>
        <button className="h-10 w-10 text-blue-600 transition-colors hover:text-blue-400">11</button>
      </div>

      <button className="flex items-center gap-2 text-blue-600 transition-colors hover:text-blue-400">
        <span>Next</span>
        <ChevronRight size={20} />
      </button>
    </div>
  </div>
}