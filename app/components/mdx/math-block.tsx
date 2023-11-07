import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function MathBlock({ children }: Props) {
  return (
    <div className="w-full h-fit overflow-x-auto border rounded-sm">
      {children}
    </div>
  );
}
