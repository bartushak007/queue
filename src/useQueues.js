import { useState, useEffect } from "react";

const useQueues = () => {
  const [queues, setQueues] = useState([]);
  const [length, setLength] = useState(0);
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    setLength(queues.length);
    setIsEmpty(queues.length === 0);
  }, [queues]);

  // push
  const enqueue = value => setQueues([...queues, value]);

  // shift
  const dequeue = () => {
    setQueues(queues.slice(1));
  };

  // values
  const values = () => [...queues];

  // clear
  const clear = () => setQueues([]);

  return {
    enqueue,
    dequeue,
    values,
    length,
    isEmpty,
    clear
  };
};

export default useQueues;
