import Image, { StaticImageData } from "next/image";
import { CSSProperties } from "react";

interface PropsType {
  src: StaticImageData | string;
  alt?: string;
  styles?: CSSProperties;
}

export default function Img(props: PropsType) {
  const { src, alt = "", styles = {} } = props;

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="100vw"
      style={{ objectFit: "cover", ...styles }}
    />
  );
}
