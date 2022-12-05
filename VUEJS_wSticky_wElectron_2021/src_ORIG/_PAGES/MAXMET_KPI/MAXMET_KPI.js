
import Badge from 'primevue/badge';


//import TerryHandler from './_COMPS/terry_handler.js';
import MaxMet_KPI_PULL_HANDLER from './_COMPS/MaxMet_KPI_PULL_HANDLER.js'

export default {
	Badge,
	
	data() {
		return {

			PAGE_ID: "kpi",

			// Remember, all the variables shown on screen must be defined here (pre inited)
			MAINOBJ: null,
			KPI_DESC: null,
			TOTAL_RESULTS: null,
			TOTAL_in_RANGE_0: null,
			TOTAL_in_RANGE_500: null,
			TOTAL_in_RANGE_1000: null,
			TOTAL_in_RANGE_1500: null,
			TOTAL_in_RANGE_2000: null,

			SQKM_90th_RANGE_0: null,
			SQKM_90th_RANGE_500: null,
			SQKM_90th_RANGE_1000: null,
			SQKM_90th_RANGE_1500: null,
			SQKM_90th_RANGE_2000: null,
			
			AVG_TIME_SPENT_WAITING_0: null,
			AVG_TIME_SPENT_WAITING_500: null,
			AVG_TIME_SPENT_WAITING_1000: null,
			AVG_TIME_SPENT_WAITING_1500: null,
			AVG_TIME_SPENT_WAITING_2000: null,			


		}
	},

	maxmet_api:     null,
	


	created() {
		this.maxmet_api = new MaxMet_KPI_PULL_HANDLER();

		document.title = "MaxMetric";
	},

	/*
		This runs when the page is MOUNTED
	*/
	mounted() {		

		// document.title = "MaxMet Report";   // When runnin in web mode..   use this.. disable for APP

	/* // OLD but working
		this.terryhandle_obj.getMaxarData().then(data => {
			this.MaxMet_REPORT_Table = data; 
			this.loading1 = false;
			//this.MaxMet_REPORT_Table.forEach(customer => customer.date = new Date(customer.date));
		});
	*/
		this.maxmet_api.getMaxMet_REST_for_KPI().then(jsonresponse => {
			this.MAINOBJ = jsonresponse.data[0].ALL_ORDERS_KPI; 	// gets the data part of the jsonresponse
			this.KPI_DESC = this.MAINOBJ.DESC;
			this.TOTAL_in_RANGE_0 = jsonresponse.data[0].ALL_ORDERS_KPI.TOTAL_in_RANGE_0;
			this.TOTAL_in_RANGE_500 = jsonresponse.data[0].ALL_ORDERS_KPI.TOTAL_in_RANGE_500;
			this.TOTAL_in_RANGE_1000 = jsonresponse.data[0].ALL_ORDERS_KPI.TOTAL_in_RANGE_1000;
			this.TOTAL_in_RANGE_1500 = jsonresponse.data[0].ALL_ORDERS_KPI.TOTAL_in_RANGE_1500;
			this.TOTAL_in_RANGE_2000 = jsonresponse.data[0].ALL_ORDERS_KPI.TOTAL_in_RANGE_2000;

			this.AVG_TIME_SPENT_WAITING_0 = jsonresponse.data[0].ALL_ORDERS_KPI.AVG_TIME_SPENT_WAITING_0;
			this.AVG_TIME_SPENT_WAITING_500 = jsonresponse.data[0].ALL_ORDERS_KPI.AVG_TIME_SPENT_WAITING_500;
			this.AVG_TIME_SPENT_WAITING_1000 = jsonresponse.data[0].ALL_ORDERS_KPI.AVG_TIME_SPENT_WAITING_1000;
			this.AVG_TIME_SPENT_WAITING_1500 = jsonresponse.data[0].ALL_ORDERS_KPI.AVG_TIME_SPENT_WAITING_1500;
			this.AVG_TIME_SPENT_WAITING_2000 = jsonresponse.data[0].ALL_ORDERS_KPI.AVG_TIME_SPENT_WAITING_2000;
			
			this.SQKM_90th_RANGE_0 = jsonresponse.data[0].ALL_ORDERS_KPI.SQKM_90th_RANGE_0;
			this.SQKM_90th_RANGE_500 = jsonresponse.data[0].ALL_ORDERS_KPI.SQKM_90th_RANGE_500;
			this.SQKM_90th_RANGE_1000 = jsonresponse.data[0].ALL_ORDERS_KPI.SQKM_90th_RANGE_1000;
			this.SQKM_90th_RANGE_1500 = jsonresponse.data[0].ALL_ORDERS_KPI.SQKM_90th_RANGE_1500;
			this.SQKM_90th_RANGE_2000 = jsonresponse.data[0].ALL_ORDERS_KPI.SQKM_90th_RANGE_2000;

			this.PROD_VPREM = jsonresponse.data[0].PRODUCTS_KPI[0];
			this.PROD_VA = jsonresponse.data[0].PRODUCTS_KPI[1];

			this.EGIS = jsonresponse.data[0].CLIENTS_KPI[0];
			this.GLOBAL = jsonresponse.data[0].CLIENTS_KPI[1];
			this.APS = jsonresponse.data[0].CLIENTS_KPI[2];

			this.loading1 = false;
		});		
	

		/* 
		this.productService.getProductsWithOrdersSmall().then(data => this.products = data);
		this.customerService.getCustomersLarge().then(data => {
			this.MaxMet_REPORT_Table = data; 
			this.loading1 = false;
			this.MaxMet_REPORT_Table.forEach(customer => customer.date = new Date(customer.date));
		});
		


		this.customerService.getCustomersLarge().then(data => this.customer2 = data);
		this.customerService.getCustomersMedium().then(data => this.customer3 = data);
		this.loading2 = false;
		*/
	},
	methods: {

	} //end of methods
}
