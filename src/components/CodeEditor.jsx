import React from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Import useDispatch and useSelector
import { setCode, setResult } from '../redux/practiceSlice.js';

function CodeEditor() {
  const dispatch = useDispatch();
  const { currentTask, code, result } = useSelector((state) => state.practice);

  const runCode = () => {
    if (!currentTask) return;
    try {
      const func = new Function('return ' + code)();
      const testResult = currentTask.testCases.every(
        (tc) => JSON.stringify(func(...tc.input)) === JSON.stringify(tc.output)
      );
      dispatch(setResult(testResult ? 'Success!' : 'Failed!'));
    } catch (e) {
      dispatch(setResult('Error: ' + e.message));
    }
  };

  if (!currentTask) {
    return <div>Please select a task to start coding.</div>;
  }

  return (
    <div>
      <textarea
        value={code}
        onChange={(e) => dispatch(setCode(e.target.value))}
        placeholder="Write your code here..."
      />
      <button onClick={runCode}>Run Code</button>
      <div>Result: {result}</div>
    </div>
  );
}

export default CodeEditor;