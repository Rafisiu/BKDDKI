import { useMemo, useCallback } from "react";
import {
    MaterialReactTable,
    useMaterialReactTable,
    type MRT_Row,
    type MRT_ColumnDef,
    createMRTColumnHelper,
} from "material-react-table";
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
    startYear: number; // Kolom Tahun Berlaku
    endYear: number; // Kolom Tahun Berakhir
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
        startYear: 2022, // Tambahkan tahun berlaku
        endYear: 2024, // Tambahkan tahun berakhir
    },
    {
        name: {
        firstName: "SKPD-INPUT-PENGAJUAN",
        lastName: "SKPD Input Pengajuan",
        },
        address: "-Dashboard Input -Pengajuan PLT -Input Pengajuan PLH",
        city: "Aktif",
        status: "Pending", // Tambahkan status
        startYear: 2021, // Tambahkan tahun berlaku
        endYear: 2023, // Tambahkan tahun berakhir
    },
    {
        name: {
        firstName: "SKPD-INPUT-PENGAJUAN",
        lastName: "SKPD Input Pengajuan",
        },
        address: "-Dashboard Input -Pengajuan PLT -Input Pengajuan PLH",
        city: "Aktif",
        status: "Completed", // Tambahkan status
        startYear: 2020, // Tambahkan tahun berlaku
        endYear: 2022, // Tambahkan tahun berakhir
    },
    {
        name: {
        firstName: "SKPD-INPUT-PENGAJUAN",
        lastName: "SKPD Input Pengajuan",
        },
        address: "-Dashboard Input -Pengajuan PLT -Input Pengajuan PLH",
        city: "Aktif",
        status: "In Progress", // Tambahkan status
        startYear: 2023, // Tambahkan tahun berlaku
        endYear: 2025, // Tambahkan tahun berakhir
    },
    {
        name: {
        firstName: "SKPD-INPUT-PENGAJUAN",
        lastName: "SKPD Input Pengajuan",
        },
        address: "-Dashboard Input -Pengajuan PLT -Input Pengajuan PLH",
        city: "Aktif",
        status: "Pending", // Tambahkan status
        startYear: 2019, // Tambahkan tahun berlaku
        endYear: 2021, // Tambahkan tahun berakhir
    },
];

const TableKode = () => {
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
            header: "Uraian Singkat",
            size: 150,
        },
        {
            accessorKey: "name.lastName",
            header: "Uraian Panjang",
            size: 150,
        },
        {
            accessorKey: "address",
            header: "Keterangan",
            size: 200,
        },
        {
            accessorKey: "city",
            header: "Nama Menu",
            size: 150,
        },
        {
            accessorKey: "status", // Kolom status
            header: "Status",
            size: 100,
        },
        {
            accessorKey: "startYear", // Kolom tahun berlaku
            header: "Tahun Berlaku",
            size: 100,
        },
        {
            accessorKey: "endYear", // Kolom tahun berakhir
            header: "Tahun Berakhir",
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

export default TableKode;
