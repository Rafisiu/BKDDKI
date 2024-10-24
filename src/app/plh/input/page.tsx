import ViewPLHInput from "@/components/Plh/PlhInput";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/BreadcrumbPlh";

export const metadata: Metadata = {
  title: "PLH Input",
};

export default function PLHInput() {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Pengajuan Pelaksana Harian (PLH)" />
        <ViewPLHInput />
      </DefaultLayout>
    </>
  );
}
