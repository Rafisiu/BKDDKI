"use client";
import dynamic from "next/dynamic";
import React from "react";
import TableJenjang from "../Tables/Admin/tableJenjang";
import Link from "next/link";

const Jenjang = () => {
    return (
        <>
        <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
            <div className="col-span-12 xl:col-span-12">
            <TableJenjang />
            </div>
        </div>
        </>
    );
};

export default Jenjang;
