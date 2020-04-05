import React, { useState, useEffect } from "react";
import { FormContainer, Form, TextField, TextLabel, InputButton } from "./styles";
import Card from "../../Commons/Card/Card";
import API from "../../../Services/API";
import moment from 'moment';

const TrainsPanel = () => {
  const [stations, setStations] = useState({});
  const today = moment().format('YYYY-MM-DDTkk:mm');
  const [departureTime, setDepartureTime] = useState(today);
  const [arrival, setArrival] = useState(undefined);
  const [departure, setDeparture] = useState(undefined);
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
  }

  return (
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
  );
};

export default TrainsPanel;
