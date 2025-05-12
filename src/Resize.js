import React, { useState } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Resizable } from 'react-resizable';

const ResizableCell = ({ width, onResize, children, ...props }) => (
  <Resizable width={width} height={0} onResize={onResize}>
    <TableCell {...props}>{children}</TableCell>
  </Resizable>
);

const ResizableTable = () => {
  const [columns, setColumns] = useState([
    { name: 'Column 1', width: 100 },
    { name: 'Column 2', width: 150 },
    { name: 'Column 3', width: 200 },
  ]);

  const handleResize = (index, { size }) => {
    setColumns((prevColumns) => {
      const newColumns = [...prevColumns];
      newColumns[index].width = size.width;
      return newColumns;
    });
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column, index) => (
              <ResizableCell
                key={index}
                width={column.width}
                onResize={(event, { size }) => handleResize(index, { size })}
              >
                {column.name}
              </ResizableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Add your table body rows here */}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ResizableTable;
