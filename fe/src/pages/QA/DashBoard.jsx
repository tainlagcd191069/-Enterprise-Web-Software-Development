import { useState, useEffect } from "react"
import axios from "axios"
  
  
const DashBoard = () => {
  const [dashboard, setDashboard] = useState({
    post: '',
    user: ''
  })

  useEffect(() => {
    new Promise(async () => {
      await fetch();
    })
  },[])

  const fetch = async () => {
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/users/show-dashboard`);
    if (res.status === 201) {
      setDashboard({
        post: res?.data?.data?.post?.length,
        user: res?.data?.data?.user?.length 
      })
    }

  }
    return (
        <div className="">
            <main>
<h1 className="title">Dashboard</h1>
<ul className="breadcrumbs">
  <li><a href="#">Home</a></li>
  <li className="divider">/</li>
  <li><a href="#" className="active">Dashboard</a></li>
</ul>
<div className="info-data">
  <div className="card">
    <div className="head">
      <div>
                  <h2>{ dashboard.user}</h2>
        <p>Số Lượng Tài Khoản</p>
      </div>
      <i className="bx bx-trending-up icon" />
    </div>
    <span className="progress" data-value="40%" />
    <span className="label">40%</span>
  </div>
  <div className="card">
    <div className="head">
      <div>
                  <h2>{dashboard.post}</h2>
        <p>Tổng Số Bài Đăng Góp Ý</p>
      </div>
      <i className="bx bx-trending-up icon up" />
    </div>
    <span className="progress" data-value="60%" />
    <span className="label">60%</span>
  </div>
</div>
{/* <div className="data">
  <div className="content-data">
    <div className="head">
      <h3>Sales Report</h3>
      <div className="menu">
        <i className="bx bx-dots-horizontal-rounded icon" />
        <ul className="menu-link">
          <li><a href="#">Edit</a></li>
          <li><a href="#">Save</a></li>
          <li><a href="#">Remove</a></li>
        </ul>
      </div>
    </div>
    <div className="chart">
      <div id="chart" />
    </div>
  </div>
  <div className="content-data">
    <div className="head">
      <h3>Chatbox</h3>
      <div className="menu">
        <i className="bx bx-dots-horizontal-rounded icon" />
        <ul className="menu-link">
          <li><a href="#">Edit</a></li>
          <li><a href="#">Save</a></li>
          <li><a href="#">Remove</a></li>
        </ul>
      </div>
    </div>
    <div className="chat-box">
      <p className="day"><span>Today</span></p>
      <div className="msg">
        <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
        <div className="chat">
          <div className="profile">
            <span className="username">Alan</span>
            <span className="time">18:30</span>
          </div>
          <p>Hello</p>
        </div>
      </div>
      <div className="msg me">
        <div className="chat">
          <div className="profile">
            <span className="time">18:30</span>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptatum eos quam dolores eligendi exercitationem animi nobis reprehenderit laborum! Nulla.</p>
        </div>
      </div>
      <div className="msg me">
        <div className="chat">
          <div className="profile">
            <span className="time">18:30</span>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, architecto!</p>
        </div>
      </div>
      <div className="msg me">
        <div className="chat">
          <div className="profile">
            <span className="time">18:30</span>
          </div>
          <p>Lorem ipsum, dolor sit amet.</p>
        </div>
      </div>
    </div>
    <form action="#">
      <div className="form-group">
        <input type="text" placeholder="Type..." />
        <button type="submit" className="btn-send"><i className="bx bxs-send" /></button>
      </div>
    </form>
  </div>
</div> */}
</main>
        </div>
    )
}

export default DashBoard