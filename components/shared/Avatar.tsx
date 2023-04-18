import React, { FC } from "react";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  size: number;
};

const Avatar: FC<Props> = (props) => {
  return (
    <Image
      src={props.src}
      alt={props.alt}
      width={props.size}
      height={props.size}
      className="rounded-full"
    />
  );
};

export default Avatar;
