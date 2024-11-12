"use client";
import React, { useEffect, useState } from "react";
import TableUserMenu from "../Tables/Admin/tableUserMenu";
import Loader from "@/components/common/Loader";
import Link from "next/link";
import { faSearch, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Swal from "sweetalert2";

type MenuOption = {
  i_id: number;
  n_menu: string;
};

const UserMenu = () => {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [availableMenus, setAvailableMenus] = useState<MenuOption[]>([]);
  const [selectedMenus, setSelectedMenus] = useState<MenuOption[]>([]);

  const [menuOptions, setMenuOptions] = useState<MenuOption[]>([]);
  const [selectedMenu, setSelectedMenu] = useState<string>("");

  const [nrk, setNrk] = useState("");
  const [namaLengkap, setNamaLengkap] = useState("");
  const [skpd, setSkpd] = useState("");
  const [userId, setUserId] = useState<string>("");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const moveToSelected = (menu: MenuOption) => {
    setAvailableMenus(availableMenus.filter((m) => m.i_id !== menu.i_id));
    setSelectedMenus([...selectedMenus, menu]);
  };

  const moveToAvailable = (menu: MenuOption) => {
    setSelectedMenus(selectedMenus.filter((m) => m.i_id !== menu.i_id));
    setAvailableMenus([...availableMenus, menu]);
  };

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await axios.get("/api/menu/root");
        const menus = response.data.data;
        setMenuOptions(menus);
        if (menus.length > 0) {
          setSelectedMenu(menus[0].i_id);
        }
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };
    fetchMenuData();
  }, []);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMenu(event.target.value);
  };

  useEffect(() => {
    if (selectedMenu) {
      const fetchAvailableMenus = async () => {
        try {
          const response = await axios.get(
            `/api/menu/list?parent=${selectedMenu}`,
          );
          setAvailableMenus(response.data.data);
        } catch (error) {
          console.error("Error fetching available menu data:", error);
        }
      };
      fetchAvailableMenus();
    }
  }, [selectedMenu]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/user_menu/search?keyword=${nrk}`);

      if (response.data.code === 200 && response.data.data.length > 0) {
        const userData = response.data.data[0];
        setNamaLengkap(userData.user_name);
        setSkpd(userData.nalok);
        setUserId(userData.user_id); // Set the user_id
      } else {
        setNamaLengkap("");
        setSkpd("");
        setUserId(""); // Reset user_id if no data
        console.log("No data found for NRK:", nrk);
      }
    } catch (error) {
      console.error("Error searching NRK:", error);
    }
  };

  const handleAdd = async () => {
    const dataToAdd = {
      user_id: userId,
      menu_id: selectedMenu,
      permission_menu_ids: selectedMenus.map((menu) => menu.i_id),
    };

    try {
      // Send the API request to add the user menu
      const response = await axios.post("/api/user_menu/add", dataToAdd);

      // If the request is successful, show the success Swal
      if (response.data.code === 200) {
        Swal.fire({
          title: "Success",
          text: "User menu has been added successfully.",
          imageUrl: "/images/swal/swal-success.png",
          imageWidth: 120,
          imageHeight: 100,
          confirmButtonText: "OK",
          customClass: {
            confirmButton: "bg-blue-600 text-white",
          },
        }).then(() => {
          window.location.reload();
        });
      } else {
        // Handle the case where the API returns a non-200 code
        Swal.fire({
          title: "Error",
          text: "Something went wrong. Please try again.",
          imageUrl: "/images/swal/swal-gagal.png",
          imageWidth: 120,
          imageHeight: 100,
          confirmButtonText: "OK",
          customClass: {
            confirmButton: "bg-blue-600 text-white",
          },
        });
      }
    } catch (error: any) {
      // Handle any errors that occur during the request
      console.error("Error creating data:", error);
      const errorMessage =
        error.response?.data?.message || "An error occurred. Please try again.";

      Swal.fire({
        title: "Error",
        text: errorMessage,
        imageUrl: "/images/swal/swal-gagal.png",
        imageWidth: 120,
        imageHeight: 100,
        confirmButtonText: "OK",
        customClass: {
          confirmButton: "bg-blue-600 text-white",
        },
      });
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
          <div className="col-span-12 xl:col-span-12">
            <Link
              href="#"
              onClick={openModal}
              className="mb-4 inline-flex items-center justify-center rounded-md bg-primary px-8 py-2 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Tambah +
            </Link>
            <TableUserMenu />
          </div>
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="max-h-[75vh] w-full max-w-3xl overflow-y-auto rounded-md bg-white p-6 shadow-lg">
            <h2 className="mb-2 text-xl font-bold">Tambah User Menu</h2>
            <hr className="mb-4" />

            <form>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <label className="w-1/4 font-medium">NRK</label>
                  <div className="relative w-full">
                    <input
                      className="border-gray-300 w-full rounded-md border p-2 pr-10"
                      placeholder="Masukkan NRK"
                      value={nrk}
                      onChange={(e) => setNrk(e.target.value)} // Update NRK when typing
                    />
                    <FontAwesomeIcon
                      icon={faSearch}
                      className="text-gray-500 absolute right-3 top-3 cursor-pointer"
                      onClick={handleSearch} // Call handleSearch on search icon click
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <label className="w-1/4 font-medium">Nama Lengkap</label>
                  <input
                    className="border-gray-300 w-full rounded-md border bg-zinc-200 p-2"
                    value={namaLengkap}
                    disabled // Disable as it’s auto-filled
                  />
                </div>

                <div className="flex items-center space-x-4">
                  <label className="w-1/4 font-medium">SKPD</label>
                  <input
                    className="border-gray-300 w-full rounded-md border bg-zinc-200 p-2"
                    value={skpd}
                    disabled // Disable as it’s auto-filled
                  />
                </div>

                <div className="flex items-center space-x-4">
                  <label className="w-1/4 font-medium">Pilih Menu</label>
                  <select
                    className="border-gray-300 w-full rounded-md border p-2"
                    value={selectedMenu}
                    onChange={handleSelectChange}
                  >
                    {menuOptions.map((menu) => (
                      <option key={menu.i_id} value={menu.i_id}>
                        {menu.n_menu}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-6 flex justify-between">
                <div className="w-1/2 border p-4">
                  <h3 className="mb-2 text-lg font-medium">Menu Tersedia</h3>
                  <table className="w-full">
                    <tbody>
                      {availableMenus.map((menu) => (
                        <tr key={menu.i_id}>
                          <td>{menu.n_menu}</td>
                          <td>
                            <button
                              type="button"
                              onClick={() => moveToSelected(menu)}
                              className="text-blue-500"
                            >
                              &gt;
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="w-1/2 border p-4">
                  <h3 className="mb-2 text-lg font-medium">Menu Terpilih</h3>
                  <table className="w-full">
                    <tbody>
                      {selectedMenus.map((menu) => (
                        <tr key={menu.i_id}>
                          <td>{menu.n_menu}</td>
                          <td>
                            <button
                              type="button"
                              onClick={() => moveToAvailable(menu)}
                              className="text-blue-500"
                            >
                              &lt;
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={closeModal}
                  className="border-gray-300 mr-4 rounded-md border px-4 py-2"
                >
                  Batal
                </button>
                <button
                  type="button"
                  onClick={handleAdd} // Call handleAdd when "Tambah" button is clicked
                  className="rounded-md bg-primary px-6 py-2 text-white"
                >
                  Tambah
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default UserMenu;
