import $ from 'jquery';
import rocketControl from '../src/rocket-control';
import {renderRocketInterface} from '../src/rocket-interface';

describe('rocket interface', () => {
  beforeEach(()=> $('body').append(renderRocketInterface()));
});
