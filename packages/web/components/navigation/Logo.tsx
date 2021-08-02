import { FC } from "react";
import Image from "next/image";

import logoPng from "../../public/logo.png";

type Props = {
  height: number;
  width: number;
};
const Logo: FC<Props> = ({ height, width }) => (
  <div>
    <Image src={logoPng} alt="0xVentures" height={height} width={width} />
  </div>
);

export default Logo;
