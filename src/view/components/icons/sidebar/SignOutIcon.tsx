import { IconsDefaultProps } from "./IconsDefaultProps";

export function SignOutIcon({ className, height, width }: IconsDefaultProps) {
  return (
    <svg
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill="#6563FF"
        d="M4 12a1 1 0 001 1h7.59l-2.3 2.29a1 1 0 000 1.42 1 1 0 001.42 0l4-4a1 1 0 00.21-.33 1 1 0 000-.76 1 1 0 00-.21-.33l-4-4a1 1 0 10-1.42 1.42l2.3 2.29H5a1 1 0 00-1 1zM17 2H7a3 3 0 00-3 3v3a1 1 0 002 0V5a1 1 0 011-1h10a1 1 0 011 1v14a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-2 0v3a3 3 0 003 3h10a3 3 0 003-3V5a3 3 0 00-3-3z"
      />
    </svg>
  );
}
