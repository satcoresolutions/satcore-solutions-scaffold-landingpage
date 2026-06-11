import Image
  from "next/image";

interface BenefitImageProps {
  src: string;

  alt: string;
}

export default function BenefitImage({
  src,
  alt,
}: BenefitImageProps) {
  return (
    <div
      className="
        relative
        aspect-4/3
        overflow-hidden
      "
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="
          object-cover
          transition-transform
          duration-500
          hover:scale-105
        "
      />
    </div>
  );
}