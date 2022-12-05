import {FilterMatchMode,FilterOperator} from 'primevue/api';

import Badge from 'primevue/badge';
// import OverlayPanel from 'primevue/overlaypanel';

var WATCHER_SECONDS = 3000

import MaxMet_API_handler from './_COMPS/MaxMet_API_handler.js'

export default {
	Badge,
	
	// This is all stuff returned to the VUE JS page
	data() {	
		return {
			timerCount: 0,

			PAGE_ID: "report",

			// Remember, all the variables shown on screen must be defined here (pre inited)
			MaxMet_REPORT_Table: null,
			TOTAL_RESULTS: null,
			
			INIT_TOTAL: null,
			INIT_SOFAR: null,

			filters1: null,
			filters2: {},
			loading1: true,
			idFrozen: false,
			products: null,
			expandedRows: [],
		}
	},
	
	maxmet_api:     null,
	IS_API_READY: "NO",
	SHOW_PANEL: "NO",
		
	/*
		CREATING: Occurs BEFORE the page is created... do API pull operations here
	*/
	created() {
		this.initFilters1();

		//this.terryhandle_obj = new TerryHandler();
		this.maxmet_api = new MaxMet_API_handler();

		document.title = "MaxMetric";


		//this.maxmet_api.testEXEC();
	},

	/*
		MOUNTED happens AFTER it has been created and is visable
	*/	
	watch: {
		
		timerCount: {
			
			handler() {
				console.log("WATCHER ABOUT TO START: ", this.$route.query.CHECKRELOAD) 

				var temp_api = new MaxMet_API_handler();
				if (this.IS_API_READY !== "YES") {

					
					if (this.$route.query.CHECKRELOAD === "skip") {
						this.SHOW_PANEL = "NO"
						this.IS_API_READY = "YES"
						console.log("CHCEK SKIP! api is ready!!!")

						temp_api.getMaxMet_RESTAPI().then(jsonresponse => {
							this.MaxMet_REPORT_Table = jsonresponse.data; 	// gets the data part of the jsonresponse
							this.TOTAL_RESULTS = jsonresponse.TOTAL_RESULTS
						})							

						this.loading1 = false;   //set to false so we can use the i nterface
					} else {					
						this.SHOW_PANEL = "YES"					
						this.loading1 = true				

						setTimeout(() => {
							this.timerCount++;

							temp_api.CHECK_BOOT_STATUS().then(jsonresponse => {
							this.INIT_TOTAL = jsonresponse.INIT_TOTAL
							this.INIT_SOFAR = jsonresponse.INIT_SOFAR
							var checkAPI = jsonresponse.IS_API_READY
				
							if (checkAPI === "YES") {
				
								console.log("API is ready for USE!!!!")
								this.SHOW_PANEL = false;				
								
								this.IS_API_READY = "YES"

								temp_api.getMaxMet_RESTAPI().then(jsonresponse => {
									this.MaxMet_REPORT_Table = jsonresponse.data; 	// gets the data part of the jsonresponse
									this.TOTAL_RESULTS = jsonresponse.TOTAL_RESULTS
								})							

								this.loading1 = false;   //set to false so we can use the i nterface
				
							}
								
							});						
						}, WATCHER_SECONDS);   // This is number of seconds, the watcher will wait before cycling again
					}
				} 

			},
			immediate: true // This ensures the watcher is triggered upon creation... BEFORE MOUNTED
		}   

	},	//end of watch
	mounted() {
		

		// this.$cookies.set("terry_cookie", "123")

		// this.maxmet_api.CHECK_BOOT_STATUS().then(jsonresponse => {
		// 	this.INIT_TOTAL = jsonresponse.INIT_TOTAL
		// 	this.INIT_SOFAR = jsonresponse.INIT_SOFAR
		// 	this.IS_API_READY = jsonresponse.IS_API_READY

		// 	if (this.IS_API_READY == "no") {

		// 		this.SHOW_PANEL = false;				
		// 		this.loading1 = false;   //set to false so we can use the i nterface

		// 	}
			
		// });

		
		this.maxmet_api.getMaxMet_RESTAPI().then(jsonresponse => {
			this.MaxMet_REPORT_Table = jsonresponse.data; 	// gets the data part of the jsonresponse
			this.TOTAL_RESULTS = jsonresponse.TOTAL_RESULTS
			this.loading1 = false;   //set to false so we can use the i nterface
		})
		
		


	},
	methods: {
		initFilters1() {
			this.filters1 = {
				'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
				'ORDER_ID': {value: null, matchMode: FilterMatchMode.CONTAINS},
				'PRODUCT': {value: null, matchMode: FilterMatchMode.CONTAINS},
				'DURATION': {value: null, matchMode: FilterMatchMode.CONTAINS},
				'SQKM': {value: null, matchMode: FilterMatchMode.CONTAINS},
				'DATE_START': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.DATE_IS}]},
				/*
				{value: null, matchMode: FilterMatchMode.CONTAINS},
				'date': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.DATE_IS}]},
				'country.name': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]},
				'status': {operator: FilterOperator.OR, constraints: [{value: null, matchMode: FilterMatchMode.EQUALS}]},
				'representative': {value: null, matchMode: FilterMatchMode.IN},
				'activity': {value: null, matchMode: FilterMatchMode.BETWEEN},
				'verified': {value: null, matchMode: FilterMatchMode.EQUALS}
				*/
			}
		},

		clearFilter1() {
			this.initFilters1();
		},
		expandAll() {
			this.expandedRows = this.products.filter(p => p.id);
		},
		collapseAll() {
			this.expandedRows = null;
		},
		formatCurrency(value) {
			return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
		},
		formatDate(value) {
			return value.toLocaleDateString('en-US', {
				day: '2-digit',
				month: '2-digit',
				year: 'numeric',
			});
		},
		calculateCustomerTotal(name) {
			let total = 0;
			if (this.customer3) {
				for (let customer of this.customer3) {
					if (customer.representative.name === name) {
						total++;
					}
				}
			}
			return total;
		}
	}
}
