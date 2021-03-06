export default function GetInstructions({ inst }) {
    return (
      <div className="instruction">
        <h2>Instruction</h2>
        <ul>
          {Object.keys(inst).map((item) => {
            return <li keys={item}>{inst[item]}</li>;
          })}
        </ul>
      </div>
    );
  }
  