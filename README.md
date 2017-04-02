![TraceElements in action](https://github.com/amineo/redactor-trace-elements/raw/master/screenshot.png)

[**Blog Post**](https://anthonymineo.com/trace-elements-plugin-for-redactor/)

This plugin adds the ability to toggle a trace on all parent block-level elements with an outline and their element name.

The purpose for creating this plugin was so that it becomes a little clearer on what my WYSIWYG is doing. Is it adding unnecessary `<p>` tags? Are there empty `<ul>` or `<h*>` elements?

Without having to jump into the source view to track-down empties is a nice time saver. It also comes in handy for writers/editors who may not be as familiar with HTML or the source view.


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



You can easily extend what gets traced with CSS! Just modify the selector below and add to your stylesheet.
```language-css
.redactor-trace.redactor-layer.redactor-in > ELEMENTNAME:after {content:'ELEMENTNAME';}
```


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
- Reference the plugin script
- Include **TraceElements** in plugins array

