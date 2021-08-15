import React, { useEffect, useState } from 'react';
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
import Link from '@material-ui/core/Link';
import { Link as RouteLink } from 'react-router-dom';
import { useStyles } from './../../helpers/materialUi';
import { orange, red } from '@material-ui/core/colors';
import AddIcon from '@material-ui/icons/add';

const AccountList = () => {
    const styles = useStyles({
        'a-update': {
            color: orange[500],
        },
        'a-remove': {
            color: red[500],
        },
        'table-head': {
            '& th': {
                fontWeight: 600,
            },
        },
        'a-add': {
            padding: '5px 0px',
            display: 'flex',
            justifyContent: 'center',
            border: '1px solid',
            gap: '5px',
            '& span': {
                margin: 'auto 0px',
            },
            '&:hover': {
                textDecoration: 'none',
            },
        },
    });
    const account = useSelector(state => state.account);
    const dispatch = useDispatch();
    useEffect(() => {
        if(account.models.length == 0){
            console.log('runnig');
            dispatch(accountGets())
        }
    }, []);

    return (
        <TableContainer>
            <h1 style={{ textAlign: 'center' }}>Danh sách người dùng</h1>
            <Link className={styles['a-add']} component={RouteLink} to='/add'>
                <AddIcon color='primary' />
                <span>Thêm mới</span>
            </Link>
            <Table>
                <TableHead>
                    <TableRow className={styles['table-head']}>
                        <TableCell width={20}>ID</TableCell>
                        <TableCell width={100}>Ảnh đại diện</TableCell>
                        <TableCell width={120}>Tên đăng nhập</TableCell>
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
                                <TableCell style={{position : 'relative'}}>
                                    <Skeleton
                                        style={{position : 'absolute'}}
                                        width={40}
                                        height={40}
                                        variant='circle'
                                    />
                                    <Avatar
                                        onLoad={e =>
                                            e.target.parentElement.previousSibling.remove()
                                        }
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
                                        className={styles['a-update']}
                                        style={{ marginRight: '10px' }}
                                        variant='body1'
                                        color='primary'
                                        component={RouteLink}
                                        to='/hello'>
                                        Sửa
                                    </Link>
                                    <Link
                                        variant='body1'
                                        className={styles['a-remove']}
                                        href='/hello'>
                                        Xóa
                                    </Link>
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
