"use client";

import PLH from "@/components/Plh/Plh";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/BreadcrumbPlh";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
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
                <div className=" grid grid-cols-2 gap-4">
                  <h2 className="mb-4 text-lg font-bold">
                    Data Yang Berhalangan
                  </h2>
                  <h2 className="mb-4 text-lg font-bold">Keterangan</h2>
                </div>
                <div className="mb-6 grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nppnrk" className="block">
                      NPP/NRK:
                    </label>
                    <div className="flex">
                      <input
                        type="text"
                        id="nppnrk"
                        className="border-gray-300 w-full rounded-md border p-2"
                      />
                      <button className="bg-gray-200 rounded-md border p-2">
                        <FontAwesomeIcon icon={faSearch} />
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="text-gray-700 block">Kode Alasan:</label>
                    <select className="border-gray-300 w-full rounded-md border p-2">
                      <option value=""></option>
                    </select>
                  </div>
                  <div>
                    <label className="text-gray-700 block">Nama Lengkap:</label>
                    <input
                      type="text"
                      className="border-gray-300 w-full rounded-md border p-2"
                    />
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
                    <label className="text-gray-700 block">Jabatan:</label>
                    <select className="border-gray-300 w-full rounded-md border p-2">
                      <option value=""></option>
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
                    <label className="text-gray-700 block">Pangkat/Gol:</label>
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
              <div className="p-4">
                <div className="mb-4">
                  <h2 className="font-bold">Status Pengajuan</h2>
                  <div className="mb-2 flex items-center">
                    <input
                      type="radio"
                      id="baru"
                      name="status"
                      className="mr-2"
                    />
                    <label htmlFor="baru">Baru</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="perpanjangan"
                      name="status"
                      className="mr-2"
                    />
                    <label htmlFor="perpanjangan">Perpanjangan</label>
                  </div>
                </div>

                <div className="mb-4">
                  <h2 className="font-bold">Informasi Pelaksanaan Tugas</h2>
                  <div className="mb-2">
                    <label htmlFor="nppnrk" className="block">
                      NPP/NRK:
                    </label>
                    <div className="flex">
                      <input
                        type="text"
                        id="nppnrk"
                        className="flex-grow border p-2"
                      />
                      <button className="bg-gray-200 border p-2">
                        <FontAwesomeIcon icon={faSearch} />
                      </button>
                    </div>
                  </div>
                  <div className="mb-2">
                    <label htmlFor="nama" className="block">
                      Nama Lengkap:
                    </label>
                    <input
                      type="text"
                      id="nama"
                      className="w-full border p-2"
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="jabatan" className="block">
                      Jabatan:
                    </label>
                    <input
                      type="text"
                      id="jabatan"
                      className="w-full border p-2"
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="pangkat" className="block">
                      Pangkat/Gol.:
                    </label>
                    <input
                      type="text"
                      id="pangkat"
                      className="w-full border p-2"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <h2 className="font-bold">Informasi Pelaksanaan Tugas</h2>
                  <div className="mb-2">
                    <button className="w-full bg-blue-500 p-2 text-white">
                      Lihat
                    </button>
                  </div>
                  <div className="mb-2">
                    <button className="w-full bg-blue-500 p-2 text-white">
                      Lihat
                    </button>
                  </div>
                  <div className="mb-2">
                    <label htmlFor="batas" className="block">
                      Batas Usia Pensiun:
                    </label>
                    <input
                      type="text"
                      id="batas"
                      className="w-full border p-2"
                      placeholder="DD/MM/YYYY"
                    />
                    <small className="text-gray-500 block">
                      Maks. 1 Tahun sebelum Batas Pensiun
                    </small>
                  </div>
                </div>

                <div className="mb-4">
                  <h2 className="font-bold">Waktu</h2>
                  <div className="mb-2">
                    <label htmlFor="tanggalMulai" className="block">
                      Tanggal Mulai:
                    </label>
                    <div className="flex">
                      <input
                        type="text"
                        id="tanggalMulai"
                        className="flex-grow border p-2"
                        placeholder="DD/MM/YYYY"
                      />
                      <button className="bg-gray-200 border p-2">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                      </button>
                    </div>
                  </div>
                  <div className="mb-2">
                    <label htmlFor="tanggalSelesai" className="block">
                      Tanggal Selesai:
                    </label>
                    <div className="flex">
                      <input
                        type="text"
                        id="tanggalSelesai"
                        className="flex-grow border p-2"
                        placeholder="DD/MM/YYYY"
                      />
                      <button className="bg-gray-200 border p-2">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                      </button>
                    </div>
                  </div>
                  <div className="mb-2">
                    <label htmlFor="jumlahHari" className="block">
                      Jumlah Hari / Bulan (Max. 13 Bulan):
                    </label>
                    <input
                      type="text"
                      id="jumlahHari"
                      className="w-full border p-2"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <div className=" grid grid-cols-2 gap-4">
                  <h2 className="mb-4 text-lg font-bold">
                    Data Yang Berhalangan
                  </h2>
                </div>
                <div className="mb-6 grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nppnrk" className="block">
                      NPP/NRK:
                    </label>
                    <div className="flex">
                      <input
                        type="text"
                        id="nppnrk"
                        className="border-gray-300 w-full rounded-md border p-2"
                      />
                      <button className="bg-gray-200 rounded-md border p-2">
                        <FontAwesomeIcon icon={faSearch} />
                      </button>
                    </div>
                  </div>
                  <div>
                  </div>
                  <div>
                    <label className="text-gray-700 block">Nama Lengkap:</label>
                    <input
                      type="text"
                      className="border-gray-300 w-full rounded-md border p-2"
                    />
                  </div>
                  <div>
                  </div>
                  <div>
                    <label className="text-gray-700 block">Jabatan:</label>
                    <input
                      type="text"
                      className="border-gray-300 w-full rounded-md border p-2"
                    />
                  </div>
                  <div>
                  </div>
                  <div>
                    <label className="text-gray-700 block">Pangkat/Gol:</label>
                    <input
                      type="text"
                      className="border-gray-300 w-full rounded-md border p-2"
                    />
                  </div>
                  <div>
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
