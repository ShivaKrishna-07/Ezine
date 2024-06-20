import Link from "next/link";

interface Props {
  title?: string;
}

export const Logo = ({ title }: Props) => {
  return (
    <Link href="/">
      <h1 className="text-3xl font-extrabold uppercase text-black">{title}</h1>
    </Link>
  );
};
