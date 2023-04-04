import AdminLayOut from "./AdminLayOut";
import { useState, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import "./listQA.css";
import { DatePicker, Space, Button, Tooltip, Tag } from 'antd';
import { CloseOutlined, ExportOutlined } from '@ant-design/icons';
import { formatDate } from "../../utils";
import axios from "axios"
const { RangePicker } = DatePicker;


const ListQA = () => {
  const [listPost, setListPost] = useState([]);
  const [date, setDate] = useState({
    dateFrom: '',
    toDate: ''
  })

  const ref = useRef();

    const handlePrint = useReactToPrint({
        content : ()=> ref.current,
        documentTitle: 'Báo Cáo Q&A',
        pageStyle:"print",
        // onAfterPrint: ()=> navigate(-1)
    })

  useEffect(() => {
    new Promise(async () => {
      await fetchingData();
    })
  }, [])

  useEffect(() => {
    if (date.dateFrom && date.toDate) {
      new Promise(async () => {
        await compareDate(date.dateFrom, date.toDate)
      })
    }
  },[date])
  
  const fetchingData = async() => {
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts`);
    if (res.status === 200) {
      setListPost(res?.data?.posts);
    }
  }

  const compareDate = async (dateFrom, dateTo) => {
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/date/${dateFrom}/${dateTo}`);
    if (res.status === 200) {
      setListPost(res?.data?.post);
    }
  }

  const resetPage = async() => {
    await fetchingData();
    setDate({
      dateFrom: '',
      toDate: ''
    })
  }

  const onChangeDate = (dates, dateStrings) => {
    setDate({
      dateFrom: dateStrings[0],
    toDate: dateStrings[1]
    })
  }

  const handleRemoveItem = async(id) => {
    const res = await axios.delete(`${process.env.REACT_APP_BASE_URL}/qa/${id}`);
    if (res.status === 200) {
      await fetchingData();
    }
  }

  console.log(listPost);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <main>
            <h1 className="title">Danh Sách Question</h1>
            <ul className="breadcrumbs">
              <li>
                <a href="#">Home</a>
              </li>
              <li className="divider">/</li>
              <li>
                <a href="#" className="active">
                  Danh Sách Question
                </a>
              </li>
            </ul>
            <div className="data">
              <RangePicker onChange={(dates, dateStrings) => onChangeDate(dates, dateStrings)} />
              <Button type="primary" onClick={resetPage}>Reset</Button>
              <Button type="primary" icon={<ExportOutlined />} onClick={handlePrint}>Xuất CSV</Button>
            </div>
            <div className="data">
              <div className="content-data">
                <div className="head">
                  <table className="table table-striped" ref={ref}>
                    <thead>
                      <tr>
                        <th scope="col">stt</th>
                        <th scope="col">Tiêu đề</th>
                        <th scope="col">Ngày Đăng</th>
                        <th scope="col">Lượt tương tác</th>
                        <th scope="col">Lượt bình luận</th>
                        <th scope="col">Tag</th>
                        <th scope="col">Thao tác</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        listPost.length > 0 &&
                        listPost.map((item, index) => (
                          <tr key={item._id}>
                            <th scope="row">{index + 1}</th>
                            <td>{item.title}</td>
                        <td>{formatDate(item.date)}</td>
                            <td>{item.likes.length}</td>
                            <td>{item.comments.length}</td>
                            <td>{
                              item?.tags?.map((el) => (
                                <Tag key={el._id} color="lime">#{el.name}</Tag>
                            ))
                            }</td>
                        <td>
                          <Tooltip title="Xóa Bài">                    
                        <Button type="primary" onClick={() => handleRemoveItem(item._id)} shape="circle" icon={<CloseOutlined />} />
                        </Tooltip>
                        </td>
                      </tr>
                        ))
                      }
                    </tbody>
                  </table>
                </div>
                <div className="chart">
                  <div id="chart" />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ListQA;
