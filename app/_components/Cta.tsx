import Link from "next/link";
import { ReactNode } from "react";

const Cta = ({ children, href }: { children: ReactNode; href: string }) => {
  return <Link href={href}>{children}</Link>;
};

export default Cta;
