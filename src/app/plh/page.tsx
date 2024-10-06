import PLH from "@/components/Plt/Plt";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/BreadcrumbPlh";

export const metadata: Metadata = {
  title:
    "PLH",
  description: "",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Pengajuan Pelaksana Harian (PLH)" />
        <PLH />
      </DefaultLayout>
    </>
  );
}
