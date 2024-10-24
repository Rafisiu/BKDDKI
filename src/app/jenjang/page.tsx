import ViewJenjang from "@/components/Admin/Jenjang";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/BreadcrumbAdmin";

export const metadata: Metadata = {
  title: "Jenjang",
  description: "",
};

const Jenjang = () => {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Jenjang" />
        <ViewJenjang />
      </DefaultLayout>
    </>
  );
};

export default Jenjang;
