import PLH from "@/components/Plh/Plh";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/BreadcrumbPlt";
import InputPengajuan from "@/components/Plt/input_pengajuan";

export const metadata: Metadata = {
  title:
    "PLT | Input Pengajuan",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Input Pengajuan" />
        <InputPengajuan />
      </DefaultLayout>
    </>
  );
}
