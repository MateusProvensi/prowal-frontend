import { IconsDefaultProps } from "./IconsDefaultProps";

export function TransactionIcon({
  className,
  height,
  width,
}: IconsDefaultProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        fill="#6563FF"
        d="M18 10a1 1 0 00-1-1H5.41l2.3-2.29a1 1 0 00-1.42-1.42l-4 4a1 1 0 00-.21 1.09A1 1 0 003 11h14a1 1 0 001-1zm3.92 3.62A1 1 0 0021 13H7a1 1 0 000 2h11.59l-2.3 2.29a1 1 0 000 1.42 1 1 0 001.42 0l4-4a1 1 0 00.21-1.09z"
      />
    </svg>
  );
}
