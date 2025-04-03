import { FaMoneyBill } from "react-icons/fa6";
import Card from "../../ui/card/card";
import { CardSectionProps } from "./types";

const CardSection: React.FC<CardSectionProps> = ({
  balance,
  spendings,
  savings,
  investments,
  userLoading,
  error
}) => {
  return (
    <div className="flex flex-col lg:flex-row gap-3 items-center w-full">
      <Card
      error={error}
        className="w-full lg:w-[24%]"
        header="Balance"
        icon={<FaMoneyBill />}
        text={balance}
        loading={userLoading}
      />
      <Card
      error={error}
        className="w-full lg:w-[24%]"
        header="Savings"
        icon={<FaMoneyBill />}
        text={savings}
        loading={userLoading}
      />
      <Card
      error={error}
        className="w-full lg:w-[24%]"
        header="Investment"
        icon={<FaMoneyBill />}
        text={investments}
        loading={userLoading}
      />
      <Card
      error={error}
        className="w-full lg:w-[24%]"
        header="Spendings"
        icon={<FaMoneyBill />}
        text={spendings}
        loading={userLoading}
      />
    </div>
  );
};

export default CardSection;
