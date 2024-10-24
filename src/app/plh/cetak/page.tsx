import ViewPLHCetak from "@/components/Plh/PlhCetak";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/BreadcrumbPlh";

export const metadata: Metadata = {
  title: "PLH Cetak",
};

export default function PLHCetak() {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Cetak SP Pelaksana Harian (PLH)" />
        <ViewPLHCetak />
      </DefaultLayout>
    </>
  );
}
