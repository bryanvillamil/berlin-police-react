import React from 'react'
import { MdLocalPolice } from "react-icons/md";
import { ContentHeader, HeaderLogo, HeaderTitle } from "./styled";


export const Header = () => {
  return (
    <ContentHeader>
      <HeaderLogo>
        <MdLocalPolice />
      </HeaderLogo>
      
      <HeaderTitle>
        <h1>Police Departament of Berlin</h1>
      </HeaderTitle>
    </ContentHeader>
  )
}
