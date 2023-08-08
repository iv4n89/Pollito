import { backgrounds, levels } from './colors.js';

/**
* @property {string} instance_name
* @property {string} string_color
* @property {string} number_color
* @property {string} array_start_color
* @property {{
*  string: string,
*  bg: string,
*  color: string
* }} watch
* @property {string} lastStart
* @property {string} lastEnd
* @static @property {{[name: string]: instance: Pollito}} instances
*/
export default class Pollito {
  instance_name;
  string_color;
  number_color;
  array_start_color;
  watch;
  lastStart;
  lastEnd;
  static instances = {};

  /**
    *
    * @param {{
    *   instanceName: string,
    *  stringColor?: ('normal yellow'|'bright yellow'|'normal blue'|'bright blue'|'normal red'|'bright red'|'normal cyan'|'bright cyan'|'normal green'|'bright green'|'normal magenta'|'bright magenta'),
    *  numberColor?: ('normal yellow'|'bright yellow'|'normal blue'|'bright blue'|'normal red'|'bright red'|'normal cyan'|'bright cyan'|'normal green'|'bright green'|'normal magenta'|'bright magenta'),
    *  arrayStartColor?: ('normal yellow'|'bright yellow'|'normal blue'|'bright blue'|'normal red'|'bright red'|'normal cyan'|'bright cyan'|'normal green'|'bright green'|'normal magenta'|'bright magenta')
    *  watch?: {
    *      string: string,
    *      watchColor?: ('normal yellow'|'bright yellow'|'normal blue'|'bright blue'|'normal red'|'bright red'|'normal cyan'|'bright cyan'|'normal green'|'bright green'|'normal magenta'|'bright magenta'),
    *      watchBackground?: ('normal black'| 'bright black' | 'normal red' | 'bright red' | 'normal green' | 'bright green' | 'normal yellow' | 'bright yellow' | 'normal blue' | 'bright blue' | 'normal magenta' | 'bright magenta' | 'normal cyan' | 'bright cyan' | 'normal white' | 'bright white'),
    *  }
    * }} options
    */
  constructor (options = {}) {
    const {
      instanceName = 'pollito' + (Object.keys(Pollito.instances).length + 1),
      stringColor = 'normal yellow',
      numberColor = 'bright magenta',
      arrayStartColor = 'normal cyan'
    } = options;
    this.instance_name = instanceName;
    this.string_color = stringColor;
    this.number_color = numberColor;
    this.array_start_color = arrayStartColor;
    this.watch = options?.watch
      ? {
        string: options.watch.string,
        ...(options?.watch?.watchBackground && { bg: options.watch.watchBackground }),
        ...(options?.watch?.watchColor && { color: options.watch.watchColor })
      }
      : {};
    if (!Pollito.instances) {
      Pollito.instances = {};
    }
    Pollito.instances[instanceName] = this;
  }

  /**
   *
   * @param {{
   * instanceName: string,
   * stringColor?: ('normal yellow'|'bright yellow'|'normal blue'|'bright blue'|'normal red'|'bright red'|'normal cyan'|'bright cyan'|'normal green'|'bright green'|'normal magenta'|'bright magenta'),
   * numberColor?: ('normal yellow'|'bright yellow'|'normal blue'|'bright blue'|'normal red'|'bright red'|'normal cyan'|'bright cyan'|'normal green'|'bright green'|'normal magenta'|'bright magenta'),
   * arrayStartColor?: ('normal yellow'|'bright yellow'|'normal blue'|'bright blue'|'normal red'|'bright red'|'normal cyan'|'bright cyan'|'normal green'|'bright green'|'normal magenta'|'bright magenta'),
   * watch: {
   *      string: string,
   *      watchColor?: ('normal yellow'|'bright yellow'|'normal blue'|'bright blue'|'normal red'|'bright red'|'normal cyan'|'bright cyan'|'normal green'|'bright green'|'normal magenta'|'bright magenta'),
   *      watchBackground?: ('normal black'| 'bright black' | 'normal red' | 'bright red' | 'normal green' | 'bright green' | 'normal yellow' | 'bright yellow' | 'normal blue' | 'bright blue' | 'normal magenta' | 'bright magenta' | 'normal cyan' | 'bright cyan' | 'normal white' | 'bright white')
   *    }
   * }} options
   */
  static createInstance (options = {}) {
    const {
      instanceName = 'pollito' + (Object.keys(Pollito.instances).length + 1),
      stringColor = 'normal yellow',
      numberColor = 'normal magenta',
      arrayStartColor = 'normal red'
    } = options;

    const pollito = new Pollito({
      instanceName,
      stringColor,
      numberColor,
      arrayStartColor,
      watch: options.watch
        ? {
          string: options.watch?.string,
          watchColor: options.watch?.watchColor,
          watchBackground: options.watch?.watchBackground
        }
        : {}
    });

    if (!Pollito.instances) {
      Pollito.instances = {};
    }

    Pollito.instances[pollito.instance_name] = pollito;

    return pollito;
  }

  /**
   * Get a previous saved instance
   * @param {string} name
   * @returns {Pollito}
   */
  static getInstance (name) {
    return Pollito.instances[name] || null;
  }

  /**
    *
    * @param {('normal yellow'|'bright yellow'|'normal blue'|'bright blue'|'normal red'|'bright red'|'normal cyan'|'bright cyan'|'normal green'|'bright green'|'normal magenta'|'bright magenta')} color
    */
  setWatchColor (color) {
    this.watch.color = color;
  }

  /**
    *
    * @param {('normal black'| 'bright black' | 'normal red' | 'bright red' | 'normal green' | 'bright green' | 'normal yellow' | 'bright yellow' | 'normal blue' | 'bright blue' | 'normal magenta' | 'bright magenta' | 'normal cyan' | 'bright cyan' | 'normal white' | 'bright white')} bg
    */
  setWatchBg (bg) {
    this.watch.bg = bg;
  }

  /**
    *
    * @param {string} string
    */
  setWatchString (string) {
    this.watch.string = string;
  }

  /**
    *
    * @param {{
    *  string: string,
    *  watchColor?: ('normal yellow'|'bright yellow'|'normal blue'|'bright blue'|'normal red'|'bright red'|'normal cyan'|'bright cyan'|'normal green'|'bright green'|'normal magenta'|'bright magenta'),
    *  watchBackground?: ('normal black'| 'bright black' | 'normal red' | 'bright red' | 'normal green' | 'bright green' | 'normal yellow' | 'bright yellow' | 'normal blue' | 'bright blue' | 'normal magenta' | 'bright magenta' | 'normal cyan' | 'bright cyan' | 'normal white' | 'bright white'),
    * }} watch
    */
  setWatch (watch) {
    this.watch.string = watch?.string;
    this.watch.bg = watch?.watchBackground;
    this.watch.color = watch?.watchColor;
  }

  /**
    *
    * @private
    * @param {any[]} array The value
    * @param {string} color The text color
    * @param {{level: number, bright: boolean, fromObject: boolean}} options Options
    * @returns {string}
    */
  _printArray (array, color, options = {}) {
    if (Object.keys(options).length < 1) {
      const [mode, cColor] = this.array_start_color.split(' ');
      options.bright = mode === 'bright';
      color = cColor;
    }
    const { level = 1, bright = false, fromObject = false } = options;
    let message = (fromObject ? '\n' : '') + (level > 1 ? ' '.repeat(level + (2 * (level - 1))) : '') + levels.white.start + '[' + levels.white.end + '\n';
    const base = levels[bright ? 'bright' : 'normal'];
    const colorBase = base[color];
    for (let element of array) {
      if (Array.isArray(element)) {
        message += this._printArray(element, base[level + 1].name, { level: level + 1 });
      } else if (typeof element === 'object') {
        message += this._printObject(element);
      } else {
        this.lastStart = colorBase.start;
        this.lastEnd = colorBase.end;
        if (this.watch) {
          element = this._watchFormat(element, this.watch?.bg, this.watch?.color);
        }
        message += (level > 1 ? ' '.repeat(level + (2 * (level - 1))) : ' '.repeat(level * 2)) + '  ' + colorBase.start + element + colorBase.end + levels.white.start + ',' + levels.white.end + '\n';
      }
    }
    message += (level > 1 ? ' '.repeat(level + (2 * (level - 1))) : ' '.repeat(level * 2)) + levels.white.start + '],' + levels.white.end + '\n';
    return message;
  }

  /**
    *
    * @private
    * @param {Object} object
    * @param {number} level
    * @returns {string} The string result
    */
  _printObject (object, level = 1) {
    if (object === null) {
      return 'null,\n';
    }
    if (object === undefined) {
      return 'undefined,\n';
    }
    const [cl1, cl2] = calcLevel(level);
    function calcLevel (level) {
      if (level + 1 > 6) {
        return [level === 6 ? 6 : level % 6, level % 6 + 1];
      } else {
        return [level, level + 1];
      }
    }
    let result = levels.white.start + '{\n' + levels.white.end;
    const keys = Object.keys(object);
    const values = Object.values(object);
    keys.forEach((k, index) => {
      let formatK;
      this.lastStart = levels.normal[cl1].start;
      this.lastEnd = levels.normal[cl1].end;
      if (this.watch) {
        formatK = this._watchFormat(k, this.watch?.bg, this.watch?.color);
      }
      result += (level > 1 ? ' '.repeat(level + (2 * (level - 1))) : ' '.repeat(level * 2)) + levels.normal[cl1].start + (formatK || k) + levels.normal[cl1].end;
      if (object[k] && typeof object[k] === 'object') {
        result += levels.white.start + ': ' + object[k].constructor.name + ' ' + levels.white.end;
      } else {
        result += levels.white.start + ': ' + levels.white.end;
      }
      if (Array.isArray(values[index])) {
        result += this._printArray(values[index], level + 1, { level: level + 1, fromObject: true });
      } else if (typeof values[index] === 'object') {
        result += this._printObject(object[k], level + 1);
      } else {
        this.lastStart = levels.normal[cl2].start;
        this.lastEnd = levels.normal[cl2].end;
        let val = values[index];
        if (this.watch) {
          val = this._watchFormat(val, this.watch?.bg, this.watch?.color);
        }
        result += levels.normal[cl2].start + val + levels.normal[cl2].end;
        result += levels.white.start + ',\n' + levels.white.end;
      }
    });
    result += (level > 1 ? ' '.repeat(level + (2 * (level - 1))) : '') + levels.white.start + '}' + (level > 1 ? ',' : '') + '\n' + levels.white.end;
    return result;
  }

  /**
    *
    * @private
    * @param {string|any[]|Object} value
    * @param {('normal black'| 'bright black' | 'normal red' | 'bright red' | 'normal green' | 'bright green' | 'normal yellow' | 'bright yellow' | 'normal blue' | 'bright blue' | 'normal magenta' | 'bright magenta' | 'normal cyan' | 'bright cyan' | 'normal white' | 'bright white')} background
    * @param {('normal yellow'|'bright yellow'|'normal blue'|'bright blue'|'normal red'|'bright red'|'normal cyan'|'bright cyan'|'normal green'|'bright green'|'normal magenta'|'bright magenta')} color
    * @returns {string} The formatted string
    */
  _watchFormat (value, background, color) {
    background ??= 'normal white';
    color ??= 'bright red';
    const [boldStart, boldEnd] = ['\x1b[1m', '\x1b[22m'];
    const [bgMode, bgColor] = background.split(' ');
    const [colorMode, colorColor] = color.split(' ');
    if (['undefined', undefined, 'null', null].includes(value)) {
      return '\x1b[37m' + value + '\x1b[89m';
    }
    if (Array.isArray(value)) {
      return value.map(e => this._watchFormat(e, this.watch?.bg, this.watch?.color));
    } else if (typeof value === 'object') {
      this._getPreviousFormats(value);
      const keys = Object.keys(k => this._watchFormat.apply(this, arguments));
      const values = Object.values(v => this._watchFormat.apply(this, arguments));
      const result = {};
      keys.forEach((k, index) => {
        result[k] = values[index];
      });
      return result;
    } else if (value === undefined) {
      return undefined;
    } else if (value === null) {
      return null;
    } else {
      return value.toString().includes(this.watch?.string) ? String(value).split(' ').map(s => s.includes(this.watch.string) ? s.replace(this.watch.string, `${backgrounds[bgMode][bgColor].start}${levels[colorMode][colorColor].start}${boldStart}${this.watch.string}${boldEnd}${levels[colorMode][colorColor].end}${backgrounds[bgMode][bgColor].end}${this.lastStart}`) : s).join(' ') : value;
    }
  }

  /**
    *
    * @param  {...string[]} str
    */
  log (...str) {
    try {
      process.stdout.write(str.map(s => {
        if (Array.isArray(s)) {
          return this._printArray(s, this.array_start_color);
        } else if (typeof s === 'object') {
          return this._printObject(s);
        } else if (typeof s === 'string') {
          const [mode, color] = this.string_color.split(' ');
          this.lastStart = levels[mode][color].start;
          this.lastEnd = levels[mode][color].end;
          if (this.watch) {
            s = this._watchFormat(s, this.watch?.bg, this.watch?.color);
          }
          return levels[mode][color].start + s + levels[mode][color].end;
        } else if (typeof s === 'number') {
          const [mode, color] = this.number_color.split(' ');
          this.lastStart = levels[mode][color].start;
          this.lastEnd = levels[mode][color].end;
          if (this.watch) {
            s = this._watchFormat(s, this.watch?.bg, this.watch?.color);
          }
          return levels[mode][color].start + s + levels[mode][color].end;
        } else {
          if (this.watch) {
            s = this._watchFormat(s, this.watch?.bg, this.watch?.color);
          }
          return levels.white.start + s + levels.white.end;
        }
      }).join(' ') + '\n');
    } catch (err) {
      console.error(err);
      process.stdout.write('');
    }
  }

  /**
    *
    * @param {string|any[]|object} value
    * @param {{
    *  dateFormat?: ('string'|'localeString'|'miliseconds'),
    *  prefix?: string,
    *  prefixBackground?: ('normal black'| 'bright black' | 'normal red' | 'bright red' | 'normal green' | 'bright green' | 'normal yellow' | 'bright yellow' | 'normal blue' | 'bright blue' | 'normal magenta' | 'bright magenta' | 'normal cyan' | 'bright cyan' | 'normal white' | 'bright white'),
    *  prefixColor?: ('normal yellow'|'bright yellow'|'normal blue'|'bright blue'|'normal red'|'bright red'|'normal cyan'|'bright cyan'|'normal green'|'bright green'|'normal magenta'|'bright magenta'),
    *  }} options
    */
  dateLog (value, options = {}) {
    const { dateFormat = 'localeString' } = options;
    const data = {
      message: value,
      date: new Date()[dateFormat === 'localeString' ? 'toLocaleString' : dateFormat === 'miliseconds' ? 'getTime' : 'toString']?.()
    };
    let prefix;
    if (options?.prefix) {
      let prefixBg;
      let prefixColor;
      if (options?.prefixBackground) {
        const [mode, color] = options.prefixBackground.split(' ');
        prefixBg = backgrounds[mode][color];
      }
      if (options?.prefixColor) {
        const [mode, color] = options.prefixColor.split(' ');
        prefixColor = levels[mode][color];
      }
      prefix = (prefixBg ? prefixBg.start : '') + (prefixColor ? prefixColor.start : '') + options.prefix + (prefixColor ? prefixColor.end : '') + (prefixBg ? prefixBg.end : '');
    }
    process.stdout.write((prefix ? prefix + ': ' : '') + this._printObject(data));
  }

  /**
    *
    * @param {any} value
    * @returns {string} The stringify string result
    */
  stringify (value) {
    process.stdout.write(JSON.stringify(value));
  }
}
