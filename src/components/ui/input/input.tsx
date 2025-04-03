import { cn } from "../../../lib/utils";

interface Form {
  placeholder: string;
  value: string | number;
  type: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string
}

const Input = ({ placeholder, value, type, handleChange, className }: Form) => {
  return (
      <input
      className={cn(
        "*:py-2 w-full px-4 border border-black font-[400] rounded-[4px] text-[16px] outline-none focus:shadow-2xl bg-offGrey",
        "appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
        className
      )}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        inputMode={type === "number" ? "numeric" : undefined}
      />
  );
};

export default Input;
