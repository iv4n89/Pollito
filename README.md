# Pollito
### A simple colorized logger

Pollito is a very simple logger with some color customizations.

### How to use:

## Create a new instance with `new`:

```javascript
const pollito = new Pollito();
```

We can create a new instance of Pollito logger with `new`. We get an object of type `Pollito`.

## Create a new instance with the creator method:

```javascript
const pollito = Pollito.createInstance();
```

We get a new isntance of Pollito logger with this method.

It does not matter the creation method to get a instance. The created instance itself will be added to an internal static object in Pollito, accessible with the name of the intance. `If we do not provide a name for the instance, automatically it will be named as pollito(length + 1)`.

## Options for the constructor

We can provide some options at construction time of a new instance of `Pollito`:

- options: `<Object>` Optional argument. It can has the props: __Default__: `{}`
    - instanceName: `<string>` The name for the instance. Default: `pollito` + `Pollito.instances.length + 1`
    - stringColor: `<string>` The color used to print strings. __Default__: `normal yellow`
    - numberColor: `<string>` The color used to print numbers. __Default__: `normal magenta`
    - arrayStartColor: `<string>` The color used for the first level of an array. __Default__: `normal red`,
    - watch: `<Object>` Options to watch and emphasise a string.
        - string: `<string>` The string to watch
        - watchColor: `<string>` The color used to emphasise the string
        - watchBackground: `<string>` The color used as background to emphasise the string


All these arguments are optionals, unless `watch.string` if watch object is present.

## Recover the Pollito logger from `instances` array

We can keep all our different Pollito instances in our `Pollito.instances` object. So we can access them whenever we need them.

We can supose we have created an instance named as `pollito_red`:

```javascript
Pollito.createInstance({
    instanceName: 'pollito_red',
    stringColor: 'bright red'
});
```

After we call the `Pollito.createInstance` or `new Pollito`, a new instance is returned by the method or constructor. At the same time, the instance is saved to `Pollito.instances` object.

We can recover the instance created with `Pollito.getInsance`:

```javascript
const pollitoRed = Pollito.getInstance('pollito_red');
```


## How to log something

We have 3 different and simple methods to log data:

### pollitoInstance.log(...data)

- ...data `...<string[]>` | `...<any[]>` | `...<object[]>`


Log to the console all the data passed as argument, colon separated. It will be printed separated by a colon and a `\n` character.

```javascript
pollito.log('hello', [1, 2, 3, 'something', undefined, null], { 'hello': 'world', or: { some: 'thing' } })
```

Output:

![output](https://i.postimg.cc/Y04ZjC06/pollito1.png)


### pollitoInstance.dateLog(data[, options])

- data `<string>` | `<any[]>` | `<Object>`
- options `<Object>` 
    - dateFormat `<string>` The format to print the date object. __Default__: `localeString`


Log something to the console, with the addition of the printing date-time

```javascript
pollito.dateLog({hello: 'world'});
```

Output:

![output2](https://i.postimg.cc/jSdxdzKP/pollito2.png)


### possible values for `dateFormat`:
- - -

|    Value      |           Description                 |
| ------------- | ------------------------------------- |
| localeString  | Calls the method `toLocaleString`     |
| string        | Calls the method `toString`           |
| miliseconds   | Parse the Date object to milliseconds |


### pollitoInstance.stringify(value)

- value `<any>`


It calls internally to JSON.stringify, printing the result with no formats or colors.

```javascript
pollito.stringify({ hello: 'world' });
```

Output:

```
{"hello":"world"}
```

## Watch a string

We can set a string to watch, so if it beign printed, it will have a background and a text color differente than the other text.

Ejample:

```javascript
const pollito = new Pollito({
    watch: {
        string: 'he',
        watchBackground: 'bright magenta',
        watchColor: 'bright cyan'
    }
});

pollito.log({ hello: 'world', reheat: 'the chicken', something: '`helse`' });
```

Output:

![output3](https://i.postimg.cc/65wwYFjB/pollito3.png)

The watch options are set at instance creation time. However, we can modify these options with the methods:

### pollitoInstance.setWatchString(string)

- string `<string>` The new string to watch

```javascript
pollito.setWatchString('hello');
```


### pollitoInstance.setWatchBg(bg)

- bg `<string>` The new background color the watching string will have when printed


```javascript
pollito.setWatchBg('bright magenta');
```

### pollitoIsntance.setWatchColor(color)

- color `<string>` The new text color the watched string is going to use when printed


```javascript
pollito.setWatchColor('normal red');
```


## Possible colors for text

|     Normal colors       |        Bright colors          | 
| ----------------------- | ----------------------------- |
| `normal blue`           | `bright blue`                 |
| `normal red`            | `bright red`                  |
| `normal green`          | `bright green`                |
| `normal magenta`        | `bright magenta`              |
| `normal cyan`           | `bright cyan`                 |
| `normal yellow`         | `bright yellow`               |


### Possible colors for background

|     Normal colors       |        Bright colors          | 
| ----------------------- | ----------------------------- |
| `normal blue`           | `bright blue`                 |
| `normal red`            | `bright red`                  |
| `normal green`          | `bright green`                |
| `normal magenta`        | `bright magenta`              |
| `normal cyan`           | `bright cyan`                 |
| `normal yellow`         | `bright yellow`               |
| `normal black`          | `bright black`                |
| `normal white`          | `bright white`                |



## License

Lisence under [MIT](./LICENSE).
