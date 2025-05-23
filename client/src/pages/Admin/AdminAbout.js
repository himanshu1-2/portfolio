import React from "react";
import { Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { ShowLoading, HideLoading } from "../../redux/rootSlice";
import axios from "axios";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function AdminAbout() {
  const dispatch = useDispatch();
   const [file, setFile] = useState(null);
    const [downloadUrl, setDownloadUrl] = useState('');
  const { portfolioData } = useSelector((state) => state.root);
  const onFinish = async (values) => {
    try {
      const tempSkills = values.skills.split(",");
      values.skills = tempSkills;
      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/update-about", {
        ...values,
        _id: portfolioData.about._id,
      });
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };
 const uploadResume = async () => {
    const formData = new FormData();
    formData.append('resume', file);

    const res = await axios.post('http://localhost:5000/api/portfolio/upload', formData);
    alert('Resume uploaded!');
    setDownloadUrl(`http://localhost:5000${res.data.path}`);
  };
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin-login");
  };

   const handleFileChange = (e) => setFile(e.target.files[0]);
  return (
    <div>
      <Form
        onFinish={onFinish}
        layout="vertical"
        initialValues={{
          ...portfolioData.about,
          skills: portfolioData.about.skills.join(" , "),
        }}
      >
        <Form.Item name="lottieURL" label="Lottie URL">
          <input placeholder="Lottie URL" />
        </Form.Item>

        <Form.Item name="description1" label="Description1">
          <textarea placeholder="Description1" />
        </Form.Item>

        <Form.Item name="description2" label="Description2">
          <textarea placeholder="Description2" />
        </Form.Item>

        <Form.Item name="skills" label="Skills">
          <textarea placeholder="Skills" />
        </Form.Item>
        <div className="flex justify-end w-full" label="Welcome Text">
          <button className="px-10 py-2 bg-primary text-white" type="submit">
            SAVE
          </button>
          <button
            onClick={handleLogout}
            className="mt-10 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
           <input type="file" onChange={handleFileChange} />
          <button
            onClick={uploadResume}
            className="mt-10 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
           Resume upload
          </button>
        </div>
      </Form>
    </div>
  );
}

export default AdminAbout;
