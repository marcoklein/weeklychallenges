


/**
 * Vue.js components.
 */

/**
 * Control days toolbar.
 */
Vue.component("days-toolbar", Components.toolbarDays);

new Vue({
	el: "#app",
	data: {
		useAbbreviations: false,
		todayIndex: 3
	},
	created: function () {
		//$.get("/challenge/active")
	}
})

/**
 * Init.
 */
$(document).ready(function() {

  // Place JavaScript code here...

});
