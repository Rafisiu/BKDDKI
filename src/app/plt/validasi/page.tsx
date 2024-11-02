import ViewPLTValidasi from "@/components/Plt/PltValidasi";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/BreadcrumbPlt";

export const metadata: Metadata = {
  title: "PLT Validasi",
};

export default function PLTValidasi() {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Validasi Pengajuan Pelaksana Tugas (PLT)" />
        <ViewPLTValidasi />
      </DefaultLayout>
    </>
  );
}
