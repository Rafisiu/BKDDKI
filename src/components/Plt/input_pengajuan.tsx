"use client";

import PLH from "@/components/Plh/Plh";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/BreadcrumbPlh";
import { useState } from "react";

export default function InputPengajuan() {
  const [step, setStep] = useState(1);

  // Function untuk mengubah langkah form
  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="col-span-12 xl:col-span-12">
          <div className="mx-auto mt-5 rounded-md bg-white p-6 shadow-md">
            <h1 className="mb-4 text-xl font-bold">
              Pengajuan Pelaksana Tugas (PLT)
            </h1>

            {/* Form bagian pertama yang tetap */}
            <div className="mb-6 grid grid-cols-2 gap-4">
              <div>
                <label className="text-gray-700 block">Tahun Pengajuan:</label>
                <input
                  type="text"
                  className="border-gray-300 w-full rounded-md border p-2"
                />
              </div>
              <div>
                <label className="text-gray-700 block">
                  Diajukan Kepada (SKPD/Subunit):
                </label>
                <select className="border-gray-300 w-full rounded-md border p-2">
                  <option value=""></option>
                </select>
              </div>
              <div>
                <label className="text-gray-700 block">
                  Unit Yang Mengajukan:
                </label>
                <input
                  type="text"
                  className="border-gray-300 w-full rounded-md border p-2"
                />
              </div>
              <div>
                <label className="text-gray-700 block">
                  Jenjang Pejabat (TTD):
                </label>
                <select className="border-gray-300 w-full rounded-md border p-2">
                  <option value=""></option>
                </select>
              </div>
              <div>
                <label className="text-gray-700 block">
                  No. Surat Perintah:
                </label>
                <input
                  type="text"
                  className="border-gray-300 w-full rounded-md border p-2"
                />
              </div>
              <div>
                <label className="text-gray-700 block">TTD:</label>
                <input
                  type="text"
                  className="border-gray-300 w-full rounded-md border p-2"
                />
              </div>
            </div>

            <div className="border-gray-300 mb-4 border-b"></div>

            {/* Tabs Navigation */}
            <div className="mb-4">
              <ul className="flex space-x-4 border-b">
                <li
                  onClick={() => setStep(1)}
                  className={`cursor-pointer pb-2 ${
                    step === 1 ? "border-b-2 border-blue-500 font-bold" : ""
                  }`}
                >
                  Data Berhalangan
                </li>
                <li
                  onClick={() => setStep(2)}
                  className={`cursor-pointer pb-2 ${
                    step === 2 ? "border-b-2 border-blue-500 font-bold" : ""
                  }`}
                >
                  Data PLT
                </li>
                <li
                  onClick={() => setStep(3)}
                  className={`cursor-pointer pb-2 ${
                    step === 3 ? "border-b-2 border-blue-500 font-bold" : ""
                  }`}
                >
                  Pejabat Berwenang
                </li>
              </ul>
            </div>

            {/* Bagian form berdasarkan step */}
            {step === 1 && (
              <div>
                <h2 className="mb-4 text-lg font-bold">
                  Data Yang Berhalangan
                </h2>
                <div className="mb-6 grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-700 block">NIP/NIK:</label>
                    <div className="relative">
                      <input
                        type="text"
                        className="border-gray-300 w-full rounded-md border p-2"
                      />
                      <i className="fas fa-search text-gray-500 absolute right-3 top-3"></i>
                    </div>
                  </div>
                  <div>
                    <label className="text-gray-700 block">Nama Lengkap:</label>
                    <input
                      type="text"
                      className="border-gray-300 w-full rounded-md border p-2"
                    />
                  </div>
                  <div>
                    <label className="text-gray-700 block">Jabatan:</label>
                    <select className="border-gray-300 w-full rounded-md border p-2">
                      <option value=""></option>
                    </select>
                  </div>
                  <div>
                    <label className="text-gray-700 block">Pangkat/Gol:</label>
                    <input
                      type="text"
                      className="border-gray-300 w-full rounded-md border p-2"
                    />
                  </div>
                  <div>
                    <label className="text-gray-700 block">Keterangan:</label>
                    <select className="border-gray-300 w-full rounded-md border p-2">
                      <option value=""></option>
                    </select>
                  </div>
                  <div>
                    <label className="text-gray-700 block">
                      Status Berhalangan:
                    </label>
                    <select className="border-gray-300 w-full rounded-md border p-2">
                      <option value="Tetap">Tetap</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-gray-700 block">Alasan:</label>
                    <input
                      type="text"
                      className="border-gray-300 w-full rounded-md border p-2"
                    />
                  </div>
                  <div>
                    <label className="text-gray-700 block">
                      Upload Pendukung Alasan:
                    </label>
                    <div className="flex items-center space-x-2">
                      <button className="rounded-md bg-blue-500 px-4 py-2 text-white">
                        Lihat
                      </button>
                      <button className="rounded-md bg-blue-500 px-4 py-2 text-white">
                        Unggah
                      </button>
                      <span>No file chosen</span>
                    </div>
                    <p className="text-gray-500 mt-1 text-sm">
                      *Maksimum pdf size 3MB
                    </p>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="mb-4 text-lg font-bold">
                  Data Pengajuan Pelaksana Tugas (PLT)
                </h2>
                <div className="mb-6 grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-700 block">NIP/NIK PLT:</label>
                    <input
                      type="text"
                      className="border-gray-300 w-full rounded-md border p-2"
                    />
                  </div>
                  <div>
                    <label className="text-gray-700 block">
                      Nama Lengkap PLT:
                    </label>
                    <input
                      type="text"
                      className="border-gray-300 w-full rounded-md border p-2"
                    />
                  </div>
                  <div>
                    <label className="text-gray-700 block">Jabatan PLT:</label>
                    <select className="border-gray-300 w-full rounded-md border p-2">
                      <option value=""></option>
                    </select>
                  </div>
                  <div>
                    <label className="text-gray-700 block">
                      Pangkat/Gol PLT:
                    </label>
                    <input
                      type="text"
                      className="border-gray-300 w-full rounded-md border p-2"
                    />
                  </div>
                  <div>
                    <label className="text-gray-700 block">
                      Keterangan PLT:
                    </label>
                    <input
                      type="text"
                      className="border-gray-300 w-full rounded-md border p-2"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="mb-4 text-lg font-bold">
                  Pejabat Yang Berwenang Memberikan Penugasan
                </h2>
                <div className="mb-6 grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-700 block">NIP Pejabat:</label>
                    <input
                      type="text"
                      className="border-gray-300 w-full rounded-md border p-2"
                    />
                  </div>
                  <div>
                    <label className="text-gray-700 block">Nama Pejabat:</label>
                    <input
                      type="text"
                      className="border-gray-300 w-full rounded-md border p-2"
                    />
                  </div>
                  <div>
                    <label className="text-gray-700 block">
                      Jabatan Pejabat:
                    </label>
                    <select className="border-gray-300 w-full rounded-md border p-2">
                      <option value=""></option>
                    </select>
                  </div>
                  <div>
                    <label className="text-gray-700 block">
                      Pangkat/Gol Pejabat:
                    </label>
                    <input
                      type="text"
                      className="border-gray-300 w-full rounded-md border p-2"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Navigasi langkah */}
            <div className="flex justify-between">
              <button
                onClick={prevStep}
                className={`${
                  step === 1 ? "hidden" : "bg-gray-200"
                } rounded-md px-4 py-2 text-white`}
              >
                Sebelumnya
              </button>

              {step < 3 && (
                <button
                  onClick={nextStep}
                  className="rounded-md bg-blue-500 px-4 py-2 text-white"
                >
                  Berikutnya
                </button>
              )}
              {step === 3 && (
                <button className="rounded-md bg-green-500 px-4 py-2 text-white">
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
