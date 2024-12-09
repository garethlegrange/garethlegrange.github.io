import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function classnames(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export { classnames };
