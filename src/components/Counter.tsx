import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/features/counterSlice";

// counterSlice.ts

export type TCounterState = {
  counter: { count: number };
};
const Counter = () => {
  const { count } = useSelector((state: TCounterState) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="flex w-full h-screen justify-center items-center">
      <button
        onClick={() => dispatch(decrement())}
        type="button"
        className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Decrement
      </button>
      <span className="flex p-4 me-3 text-white bg-purple-500 rounded-full">
        {count}
      </span>

      <button
        onClick={() => dispatch(increment())}
        type="button"
        className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
