"use client";

import PLH from "@/components/Plh/Plh";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/BreadcrumbPlh";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


const UserDetail = () => {
return (
    <>
    <div className="grid w-full gap-9">
        <div className="flex flex-col gap-9 w-full">
        {/* <!-- Input Fields --> */}
        <div className="rounded-sm w-full border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className=" p-8 rounded-lg w-1/2">
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">NIP/NRK:</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Nama Lengkap:</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Jabatan:</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Pangkat/Gol:</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Pilih Otoritas:</label>
                        <div className="flex items-center mb-2">
                            <input type="checkbox" className="mr-2 leading-tight" />
                            <span className="text-gray-700">SKPD Verifikasi</span>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" className="mr-2 leading-tight" />
                            <span className="text-gray-700">SKPD Validasi</span>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Status:</label>
                        <select className="border-gray-300 w-full rounded-md border p-2">
                            <option>Aktif</option>
                            <option>Non-Aktif</option>
                        </select>
                    </div>
                    <div className="flex justify-end">
                        <button type="button" className="bg-gray-300 text-gray-700 py-2 px-4 rounded mr-2">Kembali</button>
                        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">Simpan</button>
                    </div>
                </form>
            </div>
        </div>

        </div>
    </div>
    </>
);
};

export default UserDetail;

