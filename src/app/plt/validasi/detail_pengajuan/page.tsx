import DetailPengajuan from "@/components/Plt/detail_pengajuan";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/BreadcrumbPlh";

export const metadata: Metadata = {
  title: "PLT | Detail Pengajuan Pelaksana Tugas (PLT)",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Detail Pengajuan Pelaksana Tugas (PLT)" />
        <DetailPengajuan />
      </DefaultLayout>
    </>
  );
}
