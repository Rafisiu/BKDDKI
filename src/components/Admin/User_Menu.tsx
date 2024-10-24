"use client";
import dynamic from "next/dynamic";
import React from "react";
import TableUserMenu from "../Tables/Admin/tableUserMenu";
import Link from "next/link";

const UserMenu = () => {
    return (
        <>
        <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
            <div className="col-span-12 xl:col-span-12">
            <Link
                href="#"
                className="mb-4 inline-flex items-center justify-center rounded-md bg-primary px-8 py-2 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
                Tambah +
            </Link>
            <TableUserMenu />
            </div>
        </div>
        </>
    );
};

export default UserMenu;
