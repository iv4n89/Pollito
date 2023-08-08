import Pollito from '../app.js';
import assert from 'node:assert';
import { describe, it, beforeEach, afterEach } from 'node:test';

const stringColor = 'normal green';
const numberColor = 'bright magenta';
const arrayColor = 'normal red';
const watch = {
  string: 'ala',
  watchColor: 'normal green',
  watchBackground: 'normal blue'
};

let logger = new Pollito();

beforeEach(() => {
  logger = new Pollito();
});

afterEach(() => {
  logger = undefined;
  Pollito.instances = {};
});

describe('First testing', () => {
  it('should be true', () => {
    assert.equal(true, true);
  });
});

describe('Pollito instance verification', () => {
  it('should be an instance of Pollito', () => {
    assert(logger instanceof Pollito);
  });
  it('should return void on Pollito log method', () => {
    assert(logger.log('something') === undefined);
  });
  it('should set watch string', () => {
    const watchString = 'ala';
    logger.setWatchString(watchString);
    assert(logger.watch?.string === watchString);
  });
  it('should set watch background color', () => {
    const bgColor = 'bright green';
    logger.setWatchBg('bright green');
    assert(logger.watch?.bg === bgColor);
  });
  it('should set watch text color', () => {
    const color = 'bright blue';
    logger.setWatchColor('bright blue');
    assert(logger.watch?.color === color);
  });
  it('should set the entire watch prop', () => {
    const watch = {
      string: 'ala',
      watchColor: 'normal green',
      watchBackground: 'normal blue'
    };
    logger.setWatch({
      string: 'ala',
      watchColor: 'normal green',
      watchBackground: 'normal blue'
    });
    assert('string' in logger.watch);
    assert(logger.watch.string === watch.string);
    assert('bg' in logger.watch);
    assert(logger.watch.bg === watch.watchBackground);
    assert('color' in logger.watch);
    assert(logger.watch.color === watch.watchColor);
  });
  it('should create a new Pollito instance with the specified options', () => {
    const pollito = new Pollito({
      arrayStartColor: 'normal red',
      stringColor: 'normal green',
      numberColor: 'bright magenta',
      watch: {
        string: 'ala',
        watchColor: 'normal green',
        watchBackground: 'normal blue'
      }
    });
    assert(pollito instanceof Pollito);
    assert(pollito.array_start_color === arrayColor);
    assert(pollito.string_color === stringColor);
    assert(pollito.number_color === numberColor);
    assert(pollito.watch.string === watch.string);
    assert(pollito.watch.bg === watch.watchBackground);
    assert(pollito.watch.color === watch.watchColor);
  });
  it('should create a new instance and it should be accessible through instances in class', () => {
    const pollitoName = 'pollito_testing';
    const pollito = Pollito.createInstance({
      instanceName: pollitoName,
      stringColor,
      numberColor,
      arrayStartColor: arrayColor,
      watch
    });
    const pollitoRecovered = Pollito.getInstance(pollitoName);
    const pollito2 = new Pollito({
      instanceName: pollitoName + 2,
      stringColor,
      numberColor,
      arrayStartColor: arrayColor,
      watch
    });
    const pollitoRecovered2 = Pollito.getInstance(pollitoName + 2);
    assert(pollito instanceof Pollito);
    assert(pollito.instance_name === pollitoName);
    assert(pollitoRecovered instanceof Pollito);
    assert(pollito === pollitoRecovered);
    assert(pollito2 instanceof Pollito);
    assert(pollitoRecovered2 instanceof Pollito);
    assert(pollito2 === pollitoRecovered2);
  });
  it('should create a new instance with the name pollito1', () => {
    Pollito.instances = {};
    const pollito = new Pollito();
    assert(pollito.instance_name === 'pollito1');
  });
  it('should create 2 new instances with names pollito1 and pollito2', () => {
    Pollito.instances = {};
    const pollito = new Pollito();
    const pollito2 = Pollito.createInstance();
    assert(pollito.instance_name === 'pollito1');
    assert(pollito2.instance_name === 'pollito2');
    assert(Pollito.getInstance('pollito1') instanceof Pollito);
    assert(Pollito.getInstance('pollito2') instanceof Pollito);
  });
});
