/* Summary: Contains a section with three cards with black background and white text.
  The three cards are side by side and each contains a detail name in bold above a detail value.
*/
Vue.component("page_details_cards_component_1721648786", {
    template: `
    <section id="page-details-cards-component" class="py-8 bg-white">
        <h2 id="details-title" class="text-lg font-semibold mb-5 pl-4">Details</h2>
        <ul id="details-list" class="grid gap-4 min-[480px]:grid-cols-3 text-sm">
            <li id="project-length" class="px-5 py-4 rounded-lg bg-gradient-to-tr from-slate-950 to-slate-800 dark:from-slate-800/80 dark:to-slate-900">
                <div class="font-medium text-slate-200" :class="detailsComponentTextStyle">Real-Time Blockchain Monitoring</div>
                <div class="text-slate-400">Stay ahead of the curve with our advanced blockchain analysis tools that provide real-time insights into new transactions, contracts, and activities across multiple blockchain networks.</div>
            </li>
            <li id="start-date" class="px-5 py-4 rounded-lg bg-gradient-to-tr from-slate-950 to-slate-800 dark:from-slate-800/80 dark:to-slate-900">
                <div class="font-medium" id="start-date-des-1 text-slate-200" :class="detailsComponentTextStyle">Customizable Alerts and Notifications</div>
                <time class="text-slate-400" id="start-time-des-1">Set up custom alerts to be notified instantly when specific events or conditions are met, allowing you to react quickly to emerging opportunities or potential threats.</time>
            </li>
            <li id="end-date" class="px-5 py-4 rounded-lg bg-gradient-to-tr from-slate-950 to-slate-800 dark:from-slate-800/80 dark:to-slate-900">
                <div class="font-medium" id="end-date-des-1 text-slate-200" :class="detailsComponentTextStyle">Secure and Reliable Infrastructure</div>
                <time class="text-slate-400" id="end-time-des-1">Our robust and scalable infrastructure ensures high availability, data integrity, and secure access to your blockchain analysis, backed by industry-leading security practices.</time>
            </li>
        </ul>
    </section>
    `,
    data() {
        return {
            expanded: false,
            tab: null,
            detailsComponentTextSecondaryStyle: "text-slate-400"
        };
    },
});

