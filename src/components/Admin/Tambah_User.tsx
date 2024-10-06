"use client";

import PLH from "@/components/Plh/Plh";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/BreadcrumbPlh";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


const TambahUser = () => {
return (
    <>
    <div className="grid w-full gap-9">
        <div className="flex flex-col gap-9 w-full">
        {/* <!-- Input Fields --> */}
        <div className="rounded-sm w-full border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className=" p-8 rounded-lg w-1/2">
            <form >
                <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nip-nrk">
                                NIP/NRK :
                            </label>
                            <div className="flex">
                                <input
                                    id="nip-nrk"
                                    type="text"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                                <button className="ml-2 p-2 bg-gray-200 rounded">
                                    <i className="fas fa-search"></i>
                                </button>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nama-lengkap">
                                Nama Lengkap :
                            </label>
                            <input
                                id="nama-lengkap"
                                type="text"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="jabatan">
                                Jabatan :
                            </label>
                            <input
                                id="jabatan"
                                type="text"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pangkat-gol">
                                Pangkat/Gol :
                            </label>
                            <input
                                id="pangkat-gol"
                                type="text"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Pilih Otoritas:
                            </label>
                            <div className="flex flex-col">
                                {["SKPD Input Pengajuan", "SKPD Verifikasi", "SKPD Validasi", "BKD Verifikasi", "BKD Validasi", "BKD Input (Kelompok A)", "Pusdatin"].map((item, index) => (
                                    <label key={index} className="inline-flex items-center mt-2">
                                        <input type="checkbox" className="form-checkbox h-5 w-5 text-gray-600" />
                                        <span className="ml-2 text-gray-700">{item}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
                                Status :
                            </label>
                            <select
                                id="status"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            >
                                <option>Aktif</option>
                                <option>Non-Aktif</option>
                            </select>
                        </div>
                        <div className="flex justify-end mt-8">
                            <button className="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded mr-4">
                                Kembali
                            </button>
                            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
                                Simpan
                            </button>
                        </div>
            </form>
            </div>
        </div>

        </div>
    </div>
    </>
);
};

export default TambahUser;

