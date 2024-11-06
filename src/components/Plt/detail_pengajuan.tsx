"use client";

import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import Loader from "@/components/common/Loader";
import { useRouter } from "next/navigation";

export default function InputPengajuan() {
  const router = useRouter();

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
  const handleBack = () => {
    router.push("/plt/validasi"); // Navigasi ke /plh/validasi
  };

  //fungsi handle file pdf
  const fileInputPendukungRef = useRef<HTMLInputElement | null>(null);
  const fileInputSuratPerintahRef = useRef<HTMLInputElement | null>(null);

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

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulasi loading dengan delay
    const timer = setTimeout(() => setLoading(false), 1000);

    // Cleanup timer saat komponen unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <form action="">
        <div>
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
            <FormRow label="Alasan :" value={formData.alasan} isTextArea />
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
            <FormRow label="No. Surat Perintah" value={formData.noSurat} />
            <h2 className="mb-2 mt-4 font-bold">Informasi Pelaksana Tugas</h2>
            <FormRow label="NIP/NRK :" value={formData.nipTugas} />
            <FormRow label="Nama Lengkap :" value={formData.namaTugas} />
            <FormRow label="Jabatan :" value={formData.jabatanTugas} />
            <FormRow label="Pangkat/Gol :" value={formData.pangkatTugas} />
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
            <FormRow label="Nama Lengkap :" value={formData.namaPejabat} />
            <FormRow label="Jabatan :" value={formData.jabatanPejabat} />
            <FormRow label="Pangkat/Gol :" value={formData.pangkatPejabat} />
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
              type="button"
              className="rounded border bg-white px-4 py-2 text-blue-500"
              onClick={handleBack}
            >
              ← Kembali
            </button>
            <button className="rounded bg-blue-500 px-4 py-2 text-white">
              Validasi PLT
            </button>
          </div>
        </div>
      </form>
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
      <h2 className={`rounded p-2 text-lg font-semibold ${titleClassName}`}>
        {title}
      </h2>
      <div className="rounded p-4">{children}</div>
    </div>
  );
};
