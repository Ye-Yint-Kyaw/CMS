interface CheckboxProps {
  className: string;
  label: string;
  name: string
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, checked, name, onChange }) => {
  const handleChange = () => {
    const newChecked = !checked;
    onChange(newChecked);
  };
  return (
    <div>
      <label>
        <input type="checkbox" name={name} checked={checked} onChange={handleChange} />
        {label}
      </label>
    </div>
  );
};
