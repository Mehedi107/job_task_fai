import { menuItems } from '@/data/menuItems'
import logo from '../assets/Container.png'
import { cn } from '@/lib/utils'


export default function Sidebar({activeTab, setActiveTab }) {

  return(
    <aside id="sidebar" className="col-span-2 h-screen sticky top-0 bg-primary border-r border-slate-800 flex justify-start items-center flex-col">
      {/* logo */}
      <img src={logo} alt="logo" className='w-14 h-14 mt-9 mb-24'/>

      {/* navigation menu */}
      <div className='px-2 py-4 flex flex-col gap-7'>
        {menuItems.map(item => (
          <button key={item.id} onClick={() => setActiveTab(item.id)} className={cn(
              "flex items-center gap-3 px-1 py-2 rounded-3xl bg-amber-400 hover:bg-secondary",
              activeTab === item.id
                ? "bg-secondary"
                : "bg-primary"
            )}>
          <img src={item.icon} alt={item.label} className='w-8 h-8'/>
          <span className='text-white'>{item.label}</span>
        </button>
        ))}
      </div>
    </aside> 
)}