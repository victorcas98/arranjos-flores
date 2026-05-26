interface ItemBoxProps {
  image: string;
  text: string;
  onClick: () => void;
  alt?: string;
}

export function ItemBox({ image, text, onClick, alt = "" }: ItemBoxProps) {
  return (
    <button
      onClick={onClick}
      className="
        relative overflow-hidden cursor-pointer
        w-full max-w-[7rem] aspect-square
        md:aspect-video md:max-w-[20rem]
        transition-transform duration-300 ease-in-out
        hover:scale-105
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400
      "
    >
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/30" />

      <span
        className="
        absolute bottom-0 right-0
        text-right
        text-white font-semibold
        text-lg md:text-2xl
        px-2 md:px-4 py-1 md:py-2
        drop-shadow-md
      "
      >
        {text}
      </span>
    </button>
  );
}