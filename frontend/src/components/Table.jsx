import { useState } from "react";
import SingleSelectDropdown from "./SingleSelectDropdown";
import MultiSelectDropdown from "./MultiSelectDropdown";
import "../App.css"; 

const initialSingleOptions = [
  { value: "Option 1", label: "Option 1" },
  { value: "Option 2", label: "Option 2" },
  { value: "Option 3", label: "Option 3" },
];

const initialMultiOptions = [
  { value: "Option 1", label: "Option 1" },
  { value: "Option 2", label: "Option 2" },
  { value: "Option 3", label: "Option 3" },
];

const Table = () => {
  const [rows, setRows] = useState([{ id: 1 }]);
  const [usedOptions, setUsedOptions] = useState([]);
  const [multiOptions, setMultiOptions] = useState(initialMultiOptions);

  const addRow = () => {
    setRows([...rows, { id: rows.length + 1 }]);
  };

  const handleSingleSelectChange = (rowId, selectedOption) => {
    setUsedOptions([...usedOptions, selectedOption]);
  };

  const addNewMultiOption = (newOption) => {
    setMultiOptions([...multiOptions, newOption]);
  };

  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            <th>Label 1</th>
            <th>Label 2</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>
                <SingleSelectDropdown
                  options={initialSingleOptions.filter(
                    (opt) => !usedOptions.includes(opt.value)
                  )}
                  onSelect={(selectedOption) =>
                    handleSingleSelectChange(row.id, selectedOption.value)
                  }
                />
              </td>
              <td>
                <MultiSelectDropdown
                  options={multiOptions}
                  onAddOption={addNewMultiOption}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addRow} className="add-row-button">
        + Add New Row
      </button>
    </div>
  );
};

export default Table;
