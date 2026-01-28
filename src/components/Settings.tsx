import { DataContext } from "@/context/dataContext";
import { useContext } from "react";

export default function Settings() {
  const data = useContext(DataContext)

  const [overviewData] = data.filter(d => d.id === 'settings')

  return <div key={overviewData.data}>{overviewData.data}</div>
}