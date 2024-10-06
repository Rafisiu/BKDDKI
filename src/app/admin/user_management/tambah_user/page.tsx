import UserManagement from "@/components/Admin/Tambah_User";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/BreadcrumbAdmin";

export const metadata: Metadata = {
  title: "User Management | Tambah User",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="User Management / Tambah User" />
        <UserManagement />
      </DefaultLayout>
    </>
  );
}
