import { DataContext } from "@/context/dataContext";
import { useContext } from "react";
import avatar from '../assets/avatar.png'

export default function Settings() {
  const data = useContext(DataContext)

  const [overviewData] = data.filter(d => d.id === 'settings')

  return <div>
    <p className="mb-5">
      <span className="text-2xl mx-5">Profile</span>
      <span className="text-2xl mx-5">Password Settings</span>
    </p>

    <div>
      <p className="text-xl mb-3">Profile Image</p>
      <div className="flex items-end gap-2">
        <img className="w-25.5 h-25.5" src={avatar} alt="" />
        <button className="text-xs rounded-md bg-radial from-white/5 from-1% to-white/30">Edit Profile</button>
      </div>
    </div>

    <table className="table-auto w-1/2 divide-y divide-border/50 mt-5">
        <tr className="col-span-4 flex justify-between py-5">
          <th>Full Name:</th>
          <td>Jane D.</td>
        </tr>

        <tr className="col-span-4 flex justify-between py-5">
          <th>Email:</th>
          <td>jane@gmail.com</td>
        </tr>

        <tr className="col-span-4 flex justify-between py-5">
          <th>Store Name:</th>
          <td>Ubreakfix Store</td>
        </tr>

        <tr className="col-span-4 flex justify-between py-5">
          <th>Store Address:</th>
          <td>123 Main Street, New York, NY 10001</td>
        </tr>
    </table>
  </div>
}