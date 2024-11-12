"use client";
import dynamic from "next/dynamic";
import {useEffect, useState} from "react";
import Loader from "@/components/common/Loader";
import TableKode from "../Tables/Admin/tableKode";
import axios from "axios";
import Link from "next/link";

type MenuOption = {
  i_id: number;
  c_asgcode: string;
  n_asgcode_long: string;
};

const Kode = () => {
    const [loading, setLoading] = useState(true);
    const [menuOptions, setMenuOptions] = useState<MenuOption[]>([]);
    const [selectedMenu, setSelectedMenu] = useState<number | undefined>(undefined);

    useEffect(() => {
      // Simulasi loading dengan delay
      const timer = setTimeout(() => setLoading(false), 1000);

      // Cleanup timer saat komponen unmount
      return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const fetchMenuData = async () => {
            try {
                const response = await axios.get("/api/kode/root");
                const data = response.data.data;
                setMenuOptions(data);

                // Set nilai default selectedMenu ke item pertama jika belum diatur
                if (data.length > 0 && !selectedMenu) {
                    setSelectedMenu(data[0].i_id.toString());
                }
            } catch (error) {
                console.error("Error fetching menu data:", error);
            }
        };
        fetchMenuData();
    }, []);

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedMenu(Number(event.target.value));
    };
    return (
        <>
        {loading ? (
        <Loader />
        ) : (
            <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
            <div className="col-span-12 xl:col-span-12 flex space-x-4 items-center">
                {/* Dropdown menu */}
                <select
                    className="basis-6/12 rounded-md bg-gray-200 border px-4 py-3 text-sm text-zinc-700 focus:outline-none"
                    value={selectedMenu}
                    onChange={handleSelectChange}
                >
                    {menuOptions.map((menu) => (
                        <option key={menu.i_id} value={menu.i_id}>
                            {menu.c_asgcode} - {menu.n_asgcode_long}
                        </option>
                    ))}
                </select>
                
                {/* Button Tambah */}
                <Link
                    href="#"
                    className="basis-2/12 inline-flex items-center justify-center rounded-md bg-primary px-8 py-2 text-center font-medium text-white hover:bg-opacity-90"
                >
                    Tambah Kode +
                </Link>
                <Link
                    href="#"
                    className="basis-2/12 inline-flex items-center justify-center rounded-md bg-primary px-8 py-2 text-center font-medium text-white hover:bg-opacity-90"
                >
                    Tambah +
                </Link>
            </div>
            <div className="col-span-12 xl:col-span-12">
                <TableKode selectedMenu={selectedMenu?.toString() || ""} />
            </div>
        </div>
        )}
        </>
    );
};

export default Kode;
