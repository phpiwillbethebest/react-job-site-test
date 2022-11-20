import { useQuery } from 'react-query';
import { Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './App.css';
import JobList from './components/JobList/JobList';
import JobDetails from './components/JobDetails/JobDetails';

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const resizeScrn = () => {
    setScreenWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', resizeScrn, false);
  }, []);

  const { data, isLoading, isError, error } = useQuery('data', async () => {
    const res = await fetch(
      'https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu'
    );
    return await res.json();
  });

  console.log(data);

  if (isLoading) {
    return <h1>Loading jobs...</h1>;
  }

  if (isError) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<JobList jobs={data} screenWidth={screenWidth} />}
        />
        <Route
          path="/jobdetails/:jobId"
          element={<JobDetails jobs={data} screenWidth={screenWidth} />}
        />
      </Routes>
    </div>
  );
}

export default App;
