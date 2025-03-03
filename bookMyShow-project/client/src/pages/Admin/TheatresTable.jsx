import React, { useEffect, useState } from "react";
import { Button, message, Table } from "antd";
import { hideLoading, showLoading } from "../../redux/loaderSlice";
import { getAllTheatres, updateTheatre } from "../../api/theatre";
import { useDispatch } from "react-redux";
function TheatresTable() {
  const [theatres, setTheatres] = useState([]);
  const dispatch = useDispatch();
  const getData = async () => {
    dispatch(showLoading());
    const response = await getAllTheatres();
    const allTheatres = response.data;
    console.log(allTheatres);
    
    setTheatres(
      allTheatres.map(function (item) {
        return { ...item, key: `theatre${item._id}` };
      })
    );
    dispatch(hideLoading());
  };
  useEffect(() => {
    getData();
  }, []);

  const handleStatusChange = async (theatre) => {
    try{
      dispatch(showLoading());
      let values = {...theatre, theatreId: theatre["_id"], isActive: !theatre.isActive};
      const response = await updateTheatre(values);
      console.log(response);
      if(response.success){
        message.success(response.message);
        getData();
      }
      dispatch(hideLoading);
    }catch(err){
      dispatch(hideLoading());
      message.error(err.message)
    }
  };

  const tableHeadings = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Owner",
      dataIndex: "owner",
      render: (text, data) => {
        return data.owner && data.owner.name;
      },
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status, data) => {
        if (data.isActive) {
          return "Approved";
        } else {
          return "Pending/ Blocked";
        }
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, data) => {
        return (
          <div className="d-flex align-items-center gap-10">
            {data.isActive ? (
              <Button onClick={() => handleStatusChange(data)}>Block</Button>
            ) : (
              <Button onClick={() => handleStatusChange(data)}>Approve</Button>
            )}
          </div>
        );
      },
    },
  ];
  return (
  <>
    { theatres && theatres.length > 0 && <Table dataSource={theatres} columns={tableHeadings} /> }
  </>
  )
}

export default TheatresTable;
