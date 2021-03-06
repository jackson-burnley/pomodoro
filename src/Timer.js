import React from "react";

const Timer = () => {
  const [sec, setSec] = React.useState(25 * 60); //25 minutos.
  const [click, setClick] = React.useState(false);
  const min = Math.floor(sec / 60); //Um minuto
  const seconds = sec % 60;

  React.useEffect(() => {
    if (sec > 0) {
      var count = setTimeout(() => {
        setSec(sec - 1);
      }, 1000);
    } else {
      setSec(25 * 60);
      alert("Acabou!");
    }
  }, [sec, click]);

  function handleTimer() {
    setClick(!click);

    if (click === true) {
      return;
    }
  }

  return (
    <div className="Timer">
      <span className="Timer-span">
        {String(min).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </span>

      <button onClick={handleTimer}>Start</button>
    </div>
  );
};

export default Timer;
