# ng-textarea-autosize

Angular 8.0+ directive for making textareas grow and shrink automatically to the text within them.

Basically copied from https://github.com/evseevdev/ngx-textarea-autosize, I used this to learn and understand Angular events and directives, adding my own spin on the plugin and even some extra features such as maximum height before scroll and removing processor intensive events to make it faster and slimmer.

This directive, above all, is designed to be a play thing as my first directive.

## Install

```bash
npm install @sammaye/ng-textarea-autosize --save
```

## Use
In a module:

```javascript
import {NgTextareaAutosizeModule} from "@sammaye/ng-textarea-autosize.module"; import {NgModule} from "@angular/core";

@NgModule({
    imports: [
        NgTextareaAutosizeModule,
    ]
})
```

And then just add the directive to a textarea of your choosing:

```html
<textarea aurtosize>Smeg</textarea>
```

This directive also comes with a few options:

- `rows` sets the initial rows
- `maxRows` sets the maximum number of rows before scroll starts
- `maxHeight` will override `maxRows` and does the same thing but in pixel measurement (does not work for `rem`/`em`) 
