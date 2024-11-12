"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import TableOPDBKD from "../Tables/Admin/tableOPDBKD";
import Loader from "@/components/common/Loader";
import Link from "next/link";

const OPDBKD = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Simulasi loading dengan delay
      const timer = setTimeout(() => setLoading(false), 1000);

      // Cleanup timer saat komponen unmount
      return () => clearTimeout(timer);
    }, []);
    return (
      <>
        {loading ? (
        <Loader />
        ) : (
        <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
            <div className="col-span-12 xl:col-span-12">
            <TableOPDBKD />
            </div>
        </div>
        )}
      </>
    );
};

export default OPDBKD;
