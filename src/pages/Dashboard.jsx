import React from 'react'
import Chart from 'react-apexcharts'
import dashboardStyles from './dashboard.module.scss'
import statusCards from '../assets/JsonData/status-card-data.json'
import StatusCard from '../components/statusCard/StatusCard'
import { Link } from 'react-router-dom'
import Table from '../components/table/Table'
import Badge from '../components/badge/Badge'
import { useSelector } from 'react-redux';

const chartOptions = {
  series: [{
    name: 'Online Customers',
    data: [40,70,20,90,36,80,30,91,10],
  }, {
    name: 'Store Customers',
    data: [40,30,70,80,40,16,40,20,51,50,50],
  }],
  options: {
    color: ['#6ab04c','#2980b9'],
    chart: {
      background: 'transparent'
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: 'gradient'
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    legend: {
      position: 'top'
    },
    grid: {
      show: false
    }
  }
}

const topCustomers = {
  head: [
    'user',
    'total orders',
    'total spending',
  ],
  body: [
    {username: 'Rahul Kumar', order: 490, price: '$15,870'},
    {username: 'Rohit Kumar', order: 350, price: '$19,870'},
    {username: 'Prince Kumar', order: 300, price: '$18,870'},
    {username: 'Raj Kumar', order: 100, price: '$11,870'},
    {username: 'Roashan Kumar', order: 50, price: '$18,870'},
    {username: 'Vikash Kumar', order: 10, price: '$14,870'},
    {username: 'Hari Kumar', order: 40, price: '$16,870'},
  ]
}

const renderCustomerHead = (item, index) => (
  <th key={index}>{item}</th>
)
const renderCustomerBody = (item, index) => (
  <tr key={index}>
    <td>{item.username}</td>
    <td>{item.order}</td>
    <td>{item.price}</td>
  </tr>
)

const latestOrders = {
  header: ['order id', 'user', 'total price', 'date', 'status'],
  body: [
    {id: '#OD1711', user: 'Rahul Kumar', date: '17 Jun 2021', price: '$900', status: "shipping"},
    {id: '#OD1712', user: 'Rohit Kumar', date: '1 Jun 2021', price: '$400', status: "paid"},
    {id: '#OD1713', user: 'Prince Kumar', date: '27 Jun 2021', price: '$500', status: "pending"},
    {id: '#OD1714', user: 'Vikash Kumar', date: '7 Jun 2021', price: '$300', status: "paid"},
    {id: '#OD1715', user: 'Gaurav Kumar', date: '07 Jun 2021', price: '$600', status: "refund"},
  ]
}

const orderStatus = {
  shipping: 'primary',
  pending: 'warning',
  paid: "success",
  refund: "danger"
}

const renderOrderHead = (item, index) => (
  <th key={index}>{item}</th>
)

const renderOrderBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.user}</td>
    <td>{item.date}</td>
    <td>{item.price}</td>
    <td><Badge type={orderStatus[item.status]} content={item.status}/></td>
  </tr>
)

export default function Dashboard() {
  const themeReducer = useSelector(state => state.ThemeReducer.mode)
  console.log(themeReducer)
  return (
    <div>
      <h2 className={dashboardStyles.PageHeader}>Dashboard</h2>
        <div className={'row'}>
          <div className='col-6'>
            <div className='row'>
            {statusCards.map((item, index) => (
              <div className='col-6' key={index}>
                {/* {item.title} */}
                <StatusCard icon={item.icon} count={item.count} title={item.title}/>
              </div>
            ))}
            </div>
          </div>
          <div className='col-6'>
              <div className="card full-height">
                {/*charts*/}
                <Chart 
                  options={themeReducer === 'theme-mode-dark' ? {
                    ...chartOptions.options,
                    theme: {mode: 'dark'}
                  } : {
                    ...chartOptions.options,
                    theme: {mode: 'light'}
                  }}
                  series={chartOptions.series}
                  type='line'
                  height={'100%'}
                />
              </div>
            </div>
            <div className="col-4">
              <div className="card">
                <div className="card__header">
                  <h3>top customers</h3>
                </div>
                <div className="card__body">
                  {/*table*/}
                  <Table 
                    headData={topCustomers.head}
                    renderHead={(item, index) => renderCustomerHead(item, index)}
                    bodyData={topCustomers.body}
                    renderBody={(item, index) => renderCustomerBody(item, index)}
                  />
                </div>
                <div className="card__footer">
                  <Link to="/customers">view all</Link>
                </div>
              </div>
            </div>
            <div className="col-8">
              <div className="card">
                <div className="card__header">
                  <h3>latest orders</h3>
                  <div className="card__body">
                    <Table 
                      headData={latestOrders.header}
                      renderHead={(item, index) => renderOrderHead(item, index)}
                      bodyData={latestOrders.body}
                      renderBody={(item, index) => renderOrderBody(item, index)}
                    />
                  </div>
                  <div className="card__footer" style={{marginTop:"30px"}}>
                    <Link to={'/customers'}>view all</Link>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}
