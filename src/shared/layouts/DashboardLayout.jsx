import { Outlet } from "react-router-dom";
import authBg from "@/assets/images/bg-3.jpg";
import UserRegisterForm from "../../features/users/components/UserRegisterForm";

export default function DashboardLayout() {
    return (
        <>
            <div 
                className="min-h-screen w-full"
                style={{
                    backgroundImage: `url(${authBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <main className="mx-auto">
                    <Outlet />
                    <UserRegisterForm />
                </main>
            </div>
        </>
    );
}