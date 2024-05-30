import AdminHeader from "@/components/AdminHeader";

export default function AdminPage({children}){
    return (
        <>
        <AdminHeader></AdminHeader>
        {children}
        </>
        
    )
}