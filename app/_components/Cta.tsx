import Link from "next/link";
import { ReactNode } from "react";

const Cta = ({ children, href }: { children: ReactNode; href: string }) => {
  return (
    <Link
      href={href}
      className="bg-black px-8 text-white py-4 flex items-center gap-4 justify-center"
    >
      {children}
    </Link>
  );
};

export default Cta;
