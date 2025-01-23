import Select from "react-select";

const SingleSelectDropdown = ({ options, onSelect }) => {
  const handleChange = (selectedOption) => {
    onSelect(selectedOption);
  };

  return (
    <Select
      options={options}
      onChange={handleChange}
      isSearchable
      placeholder="Select..."
    />
  );
};

export default SingleSelectDropdown;