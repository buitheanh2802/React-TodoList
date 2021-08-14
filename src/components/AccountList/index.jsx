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
             <h1 style={{textAlign : 'center'}}>Danh sách người dùng</h1>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Ảnh đại diện</TableCell>
                        <TableCell>Tên đăng nhập</TableCell>
                        <TableCell>Họ và tên</TableCell>
                        <TableCell>Giới tính</TableCell>
                        <TableCell>Lớp học</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default AccountList;