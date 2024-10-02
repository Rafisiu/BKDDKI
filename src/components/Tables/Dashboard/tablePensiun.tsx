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

const columnHelper = createMRTColumnHelper<Person>();

//example data type
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

//nested data is ok, see accessorKeys in ColumnDef below
const data: Person[] = [
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
];

const tablePensiun = () => {
  //should be memoized or stable
  const columns = useMemo<MRT_ColumnDef<Person>[]>(() => {
    return [
      {
        accessorKey: "index", // new accessor for row number
        header: "No",
        size: 50,
        Cell: ({ row }) => row.index + 1, // display the row index + 1
      },
      {
        accessorKey: "name.firstName", //access nested data with dot notation
        header: "NRK",
        size: 150,
      },
      {
        accessorKey: "name.lastName",
        header: "NIP",
        size: 150,
      },
      {
        accessorKey: "address", //normal accessorKey
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
        size: 10,
        header: "Actions",
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
  const dataWithIndex = data.map((item, index) => ({ index, ...item }));

  const table = useMaterialReactTable({
    columns,
    data: dataWithIndex, // use data with index
  });

  return <MaterialReactTable table={table} />;
};

export default tablePensiun;
