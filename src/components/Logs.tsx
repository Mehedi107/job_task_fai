import { DataContext } from "@/context/dataContext";
import { useContext } from "react";
import clockIcon from "../assets/clock.png";
import checkedIcon from "../assets/checked.png";
import { cn } from "@/lib/utils";
import { statusVariants} from '../data/dashboardData'

export default function Logs() {
  const data = useContext(DataContext);

  const [overviewData] = data.filter(d => d.id === "logs");
  const { title, lists } = overviewData.data;

  return (
    <div className="grid grid-cols-12 gap-7">
      
      {/* Header */}
      <div className="col-span-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          {/* Search */}
          <div className="relative w-full md:max-w-md">
            <input
              type="text"
              placeholder="Search by phone number, issue type..."
              className="w-full rounded-lg border border-border bg-primary px-8 py-4 text-white placeholder-tertiary outline-none"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            <select className="bg-primary px-8 py-4 pr-6 rounded-lg border border-border">
              <option>All Type</option>
              <option>Inbound</option>
              <option>Outbound</option>
            </select>

            <select className="bg-primary px-8 py-4 pr-6 rounded-lg border border-border">
              <option>All Issues</option>
              <option>Screen Repair</option>
              <option>Battery</option>
            </select>

            <select className="bg-primary px-8 py-4 pr-6 rounded-lg border border-border">
              <option>Today</option>
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
        </div>
      </div>

      {/* Call list */}
      <div className="bg-primary rounded-2xl col-span-6 border border-border">
        <h3 className="text-xl p-4">{title}</h3>

        <div>
          {lists.map((list, index) => (
            <div key={index} className="p-4 border-t border-border">
              
              <div className="flex gap-4 items-start">
                <img src={list.icon} alt="" />

                <div>
                  <p className="text-base">{list.phone}</p>
                  <p className="text-xs text-tertiary mt-2">{list.date}</p>
                </div>

                <span className={cn("ml-auto rounded-md border px-3 py-1 text-xs font-medium", statusVariants[list.statusType])}>
                  {list.status}
                </span>
              </div>

              <div className="mt-5 flex gap-5 items-center">
                <span className="flex gap-2 items-center text-tertiary">
                  <img src={clockIcon} alt="" /> {list.duration}
                </span>

                <span className="flex gap-2 items-center text-tertiary">
                  <img src={checkedIcon} alt="" /> {list.status}
                </span>

                <span className="text-xs text-[#51A2FF] inline-block px-3 py-1 bg-[#51A2FF]/30 rounded-sm">
                  {list.category}
                </span>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Call details */}
      <div className="bg-primary p-8 rounded-2xl col-span-6 border border-border">
        v
      </div>

    </div>
  );
}
