"use client"
interface Props{
    fullName:string;
    avatar:string;
    email:string;
}
const Sidebar = ({ fullName, avatar, email }: Props) => {
  return (
    <div>Sidebar</div>
  )
}

export default Sidebar