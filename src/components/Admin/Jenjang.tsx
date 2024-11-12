"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Loader from "@/components/common/Loader";
import TableJenjang from "../Tables/Admin/tableJenjang";
import Link from "next/link";
import axios from "axios";

type MenuOption = {
  i_id: number;
  c_asgcode: string;
  n_asgcode_long: string;
};

const Jenjang = () => {
  const [loading, setLoading] = useState(true);
  const [menuOptions, setMenuOptions] = useState<MenuOption[]>([]);
  const [selectedMenu, setSelectedMenu] = useState<string | undefined>(
    undefined,
  );

  useEffect(() => {
    // Simulasi loading dengan delay
    const timer = setTimeout(() => setLoading(false), 1000);

    // Cleanup timer saat komponen unmount
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await axios.get("/api/jenjang/root");
        const data = response.data.data;
        setMenuOptions(data);

        // Set nilai default selectedMenu ke c_asgcode pertama jika belum diatur
        if (data.length > 0 && !selectedMenu) {
          setSelectedMenu(data[0].c_asgcode);
        }
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };
    fetchMenuData();
  }, [selectedMenu]);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMenu(event.target.value);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
          <div className="col-span-12 flex items-center space-x-4 xl:col-span-12">
            {/* Dropdown menu */}
            <select
              className="bg-gray-200 basis-6/12 rounded-md border px-4 py-3 text-sm text-zinc-700 focus:outline-none"
              value={selectedMenu}
              onChange={handleSelectChange}
            >
              {menuOptions.map((menu) => (
                <option key={menu.i_id} value={menu.c_asgcode}>
                  {menu.c_asgcode} - {menu.n_asgcode_long}
                </option>
              ))}
            </select>
          </div>
          <div className="col-span-12 xl:col-span-12">
            <TableJenjang selectedMenu={selectedMenu || ""} />
          </div>
        </div>
      )}
    </>
  );
};

export default Jenjang;
