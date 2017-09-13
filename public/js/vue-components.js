
/**
 * Shows a toolbar of day buttons.
 * The current day can be set using the "todayIndex" attribute.
 * 0 - Monday to 6 - Sunday
 * With "useAbbreviations" the short date texts are used.
 */
var Components = {};
Components.toolbarDays = {
	template: `
		<div class='button-group' role='group'>
			<button v-for='(day, index) in days' class='btn' v-bind:class='[{"btn-success": index < todayIndex}, {"btn-primary": index == todayIndex}, {"btn-default": index > todayIndex}]'>{{useAbbreviations ? day.short : day.long}}</button>
		</div>
	`,
	props: {
		useAbbreviations: Boolean,
		// marks the day of today
		// 0 - Monday
		todayIndex: Number,
		completion: Array
	},
	data: function () {
		return {
			days: [
				{
					long: "Monday",
					short: "Mon"
				},
				{
					long: "Tuesday",
					short: "Tue"
				},
				{
					long: "Wednesday",
					short: "Wed"
				},
				{
					long: "Thursday",
					short: "Thu"
				},
				{
					long: "Friday",
					short: "Fri"
				},
				{
					long: "Saturday",
					short: "Sat"
				},
				{
					long: "Sunday",
					short: "Sun"
				},
			]
		};
	}
}
