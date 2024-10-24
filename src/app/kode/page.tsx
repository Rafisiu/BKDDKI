import ViewKode from "@/components/Admin/Kode";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/BreadcrumbAdmin";

export const metadata: Metadata = {
  title: "Kode",
  description: "",
};

const Kode = () => {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Kode" />
        <ViewKode />
      </DefaultLayout>
    </>
  );
};

export default Kode;
