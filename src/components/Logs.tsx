import { DataContext } from "@/context/dataContext";
import { useContext } from "react";

export default function Logs() {
  const data = useContext(DataContext)
    
  const [overviewData] = data.filter(d => d.id === 'logs')

  return <div key={overviewData.data}>{overviewData.data}</div>
}