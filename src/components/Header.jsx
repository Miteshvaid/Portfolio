import img from "../assets/img.jpg";
const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-6 rounded-t-xl  justify-between items-center flex font-serif">
      <div>
        <div className="font-bold text-3xl mx-2 p-1">Mitesh Vaid</div>
        <div className=" text-xl mx-3 p-2">Mern Developer</div>
      </div>
      <img className="rounded-full w-28 " src={img} alt="" />
    </header>
  );
};
export default Header;
