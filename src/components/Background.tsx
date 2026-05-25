interface BackgroundProps {
  image: string;
  alt?: string;
  children?: React.ReactNode;
}

export function Background({ image, children }: BackgroundProps) {
  return (
    <div className="relative min-h-screen w-full">
      <img
        src={image}
        alt=""
        className="fixed inset-0 w-full h-full object-cover object-center z-0 opacity-70"
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}