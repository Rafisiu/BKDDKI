import ViewPLHValidasi from "@/components/Plh/PlhValidasi";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/BreadcrumbPlh";

export const metadata: Metadata = {
  title: "PLH Validasi",
};

export default function PLHValidasi() {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Validasi Pengajuan Pelaksana Harian (PLH)" />
        <ViewPLHValidasi />
      </DefaultLayout>
    </>
  );
}
