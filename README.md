# gulpam

`gulpam` help building large-scale, multi-submodule gulp based application.

## way to begin

First, install package:

```
npm i gulp gulpam@latest -D
```

Then, change your project's `gulpfile.js` into:

```
var gulpam = require('gulpam');
gulpam.init();
```

Then, just start using `gulpam` by typing:

```
gulp <task>
```

Also, you can config your `gulpam` with `gulpam.config.json` in project's root path:

```
{
  "srcDir": "app/src",
  "destDir": "app/public"
}
```


