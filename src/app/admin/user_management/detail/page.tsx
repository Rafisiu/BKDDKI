import UserManagement from "@/components/Admin/User_Detail";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/BreadcrumbAdmin";

export const metadata: Metadata = {
    title:
        "User Management | Detail",
    };

    export default function Home() {
    return (
        <>
        <DefaultLayout>
            <Breadcrumb pageName="User Management / Detail" />
            <UserManagement />
        </DefaultLayout>
        </>
    );
}
