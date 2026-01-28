import logo from '../assets/Container.png'
import homeIcon from '../assets/home.png'
import phoneIcon from '../assets/phone.png'
import calenderIcon from '../assets/calender.png'
import settingsIcon from '../assets/settings.png'

export default function Sidebar() {
  return(
    <aside id="sidebar" className="col-span-2 h-screen sticky top-0 bg-primary border-r border-slate-800 flex justify-start items-center flex-col">
      {/* logo */}
      <img src={logo} alt="logo" className='w-14 h-14 mt-9 mb-24'/>

      {/* navigation menu */}
      <div className='px-2 py-4 flex flex-col gap-7'>
        <a href='#overview' className='flex justify-start gap-3 items-center '>
          <img src={homeIcon} alt="" className='w-8 h-8'/>
          <span className='text-white'>Dashboard Overview</span>
        </a>
        <a href='#logs' className='flex justify-start gap-3 items-center'>
          <img src={phoneIcon} alt="" className='w-8 h-8'/>
          <span className='text-white'>Call Logs</span>
        </a>
        <a href='#appointments' className='flex justify-start gap-3 items-center'>
          <img src={calenderIcon} alt="" className='w-8 h-8'/>
          <span className='text-white'>Appointments</span>
        </a>
        <a href='#setting' className='flex justify-start gap-3 items-center'>
          <img src={settingsIcon} alt="" className='w-8 h-8'/>
          <span className='text-white'>Settings</span>
        </a>
      </div>
    </aside> 
)}