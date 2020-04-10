# Deprecated
This verison was a quick implementation to solve a specific problem. It lives on as npm module at [sdellis/page_label_generator](https://github.com/sdellis/page_label_generator) and in [Plum](https://github.com/pulibrary/plum/blob/581314fa3baccd34652cadac132fd32f564c469c/app/assets/javascripts/label_generator.es6), the project for which it was initially made.

----
# Page Label Generator

Study to implement https://github.com/pulibrary/plum/issues/7

## Requires

Node >= 4.2.2

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

## Example in the babel-node shell

```
$ babel src --out-dir lib
$ babel-node
```

```node

> let mod = require("./lib/labelGen");

> // Basic Numbering

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

> // Foliation

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

> // Roman Numerals

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

> // 2 Ups:

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
undefined
> gen.next().value
'p. 43-42'
> gen.next().value
'p. 45-44'
> gen.next().value
'p. 47-46'
> gen.next().value
'p. 49-48'

> let gen = mod.pageLabelGenerator(42, "foliate", "a", "b", "back", "f. ", true, true, "/", "rtl");
undefined
> gen.next().value
'[f. 43a/42b]'
> gen.next().value
'[f. 44a/43b]'
> gen.next().value
'[f. 45a/44b]'
> gen.next().value
'[f. 46a/45b]'

```
