import { EnvironmentConfig } from '../index';
import { expect } from 'chai';

// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
// import 'mocha';
describe('Reading Environment', () => {
  it('should return one of [ LOCAL, DEV, STG, PROD ]', () => {
    expect(EnvironmentConfig.getEnvironment()).to.equal('LOCAL');
  });
});