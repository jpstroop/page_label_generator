# Deprecated
This verison was a quick implementation to solve a specific problem. It lives on (with many new features) as an npm module at [pulibrary/page_label_generator](https://github.com/pulibrary/page_label_generator/settings).

----
# Page Label Generator

Study to implement https://github.com/pulibrary/plum/issues/7

## Requires

Known to work w/ Node `13.12.0`

## Install

```
$ npm install
```

You might also want to install babel-cli globally:

```
$ npm install --global babel-cli
```

## Test

```
$ npm test
```

## Transpile to es5

```
babel src --out-dir lib
```

## Examples in the babel-node shell

```
$ babel src --out-dir lib
$ babel-node
```

### Basic Numbering

```node

> let mod = require("./lib/labelGen");

> let gen = mod.pageLabelGenerator();
> gen.next().value;
'1'
> gen.next().value;
'2'
> gen.next().value;
'3'

> let gen = mod.pageLabelGenerator(5, "paginate", "", "", "", "p. ", true);
> gen.next().value;
'[p. 5]'
> gen.next().value;
'[p. 6]'
> gen.next().value;
'[p. 7]'
> gen.next().value;
'[p. 8]'
```

### Foliation

```node

> let mod = require("./lib/labelGen");

> let gen = mod.pageLabelGenerator(42, "foliate", " r", " v", "", "f. ", false);
> gen.next().value;
'f. 42 r'
> gen.next().value;
'f. 42 v'
> gen.next().value;
'f. 43 r'
> gen.next().value;
'f. 43 v'

> let gen = mod.pageLabelGenerator(42, "foliate", "r", "v", "back", "f. ", true);
> gen.next().value;
'[f. 42v]'
> gen.next().value;
'[f. 43r]'
> gen.next().value;
'[f. 43v]'
> gen.next().value;
'[f. 44r]'
> gen.next().value;
'[f. 44v]'
```

### Roman Numerals

```node

> let mod = require("./lib/labelGen");

> let gen = mod.pageLabelGenerator('i', "paginate", "", "", "", "p. ", false);
> gen.next().value;
'p. i'
> gen.next().value;
'p. ii'
> gen.next().value;
'p. iii'
> gen.next().value;
'p. iv'

> let gen = mod.pageLabelGenerator('xlii', "foliate", "", " (verso)", "back", "f. ", true);
> gen.next().value;
'[f. xlii (verso)]'
> gen.next().value;
'[f. xliii]'
> gen.next().value;
'[f. xliii (verso)]'
> gen.next().value;
'[f. xliv]'
> gen.next().value;
'[f. xliv (verso)]'
> gen.next().value;
'[f. xlv]'
```

### 2 Ups

```node

> let mod = require("./lib/labelGen");

> let gen = mod.pageLabelGenerator(42, "paginate", "", "", "", "", false, true, "/", "ltr");
undefined
> gen.next().value
'42/43'
> gen.next().value
'44/45'
> gen.next().value
'46/47'
> gen.next().value
'48/49'

> let gen = mod.pageLabelGenerator(42, "paginate", "", "", "", "p. ", false, true, "-", "rtl");
> gen.next().value
'p. 43-42'
> gen.next().value
'p. 45-44'
> gen.next().value
'p. 47-46'
> gen.next().value
'p. 49-48'

> let gen = mod.pageLabelGenerator(42, "foliate", "a", "b", "back", "f. ", true, true, "/", "rtl");
> gen.next().value
'[f. 43a/42b]'
> gen.next().value
'[f. 44a/43b]'
> gen.next().value
'[f. 45a/44b]'
> gen.next().value
'[f. 46a/45b]'

```

🤯
