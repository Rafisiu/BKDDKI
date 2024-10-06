import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_Row,
  type MRT_ColumnDef,
  createMRTColumnHelper,
} from "material-react-table";
import { Box, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

// Define a type for Person
type Person = {
  name: {
    firstName: string;
    lastName: string;
  };
  address: string;
  city: string;
  state: string;
  nosp: string;
  pensiun: string;
  kerja: string;
};

// Example data for the pension table
const dataPensiun: Person[] = [
  {
    name: {
      firstName: "098579",
      lastName: "18680506199203100",
    },
    address: "Farah Nadia Putri",
    city: "Camat",
    state: "Pembina/IV A",
    nosp: "209/09/2022",
    pensiun: "09/09/2024",
    kerja: "10 Hari",
  },
  // Add more entries as needed
];

const columnHelper = createMRTColumnHelper<Person>();

const TablePensiun = () => {
  const columns = useMemo<MRT_ColumnDef<Person>[]>(() => {
    return [
      {
        accessorKey: "index",
        header: "No",
        size: 50,
        Cell: ({ row }) => row.index + 1, // Display the row index + 1
      },
      {
        accessorKey: "name.firstName",
        header: "NRK",
        size: 150,
      },
      {
        accessorKey: "name.lastName",
        header: "NIP",
        size: 150,
      },
      {
        accessorKey: "address",
        header: "Nama Lengkap",
        size: 200,
      },
      {
        accessorKey: "city",
        header: "Jabatan",
        size: 150,
      },
      {
        accessorKey: "state",
        header: "Pangkat/Gol",
        size: 150,
      },
      {
        accessorKey: "nosp",
        header: "No.SP",
        size: 150,
      },
      {
        accessorKey: "pensiun",
        header: "Tanggal Pensiun",
        size: 150,
      },
      {
        accessorKey: "kerja",
        header: "Sisa Hari Kerja",
        size: 150,
      },
      columnHelper.display({
        id: "actions",
        header: "Actions",
        size: 10,
        Cell: ({ row }: { row: MRT_Row<Person> }) => (
          <Box sx={{ display: "flex" }}>
            <Button>
              <EditIcon fontSize="small" />
            </Button>
          </Box>
        ),
      }),
    ];
  }, []);

  // Create a new data array with index property
  const dataWithIndex = useMemo(
    () => dataPensiun.map((item, index) => ({ index, ...item })),
    [dataPensiun],
  );

  const table = useMaterialReactTable({
    columns,
    data: dataWithIndex, // use data with index
  });

  return <MaterialReactTable table={table} />;
};

export default TablePensiun;
