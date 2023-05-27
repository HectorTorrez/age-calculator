import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const Form = ({ handleCalculate }) => {
  const [day, setDay] = useState(0);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  const [dayError, setDayError] = useState(false);
  const [monthError, setMonthError] = useState(false);
  const [yearError, setYearError] = useState(false);

  const handleSubmit = () => {
    if (day === 0) {
      setDayError(true);
    } else {
      setDayError(false);
    }
    if (month === 0) {
      setMonthError(true);
    } else {
      setMonthError(false);
    }
    if (year === 0) {
      setYearError(true);
    } else {
      setYearError(false);
    }
    if ((day, month, year === 0)) return;
    handleCalculate(day, month, year);
  };

  return (
    <section className="flex flex-col justify-center items-center mt-10 md:mt-20">
      <section className="flex md:gap-10 ">
        <label
          htmlFor=""
          className={`${
            dayError
              ? "flex flex-col w-24 sm:w-36 md:w-full text-lg text-red-500 font-semibold"
              : "flex flex-col w-24 sm:w-36 md:w-full text-lg text-gray-500 font-semibold"
          } `}
        >
          Day
          <input
            className="w-24 sm:w-36  text-start pl-2 border border-gray-200 rounded mt-3 text-black font-bold outline-purple-300 py-1 sm:py-3 focus:placeholder:text-black text-2xl"
            type="number"
            onChange={(e) => setDay(e.target.value)}
            placeholder="DD"
          />
          {dayError && <p className="text-red-500">Required</p>}
        </label>
        <label
          htmlFor=""
          className={`${
            monthError
              ? "flex flex-col w-24 sm:w-36 md:w-full text-lg text-red-500 font-semibold"
              : "flex flex-col w-24 sm:w-36 md:w-full text-lg text-gray-500 font-semibold"
          } `}
        >
          Month
          <input
            className="w-24 sm:w-36  text-start pl-2 border border-gray-200 rounded mt-3 text-black font-bold outline-purple-300 py-1 sm:py-3 text-2xl"
            type="number"
            onChange={(e) => setMonth(e.target.value)}
            placeholder="MM"
          />
          {monthError && <p className="text-red-500">Required 2 numbers</p>}
        </label>
        <label
          htmlFor=""
          className={`${
            yearError
              ? "flex flex-col w-24 sm:w-36 md:w-full text-lg text-red-500 font-semibold"
              : "flex flex-col w-24 sm:w-36 md:w-full text-lg text-gray-500 font-semibold"
          } `}
        >
          Year
          <input
            className="w-24 sm:w-36  text-start pl-2 border border-gray-200 rounded mt-3 text-black font-bold outline-purple-300 py-1 sm:py-3 text-2xl"
            type="number"
            onChange={(e) => setYear(e.target.value)}
            placeholder="YYYY"
          />
          {yearError && <p className="text-red-500">Required</p>}
        </label>
      </section>

      <button
        className="bg-purple-500 text-white py-4 px-6 mt-5 rounded-lg"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </section>
  );
};
