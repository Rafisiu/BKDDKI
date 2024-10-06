import Otoritas from "@/components/Admin/Otoritas";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/BreadcrumbAdmin";

export const metadata: Metadata = {
  title: "Menu",
  description: "",
};

const Home = () => {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Menu" />
        <Otoritas />
      </DefaultLayout>
    </>
  );
};

export default Home;
