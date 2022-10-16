import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import './customRange.css';

export default function CustomRange() {
  // handling range value and completed value for track and set green background color
  const [rangeValue, setRangeValue] = useState('20');
  const completedRangeValues = [0, 5, 30, 50, 70, 100];


  return (
    <Wrapper>
      <div className="px-2 py-3 functionality">
        <div className="px-3 py-1 d-inline-block">
          Good functionality
        </div>
        <div className="functionality_content mt-3">
          <div className="functionality_range_container">
            <input
              type="range"
              className="functionality_range"
              min="20"
              max="100"
              step="20"
              defaultValue={60}
              style={{
                background: `linear-gradient(to right, #60AF7F ${completedRangeValues[(Number(rangeValue) / 20)]}%, #60AF7F ${completedRangeValues[(Number(rangeValue) / 20)]}%, #6CB0F7 0%, #6CB0F7 100%)`,
              }}
              value={rangeValue}
              onChange={(e) => setRangeValue(e.target.value)}
            />
          </div>
          <div className="range_level mx-auto d-flex justify-content-between">
            {[1, 2, 3, 4, 5].map((item, index) => {
              return (
                <div key={index} className="range_level_item">
                  {item}
                </div>
              );
            })}
          </div>
          <div className="range_type d-flex justify-content-between align-items-center mx-auto">
            <div className="range_type_item">Poor functionality</div>
            <div className="range_type_item">Good functionality</div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .functionality_content {
    .functionality_range_container {
      width: 245px;
      margin: 0 auto;
    }
    .range_level {
      width: 275px;
      .range_level_item {
        width: 20%;
        font-size: 0.9rem;
      }
    }
    .range_type {
      width: 385px;
      .range_type_item {
        font-size: 0.9rem;
      }
    }
  }
`;

