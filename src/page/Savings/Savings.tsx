import { lazy, Suspense, useCallback, useEffect } from "react";
import Card from "../../components/ui/card/card";
import { FaMoneyBill } from "react-icons/fa6";
import {
  useAppDispatch,
  useAppSelector,
} from "../../Redux/reduxHook/reduxHook";
import FinancialPieChart from "../../components/ui/chart";
import { Button } from "../../components/ui/button";
import CustomTable from "../../components/layout/customTable/customTable";
import Input from "../../components/ui/input/input";
import {
  fetchSavings,
  fetchSpendings,
  fetchUser,
  setAmount,
  setFormError,
  setModalOpen,
  updateBalance,
} from "../../Redux/slice/dashboardSlice";
import { getRandomId } from "../../utils/getId";
import Loader from "../../components/ui/loader";
const LazyModal = lazy(() => import("../../components/ui/modal/modal"));

const Savings = () => {
  const dispatch = useAppDispatch();

  const {
    user: data,
    savings,
    modalOpen,
    modalType,
    amount,
    formError,
    userLoading,
    userError,
    savingsLoading,
    savingsError,
  } = useAppSelector((state) => state.dashboard);

  useEffect(() => {
    if (!data) dispatch(fetchUser());
    if (!savings.length) dispatch(fetchSavings());
    if (!data?.spendings) dispatch(fetchSpendings());
  }, [dispatch, data, savings.length]);

  const customData = {
    savings: data?.savings ?? 0,
    investments: data?.investments ?? 0,
    spendings: data?.spendings ?? 0,
  };

  const customKeys = [
    { key: "savings", label: "Savings" },
    { key: "spendings", label: "Spendings" },
  ];

  const openModal = useCallback(
    (type: string) => {
      dispatch(setModalOpen({ open: true, type }));
    },
    [dispatch]
  );

  const closeModal = useCallback(() => {
    dispatch(setModalOpen({ open: false, type: null }));
    dispatch(setFormError(""));
    dispatch(setAmount(null));
  }, [dispatch]);

  const handleSubmit = useCallback(() => {
    if (amount === null || amount <= 0 || isNaN(amount) || !modalType) {
      dispatch(setFormError("Please enter a valid amount."));
      return;
    }

    if (amount > 2000) {
      dispatch(setFormError("Savings must be less than 2000."));
      return;
    }

    dispatch(setFormError(""));

    const transactionDetails = {
      id: getRandomId(),
      amount,
      type: modalType,
      date: new Date().toISOString(),
    };

    dispatch(updateBalance(transactionDetails));
    dispatch(setAmount(null));
    dispatch(setModalOpen({ open: false, type: null }));
  }, [amount, modalType, dispatch]);

  if(userLoading || savingsLoading) return <div><Loader /></div>

  if(userError || savingsError) return <div>{userError ? userError : savingsError}</div>

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h1>Welcome To Your Savings Board</h1>
        <div className="flex flex-col lg:flex-row items-center gap-4">
          <Card
            error={userError}
            loading={userLoading}
            header="Total Balance"
            icon={<FaMoneyBill />}
            text={data?.balance || 0}
          />
          <Card
            error={userError}
            loading={userLoading}
            header="Total Saved Balance"
            icon={<FaMoneyBill />}
            text={data?.savings || 0}
          />
          <Card
            error={userError}
            loading={userLoading}
            header="Spendings"
            icon={<FaMoneyBill />}
            text={data?.spendings || 0}
          />
        </div>
      </div>
      <div className="flex items-start flex-col lg:flex-row gap-4 justify-between w-full">
        <div className="flex flex-col gap-3 w-full lg:w-[50%] md:h-[570px] shadow-lg border border-offGrey p-3 rounded-md">
          <Button handleClick={() => openModal("Save")}>Click to Save</Button>
          <div className="bg-offGrey p-3 border">
            <h1 className="">Whenever you save it gets deducted from your spendings</h1>
            <div className="hidden h-[400px] lg:flex items-center justify-center">
              <FinancialPieChart
                loading={userLoading}
                error={userError}
                data={customData}
                dataKeys={customKeys}
                colors={["#4A90E2", "#50E3C2", "#F5A623", "#D0021B"]}
                height={300}
                width={400}
              />
            </div>
            <div className="border lg:hidden">
              <FinancialPieChart
                loading={userLoading}
                error={userError}
                data={customData}
                dataKeys={customKeys}
                colors={["#4A90E2", "#50E3C2", "#F5A623", "#D0021B"]}
                height={300}
                width={270}
              />
            </div>
          </div>
        </div>
        <div className="w-[50%] lg:w-full">
          <CustomTable
            header1="Date"
            header2="Description"
            header3="Amount"
            loading={savingsLoading}
            error={savingsError}
            data={savings}
          />
        </div>
      </div>
      <Suspense>
        <LazyModal
          onClose={closeModal}
          header={modalType ? modalType : ""}
          isOpen={modalOpen}
          content={
            <div className="flex flex-col gap-2 items-center bg-white">
              <Input
                placeholder={`Enter ${
                  modalType === "deposit" ? "deposit" : "withdraw"
                } amount`}
                type="number"
                value={amount ?? ""}
                handleChange={(e) =>
                  dispatch(setAmount(parseFloat(e.target.value)))
                }
              />
              {formError ? (
                <p className="text-[15px] bg-white text-left w-full text-warning">
                  {formError}
                </p>
              ) : null}
            </div>
          }
          footer={
            <div className="flex items-center justify-between bg-white gap-3">
              <Button handleClick={closeModal}>Cancel</Button>
              <Button handleClick={handleSubmit}>{modalType}</Button>
            </div>
          }
        />
      </Suspense>
    </div>
  );
};

export default Savings;
