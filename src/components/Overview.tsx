import { DataContext } from '@/context/dataContext';

import { useContext } from "react"

export default function Overview() {
  const data = useContext(DataContext)

  const [overviewData] = data.filter(d => d.id === 'overview')

  return <div>
    <div className="grid grid-cols-3 gap-7">
      {overviewData.data.map(d => (
        <div key={d.label} className="card bg-primary col-span-1 border border-border rounded-2xl p-7 flex gap-5 justify-between">
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
    </div>
  </div>
}