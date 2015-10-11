import $ from 'jquery';
import {animate} from './rocket';
import {renderRocketInterface} from './rocket-interface';

animate();
$('body').append(renderRocketInterface())
