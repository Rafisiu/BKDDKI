import ViewOPDBKD from "@/components/Admin/OPDBKD";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/BreadcrumbAdmin";

export const metadata: Metadata = {
  title: "OPD BKD",
  description: "",
};

const OPDBKD = () => {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="OPD BKD" />
        <ViewOPDBKD />
      </DefaultLayout>
    </>
  );
};

export default OPDBKD;