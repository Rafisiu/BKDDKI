import ViewPLTValidasiBkd from "@/components/Plt/PltValidasi";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/BreadcrumbPlt";

export const metadata: Metadata = {
  title: "PLT Validasi BKD",
};

export default function PLTValidasiBKD() {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="BKD Validasi Pengajuan Pelaksana Tugas (PLT)" />
        <ViewPLTValidasiBkd />
      </DefaultLayout>
    </>
  );
}
