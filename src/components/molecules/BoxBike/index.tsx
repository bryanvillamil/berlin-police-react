import Image from "next/image";
import { GrBike } from "react-icons/gr";
import { BikeInfo } from "@types";
import { Box, BoxImg, BoxInfo } from "./styled";

type Props = Pick<BikeInfo, "title"> & Partial<BikeInfo>;

export const BoxBike = (props: Props) => {
  const { title, description, large_img } = props;

  return (
    <Box>
      <BoxImg>
        {large_img ? (
          <Image src={large_img} alt="Bike Img" layout="fill" />
        ) : (
          <GrBike />
        )}
      </BoxImg>

      <BoxInfo>
        <h2>{title}</h2>
        <p>{description}</p>
      </BoxInfo>
    </Box>
  );
};
