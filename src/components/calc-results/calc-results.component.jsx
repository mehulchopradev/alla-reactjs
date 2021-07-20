import './calc-results.styles.scss';

function CalcResults({ firstNo, secondNo, operation, ans }) {
  return (
    <>
      <p>First No entered: <i data-testid='first'>{firstNo}</i></p>
      <p>Operation selected: <i data-testid='operation'>{operation}</i></p>
      <p>Second No entered: <i data-testid='second'>{secondNo}</i></p>
      <p>Ans: <i data-testid='ans'>{ans}</i></p>
    </>
  )
}

export default CalcResults;