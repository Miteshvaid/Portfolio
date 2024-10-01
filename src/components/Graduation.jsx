const Graduation = ({ title, school, year }) => {
  return (
    <>
      <h1 className="font-bold text-lg">{title}</h1>
      <p className="text-sm mb-4 text-gray-700">
        {school}
        {year}
      </p>
    </>
  );
};
export default Graduation;
