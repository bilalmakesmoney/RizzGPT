import { SignOutButton } from "@clerk/nextjs";
import { Home, Sparkles, MessageSquare, User, LogOut } from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="h-screen flex-[0.18] bg-[#CE84AD]/30 text-black/70 p-4 flex flex-col space-y-6">
      <h1 className="text-xl font-bold text-center">Rizz Fixer</h1>

      <nav className="flex flex-col space-y-4">
        <SidebarLink
          href="/dashboard"
          icon={<Home size={20} />}
          text="Dashboard"
        />
        <SidebarLink
          href="/dashboard/generator"
          icon={<Sparkles size={20} />}
          text="Pickup Line Generator"
        />
        <SidebarLink
          href="/dashboard/meter"
          icon={<MessageSquare size={20} />}
          text="Rizz Meter"
        />
        <SidebarLink
          href="/dashboard/enhancer"
          icon={<User size={20} />}
          text="AI Rizz Enhancer"
        />

        <SignOutButton>
          <div className="flex items-center space-x-3 p-2 hover:bg-[#CE84AD]/20 rounded-lg w-full h-full cursor-pointer">
            <LogOut size={20} />
            <span>Sign Out</span>
          </div>
        </SignOutButton>
      </nav>
    </div>
  );
};

const SidebarLink = ({
  href,
  icon,
  text,
}: {
  href: string;
  icon: React.ReactNode;
  text: string;
}) => {
  return (
    <Link
      href={href}
      className="flex items-center space-x-3 p-2 hover:bg-[#CE84AD]/20 rounded-lg"
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
};

export default Sidebar;
