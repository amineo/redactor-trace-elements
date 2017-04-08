/**
 * Trace Elements
 * This plugin adds the ability to toggle a trace on all parent block-level
 * elements with an outline and display their element name.
 * 
 * @author: Anthony Mineo
 * @url: https://anthonymineo.com
 * @twitter: @Mineo27
 * https://anthonymineo.com/trace-elements-plugin-for-redactor/
 */

(function($){
  $.Redactor.prototype.TraceElements = function(){

    return {

        /** @function init
        * Initial plugin load function
        * @public
        */
        init: function(){


            // Add button element to Redactor
            var btnToggleTraceElements = this.button.add('traceelements', 'Trace Elements');

            /* Button Icon ~~~~~
                * If you want to set an icon for the button,
                * uncomment the line below and update the class name
            */
            //this.button.setIcon(btnToggleTraceElements, '<i class="icon-frame"></i>');
            this.button.addCallback(btnToggleTraceElements, function(){
                var $editor = this.core.editor();
                btnToggleTraceElements.toggleClass('active');
                $editor.toggleClass('redactor-trace');
            });


        } //init


    }; //return
  }; // Redactor
})(jQuery);