export const InputBox = ({ text, placeholder }) => {
  return (
    <div className="mb-5">
      <input
        className="w-75 border-2 border-slate-300 p-2 rounded-md "
        type={text}
        placeholder={placeholder}
        required
      />
    </div>
  );
};
