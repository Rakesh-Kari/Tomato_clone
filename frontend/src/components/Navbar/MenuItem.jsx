export const MenuItem = ({ children, isActive, onClick }) => {
  return (
    <li
      className={`cursor-pointer ${
        isActive ? " border-b-2 border-gray-500" : " "
      }`}
      onClick={onClick}
    >
      {children}
    </li>
  );
};
