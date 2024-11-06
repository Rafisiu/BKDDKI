import DetailPengajuan from "@/components/Plh/detail_pengajuan";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/BreadcrumbPlh";

export const metadata: Metadata = {
  title: "PLH | Detail Pengajuan Pelaksana Harian (PLH)",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Detail Pengajuan Pelaksana Harian (PLH)" />
        <DetailPengajuan />
      </DefaultLayout>
    </>
  );
}
