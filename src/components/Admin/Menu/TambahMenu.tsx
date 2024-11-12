"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const TambahMenu = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    data: {
      i_id: "",
      i_idinduk: "",
      i_idaplikasi: 1,
      no_urut: "",
      n_menu: "",
      e_menu: "",
      n_link: "",
      c_tipe_menu: "",
      c_aktif: 1,
      c_sidebar: "",
      n_icon_menu: "",
      c_menu: "",
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      data: {
        ...prevFormData.data,
        [name]:
          name === "i_idaplikasi" || name === "c_aktif"
            ? parseInt(value)
            : value,
      },
    }));
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
    const token = Cookies.get("token");
      const response = await axios.post(`/api/menu/create`, formData.data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // include token if needed
        },
      });
      console.log("Data berhasil ditambahkan:", response.data);
      Swal.fire({
        title: "Create Successful!",
        text: "You have successfully created menu data.",
        imageUrl: "/images/swal/swal-success.png",
        imageWidth: 120,
        imageHeight: 100,
        confirmButtonText: "OK",
        customClass: {
          confirmButton: "bg-blue-600 text-white",
        },
      }).then(() => {
        router.push("/menu");
      });
    } catch (error: any) {
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
    <div className="grid w-full gap-9">
      <div className="flex w-full flex-col gap-9">
        <div className="w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="w-3/4 rounded-lg p-8">
            <form onSubmit={handleSave}>
              {/* ID field (disabled) */}
              {/* <div className="mb-4 flex items-center">
                <label className="text-gray-700 mb-2 block w-1/3 text-sm font-bold">
                  ID:
                </label>
                <input
                  name="i_id"
                  value={formData.data.i_id}
                  onChange={handleChange}
                  className="text-gray-700 focus:shadow-outline w-2/3 bg-zinc-200 appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none"
                  type="text"
                  disabled
                />
              </div> */}

              {/* Additional form fields */}
              {/* Other input fields follow the same pattern, make sure each input name matches exactly */}
              <div className="mb-4 flex items-center">
                <label className="text-gray-700 mb-2 block w-1/3 text-sm font-bold">
                  ID Induk:
                </label>
                <input
                  name="i_idinduk"
                  value={formData.data.i_idinduk}
                  onChange={handleChange}
                  className="text-gray-700 focus:shadow-outline w-2/3 appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none"
                  type="text"
                />
              </div>

              <div className="mb-4 flex items-center">
                <label className="text-gray-700 mb-2 block w-1/3 text-sm font-bold">
                  Aplikasi:
                </label>
                <select
                  name="i_idaplikasi"
                  value={formData.data.i_idaplikasi}
                  onChange={handleChange}
                  className="border-gray-300 w-2/3 rounded-md border p-2"
                >
                  <option value={1}>Aktif</option>
                  <option value={0}>Tidak Aktif</option>
                </select>
              </div>

              <div className="mb-4 flex items-center">
                <label className="text-gray-700 mb-2 block w-1/3 text-sm font-bold">
                  No. Urut:
                </label>
                <input
                  name="no_urut"
                  value={formData.data.no_urut}
                  onChange={handleChange}
                  className="text-gray-700 focus:shadow-outline w-2/3 appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none"
                  type="text"
                />
              </div>

              <div className="mb-4 flex items-center">
                <label className="text-gray-700 mb-2 block w-1/3 text-sm font-bold">
                  Nama Menu:
                </label>
                <input
                  name="n_menu"
                  value={formData.data.n_menu}
                  onChange={handleChange}
                  className="text-gray-700 focus:shadow-outline w-2/3 appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none"
                  type="text"
                />
              </div>

              <div className="mb-4 flex items-center">
                <label className="text-gray-700 mb-2 block w-1/3 text-sm font-bold">
                  Uraian:
                </label>
                <input
                  name="e_menu"
                  value={formData.data.e_menu}
                  onChange={handleChange}
                  className="text-gray-700 focus:shadow-outline w-2/3 appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none"
                  type="text"
                />
              </div>

              <div className="mb-4 flex items-center">
                <label className="text-gray-700 mb-2 block w-1/3 text-sm font-bold">
                  Link:
                </label>
                <input
                  name="n_link"
                  value={formData.data.n_link}
                  onChange={handleChange}
                  className="text-gray-700 focus:shadow-outline w-2/3 appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none"
                  type="text"
                />
              </div>

              <div className="mb-4 flex items-center">
                <label className="text-gray-700 mb-2 block w-1/3 text-sm font-bold">
                  Type:
                </label>
                <input
                  name="c_tipe_menu"
                  value={formData.data.c_tipe_menu}
                  onChange={handleChange}
                  className="text-gray-700 focus:shadow-outline w-2/3 appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none"
                  type="text"
                />
              </div>
              <div className="mb-4 flex items-center">
                <label className="text-gray-700 mb-2 block w-1/3 text-sm font-bold">
                  Status:
                </label>
                <select
                  name="c_aktif"
                  value={formData.data.c_aktif}
                  onChange={handleChange}
                  className="border-gray-300 w-2/3 rounded-md border p-2"
                >
                  <option value="1">Aktif</option>
                  <option value="0">Tidak Aktif</option>
                </select>
              </div>
              <div className="mb-4 flex items-center">
                <label className="text-gray-700 mb-2 block w-1/3 text-sm font-bold">
                  Sidebar:
                </label>
                <input
                  name="c_sidebar"
                  value={formData.data.c_sidebar}
                  onChange={handleChange}
                  className="text-gray-700 focus:shadow-outline w-2/3 appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none"
                  type="text"
                />
              </div>
              <div className="mb-4 flex items-center">
                <label className="text-gray-700 mb-2 block w-1/3 text-sm font-bold">
                  Icon:
                </label>
                <input
                  name="n_icon_menu"
                  value={formData.data.n_icon_menu}
                  onChange={handleChange}
                  className="text-gray-700 focus:shadow-outline w-2/3 appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none"
                  type="text"
                />
              </div>
              <div className="mb-4 flex items-center">
                <label className="text-gray-700 mb-2 block w-1/3 text-sm font-bold">
                  Kode Menu:
                </label>
                <input
                  name="c_menu"
                  value={formData.data.c_menu}
                  onChange={handleChange}
                  className="text-gray-700 focus:shadow-outline w-2/3 appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none"
                  type="text"
                />
              </div>

              {/* Repeat similar structure for remaining fields */}

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => router.push("/menu")}
                  className="mr-2 rounded bg-zinc-300 px-4 py-2 text-zinc-700"
                >
                  Kembali
                </button>
                <button
                  type="submit"
                  className="rounded bg-blue-600 px-4 py-2 text-white"
                >
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TambahMenu;
