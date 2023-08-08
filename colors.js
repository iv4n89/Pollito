export const levels = {
  normal: {
    1: {
      name: 'blue',
      start: '\x1b[34m',
      end: '\x1b[89m'
    },
    blue: {
      name: 'blue',
      level: 1,
      start: '\x1b[34m',
      end: '\x1b[89m'
    },
    2: {
      name: 'yellow',
      start: '\x1b[33m',
      end: '\x1b[89m'
    },
    yellow: {
      name: 'yellow',
      level: 2,
      start: '\x1b[33m',
      end: '\x1b[89m'
    },
    3: {
      name: 'red',
      start: '\x1b[31m',
      end: '\x1b[89m'
    },
    red: {
      name: 'red',
      level: 3,
      start: '\x1b[31m',
      end: '\x1b[89m'
    },
    4: {
      name: 'cyan',
      start: '\x1b[36m',
      end: '\x1b[89m'
    },
    cyan: {
      name: 'cyan',
      level: 4,
      start: '\x1b[36m',
      end: '\x1b[89m'
    },
    5: {
      name: 'green',
      start: '\x1b[32m',
      end: '\x1b[89m'
    },
    green: {
      name: 'green',
      level: 5,
      start: '\x1b[32m',
      end: '\x1b[89m'
    },
    6: {
      name: 'magenta',
      start: '\x1b[35m',
      end: '\x1b[89m'
    },
    magenta: {
      name: 'magenta',
      level: 6,
      start: '\x1b[35m',
      end: '\x1b[89m'
    }
  },
  white: {
    start: '\x1b[37m',
    end: '\x1b[89m'
  },
  bright: {
    1: {
      name: 'red',
      start: '\x1b[91m',
      end: '\x1b[39m'
    },
    red: {
      level: 1,
      name: 'red',
      start: '\x1b[91m',
      end: '\x1b[39m'
    },
    2: {
      name: 'green',
      start: '\x1b[92m',
      end: '\x1b[39m'
    },
    green: {
      name: 'green',
      level: 2,
      start: '\x1b[92m',
      end: '\x1b[39m'
    },
    3: {
      name: 'yellow',
      start: '\x1b[93m',
      end: '\x1b[39m'
    },
    yellow: {
      name: 'yellow',
      level: 3,
      start: '\x1b[93m',
      end: '\x1b[39m'
    },
    4: {
      name: 'blue',
      start: '\x1b[94m',
      end: '\x1b[39m'
    },
    blue: {
      name: 'blue',
      level: 4,
      start: '\x1b[94m',
      end: '\x1b[39m'
    },
    5: {
      name: 'magenta',
      start: '\x1b[95m',
      end: '\x1b[39m'
    },
    magenta: {
      name: 'magenta',
      level: 5,
      start: '\x1b[95m',
      end: '\x1b[39m'
    },
    6: {
      name: 'cyan',
      start: '\x1b[96m',
      end: '\x1b[39m'
    },
    cyan: {
      name: 'cyan',
      level: 6,
      start: '\x1b[96m',
      end: '\x1b[39m'
    }
  }
};

export const backgrounds = {
  normal: {
    black: {
      start: '\x1b[40m',
      end: '\x1b[49m'
    },
    red: {
      start: '\x1b[41m',
      end: '\x1b[49m'
    },
    green: {
      start: '\x1b[42m',
      end: '\x1b[49m'
    },
    yellow: {
      start: '\x1b[43m',
      end: '\x1b[49m'
    },
    blue: {
      start: '\x1b[44m',
      end: '\x1b[49m'
    },
    magenta: {
      start: '\x1b[45m',
      end: '\x1b[49m'
    },
    cyan: {
      start: '\x1b[46m',
      end: '\x1b[49m'
    },
    white: {
      start: '\x1b[47m',
      end: '\x1b[49m'
    }
  },
  bright: {
    black: {
      start: '\x1b[100m',
      end: '\x1b[49m'
    },
    red: {
      start: '\x1b[101m',
      end: '\x1b[49m'
    },
    green: {
      start: '\x1b[102m',
      end: '\x1b[49m'
    },
    yellow: {
      start: '\x1b[103m',
      end: '\x1b[49m'
    },
    blue: {
      start: '\x1b[104m',
      end: '\x1b[49m'
    },
    magenta: {
      start: '\x1b[105m',
      end: '\x1b[49m'
    },
    cyan: {
      start: '\x1b[106m',
      end: '\x1b[49m'
    },
    white: {
      start: '\x1b[107m',
      end: '\x1b[49m'
    }
  }
};
