import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_Row,
  createMRTColumnHelper,
} from "material-react-table";
import { Box, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit"; // Impor ikon Edit
import DeleteIcon from "@mui/icons-material/Delete"; // Impor ikon Delete
import VisibilityIcon from "@mui/icons-material/Visibility"; // Impor ikon View
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { mkConfig, generateCsv, download } from "export-to-csv"; //or use your library of choice here
import { data, type Person } from "../../Tables/makeData";

const columnHelper = createMRTColumnHelper<Person>();

const columns = [
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
          onClick={() => {
            console.log("Edit clicked for:", row.original);
          }}
        >
          <EditIcon fontSize="small" />
        </Button>
        <Button
          size="small"
          sx={{ padding: 0, margin: 0, minWidth: 0, marginRight: 0.5 }} // Mengatur padding dan margin
          onClick={() => {
            console.log("Delete clicked for:", row.original);
          }}
        >
          <DeleteIcon fontSize="small" />
        </Button>
        <Button
          size="small"
          sx={{ padding: 0, margin: 0, minWidth: 0, marginRight: 0.5 }} // Mengatur padding dan margin
          onClick={() => {
            console.log("View clicked for:", row.original);
          }}
        >
          <VisibilityIcon fontSize="small" />
        </Button>
      </Box>
    ),
  }),
];

const csvConfig = mkConfig({
  fieldSeparator: ",",
  decimalSeparator: ".",
  useKeysAsHeaders: true,
});

const tableOtoritas = () => {
  const handleExportRows = (rows: MRT_Row<Person>[]) => {
    const rowData = rows.map((row) => row.original);
    const csv = generateCsv(csvConfig)(rowData);
    download(csvConfig)(csv);
  };

  const handleExportData = () => {
    const csv = generateCsv(csvConfig)(data);
    download(csvConfig)(csv);
  };

  const table = useMaterialReactTable({
    columns,
    data,
    enableRowSelection: true,
    columnFilterDisplayMode: "popover",
    paginationDisplayMode: "pages",
    positionToolbarAlertBanner: "bottom",
    enableFullScreenToggle: false,
    renderTopToolbarCustomActions: ({ table }) => (
      <Box
        sx={{
          display: "flex",
          gap: "5px",
          padding: "5px",
          flexWrap: "wrap",
        }}
      >
        <Button
          //export all data that is currently in the table (ignore pagination, sorting, filtering, etc.)
          onClick={handleExportData}
          startIcon={<FileDownloadIcon />}
        >
          Export All Data
        </Button>
        <Button
          disabled={table.getPrePaginationRowModel().rows.length === 0}
          //export all rows, including from the next page, (still respects filtering and sorting)
          onClick={() =>
            handleExportRows(table.getPrePaginationRowModel().rows)
          }
          startIcon={<FileDownloadIcon />}
        >
          Export All Rows
        </Button>
        <Button
          disabled={table.getRowModel().rows.length === 0}
          //export all rows as seen on the screen (respects pagination, sorting, filtering, etc.)
          onClick={() => handleExportRows(table.getRowModel().rows)}
          startIcon={<FileDownloadIcon />}
        >
          Export Page Rows
        </Button>
        <Button
          disabled={
            !table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()
          }
          //only export selected rows
          onClick={() => handleExportRows(table.getSelectedRowModel().rows)}
          startIcon={<FileDownloadIcon />}
        >
          Export Selected Rows
        </Button>
      </Box>
    ),
  });

  return <MaterialReactTable table={table} />;
};

export default tableOtoritas;
