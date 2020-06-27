import React, {useState, useEffect} from 'react';
import {makeStyles } from '@material-ui/core/styles';
import {withRouter} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import {useSelector, useDispatch} from 'react-redux';

import AppUtils from '@newsApi/AppUtils';
import EnhancedTableHead from 'app/pages/shared-components/TableHeadResult';
import TableToolbarEnhanced from 'app/pages/shared-components/TableToolbarEnhanced';
import * as NewsApiActions from 'app/store/actions/newsApi';

const TableResults = (props) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const searchState  = useSelector( state => state.searchFilter.sourceState );
  const articlesSelector  = useSelector( state => state.newsApi.contents );

  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('calories');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState(articlesSelector);

  useEffect(()=>{
    if(searchState.source === 'newsapi'){
      dispatch(NewsApiActions.setNewsApiContents(searchState));
    };
  },[dispatch, searchState]);

  useEffect(()=>{
    setRows(articlesSelector);
  },[articlesSelector]);

  if(!rows){
    return <h1> Rows is empty </h1>
  }

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, title) => {
    const selectedIndex = selected.indexOf(title);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, title);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleProcessContent = (event, row) => {
    props.history.push({
        pathname:'/forward',
        article: row
      })
  }

  const isSelected = (title) => selected.indexOf(title) !== -1;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableToolbarEnhanced numSelected={selected.length} />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={'medium'}
            aria-label="enhanced table"
          >

          <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              headCells={[
                { id: 'title', numeric: false, disablePadding: true, label: 'Title', sort: true },
                { id: 'publishedAt', numeric: true, disablePadding: false, label: 'Published On', sort: true },
                { id: 'source', numeric: true, disablePadding: false, label: 'Source', sort: false },
                { id: 'actions', numeric: true, disablePadding: false, label: 'Actions', sort: false },
              ]}
            />

            <TableBody>
              {AppUtils.stableSort(rows, AppUtils.getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.title);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  return (
                    <TableRow
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.title}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          onClick={(event) => handleClick(event, row.title)}
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>
                      <TableCell component="th" id={labelId} scope="row" padding="none" style={{width: 600}}>
                        {row.title}
                      </TableCell>
                      <TableCell align="right">{row.publishedAt}</TableCell>
                      <TableCell align="right">{row.source.name}</TableCell>
                      <TableCell align="right">
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={(event) => handleProcessContent(event, row)}
                        >
                          Forward
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

export default withRouter(TableResults);
