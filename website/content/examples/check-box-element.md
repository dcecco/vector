---
# This front matter is auto generated by the examples.js script
title: Checkbox Element
id: check-box-element
script: /examples/elements/check-box-element.js
main: false
ignore: false
description: This interactive demonstrates the checkbox element.
input: undefined
tags: [elements, input]
weight: undefined
draft: undefined
---

{{< highlight javascript >}}
/**
* @title Checkbox Element
* @description This interactive demonstrates the checkbox element.
* @tags [elements, input]
*/
import { Interactive, getScriptName } from '../../index.js';
let interactive = new Interactive(getScriptName());
interactive.width = 768;
interactive.height = 150;
interactive.root.style.border = "1px solid grey";
let checkBox = interactive.checkBox(100, 75, "My Checkbox", false);
//# sourceMappingURL=check-box-element.js.map
{{</ highlight >}}

