import ViewPLHValidasiBKD from "@/components/Plh/PlhValidasiBkd";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/BreadcrumbPlh";

export const metadata: Metadata = {
  title: "PLH Validasi BKD",
};

export default function PLHValidasiBKD() {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="BKD Validasi Pengajuan Pelaksana Harian (PLH)" />
        <ViewPLHValidasiBKD />
      </DefaultLayout>
    </>
  );
}
