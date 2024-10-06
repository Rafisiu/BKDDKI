import { useMemo } from "react";
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
import VisibilityIcon from "@mui/icons-material/Visibility"; // Impor ikon View
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useRouter } from "next/navigation";

const columnHelper = createMRTColumnHelper<Person>();

type Person = {
  name: {
    firstName: string;
    lastName: string;
  };
  address: string;
  city: string;
  state: string;
  nosp: string;
};

const data: Person[] = [
  {
    name: {
      firstName: "098579",
      lastName: "18680506199203100",
    },
    address: "Farah Nadia Putri",
    city: "Camat",
    state: "Pembina/IV A",
    nosp: "Admin",
  },
  {
    name: {
      firstName: "098579",
      lastName: "18680506199203100",
    },
    address: "Farah Nadia Putri",
    city: "Camat",
    state: "Pembina/IV A",
    nosp: "Admin",
  },
  {
    name: {
      firstName: "098579",
      lastName: "18680506199203100",
    },
    address: "Farah Nadia Putri",
    city: "Camat",
    state: "Pembina/IV A",
    nosp: "Admin",
  },
  {
    name: {
      firstName: "098579",
      lastName: "18680506199203100",
    },
    address: "Farah Nadia Putri",
    city: "Camat",
    state: "Pembina/IV A",
    nosp: "Admin",
  },
  {
    name: {
      firstName: "098579",
      lastName: "18680506199203100",
    },
    address: "Farah Nadia Putri",
    city: "Camat",
    state: "Pembina/IV A",
    nosp: "Admin",
  },
];

const tableUser = () => {
  const router = useRouter();

  const detail = () => {
    router.push("/admin/user_management/detail");
  };

  const columns = useMemo<MRT_ColumnDef<Person>[]>(() => {
    return [
      {
        accessorKey: "index",
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
        header: "Otoritas",
        size: 150,
      },
      columnHelper.display({
        id: "actions",
        size: 10,
        header: "Actions",
        Cell: ({ row }: { row: MRT_Row<Person> }) => (
          <Box sx={{ display: "flex" }}>
            <Button
              sx={{ padding: 0, margin: 0, minWidth: 0, marginRight: 0.5 }}
              onClick={detail}
            >
              <EditIcon fontSize="small" />
            </Button>
            <Button
              sx={{ padding: 0, margin: 0, minWidth: 0, marginRight: 0.5 }}
            >
              <DeleteIcon fontSize="small" />
            </Button>
            <Button
              sx={{ padding: 0, margin: 0, minWidth: 0, marginRight: 0.5 }}
              onClick={detail}
            >
              <MoreHorizIcon fontSize="small" />
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

export default tableUser;
