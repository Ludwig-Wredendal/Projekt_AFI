import React, { useEffect, useState } from 'react';

const DataDisplay = ({ activityType }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://www.boredapi.com/api/activity?type=${activityType}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [activityType]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <h2>The perfect activity for you today would be:</h2>
      <h1>{data.activity}</h1>
      <h3>Good luck!</h3>
    </div>
  );
};

export default DataDisplay;
