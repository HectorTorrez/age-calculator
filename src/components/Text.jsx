// eslint-disable-next-line react/prop-types
export const Text = ({ result, showResult }) => {
  return (
    <section className="flex flex-col items-start w-full mx-2">
      <section className="flex flex-col justify-start mx-4 mt-16 gap-4">
        <p className="text-6xl  sm:text-8xl font-bold text-purple-500">
          {showResult ? result.year : "---"}

          <span className="text-black">years</span>
        </p>
        <p className="text-5xl sm:text-8xl font-bold text-purple-500">
          {showResult ? result.month : "---"}
          <span className="text-black">months</span>
        </p>
        <p className="text-5xl sm:text-8xl font-bold text-purple-500">
          {showResult ? result.day : "---"}
          <span className="text-black">days</span>
        </p>
      </section>
    </section>
  );
};
