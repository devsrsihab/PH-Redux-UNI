import {
  decrement,
  increment,
  incrementByValue,
} from "../redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "../redux/hook";

const Counter = () => {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="flex gap-4 w-full h-screen justify-center items-center">
      <button
        onClick={() => dispatch(decrement())}
        type="button"
        className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Decrement
      </button>
      <span className="flex p-4  text-white bg-purple-500 rounded-full">
        {count}
      </span>

      <button
        onClick={() => dispatch(increment())}
        type="button"
        className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch(incrementByValue(5))}
        type="button"
        className="text-black bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Increment By Value
      </button>
    </div>
  );
};

export default Counter;
