import React from 'react';
import Header from "../../Header/Header";
import { headerObjEleven } from "../../Header/HeaderData";
import EBopeninglayout from './EBopeninglayout';

function EBOpenings() {
  return (
    <>
      <Header {...headerObjEleven} />
      <EBopeninglayout/>
    </>
  );
}

export default EBOpenings;