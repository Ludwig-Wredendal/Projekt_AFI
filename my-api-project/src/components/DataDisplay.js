import React, { useEffect, useState } from 'react';

const DataDisplay = ({ activityType, fetchActivityTrigger }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchActivity = () => {
    setLoading(true);
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
  };

  useEffect(() => {
    fetchActivity();
  }, [activityType, fetchActivityTrigger]);

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
      <p>Type: {activityType}</p>
      <p>Participants: {data.participants}</p>
      <p>Link: {data.link}</p>
      <h3>Good luck!</h3>
    </div>
  );
};

export default DataDisplay;
