"use client";

import PLH from "@/components/Plh/Plh";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/BreadcrumbPlh";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


const TambahUser = () => {
    return (
      <>
        <div className="grid w-full gap-9">
          <div className="flex w-full flex-col gap-9">
            {/* Input Fields */}
            <div className="w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="w-1/2 rounded-lg p-8">
                <form>
                  {/* NIP/NRK */}
                  <div className="mb-4">
                    <label
                      className="text-gray-700 mb-2 block text-sm font-bold"
                      htmlFor="nip-nrk"
                    >
                      NIP/NRK:
                    </label>
                    <div className="flex">
                      <input
                        id="nip-nrk"
                        name="nip_nrk"
                        type="text"
                        className="text-gray-700 focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none"
                      />
                      <button
                        type="button"
                        className="bg-gray-200 ml-2 rounded p-2"
                      >
                        <FontAwesomeIcon icon={faSearch} />
                      </button>
                    </div>
                  </div>

                  {/* Nama Lengkap */}
                  <div className="mb-4">
                    <label
                      className="text-gray-700 mb-2 block text-sm font-bold"
                      htmlFor="nama-lengkap"
                    >
                      Nama Lengkap:
                    </label>
                    <input
                      id="nama-lengkap"
                      name="nama_lengkap"
                      type="text"
                      className="text-gray-700 focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none"
                    />
                  </div>

                  {/* Jabatan */}
                  <div className="mb-4">
                    <label
                      className="text-gray-700 mb-2 block text-sm font-bold"
                      htmlFor="jabatan"
                    >
                      Jabatan:
                    </label>
                    <input
                      id="jabatan"
                      name="jabatan"
                      type="text"
                      className="text-gray-700 focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none"
                    />
                  </div>

                  {/* Pangkat/Gol */}
                  <div className="mb-4">
                    <label
                      className="text-gray-700 mb-2 block text-sm font-bold"
                      htmlFor="pangkat-gol"
                    >
                      Pangkat/Gol:
                    </label>
                    <input
                      id="pangkat-gol"
                      name="pangkat_gol"
                      type="text"
                      className="text-gray-700 focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none"
                    />
                  </div>

                  {/* Pilih Otoritas */}
                  <div className="mb-4">
                    <label className="text-gray-700 mb-2 block text-sm font-bold">
                      Pilih Otoritas:
                    </label>
                    <div className="flex flex-col">
                      {[
                        "SKPD Input Pengajuan",
                        "SKPD Verifikasi",
                        "SKPD Validasi",
                        "BKD Verifikasi",
                        "BKD Validasi",
                        "BKD Input (Kelompok A)",
                        "Pusdatin",
                      ].map((item, index) => (
                        <label
                          key={index}
                          className="mt-2 inline-flex items-center"
                        >
                          <input
                            type="checkbox"
                            name="otoritas"
                            value={item}
                            className="form-checkbox text-gray-600 h-5 w-5"
                          />
                          <span className="text-gray-700 ml-2">{item}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Status */}
                  <div className="mb-4">
                    <label
                      className="text-gray-700 mb-2 block text-sm font-bold"
                      htmlFor="status"
                    >
                      Status:
                    </label>
                    <select
                      id="status"
                      name="status"
                      className="border-gray-300 w-full rounded-md border p-2"
                    >
                      <option value="aktif">Aktif</option>
                      <option value="non-aktif">Non-Aktif</option>
                    </select>
                  </div>

                  {/* Buttons */}
                  <div className="mt-8 flex justify-end">
                    <button
                      type="button"
                      className="bg-gray-200 text-gray-700 mr-4 rounded px-4 py-2 font-bold"
                    >
                      Kembali
                    </button>
                    <button
                      type="submit"
                      className="rounded bg-blue-500 px-4 py-2 font-bold text-white"
                    >
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

