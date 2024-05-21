import React, { useEffect, useState } from 'react';

const ParticipantDisplay = ({ participantNumber, fetchActivityTrigger }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchParticipants2 = () => {
    setLoading(true);
    fetch(`http://www.boredapi.com/api/activity?participants=2`)
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

  const fetchParticipants3 = () => {
    setLoading(true);
    fetch(`http://www.boredapi.com/api/activity?participants=3`)
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

  const fetchParticipants4 = () => {
    setLoading(true);
    fetch(`http://www.boredapi.com/api/activity?participants=4`)
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
    fetchParticipants2();
  }, [participantNumber]);
  

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
      <p>The perfect activity for you today would be:</p>
      <h3>{data.activity}</h3>
      <p>Participants: {data.participants}</p>
      <button onClick={fetchParticipants2}>Participants 2</button> {/*Hämtar ny aktivitet från redan bestämt typ*/}
      <button onClick={fetchParticipants3}>Participants 3</button> {/*Hämtar ny aktivitet från redan bestämt typ*/}
      <button onClick={fetchParticipants4}>Participants 4</button> {/*Hämtar ny aktivitet från redan bestämt typ*/}

    </div>
  );
};

export default ParticipantDisplay;
