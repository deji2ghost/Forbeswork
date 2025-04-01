import { FaMoneyBill } from "react-icons/fa6";
import { Button } from "../../components/ui/button";
import Card from "../../components/ui/card/card";
import FinancialPieChart from "../../components/ui/chart";
import GetTransactions from "../../hooks/getTransactions";
import GetUser from "../../hooks/getuser";
import { useEffect } from "react";
import CustomTable from "../../components/layout/customTable/customTable";

const Home = () => {
  const { data, isLoading, error } = GetUser();
  const {
    data: transactionData,
    // isLoading: transactionLoading,
    // error: transactionError,
  } = GetTransactions();
  useEffect(() => {
    console.log(data, transactionData);
  }, [data]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-3 items-center">
        <Card
        className="w-[24%]"
        header="Balance"
        icon={<FaMoneyBill />}
        text={data?.balance}
        />
        <Card
        className="w-[24%]"
        header="Savings"
        icon={<FaMoneyBill />}
        text={data?.savings}
        />
        <Card
        className="w-[24%]"
        header="Investment"
        icon={<FaMoneyBill />}
        text={data?.investments}
        />
        <Card
        className="w-[24%]"
        header="Spendings"
        icon={<FaMoneyBill />}
        text={data?.spendings}
        />
      </div>
      <div className="flex items-start justify-between">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <Button>Deposit</Button>
          <Button>Transfer</Button>
          <Button>Invest</Button>
          <Button>Save</Button>
        </div>
        <div className="bg-offGrey p-3 border">
          <div>
            <h1>Balance</h1>
          </div>
          <div className="border border-red-800">
            <FinancialPieChart data={data} />
          </div>
        </div>
      </div>
      <div>
        <h1 className="py-3">transactions details</h1>
        <div>
          <CustomTable 
          data={transactionData}
          />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;
