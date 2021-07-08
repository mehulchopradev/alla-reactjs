import { useState, useEffect } from 'react';

import CalculatorForm from '../components/calculator-form/calculator-form.component';
import CalcResults from '../components/calc-results/calc-results.component';

function Calculator({ shouldFetchDefaultData = true }) {
  const [calcData, setCalcData] = useState({
    firstNo: '',
    secondNo: '',
    ans: '',
    operation: '',
  });

  useEffect(() => {
    if (!shouldFetchDefaultData) {
      return;
    }

    const fetchDefaultCalcData = async () => {
      const url = 'https://my-json-server.typicode.com/mehulchopradev/calc-service/defaultCalcData';
      const response = await fetch(url);
      const jsonResponse = await response.json();
      setCalcData(jsonResponse);
    };

    fetchDefaultCalcData();

    return () => {
      // clean up code
      console.log('I am returned from useEffect as callback function');
    }
  }, [shouldFetchDefaultData]); // [] dependencies will ensure that the side effect executes only once when the component gets mounted

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCalcData({...calcData, [name]: value});
  };

  const handleOperationChange = ({ target: { value } }) => {
    setCalcData({...calcData, operation: value});
  };

  const handleAns = ans => {
    setCalcData({...calcData, ans});
  };

  const { firstNo, secondNo, ans, operation } = calcData;

  return (
    <div className='calculator'>
      <CalculatorForm
        firstNo={firstNo}
        secondNo={secondNo}
        ans={ans}
        operation={operation}
        handleChange={handleChange}
        handleOperationChange={handleOperationChange}
        handleAns={handleAns}
      />
      <CalcResults
        firstNo={firstNo}
        secondNo={secondNo}
        operation={operation}
        ans={ans}
      />
    </div>
  )
}

export default Calculator;