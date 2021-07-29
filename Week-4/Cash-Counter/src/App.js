import { useState } from "react";
import "./styles.css";

export default function App() {
  const [bill, setBill] = useState(0);
  const [cash, setCash] = useState(0);
  const [outputNoteValWithCount, setOutputNoteValWithCount] = useState([]);
  const [showTable, setShowTable] = useState(false);

  const billAmountHandler = (event) => {
    setBill(() => event.target.value);
  };

  const cashExchangeHandler = (event) => {
    setCash(() => event.target.value);
  };

  const submitHandler = (event) => {
    const returnAmount = cash - bill;
    const outputNotesCount = calculateNotesCount(returnAmount);
    setOutputNoteValWithCount(() => outputNotesCount);
    setShowTable(true);

    event.preventDefault();
  };

  const calculateNotesCount = (returnAmount) => {
    const outputNotesCount = [
      { noteVal: 1, noteCount: 0 },
      { noteVal: 5, noteCount: 0 },
      { noteVal: 10, noteCount: 0 },
      { noteVal: 20, noteCount: 0 },
      { noteVal: 100, noteCount: 0 },
      { noteVal: 500, noteCount: 0 },
      { noteVal: 2000, noteCount: 0 }
    ];
    const notes = [1, 5, 10, 20, 100, 500, 2000];
    var i = notes.length - 1;
    while (returnAmount !== 0) {
      const notesCount = Math.floor(returnAmount / notes[i]);
      if (notesCount !== 0) {
        outputNotesCount[i].noteCount += notesCount;
        returnAmount %= notes[i];
      } else {
        i--;
      }
    }
    return outputNotesCount;
  };

  return (
    <div className="App">
      <h1>Cash Return to Customer</h1>
      <form onSubmit={submitHandler} className="cash-form">
        <div>
          <label className="cash-form__bill" htmlFor="bill">
            Bill Amount{" "}
          </label>
          <input
            onChange={billAmountHandler}
            id="bill"
            value={bill}
            type="number"
          />
        </div>
        {bill > 0 && (
          <div>
            <label htmlFor="cash">Cash given by customer</label>
            <input
              onChange={cashExchangeHandler}
              id="cash"
              value={cash}
              type="number"
            />
          </div>
        )}
        <div>
          {/* {console.log("bill:" + bill)}
          {console.log("cash:" + cash)} */}
          <button
            disabled={cash === 0 || parseInt(cash) < parseInt(bill)}
            type="submit"
          >
            {/* {console.log(cash < bill)} */}
            Submit
          </button>
        </div>
      </form>
      {showTable && (
        <div className="output-table">
          <table className="ouput-table__table">
            <tbody>
              <tr>
                <th>Note Count</th>

                {outputNoteValWithCount.map((note) => {
                  return <td key={note.noteVal}>{note.noteCount}</td>;
                })}
              </tr>
              <th>Note Value</th>
              {outputNoteValWithCount.map((note) => {
                return <td key={note.noteVal}>{note.noteVal}</td>;
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
