"use client";
import dynamic from "next/dynamic";
import React from "react";
import TabelPlhValidasiBKD from "../Tables/PLH/tablePLHValidasiBkd";
import Link from "next/link";

const PLHValidasiBkd: React.FC = () => {
  return (
    <>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="col-span-12 xl:col-span-12">
          <TabelPlhValidasiBKD />
        </div>
      </div>
    </>
  );
};

export default PLHValidasiBkd;
