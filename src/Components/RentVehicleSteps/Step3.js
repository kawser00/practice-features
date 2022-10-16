import React from 'react';

const Step3 = ({currentStep}) => {

  if (currentStep !== 3) {
    return null;
  }

  return (
    <div>
      step 3
    </div>
  );
};

export default Step3;