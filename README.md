# &lt;demo-iconset&gt;

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg?style=flat-square)](https://www.webcomponents.org/element/kcmr/demo-iconset/)

> A demo helper component to showcase a Polymer iconset. 

**Demo:** [https://kcmr.github.io/demo-iconset/](https://kcmr.github.io/demo-iconset/)

[![Demo](demo-iconset-screenshot.png)](https://kcmr.github.io/demo-iconset/)

This component displays the icons of a Polymer iconset with an input to filter the results and an optional text with the total of icons.

Example:

```html
<demo-iconset iconset="maps" icon-size="24"></demo-iconset>
```

## Properties

| Property         | Type    | Description                     | Default value |
| :--------------- | :------ | :------------------------------ | :------------ |
| iconset          | String  | Name of the iconset to be shown |               |
| iconSize         | Number  | Size for the icons              | 32            |
| showTotal        | Boolean | Show the total of icons         | false         |
| icons (readOnly) | Array   | List of icons                   |               |


## Styling

The following custom properties and mixins are available for styling:

| Custom property                     | Description                                                                   | Default       |
| :---------------------------------- | :---------------------------------------------------------------------------- | :------------ |
| --demo-iconset                      | Empty mixin applied to :host                                                  | {}            |
| --demo-iconset-primary-color        | Primary text color                                                            | #000          |
| --demo-iconset-secondary-color      | Secondary color used for :focus, :hover and selections                        | rebeccapurple |
| --demo-iconset-icon-meta            | Empty mixin applied to the wrapper of the search input and the total of icons | {}            |
| --demo-iconset-icons                | Empty mixin applied to the icon list wrapper                                  | {}            |
| --demo-iconset-item                 | Empty mixin applied to each icon list item with the label, icon and input     | {}            |
| --demo-iconset-item-hover           | Empty mixin applied to each icon list item for the :hover state               | {}            |
| --demo-iconset-item-at-730          | Empty mixin applied to each icon list item at @media (min-width: 730px)       | {}            |
| --demo-iconset-item-at-1600         | Empty mixin applied to each icon list item at @media (min-width: 1600px)      | {}            |
| --demo-iconset-item-icon            | Empty mixin applied to each icon in the list                                  | {}            |
| --demo-iconset-item-input           | Empty mixin applied to each input in the list                                 | {}            |
| --demo-iconset-item-input-selection | Empty mixin applied to each input in the list for text selection              | {}            |
| --demo-iconset-item-input-focus     | Empty mixin applied to each input in the list for the :focus state            | {}            |
