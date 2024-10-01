const List = ({ items }) => {
  return (
    <ul className="list-disc ml-5 list-inside text-gray-600 font-serif">
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
};
export default List;
