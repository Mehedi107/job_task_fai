import { DataContext } from "@/context/dataContext"
import { useContext } from "react"

export default function Appointments() {
  const data = useContext(DataContext)
      
  const [overviewData] = data.filter(d => d.id === 'appointments')

  return <div key={overviewData.data}>{overviewData.data}</div>
}