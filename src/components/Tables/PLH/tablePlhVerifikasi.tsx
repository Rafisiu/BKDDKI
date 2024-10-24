import { useMemo, useCallback } from "react";
import {
    MaterialReactTable,
    type MRT_Row,
    createMRTColumnHelper,
    type MRT_ColumnDef,
} from "material-react-table";
import { Box, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { mkConfig, generateCsv, download } from "export-to-csv";

// Define the Person type here
type Person = {
    id: number;
    tanggal: string;
    firstName: string;
    lastName: string;
    company: string;
    city: string;
    country: string;
    suratPerintah: string;
    };

    // Move data definition here
    const data: Person[] = [
        {
            id: 1,
            tanggal: "01-10-2024",
            firstName:
            "Nama: Ahmad Junaidi Jabatan: Kepala Dinas Pendidikan NIP/NRK: 12345678901234 Pangkat/Gol: IV/a",
            lastName:
            "Nama: Budi Santoso Jabatan: Pelaksana Harian NIP/NRK: 98765432109876 Pangkat/Gol: III/b",
            company: "01-10-2024 sd 05-10-2024",
            city: "Verifikasi: 02-10-2024 Validasi: 03-10-2024",
            country: "Verifikasi BKD",
            suratPerintah: "SP-001/2024", // Nilai baru untuk No. Surat Perintah
        },
        {
            id: 2,
            tanggal: "15-09-2024",
            firstName:
            "Nama: Siti Nurhaliza Jabatan: Sekretaris Kota NIP/NRK: 87654321098765 Pangkat/Gol: IV/b",
            lastName:
            "Nama: Dewi Kusuma Jabatan: Pelaksana Harian NIP/NRK: 65432109876543 Pangkat/Gol: III/c",
            company: "15-09-2024 sd 20-09-2024",
            city: "Verifikasi: 16-09-2024 Validasi: 18-09-2024",
            country: "Verifikasi Suban",
            suratPerintah: "SP-002/2024", // Nilai baru untuk No. Surat Perintah
        },
        {
            id: 3,
            tanggal: "20-08-2024",
            firstName:
            "Nama: Rahmat Hidayat Jabatan: Kepala Bidang Perekonomian NIP/NRK: 13579246801234 Pangkat/Gol: IV/c",
            lastName:
            "Nama: Indah Sari Jabatan: Pelaksana Harian NIP/NRK: 24681357902468 Pangkat/Gol: III/d",
            company: "20-08-2024 sd 25-08-2024",
            city: "Verifikasi: 21-08-2024 Validasi: 23-08-2024",
            country: "Verifikasi BKD",
            suratPerintah: "SP-003/2024", // Nilai baru untuk No. Surat Perintah
        },
    ];

    const columnHelper = createMRTColumnHelper<Person>();

    const Example = () => {
    // Memoize column definition to prevent unnecessary re-renders
    const columns = useMemo(
        () => [
        columnHelper.accessor("id", {
            header: "No",
            size: 5,
        }),
        columnHelper.accessor("suratPerintah", {
            header: "No. Surat Perintah",
            size: 10,
        }),
        columnHelper.accessor("tanggal", {
            header: "Tanggal Pengajuan",
            size: 10,
        }),
        columnHelper.accessor("firstName", {
            header: "Data Yang Berhalangan",
            size: 120,
        }),
        columnHelper.accessor("lastName", {
            header: "Data Pengajuan Pelaksana Harian",
            size: 120,
        }),
        columnHelper.accessor("company", {
            header: "Tanggal Mulai - Selesai",
            size: 20,
        }),
        columnHelper.accessor("city", {
            header: "Tanggal Verifikasi & Validasi",
            size: 20,
        }),
        columnHelper.accessor("country", {
            header: "Status",
            size: 220,
        }),
        columnHelper.display({
            id: "actions",
            size: 220,
            header: "Actions",
            Cell: ({ row }: { row: MRT_Row<Person> }) => (
            <Box sx={{ display: "flex" }}>
                <Button
                size="small"
                sx={{ padding: 0, margin: 0, minWidth: 0, marginRight: 0.5 }}
                onClick={() => handleEdit(row.original)}
                >
                <EditIcon fontSize="small" />
                </Button>
                <Button
                size="small"
                sx={{ padding: 0, margin: 0, minWidth: 0, marginRight: 0.5 }}
                onClick={() => handleDelete(row.original)}
                >
                <DeleteIcon fontSize="small" />
                </Button>
                <Button
                size="small"
                sx={{ padding: 0, margin: 0, minWidth: 0, marginRight: 0.5 }}
                onClick={() => handleView(row.original)}
                >
                <MoreHorizIcon fontSize="small" />
                </Button>
            </Box>
            ),
        }),
        ],
        [],
    ); // No dependencies so it's memoized permanently

    // Memoize the handler functions using useCallback
    const handleEdit = useCallback((person: Person) => {
        console.log("Edit clicked for:", person);
    }, []);

    const handleDelete = useCallback((person: Person) => {
        console.log("Delete clicked for:", person);
    }, []);

    const handleView = useCallback((person: Person) => {
        console.log("View clicked for:", person);
    }, []);

    // CSV export functions memoized
    const csvConfig = useMemo(
        () =>
        mkConfig({
            fieldSeparator: ",",
            decimalSeparator: ".",
            useKeysAsHeaders: true,
        }),
        [],
    );

    const handleExportRows = useCallback(
        (rows: MRT_Row<Person>[]) => {
        const rowData = rows.map((row) => row.original);
        const csv = generateCsv(csvConfig)(rowData);
        download(csvConfig)(csv);
        },
        [csvConfig],
    );

    const handleExportData = useCallback(() => {
        const csv = generateCsv(csvConfig)(data);
        download(csvConfig)(csv);
    }, [csvConfig]);

    return (
        <MaterialReactTable
        columns={columns}
        data={data}
        enableRowSelection
        columnFilterDisplayMode="popover"
        paginationDisplayMode="pages"
        positionToolbarAlertBanner="bottom"
        enableFullScreenToggle={false}
        renderTopToolbarCustomActions={({ table }) => (
            <Box
            sx={{
                display: "flex",
                gap: "5px",
                padding: "5px",
                flexWrap: "wrap",
            }}
            >
            <Button onClick={handleExportData} startIcon={<FileDownloadIcon />}>
                Export All Data
            </Button>
            <Button
                disabled={table.getPrePaginationRowModel().rows.length === 0}
                onClick={() =>
                handleExportRows(table.getPrePaginationRowModel().rows)
                }
                startIcon={<FileDownloadIcon />}
            >
                Export All Rows
            </Button>
            <Button
                disabled={table.getRowModel().rows.length === 0}
                onClick={() => handleExportRows(table.getRowModel().rows)}
                startIcon={<FileDownloadIcon />}
            >
                Export Page Rows
            </Button>
            <Button
                disabled={
                !table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()
                }
                onClick={() => handleExportRows(table.getSelectedRowModel().rows)}
                startIcon={<FileDownloadIcon />}
            >
                Export Selected Rows
            </Button>
            </Box>
        )}
        />
    );
};

export default Example;
