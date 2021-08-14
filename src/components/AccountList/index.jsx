import React from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const AccountList = () => {
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Ảnh đại diện</TableCell>
                        <TableCell>Tên đăng nhập</TableCell>
                        <TableCell>Họ và tên</TableCell>
                        <TableCell>Giới tính</TableCell>
                        <TableCell>Lớp học</TableCell>
                    </TableRow>
                </TableHead>
            </Table>
        </TableContainer>
    );
};

export default AccountList;