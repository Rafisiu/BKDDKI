import ViewPLHClose from "@/components/Plh/PlhClose";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/BreadcrumbPlh";

export const metadata: Metadata = {
  title: "PLH Close",
};

export default function PLHClose() {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Close SP Pelaksana Harian (PLH)" />
        <ViewPLHClose />
      </DefaultLayout>
    </>
  );
}
