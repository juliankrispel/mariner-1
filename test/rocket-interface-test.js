import $ from 'jquery';
import actions from '../src/rocket-actions';
import {renderRocketInterface} from '../src/rocket-interface';

describe('rocket interface', () => {
  beforeEach(()=> $('body').append(renderRocketInterface()));
});


