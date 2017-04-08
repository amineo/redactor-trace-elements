![TraceElements in action](https://github.com/amineo/redactor-trace-elements/raw/master/screenshot.png)

[**Blog Post**](https://anthonymineo.com/trace-elements-plugin-for-redactor/)

This plugin adds the ability to toggle a trace on common parent block-level elements with an outline and their element name.

The purpose for creating this plugin was so that it becomes a little clearer on what my WYSIWYG is doing. Is it adding unnecessary `<p>` tags? Are there empty `<div>`,`<ul>` or `<h*>` elements? Without jumping into source view it's hard to tell.

It also comes in handy for writers/editors who may not be as familiar with HTML or the source view.

Currently the plugin traces these common block elements by default:
<ul>
    <li>div</li>
    <li>br</li>
    <li>p</li>
    <li>ul</li>
    <li>ol</li>
    <li>pre</li>
    <li>h1</li>
    <li>h2</li>
    <li>h3</li>
    <li>h4</li>
    <li>h5</li>
    <li>h6</li>
</ul>


<hr>

## How to Extend
You can easily extend what gets traced with CSS! Just modify the selector below and add to your stylesheet.

```
/* Replace ELEMENTNAME with the element you want to trace */
.redactor-trace.redactor-layer > ELEMENTNAME:after {
   content:'ELEMENTNAME';
}
```
This plugin makes use of `::after` with the `content` property so it's fast and customizable.


<hr>

## How to Initialize 
```
    <!-- Plugin Path -->
    <script src="redactor.trace-elements.js"></script>
    <script>
    $(function(){
        $('#redactor').redactor({
            plugins: ['TraceElements']
        });
    });
    </script>
```
- Reference the plugin script src
- Include **TraceElements** in the plugins array

