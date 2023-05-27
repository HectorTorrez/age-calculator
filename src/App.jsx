import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { Text } from "./components/Text";

function App() {
  const [result, setResult] = useState({
    day: null,
    month: null,
    year: null,
  });
  const [showResult, setShowResult] = useState(false);

  const handleCalculate = (day, month, year) => {
    const currentMonth = new Date().getMonth() + 1;

    const currentDay = new Date().getDay();
    const currentYear = new Date().getFullYear();

    let newYear = currentYear - year;

    let newDay = currentDay - day;

    console.log(currentDay);
    let newMonth = currentMonth - month;

    if (month < currentMonth || (month === currentMonth && day > currentDay)) {
      year--;
    }
    if (newMonth < 0) {
      newMonth += 12;
    }

    if (day < 0 || month < currentMonth) {
      month--;
    }

    setResult({
      day: newDay,
      month: newMonth,
      year: newYear,
    });
    setShowResult(true);
  };

  return (
    <main className="bg-slate-200 h-screen flex justify-center items-center">
      <section className="bg-white flex flex-col  items-center h-3/5 md:w-4/5 w-5/6 max-w-2xl sm:h-4/5 rounded-xl ">
        <Form handleCalculate={handleCalculate} />
        <Text result={result} showResult={showResult} />
      </section>
    </main>
  );
}

export default App;
