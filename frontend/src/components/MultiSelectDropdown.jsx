import { useState } from "react";
import Select from "react-select";
import "../App.css"; 

const MultiSelectDropdown = ({ options, onAddOption }) => {
  const [newOption, setNewOption] = useState("");

  const handleAddOption = () => {
    if (newOption.trim()) {
      onAddOption({ value: newOption, label: newOption });
      setNewOption("");
    }
  };

  return (
    <div className="multi-select-container">
      <Select options={options} isMulti placeholder="Select multiple..." />
      <div className="input-container">
        <input
          type="text"
          value={newOption}
          onChange={(e) => setNewOption(e.target.value)}
          className="input-box"
          placeholder="Add new option..."
        />
        <button onClick={handleAddOption} className="add-button">
          + Add
        </button>
      </div>
    </div>
  );
};

export default MultiSelectDropdown;
