import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Paper,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const DashTable = ({ pets, onEdit, onDelete }) => (
  <TableContainer component={Paper} sx={{ bgcolor: "#272829", mt: 1 }}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell
            sx={{
              color: "#ffffff",
              fontSize: { xs: "1rem", sm: "1rem", md: "1.2rem" },
              fontWeight: 600,
            }}
          >
            Image
          </TableCell>
          <TableCell
            sx={{
              color: "#ffffff",
              fontSize: { xs: "1rem", sm: "1rem", md: "1.2rem" },
              fontWeight: 600,
            }}
          >
            Pet Name
          </TableCell>
          <TableCell
            sx={{
              color: "#ffffff",
              fontSize: { xs: "1rem", sm: "1rem", md: "1.2rem" },
              fontWeight: 600,
            }}
          >
            Edit
          </TableCell>
          <TableCell
            sx={{
              color: "#ffffff",
              fontSize: { xs: "1rem", sm: "1rem", md: "1.2rem" },
              fontWeight: 600,
            }}
          >
            Delete
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {pets.map((pet) => (
          <TableRow key={pet._id}>
            <TableCell sx={{ color: "#ffffff" }}>
              <img src={pet.image} alt={pet.name} height="50" width="80" />
            </TableCell>
            <TableCell sx={{ color: "#ffffff", fontSize: "1.2rem" }}>
              {pet.name}
            </TableCell>
            <TableCell>
              <IconButton onClick={() => onEdit(pet)}>
                <EditIcon sx={{ color: "#ffffff" }} />
              </IconButton>
            </TableCell>
            <TableCell>
              <IconButton onClick={() => onDelete(pet._id)}>
                <DeleteIcon sx={{ color: "#ffffff" }} />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default DashTable;
