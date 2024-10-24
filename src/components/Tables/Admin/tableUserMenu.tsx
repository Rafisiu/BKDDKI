import { useMemo, useCallback } from "react";
import {MaterialReactTable,useMaterialReactTable,type MRT_Row,type MRT_ColumnDef,createMRTColumnHelper,} from "material-react-table";
import { Box, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit"; // Impor ikon Edit
import DeleteIcon from "@mui/icons-material/Delete"; // Impor ikon Delete
import { useRouter } from "next/navigation";

const columnHelper = createMRTColumnHelper<Person>();

type Person = {
    name: {
        firstName: string;
        lastName: string;
    };
    address: string;
    city: string;
    status: string; // Tambahkan kolom status
};

const data: Person[] = [
    {
        name: {
        firstName: "SKPD-INPUT-PENGAJUAN",
        lastName: "SKPD Input Pengajuan",
        },
        address: "-Dashboard Input -Pengajuan PLT -Input Pengajuan PLH",
        city: "Aktif",
        status: "Completed", // Tambahkan status
    },
    {
        name: {
        firstName: "SKPD-INPUT-PENGAJUAN",
        lastName: "SKPD Input Pengajuan",
        },
        address: "-Dashboard Input -Pengajuan PLT -Input Pengajuan PLH",
        city: "Aktif",
        status: "Pending", // Tambahkan status
    },
    {
        name: {
        firstName: "SKPD-INPUT-PENGAJUAN",
        lastName: "SKPD Input Pengajuan",
        },
        address: "-Dashboard Input -Pengajuan PLT -Input Pengajuan PLH",
        city: "Aktif",
        status: "Completed", // Tambahkan status
    },
    {
        name: {
        firstName: "SKPD-INPUT-PENGAJUAN",
        lastName: "SKPD Input Pengajuan",
        },
        address: "-Dashboard Input -Pengajuan PLT -Input Pengajuan PLH",
        city: "Aktif",
        status: "In Progress", // Tambahkan status
    },
    {
        name: {
        firstName: "SKPD-INPUT-PENGAJUAN",
        lastName: "SKPD Input Pengajuan",
        },
        address: "-Dashboard Input -Pengajuan PLT -Input Pengajuan PLH",
        city: "Aktif",
        status: "Pending", // Tambahkan status
    },
];

    const TableUserMenu = () => {
    const router = useRouter();

    // Memoize the detail function
    const detail = useCallback(() => {
        router.push("/admin/user_management/detail");
    }, [router]);

    const columns = useMemo<MRT_ColumnDef<Person>[]>(() => {
        return [
            {
            accessorKey: "index",
            header: "No",
            size: 50,
            Cell: ({ row }) => row.index + 1,
            },
            {
            accessorKey: "name.firstName",
            header: "NRK",
            size: 150,
            },
            {
            accessorKey: "name.lastName",
            header: "Nama Lengkap",
            size: 150,
            },
            {
            accessorKey: "address",
            header: "SKPD/Nama",
            size: 200,
            },
            {
            accessorKey: "city",
            header: "Nama Menu",
            size: 150,
            },
            {
            accessorKey: "status", // Tambahkan kolom status
            header: "Status", // Judul kolom
            size: 100,
            },
            columnHelper.display({
            id: "actions",
            size: 10,
            header: "Actions",
            Cell: ({ row }: { row: MRT_Row<Person> }) => (
                <Box sx={{ display: "flex" }}>
                <Button
                    onClick={detail}
                    sx={{ padding: 0, margin: 0, minWidth: 0, marginRight: 0.5 }}
                >
                    <EditIcon fontSize="small" />
                </Button>
                <Button
                    sx={{ padding: 0, margin: 0, minWidth: 0, marginRight: 0.5 }}
                >
                    <DeleteIcon fontSize="small" />
                </Button>
                </Box>
            ),
            }),
        ];
    }, [detail]);

    // Memoize data with index
    const dataWithIndex = useMemo(
        () => data.map((item, index) => ({ index, ...item })),
        [],
    );

    const table = useMaterialReactTable({
        columns,
        data: dataWithIndex,
    });

    return <MaterialReactTable table={table} />;
};

export default TableUserMenu;
