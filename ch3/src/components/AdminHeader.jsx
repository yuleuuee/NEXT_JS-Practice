import LinkDashboard from "./LinkDashboard"
import LinkAdminProfile from "./LinkAdminProfile"
import Link from "next/link"

const AdminHeader = () => {
  const user_name = 'yule';
  return (
    <div className='px-2 py-2 border-2 border-blue-400 border-solid flex gap-2'>
      <Link href="/admin/">BackToAdmin</Link>

      <LinkDashboard></LinkDashboard>
      <LinkAdminProfile></LinkAdminProfile>

      <Link href={`/user/profile/${user_name}`}>UserProfile</Link>
    </div>
  )
}

export default AdminHeader // making this component avilable to entire project 
