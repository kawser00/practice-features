import React from 'react';

const Step2 = ({currentStep}) => {

  if (currentStep !== 2) {
    return null;
  }

  return (
    <div>
      step 2
    </div>
  );
};

export default Step2;