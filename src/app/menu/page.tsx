import ViewMenu from "@/components/Admin/Menu";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/BreadcrumbAdmin";

export const metadata: Metadata = {
  title: "Menu",
  description: "",
};

const Menu = () => {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Menu" />
        <ViewMenu />
      </DefaultLayout>
    </>
  );
};

export default Menu;
