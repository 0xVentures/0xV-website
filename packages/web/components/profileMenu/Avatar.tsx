import { FC } from "react";
import Image from "next/image";

import thorPng from "../../public/thor.png";

const Avatar: FC = () => (
  <Image
    className="h-8 w-8 rounded-full"
    src={thorPng}
    alt="avatar"
    width={32}
    height={32}
  />
);

export default Avatar;
