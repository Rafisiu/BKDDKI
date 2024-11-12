import ViewTambahMenu from "@/components/Admin/Menu/TambahMenu";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/BreadcrumbAdmin";

export const metadata: Metadata = {
  title: "Menu | Tambah Menu",
  description: "",
};

const Menu = () => {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Tambah Menu" />
        <ViewTambahMenu />
      </DefaultLayout>
    </>
  );
};

export default Menu;
