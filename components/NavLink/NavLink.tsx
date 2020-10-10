import { useRouter } from "next/router";
import classnames from "classnames";

interface Props {
  path: string;
  title: string;
  classes?: string;
}

export default function ({ path, title, classes }: Props) {
  const { pathname } = useRouter();
  const active = pathname === path;

  const commonClasses = active
    ? "inline-flex items-center px-1 pt-1 border-b-2 border-indigo-500 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out"
    : "inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out";

  return (
    <a href={path} className={classnames(commonClasses, classes)}>
      {title}
    </a>
  );
}
