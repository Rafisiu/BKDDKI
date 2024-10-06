import PLT from "@/components/Plt/Plt";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/BreadcrumbPlt";

export const metadata: Metadata = {
  title:
    "PLT",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Pengajuan Pelaksana Tugas (PLT)" />
        <PLT />
      </DefaultLayout>
    </>
  );
}
