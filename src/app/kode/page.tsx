import Otoritas from "@/components/Admin/Otoritas";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/BreadcrumbAdmin";

export const metadata: Metadata = {
  title: "Kode",
  description: "",
};

const Home = () => {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Kode" />
        <Otoritas />
      </DefaultLayout>
    </>
  );
};

export default Home;
