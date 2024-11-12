"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

interface UserEditMenuProps {
params: {
    id: string;
};
}

const UserEditMenu = ({ params }: UserEditMenuProps) => {
const { id } = params;
const router = useRouter();
const [formData, setFormData] = useState<any>(null);

useEffect(() => {
    const fetchData = async () => {
    try {
        const token = Cookies.get("token");
        const response = await axios.get(`/api/menu/get?id=${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        });
        setFormData(response.data);
    } catch (error) {
        console.error("Error fetching menu data:", error);
    }
    };

    if (id) {
    fetchData();
    }
}, [id]);

const getAplikasiValue = (value: number | string) => {
  return value === 1 || value === "1" ? "1" : "0";
};

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
) => {
  const { name, value } = e.target;
  const parsedValue = value === "1" ? 1 : 0;

  setFormData((prevFormData: any) => ({
    ...prevFormData,
    data: {
      ...prevFormData.data,
      [name]: ["i_idaplikasi", "c_aktif"].includes(name) ? parsedValue : value,
    },
  }));
};

const handleSave = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await axios.patch(
      `/api/menu/update?id=${id}`,
      formData.data,
    );
    console.log("Data berhasil disimpan:", response.data);
    Swal.fire({
      title: "Update Successful!",
      text: "You have successfully update menu data.",
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
  } catch (error : any) {
    console.error("Error saving data:", error);
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

if (!formData) return <p>Loading...</p>;

return (
    <div className="grid w-full gap-9">
        <div className="flex w-full flex-col gap-9">
        <div className="w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="w-3/4 rounded-lg p-8">
            <form onSubmit={handleSave}>
                <div className="mb-4 flex items-center">
                <label className="text-gray-700 mb-2 block w-1/3 text-sm font-bold">
                    ID:
                </label>
                <input
                    name="i_id"
                    value={formData.data.i_id || ""}
                    onChange={handleChange}
                    className="text-gray-700 focus:shadow-outline w-2/3 bg-zinc-200 appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none"
                    type="text"
                    disabled
                />
                </div>
                <div className="mb-4 flex items-center">
                <label className="text-gray-700 mb-2 block w-1/3 text-sm font-bold">
                    ID Induk:
                </label>
                <input
                    name="i_idinduk"
                    value={formData.data.i_idinduk || ""}
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
                    value={getAplikasiValue(formData.data.i_idaplikasi)}
                    onChange={handleChange}
                    className="border-gray-300 w-2/3 rounded-md border p-2"
                >
                    <option value="1">Aktif</option>
                    <option value="0">Tidak Aktif</option>
                </select>
                </div>
                <div className="mb-4 flex items-center">
                    <label className="text-gray-700 mb-2 block w-1/3 text-sm font-bold">
                        No. Urut:
                    </label>
                    <input
                        name="no_urut"
                        value={formData.data.no_urut || ""}
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
                        value={formData.data.n_menu || ""}
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
                        value={formData.data.e_menu || ""}
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
                        value={formData.data.n_link || ""}
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
                        value={getAplikasiValue(formData.data.c_aktif)}
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

                <div className="flex justify-end space-x-4">
                <button
                    type="button"
                    onClick={() => router.push('/menu')}  // Navigate to /menu when clicked
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

export default UserEditMenu;
