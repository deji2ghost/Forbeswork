import { Button } from "../../components/ui/button";
import FinancialPieChart from "../../components/ui/chart";
import CustomTable from "../../components/layout/customTable/customTable";
import { lazy, Suspense, useCallback, useEffect, useState } from "react";
import Input from "../../components/ui/input/input";
import {
  fetchInvestments,
  fetchSavings,
  fetchSpendings,
  fetchTransactions,
  fetchUser,
  paginateTransactions,
  setAmount,
  setFormError,
  setModalOpen,
  updateBalance,
} from "../../Redux/slice/dashboardSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../Redux/reduxHook/reduxHook";
import CardSection from "../../components/Template/Home/CardSection";
import { getRandomId } from "../../utils/getId";
import Loader from "../../components/ui/loader";

const LazyModal = lazy(() => import("../../components/ui/modal/modal"));

const Home = () => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);
  const {
    user: data,
    transactions: transactionData,
    userError,
    modalOpen,
    modalType,
    formError,
    amount,
    userLoading,
    transactionsLoading,
    transactionsError,
  } = useAppSelector((state) => state.dashboard);
  useEffect(() => {
    if (!data) dispatch(fetchUser());
    if (!transactionData.paginatedData.length) dispatch(fetchTransactions());
    if (!data?.savings) dispatch(fetchSavings());
    if (!data?.investments) dispatch(fetchInvestments());
    if (!data?.spendings) dispatch(fetchSpendings());
  }, [dispatch, data, transactionData.paginatedData]);

  const customData = {
    savings: data?.savings ?? 0,
    investments: data?.investments ?? 0,
    spendings: data?.spendings ?? 0,
  };

  const customKeys = [
    { key: "savings", label: "Savings" },
    { key: "investments", label: "Investments" },
    { key: "spendings", label: "Spendings" },
  ];

  useEffect(() => {
    dispatch(paginateTransactions({ page }));
  }, [dispatch, page]);

  const nextPage = useCallback(() => {
    if (page < transactionData.totalPages) {
      setPage((prev) => prev + 1);
    }
  }, [page, transactionData.totalPages]);

  const prevPage = useCallback(() => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  }, [page]);

  const openModal = useCallback(
    (type: string) => dispatch(setModalOpen({ open: true, type })),
    [dispatch]
  );

  const closeModal = useCallback(() => {
    dispatch(setModalOpen({ open: false, type: null }));
    dispatch(setFormError(""));
    dispatch(setAmount(null));
  }, [dispatch]);

  const handleSubmit = useCallback(async () => {
    if (amount === null || amount <= 0 || isNaN(amount) || !modalType) {
      dispatch(setFormError("Please enter a valid amount."));
      return;
    }

    if (amount > 2000) {
      dispatch(setFormError("Amount must be less than 2000."));
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

  if (userLoading || transactionsLoading)
    return (
      <div>
        <Loader />
      </div>
    );

  if (userError || transactionsError)
    return <div>{userError ? userError : transactionsError}</div>;

  return (
    <div className="flex flex-col gap-6">
      <CardSection
        userLoading={userLoading}
        error={userError}
        balance={data?.balance}
        spendings={data?.spendings}
        savings={data?.savings}
        investments={data?.investments}
      />
      <div className="flex flex-col lg:flex-row gap-4 items-start justify-between w-full">
        <div className="flex flex-col gap-3 w-full lg:w-[50%] md:h-[570px] shadow-lg border border-offGrey p-3 rounded-md">
          <div className="flex flex-col md:flex-row items-center gap-3">
            <Button handleClick={() => openModal("deposit")}>Deposit</Button>
            <Button handleClick={() => openModal("withdraw")}>Withdraw</Button>
          </div>
          <div className="bg-offGrey p-3">
            <div>
              <h1>Balance</h1>
            </div>
            <div className="hidden h-[430px] lg:flex items-center justify-center">
              <FinancialPieChart
                error={userError}
                loading={userLoading}
                data={customData}
                dataKeys={customKeys}
                colors={["#4A90E2", "#50E3C2", "#F5A623", "#D0021B"]}
                height={300}
                width={400}
              />
            </div>
            <div className="border lg:hidden">
              <FinancialPieChart
                error={userError}
                loading={userLoading}
                data={customData}
                dataKeys={customKeys}
                colors={["#4A90E2", "#50E3C2", "#F5A623", "#D0021B"]}
                height={300}
                width={270}
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[50%]">
          <h1 className="py-2">transactions details</h1>
          <div>
            <CustomTable
              header1="Date"
              header2="Description"
              header3="Amount"
              error={transactionsError}
              loading={transactionsLoading}
              data={transactionData.paginatedData}
            />
            <div className="flex justify-between items-center mt-4">
              <Button
                handleClick={prevPage}
                disabled={page === 1}
                className="w-[30%]"
              >
                Previous
              </Button>
              <span>
                Page {page} of {transactionData.totalPages}
              </span>
              <Button
                handleClick={nextPage}
                disabled={page === transactionData.totalPages}
                className="w-[30%]"
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Suspense>
        <LazyModal
          onClose={closeModal}
          header={modalType === "deposit" ? "Deposit Money" : "Withdraw Money"}
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
              <Button handleClick={handleSubmit}>
                {modalType === "deposit" ? "Add Money" : "Withdraw Money"}
              </Button>
            </div>
          }
        />
      </Suspense>
    </div>
  );
};

export default Home;
