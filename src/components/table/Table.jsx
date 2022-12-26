import React, {useState} from 'react'
import tableStyles from './table.module.scss'

export default function Table(props) {
  const initDataShow = props.limit ? props.bodyData.slice(0, Number(props.limit)) : props.bodyData;
  const [dataShow, setDataShow] = useState(initDataShow)
  const [currentPage, setCurrentPage] = useState(0)

  let pages = 1;
  let range = [];
  if(props.limit !== undefined) {
    let page = Math.floor(props.bodyData.length / Number(props.limit))
    // pages = props.bodyData.length & Number(props.limit) === 0 ? page : page + 1; bitwise
    pages = props.bodyData.length % Number(props.limit) === 0 ? page : page + 1;
    range = [...Array(pages).keys()]
    // range = [...pages]
    // console.log(range)
  }

  const selectPages = page => {
    const prev = Number(props.limit) * page
    const next = prev + Number(props.limit)
    
    setDataShow(props.bodyData.slice(prev, next))
    setCurrentPage(page)
  }

  return (
    <>
      <div className={tableStyles.tableWrapper}>
        <table>
          {props.headData && props.renderHead ? (
            <thead>
              <tr>
                {props.headData.map((item, index) => props.renderHead(item, index))}
              </tr>
            </thead>
          ): null}
          {props.bodyData && props.renderBody ? (
            <tbody>
              {dataShow.map((item, index) => props.renderBody(item, index))}
            </tbody>
          ) : null}
        </table>
      </div>
      { pages > 1 ? (
        <div className={tableStyles.tablePagination}>
          {range.map((item, index) => (
            <div className={`${tableStyles.tablePaginationItem} ${currentPage === index && tableStyles.tablePaginationItemActive}`} key={index} onClick={() => selectPages(index)}>
              {item + 1}
            </div>
          ))}
        </div>
      ) : null}
    </>
  )
}
