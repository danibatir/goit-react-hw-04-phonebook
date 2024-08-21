const Filter = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search contacts"
    />
  );
};

export default Filter;
