import Image from "next/image";
import { Link } from "@/i18n/navigation";

type Props = {
  variant?: "light" | "dark";
  className?: string;
};

export function BrandLogo({ variant = "light", className = "" }: Props) {
  const src =
    variant === "dark" ? "/brand/logo-white.png" : "/brand/logo-colour.jpg";

  return (
    <Link
      href="/"
      className={`flex w-[9.5rem] shrink-0 items-center sm:w-[13.5rem] ${className}`}
    >
      <Image
        src={src}
        alt="Todaytec Group Europe"
        width={480}
        height={140}
        unoptimized
        className="h-10 w-full object-contain object-left sm:h-12"
        priority
      />
    </Link>
  );
}
