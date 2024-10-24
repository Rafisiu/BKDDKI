import ViewPLTClose from "@/components/Plt/PltClose";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/BreadcrumbPlt";

export const metadata: Metadata = {
  title: "PLT Close",
};

export default function PLTClose() {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Close SP Pelaksana Tugas (PLT)" />
        <ViewPLTClose />
      </DefaultLayout>
    </>
  );
}
