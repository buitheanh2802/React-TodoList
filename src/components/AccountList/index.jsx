import React, { useEffect } from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import Skeleton from '@material-ui/lab/Skeleton';
import Avatar from '@material-ui/core/Avatar';
import { useBreakpoints } from '../../helpers/materialUi';
import { useDispatch, useSelector } from 'react-redux';
import { accountGets } from './../../redux/actions/account.action';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { Link as RouteLink } from 'react-router-dom';

const AccountList = () => {

    const account = useSelector(state => state.account);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(accountGets());
    }, []);

    return (
        <TableContainer>
            <h1 style={{ textAlign: 'center' }}>Danh sách người dùng</h1>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell width={20}>ID</TableCell>
                        <TableCell width={80}>Ảnh đại diện</TableCell>
                        <TableCell width={100}>Tên đăng nhập</TableCell>
                        <TableCell width={150}>Họ và tên</TableCell>
                        <TableCell width={65}>Giới tính</TableCell>
                        <TableCell>Lớp học</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                {account.models.length > 0 ? (
                    <TableBody>
                        {account.models.map((item, key) => (
                            <TableRow key={key}>
                                <TableCell>{key + 1}</TableCell>
                                <TableCell>
                                    <Avatar
                                        alt={item.fullName}
                                        src={item.avatar}
                                    />
                                </TableCell>
                                <TableCell>{item.userName}</TableCell>
                                <TableCell>{item.fullName}</TableCell>
                                <TableCell>
                                    {item.gender ? 'Nam' : 'Nữ'}
                                </TableCell>
                                <TableCell>{item.class}</TableCell>
                                <TableCell>
                                    <Link
                                        style={{marginRight:'10px'}}
                                        variant='body1'
                                        color='primary'
                                        component={RouteLink}
                                        to='/hello'>
                                        Sửa
                                    </Link>
                                    <Link variant='body1' href='/hello'>Xóa</Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                ) : null}
            </Table>
        </TableContainer>
    );
};

export default AccountList;
