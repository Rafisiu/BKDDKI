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
import { data, type Person } from "../../Tables/makeData";
import { useRouter } from "next/navigation";

const columnHelper = createMRTColumnHelper<Person>();

const TableValidasi = () => {
const router = useRouter();
// Memoize column definition to prevent unnecessary re-renders
const columns = useMemo(
  () => [
    columnHelper.accessor("id", {
      header: "No",
      size: 5,
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
      header: "Data Pengajuan Pelaksana Tugas",
      size: 120,
    }),
    columnHelper.accessor("company", {
      header: "Tanggal Mulai - Selesai",
      size: 20,
    }),
    columnHelper.accessor("city", {
      header: "Tanggal Validasi",
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
            onClick={() => router.push("/plt/validasi/detail_pengajuan")}
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

export default TableValidasi;
