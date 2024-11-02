"use client";

import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

export default function InputPengajuan() {
  const [formData, setFormData] = useState({
    //step1
    name: "",
    email: "",
    nip: "",
    jabatan: "",
    pangkat: "",
    kodeAlasan: "",
    statusBerhalangan: "",
    alasan: "",
    filePendukung: null as File | null,
    //step2
    statusPengajuan: "",
    noSurat: "",
    nipTugas: "",
    namaTugas: "",
    jabatanTugas: "",
    pangkatTugas: "",
    tanggalMulai: "",
    tanggalSelesai: "",
    //step3
    nipPejabat: "",
    namaPejabat: "",
    jabatanPejabat: "",
    pangkatPejabat: "",
    fileSP: null as File | null,
    file: null,
  });
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Fungsi untuk mengontrol perubahan input
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value, type } = e.target;

    // Jika input adalah tipe file, proses khusus untuk file
    if (type === "file") {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file && file.type === "application/pdf") {
        setFormData((prevData) => ({
          ...prevData,
          [name]: file,
        }));
      } else {
        alert("Please select a PDF file");
      }
    } else {
      // Proses perubahan untuk tipe lainnya
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  // Fungsi khusus untuk meng-handle perubahan file
  // const handleFileChange = (e: React.FormEvent) => {
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     file: e.target.files[0],
  //   }));
  // };

  // Function untuk mengubah langkah form
  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  // const handleSubmit = () => {
  //   setIsSubmitted(true);
  // };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true); 
    console.log("Data Form:", formData);
    // alert("Form berhasil disubmit!");
  };

  const handleBack = () => {
    setIsSubmitted(false);
    setStep(1); 
  };

  //fungsi upload & lihat pdf
  const [fileSuratPerintah, setFileSuratPerintah] = useState<File | null>(null);

  const fileInputPendukungRef = useRef<HTMLInputElement | null>(null);
  const fileInputSuratPerintahRef = useRef<HTMLInputElement | null>(null);

  const handleFileChangeSuratPerintah = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFileSuratPerintah(selectedFile);
    } else {
      alert("Please select a PDF file");
    }
  };

  const handleUploadPendukungClick = () => {
    fileInputPendukungRef.current?.click();
  };

  const handleUploadSuratPerintahClick = () => {
    fileInputSuratPerintahRef.current?.click();
  };

  const handleViewFilePendukung = () => {
    const file = formData.filePendukung; // Gunakan file dari formData
    if (file) {
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL, "_blank");
    } else {
      alert("No file selected");
    }
  };

  const handleViewFileSuratPerintah = () => {
    const file = formData.fileSP;
    if (file) {
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL, "_blank");
    } else {
      alert("No file selected");
    }
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
                      Diajukan Kepada (BKD/Suban):
                    </label>
                    <input
                      type="text"
                      className="border-gray-300 w-full rounded-md border p-2"
                    />
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
                      <option value="1">Kepala Dinas Pendidikan</option>
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
                            id="nip"
                            name="nip"
                            value={formData.nip}
                            onChange={handleChange}
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
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="border-gray-300 w-3/4 rounded-md border p-2"
                        />
                      </div>

                      <div className="flex items-center">
                        <label className="text-gray-700 w-1/4">Jabatan:</label>
                        <select
                          id="jabatan"
                          name="jabatan"
                          value={formData.jabatan}
                          onChange={handleChange}
                          className="border-gray-300 w-3/4 rounded-md border p-2"
                        >
                          <option value="">Silahkan Pilih Jabatan</option>
                          <option value="Kepala Dinas">Kepala Dinas</option>
                          <option value="Kepala Bagian">Kepala Bagian</option>
                        </select>
                      </div>

                      <div className="flex items-center">
                        <label className="text-gray-700 w-1/4">
                          Pangkat/Gol:
                        </label>
                        <input
                          type="text"
                          id="pangkat"
                          name="pangkat"
                          value={formData.pangkat}
                          onChange={handleChange}
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
                        <select
                          id="kodeAlasan"
                          name="kodeAlasan"
                          value={formData.kodeAlasan}
                          onChange={handleChange}
                          className="border-gray-300 w-3/4 rounded-md border p-2"
                        >
                          <option value="">Silahkan Pilih Kode Alasan</option>
                          <option value="Promosi">Promosi</option>
                          <option value="Luar Kota">Luar Kota</option>
                        </select>
                      </div>

                      <div className="flex items-center">
                        <label className="text-gray-700 w-1/4">
                          Status Berhalangan:
                        </label>
                        <select
                          id="statusBerhalangan"
                          name="statusBerhalangan"
                          value={formData.statusBerhalangan}
                          onChange={handleChange}
                          className="border-gray-300 w-3/4 rounded-md border p-2"
                        >
                          <option value="">Silahkan Pilih Status Berhalangan</option>
                          <option value="Tetap">Tetap</option>
                          <option value="Tidak Tetap">Tidak Tetap</option>
                        </select>
                      </div>

                      <div className="flex items-center">
                        <label className="text-gray-700 w-1/4">Alasan:</label>
                        <textarea
                          id="alasan"
                          name="alasan"
                          value={formData.alasan}
                          onChange={handleChange}
                          className="border-gray-300 w-3/4 rounded-md border p-2"
                        />
                      </div>

                      <div className="flex items-center">
                        <label className="text-gray-700 w-1/4">
                          Upload Pendukung Alasan:
                        </label>
                        <div className="flex w-3/4 items-center space-x-2">
                          <input
                            type="file"
                            accept="application/pdf"
                            id="filePendukung"
                            name="filePendukung"
                            onChange={handleChange}
                            ref={fileInputPendukungRef}
                            className="hidden"
                          />
                          <button
                            onClick={handleUploadPendukungClick}
                            className="rounded-md bg-blue-500 px-4 py-2 text-white"
                          >
                            Unggah
                          </button>
                          <button
                            onClick={handleViewFilePendukung}
                            className="rounded-md bg-zinc-400 px-4 py-2 text-white"
                          >
                            Lihat
                          </button>
                          <span>
                            {formData.filePendukung
                              ? formData.filePendukung.name
                              : "No file chosen"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* step2 jangan ditambahkan kode */}
                {step === 2 && (
                  <div>
                    <div className="mb-6 space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <h2 className="text-lg font-bold">Status Pengajuan</h2>
                      </div>

                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="statusBaru"
                          name="statusPengajuan"
                          value="Baru"
                          checked={formData.statusPengajuan === "Baru"}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <label htmlFor="statusBaru">Baru</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="statusPerpanjangan"
                          name="statusPengajuan" // Nama yang sama untuk grup
                          value="Perpanjangan" // Nilai yang lebih relevan
                          checked={formData.statusPengajuan === "Perpanjangan"}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <label htmlFor="statusPerpanjangan">Perpanjangan</label>
                      </div>

                      <div className="flex items-center">
                        <label htmlFor="nipnrk" className="w-1/4">
                          No. Surat Perintah:
                        </label>
                        <div className="flex w-3/4">
                          <input
                            type="text"
                            id="noSurat"
                            name="noSurat"
                            value={formData.noSurat}
                            onChange={handleChange}
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
                            id="nipTugas"
                            name="nipTugas"
                            value={formData.nipTugas}
                            onChange={handleChange}
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
                          id="namaTugas"
                          name="namaTugas"
                          value={formData.namaTugas}
                          onChange={handleChange}
                          className="border-gray-300 w-3/4 rounded-md border p-2"
                        />
                      </div>

                      <div className="flex items-center">
                        <label className="text-gray-700 w-1/4">Jabatan:</label>
                        <input
                          type="text"
                          id="jabatanTugas"
                          name="jabatanTugas"
                          value={formData.jabatanTugas}
                          onChange={handleChange}
                          className="border-gray-300 w-3/4 rounded-md border p-2"
                        />
                      </div>

                      <div className="flex items-center">
                        <label className="text-gray-700 w-1/4">
                          Pangkat/Gol:
                        </label>
                        <input
                          type="text"
                          id="pangkatTugas"
                          name="pangkatTugas"
                          value={formData.pangkatTugas}
                          onChange={handleChange}
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
                          id="tanggalMulai"
                          name="tanggalMulai"
                          value={formData.tanggalMulai}
                          onChange={handleChange}
                          className="border-gray-300 w-3/4 rounded-md border p-2"
                        />
                      </div>

                      <div className="flex items-center">
                        <label className="text-gray-700 w-1/4">
                          Tanggal Selesai:
                        </label>
                        <input
                          type="date"
                          id="tanggalSelesai"
                          name="tanggalSelesai"
                          value={formData.tanggalSelesai}
                          onChange={handleChange}
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
                            id="nipPejabat"
                            name="nipPejabat"
                            value={formData.nipPejabat}
                            onChange={handleChange}
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
                          id="namaPejabat"
                          name="namaPejabat"
                          value={formData.namaPejabat}
                          onChange={handleChange}
                          className="border-gray-300 w-3/4 rounded-md border p-2"
                        />
                      </div>

                      <div className="flex items-center">
                        <label className="text-gray-700 w-1/4">Jabatan:</label>
                        <input
                          type="text"
                          id="jabatanPejabat"
                          name="jabatanPejabat"
                          value={formData.jabatanPejabat}
                          onChange={handleChange}
                          className="border-gray-300 w-3/4 rounded-md border p-2"
                        />
                      </div>

                      <div className="flex items-center">
                        <label className="text-gray-700 w-1/4">
                          Pangkat/Gol:
                        </label>
                        <input
                          type="text"
                          id="pangkatPejabat"
                          name="pangkatPejabat"
                          value={formData.pangkatPejabat}
                          onChange={handleChange}
                          className="border-gray-300 w-3/4 rounded-md border p-2"
                        />
                      </div>
                      <div className="flex items-center">
                        <label className="text-gray-700 w-1/4">
                          Upload Surat Perintah:
                        </label>
                        <div className="flex w-3/4 items-center space-x-2">
                          <input
                            type="file"
                            accept="application/pdf"
                            id="fileSP"
                            name="fileSP"
                            onChange={handleChange}
                            ref={fileInputSuratPerintahRef}
                            className="hidden"
                          />
                          <button
                            onClick={handleUploadSuratPerintahClick}
                            className="rounded-md bg-blue-500 px-4 py-2 text-white"
                          >
                            Unggah
                          </button>
                          <button
                            onClick={handleViewFileSuratPerintah}
                            className="rounded-md bg-zinc-400 px-4 py-2 text-white"
                          >
                            Lihat
                          </button>
                          <span>
                            {formData.fileSP
                              ? formData.fileSP.name
                              : "No file chosen"}
                          </span>
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
                      className="rounded-md bg-zinc-400 px-4 py-2 text-white"
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
                  <FormRow label="NIP/NRK :" value={formData.nip} />
                  <FormRow label="Nama Lengkap :" value={formData.name} />
                  <FormRow label="Jabatan :" value={formData.jabatan} />
                  <FormRow label="Pangkat/Gol :" value={formData.pangkat} />
                  <h2 className="mb-2 mt-4 font-bold">Keterangan</h2>
                  <FormRow label="Kode Alasan :" value={formData.kodeAlasan} />
                  <FormRow
                    label="Status Berhalangan :"
                    value={formData.statusBerhalangan}
                  />
                  <FormRow
                    label="Alasan :"
                    value={formData.alasan}
                    isTextArea
                  />
                  <FormRow
                    label="Upload Pendukung Alasan :"
                    fileName={
                      formData.filePendukung
                        ? formData.filePendukung.name
                        : "No file chosen"
                    }
                    onViewFile={handleViewFilePendukung}
                    isFile
                  />
                </Section>

                {/* step2 */}
                <Section
                  title="Data Pengajuan Pelaksana Tugas (PLT)"
                  titleClassName="bg-blue-500 text-white"
                >
                  <FormRow
                    label="Status Pengajuan"
                    value={formData.statusPengajuan}
                    isRadio
                    options={["Baru", "Perpanjangan"]}
                  />
                  <FormRow
                    label="No. Surat Perintah"
                    value={formData.noSurat}
                  />
                  <h2 className="mb-2 mt-4 font-bold">
                    Informasi Pelaksana Tugas
                  </h2>
                  <FormRow label="NIP/NRK :" value={formData.nipTugas} />
                  <FormRow label="Nama Lengkap :" value={formData.namaTugas} />
                  <FormRow label="Jabatan :" value={formData.jabatanTugas} />
                  <FormRow
                    label="Pangkat/Gol :"
                    value={formData.pangkatTugas}
                  />
                  <h2 className="mb-2 mt-4 font-bold">Data Kompetensi</h2>
                  <FormRow label="Data Kompetensi" isFile fileName="Lihat" />
                  <FormRow label="Data Kinerja" isFile fileName="Lihat" />
                  <FormRow label="Batas Usia Pensiun :" isDate />
                  <small className="text-gray-500 block ">
                    Maks. 1 Tahun sebelum Batas Pensiun
                  </small>
                  <h2 className="mb-2 mt-4 font-bold">Waktu</h2>
                  <FormRow
                    label="Tanggal Mulai :"
                    value={formData.tanggalMulai}
                    isDate
                  />
                  <FormRow
                    label="Tanggal Selesai :"
                    value={formData.tanggalSelesai}
                    isDate
                  ></FormRow>
                  <small className="text-gray-500 block ">
                    Jumlah Hari / Bulan (Max. 3 Bulan)
                  </small>
                </Section>

                {/* step3 */}
                <Section
                  title="Pejabat Yang Berwenang Memberikan Penugasan"
                  titleClassName="bg-blue-500 text-white"
                >
                  <FormRow label="NIP/NRK :" value={formData.nipPejabat} />
                  <FormRow
                    label="Nama Lengkap :"
                    value={formData.namaPejabat}
                  />
                  <FormRow label="Jabatan :" value={formData.jabatanPejabat} />
                  <FormRow
                    label="Pangkat/Gol :"
                    value={formData.pangkatPejabat}
                  />
                  <FormRow
                    label="Upload Surat Perintah :"
                    isFile
                    fileName={
                      formData.fileSP ? formData.fileSP.name : "No file chosen"
                    }
                    onViewFile={handleViewFileSuratPerintah}
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
  value?: string; // Menambahkan value sebagai opsional
  isTextArea?: boolean;
  isSelect?: boolean;
  isRadio?: boolean;
  options?: string[];
  isFile?: boolean;
  isDate?: boolean;
  fileName?: string;
  fileUrl?: string;
  onViewFile?: () => void;
  children?: React.ReactNode;
}> = ({
  label,
  value,
  isTextArea = false,
  isSelect = false,
  isRadio = false,
  options = [],
  isFile = false,
  isDate = false,
  fileName,
  fileUrl,
  onViewFile,
  children,
}) => {
  return (
    <div className="mb-4 flex items-center">
      <label className="text-gray-700 block w-1/3">{label}</label>
      <div className="w-2/3">
        {isTextArea ? (
          <textarea
            className="border-gray-300 w-full rounded-md border p-2"
            defaultValue={value}
          />
        ) : isSelect ? (
          <select
            className="border-gray-300 w-full rounded-md border p-2"
            defaultValue={value}
          >
            {options.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </select>
        ) : isRadio ? (
          <div className="flex space-x-4">
            {options.map((option, index) => (
              <label key={index} className="flex items-center">
                <input
                  type="radio"
                  className="mr-2"
                  name={label}
                  value={option}
                  checked={value === option}
                />
                {option}
              </label>
            ))}
          </div>
        ) : isFile ? (
          <div className="flex items-center">
            <button
              onClick={onViewFile} // Tambahkan onClick yang memanggil fungsi onViewFile
              className="rounded-md bg-blue-500 px-4 py-2 text-white"
            >
              Lihat
            </button>
            <span className="ml-2 text-sm">{fileName}</span>
          </div>
        ) : isDate ? (
          <input
            type="date"
            className="border-gray-300 w-full rounded-md border p-2"
            defaultValue={value}
          />
        ) : (
          <input
            type="text"
            className="border-gray-300 w-full rounded-md border p-2"
            defaultValue={value}
          />
        )}
      </div>
      {children && <div className="mt-1">{children}</div>}
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