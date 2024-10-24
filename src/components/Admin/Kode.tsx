"use client";
import dynamic from "next/dynamic";
import React from "react";
import TableKode from "../Tables/Admin/tableKode";
import Link from "next/link";

const Kode = () => {
    return (
        <>
        <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
            <div className="col-span-12 xl:col-span-12">
            <div className="flex space-x-4 mb-4">
                <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-2 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                >
                Tambah Kode +
                </Link>
                <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-2 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                >
                Tambah +
                </Link>
            </div>
            <TableKode />
            </div>
        </div>
        </>
    );
};

export default Kode;
