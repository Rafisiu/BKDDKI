import ViewPLTCetak from "@/components/Plt/PltCetak";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/BreadcrumbPlt";
import Loader from "@/components/common/Loader";

export const metadata: Metadata = {
  title: "PLT Cetak",
};

export default function PLTCetak() {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Cetak SP Pelaksana Tugas (PLT)" />
        <ViewPLTCetak />
      </DefaultLayout>
    </>
  );
}
