import InputPengajuan from "@/components/Plh/input_pengajuan";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/BreadcrumbPlh";

export const metadata: Metadata = {
  title:
    "PLH | Input Pengajuan",
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
