import { IconsDefaultProps } from "./IconsDefaultProps";

export function CreditCardIcon({
  className,
  height,
  width,
}: IconsDefaultProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height={height}
      width={width}
      className={className}
    >
      <path
        fill="#6563FF"
        d="M7 15h3a1 1 0 000-2H7a1 1 0 000 2zM19 5H5a3 3 0 00-3 3v9a3 3 0 003 3h14a3 3 0 003-3V8a3 3 0 00-3-3zm1 12a1 1 0 01-1 1H5a1 1 0 01-1-1v-6h16zm0-8H4V8a1 1 0 011-1h14a1 1 0 011 1z"
      />
    </svg>
  );
}
