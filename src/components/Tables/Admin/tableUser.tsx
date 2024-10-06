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

// Sample data
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
  // ... Data lainnya
];

const TableUser = () => {
  const router = useRouter();

  // Action cell component
  const ActionsCell = ({ row }: { row: MRT_Row<Person> }) => (
    <Box sx={{ display: "flex" }}>
      <Button
        sx={{ padding: 0, margin: 0, minWidth: 0, marginRight: 0.5 }}
        onClick={() => router.push("/admin/user_management/detail")}
      >
        <EditIcon fontSize="small" />
      </Button>
      <Button sx={{ padding: 0, margin: 0, minWidth: 0, marginRight: 0.5 }}>
        <DeleteIcon fontSize="small" />
      </Button>
      <Button
        sx={{ padding: 0, margin: 0, minWidth: 0, marginRight: 0.5 }}
        onClick={() => router.push("/admin/user_management/detail")}
      >
        <MoreHorizIcon fontSize="small" />
      </Button>
    </Box>
  );

  // Use useMemo to define columns
  const columns = useMemo<MRT_ColumnDef<Person>[]>(() => {
    return [
      {
        accessorKey: "index",
        header: "No",
        size: 50,
        Cell: ({ row }) => row.index + 1, // display the row index + 1
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
        header: "Otoritas",
        size: 150,
      },
      columnHelper.display({
        id: "actions",
        size: 10,
        header: "Actions",
        Cell: ActionsCell,
      }),
    ];
  }, []);

  // Create a new data array with index property, memoized
  const dataWithIndex = useMemo(
    () => data.map((item, index) => ({ index, ...item })),
    [data],
  );

  const table = useMaterialReactTable({
    columns,
    data: dataWithIndex,
  });

  return <MaterialReactTable table={table} />;
};

export default TableUser;
