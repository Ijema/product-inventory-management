import React, { useState } from 'react';
import { Space, Table } from 'antd';

import { inventory } from '../data/inventory';

const data = [];
for (let i = 1; i <= 10; i++) {
  data.push({
    key: i,
    name: 'John Brown',
    age: Number(`${i}2`),
    address: `New York No. ${i} Lake Park`,
    description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
  });
}

const defaultExpandable = {
  expandedRowRender: (record) => <p>{record.description}</p>,
};
const defaultTitle = () => 'Here is title';
const defaultFooter = () => 'Here is footer';
const PtoductPage = (props) => {
  const columns = [
    {
      title: 'Product Name',
      dataIndex: 'name',
    },
    {
      title: 'Stock',
      dataIndex: 'stock',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Price (NGN)',
      dataIndex: 'price',
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: 'Category',
      dataIndex: 'category',
      filters: [
        {
          text: 'Hair',
          value: 'Hair',
        },
        {
          text: 'Shoes',
          value: 'Shoes',
        },
        {
          text: 'Bag',
          value: 'Bag',
        },
        {
          text: 'Jeweries',
          value: 'Jeweries',
        },
      ],
      onFilter: (value, record) => record.category.indexOf(value) === 0,
    },
    {
      title: 'Action',
      key: 'action',
      sorter: true,
      render: (e) => (
        <Space size="middle">
          <button className="delete_link" onClick={()=>{
            remove_product(e)
          }}>Delete</button>
          <button className="delete_link" onClick={()=>{props.addToCart(e)}}>
            Add to list
          </button>
        </Space>
      ),
    },
  ];


  const [bordered, ] = useState(false);
  const [loading, ] = useState(false);
  const [size, ] = useState('large');
  const [expandable, ] = useState(defaultExpandable);
  const [showTitle, ] = useState(false);
  const [showHeader, ] = useState(true);
  const [showfooter, ] = useState(true);
  const [rowSelection, ] = useState({});
  const [hasData, ] = useState(true);
  const [tableLayout, ] = useState();
  const [top] = useState('none');
  const [bottom] = useState('bottomRight');
  const [ellipsis, ] = useState(false);
  const [yScroll, ] = useState(false);
  const [xScroll, ] = useState();
  // const handleBorderChange = (enable) => {
  //   setBordered(enable);
  // };
  // const handleLoadingChange = (enable) => {
  //   setLoading(enable);
  // };
  // const handleSizeChange = (e) => {
  //   setSize(e.target.value);
  // };
  // const handleTableLayoutChange = (e) => {
  //   setTableLayout(e.target.value);
  // };
  // const handleExpandChange = (enable) => {
  //   setExpandable(enable ? defaultExpandable : undefined);
  // };
  // const handleEllipsisChange = (enable) => {
  //   setEllipsis(enable);
  // };
  // const handleTitleChange = (enable) => {
  //   setShowTitle(enable);
  // };
  // const handleHeaderChange = (enable) => {
  //   setShowHeader(enable);
  // };
  // const handleFooterChange = (enable) => {
  //   setShowFooter(enable);
  // };
  // const handleRowSelectionChange = (enable) => {
  //   setRowSelection(enable ? {} : undefined);
  // };
  // const handleYScrollChange = (enable) => {
  //   setYScroll(enable);
  // };
  // const handleXScrollChange = (e) => {
  //   setXScroll(e.target.value);
  // };
  // const handleDataChange = (newHasData) => {
  //   setHasData(newHasData);
  // };
  const scroll = {};
  if (yScroll) {
    scroll.y = 240;
  }
  if (xScroll) {
    scroll.x = '100vw';
  }
  const tableColumns = columns.map((item) => ({
    ...item,
    ellipsis,
  }));
  if (xScroll === 'fixed') {
    tableColumns[0].fixed = true;
    tableColumns[tableColumns.length - 1].fixed = 'right';
  }
  const tableProps = {
    bordered,
    loading,
    size,
    expandable,
    title: showTitle ? defaultTitle : undefined,
    showHeader,
    footer: showfooter ? defaultFooter : undefined,
    rowSelection,
    scroll,
    tableLayout,
  };
  const [data,setData] = useState(inventory)

  const remove_product=product=>{
   
    let mydata = [...data]
    mydata = mydata.filter(e=>{return e !== product})
    setData(mydata)
  }

  return (
    <>
      <Table
        {...tableProps}
        pagination={{
          position: [top, bottom],
        }}
        columns={tableColumns}
        dataSource={hasData ? data : []}
        scroll={{x:"100vw"}}
      />
    </>
  );
};
export default PtoductPage;