import React, { useState, useEffect } from "react";
import { FormContainer, Form, TextField, TextLabel, InputButton, Text } from "./styles";
import Card from "../../Commons/Card/Card";
import API from "../../../Services/API";
import {IoMdTrain} from 'react-icons/io';
import moment from 'moment';

const TrainsPanel = () => {
  const [stations, setStations] = useState({});
  const today = moment().format('YYYY-MM-DDTkk:mm');
  const [departureTime, setDepartureTime] = useState(today);
  const [arrival, setArrival] = useState(undefined);
  const [departure, setDeparture] = useState(undefined);
  const [trainSchedule, setTrainSchedule] = useState([]);

  useEffect(() => {
    async function getStations() {
      let response = await API.getStations();
      setStations(response);
    }

    getStations();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    let arrivalStation = arrival ? arrival : '';
    let departureStation = departure ? departure : '';
    let departureTimeFormat = moment(departureTime).subtract(1, 'years').format('YYYY-MM-DD');
    let response = await API.getTrainSchedule(arrivalStation, departureStation, departureTimeFormat);
    console.log(response)
    setTrainSchedule(response);
  }

  return (
    <>
    <FormContainer>
      <Card>
        <Form onSubmit={handleSearch}>
          <TextLabel>Departure Date</TextLabel>
          <TextField type="datetime-local" value={departureTime} onChange={e => setDepartureTime(e.currentTarget.value)}></TextField>
          <TextLabel>Departure</TextLabel>
          <TextField as="select" value={departure} onChange={e => setDeparture(e.currentTarget.value)}>
          <option value={undefined}></option>
            {Object.entries(stations).map((station, idx) => (
              <option key={idx} value={station[1]}>
                {station[0]}
              </option>
            ))}
          </TextField>
          <TextLabel>Arrival</TextLabel>
          <TextField as="select" value={arrival} onChange={e => setArrival(e.currentTarget.value)}>
            <option value={undefined}></option>
            {Object.entries(stations).map((station, idx) => (
              <option key={idx} value={station[1]}>
                {station[0]}
              </option>
            ))}
          </TextField>
          <InputButton type="submit" value="Search"></InputButton>
        </Form>
      </Card>
    </FormContainer>

    <FormContainer wrap>
      {trainSchedule.map((train, idx) => (
        <Card key={idx} width="90%" height="20%" margin="10px" cursor="pointer" hover selfCenter> 
          <Text>{train.origin} <IoMdTrain /> {train.destination}</Text>
          <Text>Train: {train.train}</Text>
          <Text>Departure: {moment(train.scheduledDeparture).format('MM/DD/YY kk:mma')}</Text>
        </Card>
      ))}
    </FormContainer>
    </>
  );
};

export default TrainsPanel;
