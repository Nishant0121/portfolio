import clsx from "clsx"; // Make sure you are importing correctly
import { twMerge } from "tailwind-merge"; // Ensure you're using tailwind-merge

export function cn(...inputs) {
  return twMerge(clsx(...inputs)); // Spread the inputs to ensure they are handled correctly
}
