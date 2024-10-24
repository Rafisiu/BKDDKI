import ViewPLTInput from "@/components/Plt/PltInput";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/BreadcrumbPlt";

export const metadata: Metadata = {
  title: "PLT Input",
};

export default function PLTInput() {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Pengajuan Pelaksana Tugas (PLT)" />
        <ViewPLTInput />
      </DefaultLayout>
    </>
  );
}
