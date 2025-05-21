import React, { useState } from 'react';
import axios from 'axios';

const ResumeUploader = () => {
  const [file, setFile] = useState(null);
  const [downloadUrl, setDownloadUrl] = useState('');

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const uploadResume = async () => {
    const formData = new FormData();
    formData.append('resume', file);

    const res = await axios.post('http://localhost:5000/upload', formData);
    alert('Resume uploaded!');
    setDownloadUrl(`http://localhost:5000${res.data.path}`);
  };

    const fetchDownloadLink = async () => {
        const res = await axios.get('http://localhost:5000/api/portfolio/latest-resume');
        const a = document.createElement('a');
        const url = res.data.downloadUrl;

        a.href = url;
        a.download = 'Himanshu_Ajwani_Resume.pdf'; // Force download with name
        document.body.appendChild(a);
        a.click();
        a.remove();
    };

  return (
    <div>
       <button className="" onClick={fetchDownloadLink}>Resume</button>
    </div>
  );
};

export default ResumeUploader;
