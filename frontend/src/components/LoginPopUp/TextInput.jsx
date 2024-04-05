export const TextInput = ({ type, placeholder, required }) => {
  return (
    <input
      className="border-2 border-slate-500 rounded-md"
      type={type}
      placeholder={placeholder}
      required={required}
    />
  );
};
