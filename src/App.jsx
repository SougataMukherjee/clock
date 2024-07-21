import "./index.css";
import { useEffect, useState } from "react";

export default function App() {
  const [hour, setHour] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    function updateClock() {
      const now = new Date();
      const hours = (now.getHours() / 12) * 360;
      const minutes = (now.getMinutes() / 60) * 360;
      const seconds = (now.getSeconds() / 60) * 360;

      setHour(hours);
      setMinutes(minutes);
      setSecond(seconds);
    }

    setInterval(updateClock, 1000);
  }, []);

  return (
    <div className="App">
      <div className="clock">
        <div className="numbers">
          <div className="twelve">12</div>
          <div className="three">3</div>
          <div className="six">6</div>
          <div className="nine">9</div>
        </div>
        <div className="arrows">
          <div
            className="hour"
            style={{ transform: `rotate(${hour}deg)` }}
          ></div>
          <div
            className="minute"
            style={{ transform: `rotate(${minutes}deg)` }}
          ></div>
          <div
            className="second"
            style={{ transform: `rotate(${second}deg)` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
