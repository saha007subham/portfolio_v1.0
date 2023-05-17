const Buttons = ({ name, onClick, state, color1, color2 }) => {
  return (
    <div>
      <button
        className={`${
          state ? color1 : color2
        } pl-5 pr-5 pt-1 pb-2 rounded mt-3 font-semibold shadow-md`}
        onClick={onClick}
      >
        {name}
      </button>
    </div>
  );
};

export default Buttons;
