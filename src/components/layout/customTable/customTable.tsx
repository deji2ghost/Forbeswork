import { formatDate } from "../../../utils/formatDate";
import Loader from "../../ui/loader";

type TableData = {
  date: string;
  type: string;
  amount: number;
};

interface Props {
  data: TableData[];
  error?: string;
  loading: boolean;
  header1: string, 
  header2: string,
  header3: string
}

const CustomTable = ({ data, error, loading, header1, header2, header3 }: Props) => {
  if (loading)
    return (
      <div className="relative lg:static min-h-[450px] border border-offGrey">
        <Loader className="lg:left-[450px]" />
      </div>
    );
  if (error)
    return (
      <div className="text-warning min-h-[450px] border border-offGrey">
        {error}
      </div>
    );
  return (
    <div className="w-full max-w-full overflow-x-auto">
      <table className="w-full border-collapse border border-offGrey">
        <thead>
          <tr className="bg-gray-200 text-sm sm:text-base">
            <th className="border border-offGrey px-3 sm:px-4 py-2">{header1}</th>
            <th className="border border-offGrey px-3 sm:px-4 py-2">
              {header2}
            </th>
            <th className="border border-offGrey px-3 sm:px-4 py-2">{header3}</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr
              key={index}
              className="text-center border-t text-sm sm:text-base"
            >
              <td className="border border-offGrey px-3 sm:px-4 py-2">
                {formatDate(item.date)}
              </td>
              <td className="border border-offGrey px-3 sm:px-4 py-2">
                {item.type}
              </td>
              <td className="border border-offGrey px-3 sm:px-4 py-2">
                ${item.amount.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
