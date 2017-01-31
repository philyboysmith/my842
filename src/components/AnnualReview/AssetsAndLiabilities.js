import React from 'react';

import RequiredChanges from './RequiredChanges';

function AssetsAndLiabilities({ data }) {
  return (
    <div>
      <h1>Assets and Liability Statement</h1>
      <div>
        <p>Etc</p>
        <h2>Properties</h2>
        <ul className="al_list">
          <li className="al_list__item">
            <div>
              <h3>17 The Meadway</h3>
              <p>Main residence (UK)</p>
              <p><strong>£1,000,000</strong></p>
            </div>
            <RequiredChanges />
          </li>
        </ul>
      </div>
      <div>
        <h2>Pensions</h2>
        <ul className="al_list">
          <li className="al_list__item">
            <div>
              <h3>Trans Oceanic Meat Co Pension Scheme</h3>
              <p>Small-Self Administered Scheme</p>
              <p><strong>£5,491,786</strong></p>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <h2>Income</h2>
        <ul className="al_list">
          <li className="al_list__item">
            <div>
              <h3>Business income</h3>
              <p><strong>£10,000,000</strong></p>
            </div>
          </li>
        </ul>
      </div>

      <div>
        <h2>Liquid Assets</h2>
        <ul className="al_list">
          <li className="al_list__item">
            <div>
              <h3>Charles Stanley</h3>
              <p>General Investment Account</p>
              <p><strong>£2,000,000</strong></p>
            </div>
          </li>
          <li className="al_list__item">
            <div>
              <h3>Charles Stanley</h3>
              <p>General Investment Account</p>
              <p><strong>£2,000,000</strong></p>
            </div>
          </li>
          <li className="al_list__item">
            <div>
              <h3>Charles Stanley</h3>
              <p>General Investment Account</p>
              <p><strong>£2,000,000</strong></p>
            </div>
          </li>
        </ul>
      </div>

      <div>
        <h2>Current Accounts</h2>
        <ul className="al_list">
          <li className="al_list__item">
            <div>
              <h3>Coutts</h3>
              <p>Current account</p>
              <p><strong>£2,000,000</strong></p>
            </div>
          </li>
          <li className="al_list__item">
            <div>
              <h3>HSBC Savings Account</h3>
              <p><strong>£1,000,000</strong></p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AssetsAndLiabilities;

