import { DataContext } from "@/context/dataContext";
import { useContext } from "react";
import clockIcon from "../assets/clock.png";
import playIcon from "../assets/play-icon.png";
import checkedIcon from "../assets/checked.png";
import bookIcon from "../assets/book-icon.png";
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
        <h3 className="text-xl p-6">{title}</h3>

        <div>
          {lists.map((list, index) => (
            <div key={index} className="p-6 border-t border-border">
              
              <div className="flex gap-4 items-start">
                <img src={list.icon} alt="" />

                <div>
                  <p className="text-base">{list.phone}</p>
                  <p className="text-xs text-tertiary mt-2">{list.date}</p>
                </div>

                <span className={cn("ml-auto rounded-md border px-3 py-1 text-xs", statusVariants[list.statusType])}>
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
      <div className="bg-primary rounded-2xl col-span-6 border border-border">
        <h3 className="text-xl p-6 border-b border-border">Call Details</h3>

        <div className="p-6 flex flex-col gap-6">
          {/* call summery */}
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-1 p-2">
              <p className="text-sm text-tertiary">Phone Number</p>
              <p>+1 (555) 123-4567</p>
            </div>

            <div className="col-span-1 p-2">
              <p className="text-sm text-tertiary">Duration</p>
              <p>4:32</p>
            </div>

            <div className="col-span-1 p-2">
              <p className="text-sm text-tertiary">Date & Time</p>
              <p>2025-12-16 10:45 AM</p>
            </div>

            <div className="col-span-1 p-2">
              <p className="text-sm text-tertiary">Issue Type</p>
              <p>Screen</p>
            </div>
          </div>

          <div>
            <p className="text-sm text-tertiary mb-1">Call Type</p>
            <span className="rounded-md border px-3 py-1 text-xs border-green-500/50 bg-green-500/20 text-green-400 ">AI Resolved</span>
          </div>

          <div>
            <p className="text-sm text-tertiary mb-1">Outcome</p>
            <span className="">Quote provided</span>
          </div>

          <div className="flex gap-2 items-center justify-center border border-[#AD46FF4D] bg-linear-to-r from-[#AD46FF33] to-[#F6339A33] rounded-2xl px-2 py-4">
            <img src={playIcon} alt="" />
            <span className="text-[#C27AFF]">Play Audio Recording</span>
          </div>

          <div>
            <div className="flex gap-2 items-center">
              <img src={bookIcon} alt="" />
              <span>Conversation Transcript</span>
            </div>

            <div className="bg-secondary/50 p-4 rounded-xl mt-3 flex flex-col gap-5">
              {/* card */}
              <div>
                <p className="text-sm text-[#05DF72]">AI Assistant:</p>
                <p className="text-xs mt-1">Thank you for calling UBreakiFix! How can I help you today?</p>
              </div>

              {/* card */}
              <div>
                <p className="text-sm text-[#51A2FF]">Customer:</p>
                <p className="text-xs mt-1">Hi, my iPhone 13 screen is cracked. How much would it cost to repair?</p>
              </div>

              {/* card */}
              <div>
                <p className="text-sm text-[#05DF72]">AI Assistant:</p>
                <p className="text-xs mt-1">I can help you with that! For an iPhone 13 screen repair, our price is $199. This includes parts, labor, and comes with a 90-day warranty. Would you like to book an appointment?</p>
              </div>

              {/* card */}
              <div>
                <p className="text-sm text-[#51A2FF]">Customer:</p>
                <p className="text-xs mt-1">Yes, please! When are you available?</p>
              </div>

              {/* card */}
              <div>
                <p className="text-sm text-[#05DF72]">AI Assistant:</p>
                <p className="text-xs mt-1">Great! I have availability today at 2:00 PM or tomorrow at 10:00 AM. Which works better for you?</p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
