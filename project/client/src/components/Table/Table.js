import React, {Fragment, useEffect} from 'react';
import {
  useTable,
  useGroupBy,
  useFilters,
  useSortBy,
  useExpanded,
  usePagination,
  useGlobalFilter,
  useRowSelect
} from 'react-table'
import './Table.css';
import { Icon, FormGroup, InputGroup, HTMLTable, Checkbox } from '@blueprintjs/core';

function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length

  return (
    <span>
    	<FormGroup inline={true}>
    		<InputGroup 
    			id="search-input" 
    			placeholder="Search" 
    			leftIcon="search"
    			onChange={e => {
    				setGlobalFilter(e.target.value || undefined);
    			}}
    		/>
    	</FormGroup>
    </span>
  )
}


const Table = ({columns, data, children, dialog=false, selector}) => {
	const filterTypes = React.useMemo(
    () => ({
      // Or, override the default text filter to use
      // "startWith"
      text: (rows, id, filterValue) => {
        return rows.filter(row => {
          const rowValue = row.values[id]
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true
        })
      },
    }),
    []
  )

	const {
	  getTableProps,
	  getTableBodyProps,
	  headerGroups,
	  rows,
	  prepareRow,
	  preGlobalFilteredRows,
	  setGlobalFilter,
	  selectedFlatRows
	} = useTable({ 
		columns, 
		data,
		filterTypes
	},
	useFilters,
	useGlobalFilter,
	useSortBy,
	useRowSelect,
	hooks => {
      hooks.visibleColumns.push(columns => [
        // Let's make a column for selection
        {
          id: 'selection',
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <Checkbox {...getToggleAllRowsSelectedProps()}/>
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <Checkbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ])
    }
	);

	return (
		<div>
			<div id="toolbar">
				<GlobalFilter
			        preGlobalFilteredRows={preGlobalFilteredRows}
			        setGlobalFilter={setGlobalFilter}
				/>
				{children}
			</div>
			<div className={dialog ? "dialog-wrapper": "wrapper"}>
			<HTMLTable bordered={false} condensed={true} {...getTableProps()} id="table">
			    <thead id="table-body">
			      {headerGroups.map(headerGroup => (
			        <tr {...headerGroup.getHeaderGroupProps()}>
			          {headerGroup.headers.map(column => (
			            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
			            	{column.render('Header')}
			            	<span>
			                    {column.isSorted
			                      ? column.isSortedDesc
			                        ? <Icon icon="caret-down"/>
			                        : <Icon icon="caret-up"/>
			                      : '  '}
			                </span>
			            </th>
			          ))}
			        </tr>
			      ))}
			    </thead>
			    <tbody {...getTableBodyProps()}>
			      {rows.map(row => {
			        prepareRow(row)
			        return (
			          <tr {...row.getRowProps()}>
			            {row.cells.map(cell => {
			              return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
			            })}
			          </tr>
			        )
			      })}
			    </tbody>
			</HTMLTable>
			</div>
		</div>
	)
}

export default Table;