import React, { useState } from "react";

import ChartDataLabels from "chartjs-plugin-datalabels";
import Confetti from "react-confetti";
import { Pie } from "react-chartjs-2";
import StyledInput from "./components/Input";
import styled from "styled-components";

const OuterDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  color: white;
`;
const InnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const WheelContainer = styled.div`
  position: relative;
  width: 600px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  margin-top: 50px;
`;
const CPBettingLogo = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 5px solid white;
  position: absolute;
  top: calc(50% - 40px);
  left: calc(50% - 40px);
  transition: all 0.3s ease;
  &:hover {
    cursor: pointer;
    border: 5px solid white;
  }
`;
const InputContainer = styled.div`
  width: 400px;
  background-color: #2f2c2c;
  border-radius: 10px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  padding: 0 16px;
`;
const StyledH1 = styled.h1`
  text-align: center;
`;
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  height: 30px;
  border-radius: 5px;
  border: none;
  background-color: #3c3939;
  margin-bottom: 16px;
  margin-right: 16px;
  flex: 1;
`;
const PlusMinus = styled.div`
  width: 30px;
  height: 30px;
  background-color: #3c3939;
  border-radius: 5px;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  &:hover {
    cursor: pointer;
    background-color: #4a4a4a;
  }
`;
const InputRow = styled.div`
  display: flex;
`;
const PieWrapper = styled.div`
  transition: all 3s ease-out;
  transform: ${(props) => props.rotate};
`;
const Pointer = styled.div`
  width: 6px;
  height: 50px;
  background-color: white;
  position: absolute;
  top: -10px;
  left: calc(50% - 3px);
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
`;
const Modal = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(2px);
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  z-index: 100;
  visibility: ${(props) => (props.display ? "visible" : "hidden")};
`;
const WinnerBox = styled.div`
  margin-top: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 600px;
  background-color: black;
  color: white;
  border-radius: 10px;
  border: 2px solid white;
`;

function App() {
  const [teams, setTeams] = useState(
    JSON.parse(localStorage.getItem("teams")) || []
  );
  const [value, setValue] = useState("");
  const [rotation, setRotation] = useState(0);
  const [piData, setPiData] = useState(
    JSON.parse(localStorage.getItem("piData")) || []
  );
  const [makeItRain, setRain] = useState(false);
  const [winner, setWinner] = useState("");

  const updateTeams = (newTeams) => {
    setTeams(newTeams);
    localStorage.setItem("teams", JSON.stringify(newTeams));
  };
  const handleInputChange = (event) => {
    const target = event.target;
    const val = target.value;
    setValue(val);
  };
  const addTeam = () => {
    if (value.length > 0) {
      let tempArr = [...teams];
      let tempPiData = [...piData];
      tempArr.push(value);
      tempPiData.push(1);
      setTeams(tempArr);
      localStorage.setItem("teams", JSON.stringify(tempArr));
      setPiData(tempPiData);
      localStorage.setItem("piData", JSON.stringify(tempPiData));
      setValue("");
    }
  };
  const subtractTeam = (index) => {
    let tempArr = [...teams];
    let tempPiData = [...piData];
    tempArr.splice(index, 1);
    tempPiData.splice(index, 1);
    setTeams(tempArr);
    localStorage.setItem("teams", JSON.stringify(tempArr));
    setPiData(tempPiData);
    localStorage.setItem("piData", JSON.stringify(tempPiData));
  };
  const spin = () => {
    setRain(false);
    if (teams.length > 0) {
      let rand = rotation + Math.floor(Math.random() * 5000) + 1080;
      setRotation(rand);
      let deg = 360 - (rand % 360);
      let angle = 360 / teams.length;
      let index = Math.floor(deg / angle);
      setTimeout(() => {
        setRain(true);
        setWinner(teams[index]);
      }, 3250);
    }
  };

  let data = {
    labels: teams,
    datasets: [
      {
        data: piData,
        borderColor: "#ffffff",
        borderWidth: 3,
        backgroundColor: [
          "#000000",
          "#00f374",
          "#000000",
          "#00f374",
          "#000000",
          "#00f374",
          "#000000",
          "#00f374",
          "#000000",
          "#00f374",
          "#000000",
          "#00f374",
          "#000000",
          "#00f374",
          "#000000",
          "#00f374",
          "#000000",
          "#00f374",
          "#000000",
          "#00f374",
          "#000000",
          "#00f374",
          "#000000",
          "#00f374",
          "#000000",
          "#00f374",
          "#000000",
          "#00f374",
          "#000000",
          "#00f374",
          "#000000",
          "#00f374",
          "#000000",
          "#00f374",
          "#000000",
          "#00f374",
          "#000000",
          "#00f374",
          "#000000",
          "#00f374",
        ],
        hoverBackgroundColor: [
          "#000000",
          "#00f374",
          "#000000",
          "#00f374",
          "#000000",
          "#00f374",
          "#000000",
          "#00f374",
          "#000000",
          "#00f374",
          "#000000",
          "#00f374",
          "#000000",
          "#00f374",
          "#000000",
          "#00f374",
          "#000000",
          "#00f374",
          "#000000",
          "#00f374",
          "#000000",
          "#00f374",
          "#000000",
          "#00f374",
          "#000000",
          "#00f374",
          "#000000",
          "#00f374",
          "#000000",
          "#00f374",
          "#000000",
          "#00f374",
          "#000000",
          "#00f374",
          "#000000",
          "#00f374",
          "#000000",
          "#00f374",
          "#000000",
          "#00f374",
        ],
      },
    ],
  };
  const options = {
    plugins: {
      datalabels: {
        color: "white",
        rotation: 0,
        // anchor: "end",
        align: "end",

        labels: {
          title: {
            font: {
              weight: "bold",
              size: 18,
            },
          },
        },
        formatter: function (value, context) {
          return context.chart.data.labels[context.dataIndex];
        },
      },
    },
    tooltips: { enabled: false },
    hover: { mode: null },
    legend: {
      display: false,
      labels: {
        display: false,
      },
    },
  };

  return (
    <>
      <Modal display={makeItRain}>
        <WinnerBox>
          <h1>{winner}</h1>
        </WinnerBox>
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          colors={["#000000", "#00f374", "#ffffff"]}
          run={makeItRain}
          recycle={false}
          onConfettiComplete={(confetti) => {
            setRain(false);
            confetti.reset();
          }}
        />
      </Modal>
      <OuterDiv>
        <InnerDiv>
          <WheelContainer>
            <PieWrapper rotate={`rotate(${rotation}deg)`}>
              <Pie width={600} height={600} data={data} options={options} />
            </PieWrapper>
            <Pointer />
            <CPBettingLogo
              src="https://scontent-sjc3-1.cdninstagram.com/v/t51.2885-19/s150x150/91508536_549648065667734_8310853153318764544_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_ohc=MtbcmRUBDekAX_cTAuj&tp=1&oh=0e64c620694c7aef19530652348dcb9f&oe=60261409"
              onClick={spin}
            />
          </WheelContainer>
          <InputContainer>
            <StyledH1>Spread Lines</StyledH1>
            <InputRow>
              <Input value={value} onChange={handleInputChange} />
              <PlusMinus onClick={addTeam}> + </PlusMinus>
            </InputRow>
            <FormContainer>
              {teams.map((team, i) => {
                return (
                  <InputRow key={i}>
                    <StyledInput
                      ind={i}
                      val={team}
                      teams={teams}
                      updateTeams={updateTeams}
                    />
                    <PlusMinus onClick={() => subtractTeam(i)}> - </PlusMinus>
                  </InputRow>
                );
              })}
            </FormContainer>
          </InputContainer>
        </InnerDiv>
      </OuterDiv>
    </>
  );
}

export default App;
