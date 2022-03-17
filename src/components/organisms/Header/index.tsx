import React from 'react'
import { MdLocalPolice } from "react-icons/md";
import { locationEnum } from '@types'
import { ContentHeader, HeaderLogo, HeaderTitle } from "./styled";

interface headerProps {
  city?: locationEnum;
}

export const Header = (props: headerProps) => {
  const { city } = props; 

  return (
    <ContentHeader>
      <HeaderLogo>
        <MdLocalPolice />
      </HeaderLogo>
      
      <HeaderTitle>
        <h1>Police Departament of <span>{city}</span></h1>
      </HeaderTitle>
    </ContentHeader>
  )
}
