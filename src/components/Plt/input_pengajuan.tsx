"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

export default function InputPengajuan() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Function untuk mengubah langkah form
  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleBack = () => {
    setIsSubmitted(false);
  };

  return (
    <>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="col-span-12 xl:col-span-12">
          <div className="mx-auto mt-5 rounded-md bg-white p-6 shadow-md">
            {!isSubmitted ? (
              <>
                <h1 className="mb-4 text-xl font-bold">
                  Pengajuan Pelaksana Tugas (PLT)
                </h1>
                {/* Form bagian pertama yang tetap */}
                <div className="mb-6 grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-700 block">
                      Tahun Pengajuan:
                    </label>
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
                      Data Yang Berhalangan
                    </li>
                    <li
                      onClick={() => setStep(2)}
                      className={`cursor-pointer pb-2 ${
                        step === 2 ? "border-b-2 border-blue-500 font-bold" : ""
                      }`}
                    >
                      Data Pengajuan Pelaksana Tugas (PLT)
                    </li>
                    <li
                      onClick={() => setStep(3)}
                      className={`cursor-pointer pb-2 ${
                        step === 3 ? "border-b-2 border-blue-500 font-bold" : ""
                      }`}
                    >
                      Pejabat Yang Berwenang Memberikan Penugasan
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
                    </div>
                    <div className="mb-6 space-y-4">
                      <div className="flex items-center">
                        <label htmlFor="nipnrk" className="w-1/4">
                          NIP/NRK:
                        </label>
                        <div className="flex w-3/4">
                          <input
                            type="text"
                            id="nppnrk"
                            className="border-gray-300 w-full rounded-md border p-2"
                          />
                          <button className="bg-gray-200 ml-2 rounded-md border p-2">
                            <FontAwesomeIcon icon={faSearch} />
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <label className="text-gray-700 w-1/4">
                          Nama Lengkap:
                        </label>
                        <input
                          type="text"
                          className="border-gray-300 w-3/4 rounded-md border p-2"
                        />
                      </div>

                      <div className="flex items-center">
                        <label className="text-gray-700 w-1/4">Jabatan:</label>
                        <select className="border-gray-300 w-3/4 rounded-md border p-2">
                          <option value=""></option>
                        </select>
                      </div>

                      <div className="flex items-center">
                        <label className="text-gray-700 w-1/4">
                          Pangkat/Gol:
                        </label>
                        <input
                          type="text"
                          className="border-gray-300 w-3/4 rounded-md border p-2"
                        />
                      </div>

                      <div className=" grid grid-cols-2 gap-4">
                        <h2 className="mt-4 text-lg font-bold">Keterangan</h2>
                      </div>

                      <div className="flex items-center">
                        <label className="text-gray-700 w-1/4">
                          Kode Alasan:
                        </label>
                        <select className="border-gray-300 w-3/4 rounded-md border p-2">
                          <option value=""></option>
                        </select>
                      </div>

                      <div className="flex items-center">
                        <label className="text-gray-700 w-1/4">
                          Status Berhalangan:
                        </label>
                        <select className="border-gray-300 w-3/4 rounded-md border p-2">
                          <option value="Tetap">Tetap</option>
                        </select>
                      </div>

                      <div className="flex items-center">
                        <label className="text-gray-700 w-1/4">Alasan:</label>
                        <textarea className="border-gray-300 w-3/4 rounded-md border p-2" />
                      </div>

                      <div className="flex items-center">
                        <label className="text-gray-700 w-1/4">
                          Upload Pendukung Alasan:
                        </label>
                        <div className="flex w-3/4 items-center space-x-2">
                          <button className="rounded-md bg-blue-500 px-4 py-2 text-white">
                            Lihat
                          </button>
                          <button className="rounded-md bg-blue-500 px-4 py-2 text-white">
                            Unggah
                          </button>
                          <span>No file chosen</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* step2 jangan ditambahkan kode */}
                {step === 2 && (
                  <div>
                    <div className="mb-6 space-y-4">
                      <div className=" grid grid-cols-2 gap-4">
                        <h2 className="text-lg font-bold">Status Pengajuan</h2>
                      </div>

                      <div className="flex items-center">
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

                      <div className="flex items-center">
                        <label htmlFor="nipnrk" className="w-1/4">
                          No. Surat Perintah:
                        </label>
                        <div className="flex w-3/4">
                          <input
                            type="text"
                            id="nppnrk"
                            className="border-gray-300 w-full rounded-md border p-2"
                          />
                          <button className="bg-gray-200 ml-2 rounded-md border p-2">
                            <FontAwesomeIcon icon={faSearch} />
                          </button>
                        </div>
                      </div>

                      <div className=" grid grid-cols-2 gap-4">
                        <h2 className="text-lg font-bold">
                          Informasi Pelaksana Tugas
                        </h2>
                      </div>

                      <div className="flex items-center">
                        <label htmlFor="nipnrk" className="w-1/4">
                          NIP/NRK:
                        </label>
                        <div className="flex w-3/4">
                          <input
                            type="text"
                            id="nppnrk"
                            className="border-gray-300 w-full rounded-md border p-2"
                          />
                          <button className="bg-gray-200 ml-2 rounded-md border p-2">
                            <FontAwesomeIcon icon={faSearch} />
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <label className="text-gray-700 w-1/4">
                          Nama Lengkap:
                        </label>
                        <input
                          type="text"
                          className="border-gray-300 w-3/4 rounded-md border p-2"
                        />
                      </div>

                      <div className="flex items-center">
                        <label className="text-gray-700 w-1/4">Jabatan:</label>
                        <select className="border-gray-300 w-3/4 rounded-md border p-2">
                          <option value=""></option>
                        </select>
                      </div>

                      <div className="flex items-center">
                        <label className="text-gray-700 w-1/4">
                          Pangkat/Gol:
                        </label>
                        <input
                          type="text"
                          className="border-gray-300 w-3/4 rounded-md border p-2"
                        />
                      </div>

                      <div className=" grid grid-cols-2 gap-4">
                        <h2 className="mb-4 text-lg font-bold">
                          Informasi Pelaksana Tugas
                        </h2>
                      </div>

                      <div className="flex items-center">
                        <label className="text-gray-700 w-1/4">
                          Data Kompetensi:
                        </label>
                        <div className="flex w-3/4 items-center space-x-2">
                          <button className="rounded-md bg-blue-500 px-4 py-2 text-white">
                            Lihat
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <label className="text-gray-700 w-1/4">
                          Data Kinerja:
                        </label>
                        <div className="flex w-3/4 items-center space-x-2">
                          <button className="rounded-md bg-blue-500 px-4 py-2 text-white">
                            Lihat
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <label className="text-gray-700 w-1/4">
                          Batas Usia Pensiun:
                        </label>
                        <input
                          type="date"
                          className="border-gray-300 w-3/4 rounded-md border p-2"
                        />
                      </div>
                      <div className="flex items-center">
                        <label className="text-gray-700 w-1/4"></label>
                        <small className="text-gray-500 block">
                          Maks. 1 Tahun sebelum Batas Pensiun
                        </small>
                      </div>

                      <div className=" grid grid-cols-2 gap-4">
                        <h2 className="mb-4 text-lg font-bold">Waktu</h2>
                      </div>

                      <div className="flex items-center">
                        <label className="text-gray-700 w-1/4">
                          Tanggal Mulai:
                        </label>
                        <input
                          type="date"
                          className="border-gray-300 w-3/4 rounded-md border p-2"
                        />
                      </div>

                      <div className="flex items-center">
                        <label className="text-gray-700 w-1/4">
                          Tanggal Selesai:
                        </label>
                        <input
                          type="date"
                          className="border-gray-300 w-3/4 rounded-md border p-2"
                        />
                      </div>
                      <div className="flex items-center">
                        <label className="text-gray-700 w-1/4"></label>
                        <small className="text-gray-500 block">
                          Jumlah Hari / Bulan (Max. 3 Bulan)
                        </small>
                      </div>
                    </div>
                  </div>
                )}

                {/* step3 jangan ditambahkan kode */}
                {step === 3 && (
                  <div>
                    <div className=" grid grid-cols-2 gap-4">
                      <h2 className="mb-4 text-lg font-bold">
                        Pejabat Yang Berwenang Memberikan Penugasan
                      </h2>
                    </div>
                    <div className="mb-6 space-y-4">
                      <div className="flex items-center">
                        <label htmlFor="nipnrk" className="w-1/4">
                          NIP/NRK:
                        </label>
                        <div className="flex w-3/4">
                          <input
                            type="text"
                            id="nppnrk"
                            className="border-gray-300 w-full rounded-md border p-2"
                          />
                          <button className="bg-gray-200 ml-2 rounded-md border p-2">
                            <FontAwesomeIcon icon={faSearch} />
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <label className="text-gray-700 w-1/4">
                          Nama Lengkap:
                        </label>
                        <input
                          type="text"
                          className="border-gray-300 w-3/4 rounded-md border p-2"
                        />
                      </div>

                      <div className="flex items-center">
                        <label className="text-gray-700 w-1/4">Jabatan:</label>
                        <select className="border-gray-300 w-3/4 rounded-md border p-2">
                          <option value=""></option>
                        </select>
                      </div>

                      <div className="flex items-center">
                        <label className="text-gray-700 w-1/4">
                          Pangkat/Gol:
                        </label>
                        <input
                          type="text"
                          className="border-gray-300 w-3/4 rounded-md border p-2"
                        />
                      </div>
                      <div className="flex items-center">
                        <label className="text-gray-700 w-1/4">
                          Upload Surat Perintah:
                        </label>
                        <div className="flex w-3/4 items-center space-x-2">
                          <button className="rounded-md bg-blue-500 px-4 py-2 text-white">
                            Lihat
                          </button>
                          <button className="rounded-md bg-blue-500 px-4 py-2 text-white">
                            Unggah
                          </button>
                          <span>No file chosen</span>
                        </div>
                      </div>
                      <div className="mt--2 flex items-center">
                        <label className="text-gray-700 w-1/4"></label>
                        <small className="text-gray-500 block">
                          *Maksimum pdf size 1
                        </small>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigasi langkah */}
                <div className="flex justify-end space-x-2">
                  {step > 1 && (
                    <button
                      onClick={prevStep}
                      className="bg-gray-200 rounded-md px-4 py-2 text-white"
                    >
                      Sebelumnya
                    </button>
                  )}

                  {step < 3 && (
                    <button
                      onClick={nextStep}
                      className="rounded-md bg-blue-500 px-4 py-2 text-white"
                    >
                      Selanjutnya
                    </button>
                  )}

                  {step === 3 && (
                    <button
                      onClick={handleSubmit}
                      className="rounded-md bg-green-500 px-4 py-2 text-white"
                    >
                      Simpan
                    </button>
                  )}
                </div>
              </>
            ) : (
              <div>
                <h1 className="mb-6 text-2xl font-bold">
                  Detail Pengajuan Pelaksana Tugas (PLT)
                </h1>

                <Section
                  title="Data Yang Berhalangan"
                  titleClassName="bg-blue-500 text-white"
                >
                  <FormRow label="NIP/NRK :" />
                  <FormRow label="Kode Alasan :" />
                  <FormRow label="Nama Lengkap :" />
                  <FormRow label="Jabatan :" />
                  <FormRow label="Pangkat/Gol :" />
                  <FormRow label="Keterangan" isTextArea />
                  <FormRow
                    label="Status Berhalangan :"
                    isSelect
                    options={["Tetap/Sementara"]}
                  />
                  <FormRow label="Alasan :" isTextArea />
                  <FormRow
                    label="Upload Pendukung Alasan :"
                    isFile
                    fileName="Surat-Pendukung-Alasan.pdf"
                  />
                </Section>

                <Section
                  title="Data Pengajuan Pelaksana Tugas (PLT)"
                  titleClassName="bg-blue-500 text-white"
                >
                  <FormRow
                    label="Status Pengajuan"
                    isRadio
                    options={["Baru", "Perpanjangan"]}
                  />
                  <FormRow label="No. Surat Perintah" />
                  <h2 className="mb-2 mt-4 font-bold">
                    Informasi Pelaksana Tugas
                  </h2>
                  <FormRow label="NIP/NRK :" />
                  <FormRow label="Nama Lengkap :" />
                  <FormRow label="Jabatan :" />
                  <FormRow label="Pangkat/Gol :" />
                  <h2 className="mb-2 mt-4 font-bold">
                    Informasi Pelaksana Tugas
                  </h2>
                  <FormRow label="Data Kompetensi" isFile fileName="Lihat" />
                  <FormRow label="Data Kinerja" isFile fileName="Lihat" />
                  <FormRow label="Batas Usia Pensiun :" isDate />
                  <p className="text-gray-500 text-sm">
                    Maks. 1 Tahun sebelum Batas Pensiun
                  </p>
                  <h2 className="mb-2 mt-4 font-bold">Waktu</h2>
                  <FormRow label="Tanggal Mulai :" isDate />
                  <FormRow label="Tanggal Selesai :" isDate />
                  <FormRow label="Jumlah Hari / Bulan (Max. 3 Bulan)" />
                </Section>

                <Section
                  title="Pejabat Yang Berwenang Memberikan Penugasan"
                  titleClassName="bg-blue-500 text-white"
                >
                  <FormRow label="NIP/NRK :" />
                  <FormRow label="Nama Lengkap :" />
                  <FormRow label="Jabatan :" />
                  <FormRow label="Pangkat/Gol :" />
                  <FormRow
                    label="Upload Surat Perintah :"
                    isFile
                    fileName="Surat-Perintah.pdf"
                  />
                </Section>

                <div className="mt-6 flex justify-between">
                  <button
                    className="rounded border bg-white px-4 py-2 text-blue-500"
                    onClick={handleBack}
                  >
                    ← Kembali
                  </button>
                  <button className="rounded bg-blue-500 px-4 py-2 text-white">
                    Ajukan PLT
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

// Komponen untuk Row di Form
const FormRow: React.FC<{
  label: string;
  isTextArea?: boolean;
  isSelect?: boolean;
  isRadio?: boolean;
  options?: string[];
  isFile?: boolean;
  isDate?: boolean;
  fileName?: string; // Menjadikan fileName opsional
}> = ({
  label,
  isTextArea = false,
  isSelect = false,
  isRadio = false,
  options = [],
  isFile = false,
  isDate = false,
  fileName,
}) => {
  return (
    <div className="mb-4 flex items-center">
      <label className="text-gray-700 block w-1/3">{label}</label>
      <div className="w-2/3">
        {isTextArea ? (
          <textarea className="border-gray-300 w-full rounded-md border p-2" />
        ) : isSelect ? (
          <select className="border-gray-300 w-full rounded-md border p-2">
            {options.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </select>
        ) : isRadio ? (
          <div className="flex space-x-4">
            {options.map((option, index) => (
              <label key={index} className="flex items-center">
                <input type="radio" className="mr-2" /> {option}
              </label>
            ))}
          </div>
        ) : isFile ? (
          <div className="flex items-center">
            <button className="bg-gray-200 text-gray-700 mr-2 rounded px-2 py-1">
              Pilih File
            </button>
            <span className="text-sm">{fileName}</span>
          </div>
        ) : isDate ? (
          <input
            type="date"
            className="border-gray-300 w-full rounded-md border p-2"
          />
        ) : (
          <input
            type="text"
            className="border-gray-300 w-full rounded-md border p-2"
          />
        )}
      </div>
    </div>
  );
};

interface SectionProps {
  title: string;
  titleClassName?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({
  title,
  titleClassName,
  children,
}) => {
  return (
    <div className="mb-6">
      <h2 className={`text-lg rounded p-2 font-semibold ${titleClassName}`}>{title}</h2>
      <div className="rounded p-4">{children}</div>
    </div>
  );
};
