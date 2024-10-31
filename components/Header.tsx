"use client";

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({
  children,
  className
}) => {
  const router = useRouter();

  const handleLogout = () => {
    // Implement logout logic here
  };

  return (
    <div
      className={twMerge(`
        h-fit
        bg-gradient-to-b
        from-blue-400
        p-6
      `, className)}
    >
      {children}
    </div>
  );
};

export default Header;
