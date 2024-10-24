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
    kodeOpd: string; // Kode OPD
    kodeOpdDdn: string; // Kode OPD DDN
    kodeUnit: string; // Kode Unit
    namaOpd: string; // Nama OPD
    singkatanBkd: string; // Singkatan BKD
    status: string; // Status
    wilayah: string; // Wilayah
    level: string; // Level
    alamat: string; // Alamat
    startYear: number; // Tahun Berlaku
    endYear: number; // Tahun Berakhir
};

const data: Person[] = [
    {
        kodeOpd: "1234",
        kodeOpdDdn: "5678",
        kodeUnit: "91011",
        namaOpd: "Dinas Pendidikan",
        singkatanBkd: "Disdik",
        status: "Aktif",
        wilayah: "Jakarta",
        level: "Provinsi",
        alamat: "Jl. Sudirman No. 1",
        startYear: 2020,
        endYear: 2024,
    },
    {
        kodeOpd: "2345",
        kodeOpdDdn: "6789",
        kodeUnit: "111213",
        namaOpd: "Dinas Kesehatan",
        singkatanBkd: "Dinkes",
        status: "Nonaktif",
        wilayah: "Bandung",
        level: "Kota",
        alamat: "Jl. Asia Afrika No. 15",
        startYear: 2018,
        endYear: 2022,
    },
    {
        kodeOpd: "3456",
        kodeOpdDdn: "7890",
        kodeUnit: "121314",
        namaOpd: "Dinas Pertanian",
        singkatanBkd: "Distan",
        status: "Aktif",
        wilayah: "Semarang",
        level: "Provinsi",
        alamat: "Jl. Diponegoro No. 99",
        startYear: 2021,
        endYear: 2025,
    },
    {
        kodeOpd: "4567",
        kodeOpdDdn: "8901",
        kodeUnit: "141516",
        namaOpd: "Dinas Pekerjaan Umum",
        singkatanBkd: "PU",
        status: "Aktif",
        wilayah: "Surabaya",
        level: "Kota",
        alamat: "Jl. Pahlawan No. 2",
        startYear: 2019,
        endYear: 2023,
    },
    {
        kodeOpd: "5678",
        kodeOpdDdn: "9012",
        kodeUnit: "151617",
        namaOpd: "Dinas Sosial",
        singkatanBkd: "Dinsos",
        status: "Aktif",
        wilayah: "Medan",
        level: "Provinsi",
        alamat: "Jl. Gatot Subroto No. 45",
        startYear: 2022,
        endYear: 2026,
    },
];

const TableOPDBKD = () => {
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
            size: 10,
            muiTableHeadCellProps: {
                sx: {
                    padding: "8px 16px", // Padding untuk header kolom No
                    textAlign: "center",
                },
            },
            muiTableBodyCellProps: {
                sx: {
                    padding: "8px 16px", // Padding untuk data kolom No
                },
            },
            Cell: ({ row }) => row.index + 1,
        },
        {
            accessorKey: "kodeOpd",
            header: "Kode OPD",
            size: 150,
            muiTableHeadCellProps: {
                sx: {
                    padding: "10px", // Padding untuk header Kode OPD
                },
            },
            muiTableBodyCellProps: {
                sx: {
                    padding: "10px", // Padding untuk data Kode OPD
                },
            },
        },
        {
            accessorKey: "kodeOpdDdn",
            header: "Kode OPD DDN",
            size: 150,
            muiTableHeadCellProps: {
                sx: {
                    padding: "12px", // Padding untuk header Kode OPD DDN
                },
            },
            muiTableBodyCellProps: {
                sx: {
                    padding: "12px", // Padding untuk data Kode OPD DDN
                },
            },
        },
        {
            accessorKey: "kodeUnit",
            header: "Kode Unit",
            size: 30,
            muiTableHeadCellProps: {
                sx: {
                    padding: "1px 1px", // Padding untuk header Kode Unit
                },
            },
            muiTableBodyCellProps: {
                sx: {
                    padding: "1px 1px", // Padding untuk data Kode Unit
                },
            },
        },
        {
            accessorKey: "namaOpd",
            header: "Nama OPD",
            size: 150,
            muiTableHeadCellProps: {
                sx: {
                    padding: "8px 16px", // Padding untuk header Nama OPD
                },
            },
            muiTableBodyCellProps: {
                sx: {
                    padding: "8px 16px", // Padding untuk data Nama OPD
                },
            },
        },
        {
            accessorKey: "singkatanBkd",
            header: "Singkatan BKD",
            size: 10,
            muiTableHeadCellProps: {
                sx: {
                    padding: "1px 1px", // Padding untuk header Singkatan BKD
                },
            },
            muiTableBodyCellProps: {
                sx: {
                    padding: "1px 1px", // Padding untuk data Singkatan BKD
                },
            },
        },
        {
            accessorKey: "status",
            header: "Status",
            size: 100,
            muiTableHeadCellProps: {
                sx: {
                    padding: "8px", // Padding untuk header Status
                },
            },
            muiTableBodyCellProps: {
                sx: {
                    padding: "8px", // Padding untuk data Status
                },
            },
        },
        {
            accessorKey: "wilayah",
            header: "Wilayah",
            size: 100,
            muiTableHeadCellProps: {
                sx: {
                    padding: "10px", // Padding untuk header Wilayah
                },
            },
            muiTableBodyCellProps: {
                sx: {
                    padding: "10px", // Padding untuk data Wilayah
                },
            },
        },
        {
            accessorKey: "level",
            header: "Level",
            size: 100,
            muiTableHeadCellProps: {
                sx: {
                    padding: "8px", // Padding untuk header Level
                },
            },
            muiTableBodyCellProps: {
                sx: {
                    padding: "8px", // Padding untuk data Level
                },
            },
        },
        {
            accessorKey: "alamat",
            header: "Alamat",
            size: 200,
            muiTableHeadCellProps: {
                sx: {
                    padding: "8px 30px", // Padding untuk header Alamat
                },
            },
            muiTableBodyCellProps: {
                sx: {
                    padding: "8px", // Padding untuk data Alamat
                },
            },
        },
        {
            accessorKey: "startYear",
            header: "Tahun Berlaku",
            size: 100,
            muiTableHeadCellProps: {
                sx: {
                    padding: "8px", // Padding untuk header Tahun Berlaku
                },
            },
            muiTableBodyCellProps: {
                sx: {
                    padding: "8px", // Padding untuk data Tahun Berlaku
                },
            },
        },
        {
            accessorKey: "endYear",
            header: "Tahun Berakhir",
            size: 100,
            muiTableHeadCellProps: {
                sx: {
                    padding: "8px", // Padding untuk header Tahun Berakhir
                },
            },
            muiTableBodyCellProps: {
                sx: {
                    padding: "8px", // Padding untuk data Tahun Berakhir
                },
            },
        },
        columnHelper.display({
            id: "actions",
            size: 10,
            header: "Actions",
            muiTableHeadCellProps: {
                sx: {
                    padding: "5px 10px", // Padding pada header Actions
                },
            },
            muiTableBodyCellProps: {
                sx: {
                    padding: "5px 10px", // Padding untuk data Actions
                },
            },
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

export default TableOPDBKD;
