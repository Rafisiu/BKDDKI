"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Loader from "@/components/common/Loader";
import axios from "axios";
import TableMenu from "../Tables/Admin/tableMenu";

// Definisikan tipe data untuk item menu
type MenuOption = {
    i_id: number;
    n_menu: string;
};

const TambahMenu = () => {
    const [loading, setLoading] = useState(true);
    const [menuOptions, setMenuOptions] = useState<MenuOption[]>([]);
    const [selectedMenu, setSelectedMenu] = useState<string>("");

    useEffect(() => {
      // Simulasi loading dengan delay
      const timer = setTimeout(() => setLoading(false), 1000);

      // Cleanup timer saat komponen unmount
      return () => clearTimeout(timer);
    }, []);


    // Fetch menu data from API
    useEffect(() => {
        const fetchMenuData = async () => {
            try {
                const response = await axios.get("/api/menu/root");
                setMenuOptions(response.data.data); // Asumsi bahwa 'data' adalah array berisi objek yang memiliki i_id dan n_menu
            } catch (error) {
                console.error("Error fetching menu data:", error);
            }
        };
        fetchMenuData();
    }, []);

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedMenu(event.target.value); // Mengupdate selectedMenu saat ada perubahan
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
                        className="basis-6/12 rounded-md bg-gray-200 bg-re border px-4 py-3 text-sm text-zinc-700 focus:outline-none"
                        value={selectedMenu}
                        onChange={handleSelectChange}
                    >
                        <option value="">Pilih Menu</option>
                        {menuOptions.map((menu) => (
                            <option key={menu.i_id} value={menu.i_id}>
                                {menu.n_menu}
                            </option>
                        ))}
                    </select>
                    
                    {/* Button Tambah */}
                    <Link
                        href="/menu/tambah"
                        className="basis-2/12 inline-flex items-center justify-center rounded-md bg-primary px-8 py-2 text-center font-medium text-white hover:bg-opacity-90"
                    >
                        Tambah +
                    </Link>
                </div>

                {/* TableMenu Component */}
                <div className="col-span-12 xl:col-span-12">
                    <TableMenu selectedMenu={selectedMenu} />
                </div>
            </div>
        )}
        </>
    );
};

export default TambahMenu;
