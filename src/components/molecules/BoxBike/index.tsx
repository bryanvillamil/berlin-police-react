import { useState } from "react";
import Image from "next/image";
import { GrBike } from "react-icons/gr";
import { BikeInfo } from "@types";
import { Box, BoxImg, BoxInfo, Description, BoxInfoDate } from "./styled";

type Props = Pick<BikeInfo, "title"> & Partial<BikeInfo>;

export const BoxBike = (props: Props) => {
  const { title, description, large_img, stolen_location, date_stolen } = props;

  let dateformat = '';
  if (date_stolen) {
    const dateStolen = new Date(+`${date_stolen}000`);
    dateformat = dateStolen.toLocaleString();
  }

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
        {description && <Description>{description}</Description>}
        <BoxInfoDate>Stolen Location: <span>{stolen_location}</span></BoxInfoDate>
        <BoxInfoDate>Date Stolen: <span>{dateformat}</span></BoxInfoDate>
   
      </BoxInfo>
    </Box>
  );
};
