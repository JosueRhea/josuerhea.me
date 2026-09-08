interface Props {
  children: React.ReactNode;
}

export function SectionHeading({ children }: Props) {
  return (
    <h2 className="mb-6 font-mono text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
      {children}
    </h2>
  );
}
