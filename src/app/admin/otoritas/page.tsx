import Otoritas from "@/components/Admin/Otoritas";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/BreadcrumbAdmin";

export const metadata: Metadata = {
  title:
    "Admin | Otoritas",
  description: "",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Otoritas" />
        <Otoritas />
      </DefaultLayout>
    </>
  );
}
