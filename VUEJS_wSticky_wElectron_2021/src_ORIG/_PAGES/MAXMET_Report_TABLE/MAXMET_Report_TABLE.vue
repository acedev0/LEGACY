<template><div class="grid">
<!-- STAT OF PAGE CONTENT -->		
    <!-- 
        ROW EXPANDING TABLE for MaxMet_REPORT_TABLE
        For keyword searchable fields,, update the globalFilteFields below
    -->
		<div class="col-12">			
			<div class="card">
      <!-- <Button type="button" label="Image" @click="toggle" class="p-button-success"/> -->
                <!-- <OverlayPanel id="status_PANEL" ref="op" appendTo="body" :showCloseIcon="true" > -->
                <div id="status_PANEL" v-if="SHOW_PANEL == 'YES'" >
                    <Panel appendTo="body" :showCloseIcon="true" class = "STATUS_PANEL_BOOTUP">
                            <h4>{{INIT_TOTAL}} / </h4><br>
                            <h4>{{INIT_SOFAR}}</h4>
                            <p>Welcome!</p>
                            <br>
                            NOTE: Because this is the first time you've started this program, MaxMet must 
                            initialize its local cache. 

                            This takes approximately 5 minutes. This is a one time initialization. MaxMet will
                            load MUCH faster from now on.

                            Please Standby...

                    <!--
                        <Accordion  :activeIndex="0">
                            <AccordionTab header="Header I">

                            </AccordionTab>
                        </Accordion>
                    -->
                    </Panel>
                </div><br>

				<Toolbar class="mb-4" v-if="IS_API_READY == 'YES'">
					<template v-slot:start >
                        <h5 class="total_title">Total Order Results: <span class="results_text">{{TOTAL_RESULTS}}</span> </h5>
                

                        <br>

                 
                        <br>

						<!--<div class="my-2">
							<Button label="New" icon="pi pi-plus" class="p-button-success mr-2" @click="openNew" />
							<Button label="Delete" icon="pi pi-trash" class="p-button-danger" @click="confirmDeleteSelected" :disabled="!selectedProducts || !selectedProducts.length" />
						</div>
                        -->
					</template>

					<template v-slot:end>
<router-link to="/">
    <Button icon="pi pi-book" label="View Metric Report"  class="mr-2 mb-2 p-button-outlined mb-2" />
</router-link>

<router-link to="/kpi">
    <Button icon="pi pi-sliders-h" label="View KPIs Summary Report" class="mr-2 mb-2 " />
</router-link>

                    

                    <!--
						<FileUpload mode="basic" accept="image/*" :maxFileSize="1000000" label="Import" chooseLabel="Import" class="mr-2 inline-block" />
                    
                    
						<Button label="Export to Excel" icon="pi pi-upload" class="p-button-help" @click="exportCSV($event)"  />

                    -->
					</template>
				</Toolbar>


			

                <!--
				<DataTable :value="products" v-model:expandedRows="expandedRows" dataKey="id" responsiveLayout="scroll">
                -->
                
                <!-- :value="MaxMet_REPORT_Table" :paginator="true" -->
<!-- 
     <ToggleButton v-model="idFrozen" onIcon="pi pi-lock" offIcon="pi pi-lock-open" onLabel="Unfreeze Id" offLabel="Freeze Id" style="width: 10rem" />

                <DataTable :value="customer2" :scrollable="true" scrollHeight="400px" :loading="loading2" scrollDirection="both" class="mt-3">-->





                
          

                <DataTable :value="MaxMet_REPORT_Table" :paginator="true" :rows="10" v-model:expandedRows="expandedRows"  dataKey="id" responsiveLayout="scroll" class="p-datatable-gridlines" :rowHover="true" :loading="loading1" v-model:filters="filters1" filterDisplay="menu" :filters="filters1"  :globalFilterFields="['ORDER_ID','DURATION','PRODUCT','SQKM']" scrollHeight="400px" scrollDirection="both" >
					<template #header>
						<div>
							<Button icon="pi pi-plus" label="Expand All" @click="expandAll" class="mr-2 mb-2" />
							<Button icon="pi pi-minus" label="Collapse All" @click="collapseAll" class="mb-2" />&nbsp;
                            <Button type="button" icon="pi pi-filter-slash" label="Reset Filters" class="p-button-outlined mb-2" @click="clearFilter1()"/>

                        </div>


					</template>







					<Column :expander="true" headerStyle="width: 2rem" />
                    
					<Column field="ORDER_ID" header="Order ID" :sortable="true" :style="{width:'150px'}" >
						<template #body="slotProps">
							<span class="orderID_text"> {{slotProps.data.ORDER_ID}} </span>

						</template>
					</Column>

					<Column field="DATE_START" header="Start Date" :sortable="true" :style="{width:'150px'}" >
						<template #body="slotProps">
							{{slotProps.data.ORDER_START}}
						</template>
					</Column>          

					<Column field="DATE_FINISH" header="Date PUBLISHED" :sortable="true" :style="{width:'150px'}" >
						<template #body="slotProps">
							{{slotProps.data.ORDER_FINISH}}
						</template>
					</Column> 

					<Column field="DURATION" header="Duration (hours)" :sortable="true" :style="{width:'80px'}" >
						<template #body="slotProps">
							{{slotProps.data.ORDER_DURATION}}
						</template>
					</Column>                              

					<Column field="PRODUCT" header="Product" :sortable="true" :style="{width:'150px'}" >
                        <template #filter="{filterModel}">
                            <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by PRODUCT"/>
                        </template>

						<template #body="slotProps">
							{{slotProps.data.ORDER_PRODUCT}}
						</template>
					</Column>                    

					<Column field="SQKM" header="Total SQKM" :sortable="true" :style="{width:'150px'}" >
						<template #body="slotProps">
                            
                            
                            <!-- <Button styleClass="rounded-button ui-button-secondary">{{slotProps.data.MISC.TOTAL_SQUARE_KILO}}</Button> -->
							<Button label="Success" class="p-button-rounded p-button-success mr-2 mb-2">{{slotProps.data.MISC.SQKM}}</Button>
                            
						</template>
					</Column>                              

					<template #expansion="slotProps">  <!-- Expansion panel STARTS here -->
						<div class="p-3" style="background-color: #00284d;">
                                
                                <div  v-for="(bucket) in slotProps.data.BUCKETS" :key="bucket">
                                <!-- Start of FOR LOOP -->
                            <!--
                               = = = = = = = 
                                BOX STARTS HERE 
                               = = = = = = =
                            -->

                                     
                            <div class="col-12 lg:col-4">
                                <div class="widget-task-box widget-task-box-1" width="1.rem" >
                                    <div class="task-box-header" style="background-color: #1D5AAD;" >   

                                        <div class="flex flex-column md:flex-row">

                                            <div class="mb-2 mr-2">
           
             <Badge :value="bucket.BUCKET_ORDER" size="large" severity="warning" class="mr-2"></Badge>                                            
                                               
                                            </div>
                                            <div class="mb-2 mr-2" >
                                            <span class="bucket_TEXT">{{ bucket.BUCKET_NAME }} </span>
                                            </div>

                                        </div>
                                    </div>

                                    
                                    <div class="task-box-content">
                                        <span class="text_HOURS">{{bucket.PRETTY_HOURS}} / {{bucket.PRETTY_MINS}}</span> <br><br>
                                        <span class="text_START">{{bucket.PRETTY_START}} </span><br><br>
                                        <b>thru</b><br><br>
                                        <span class="text_END">{{bucket.PRETTY_END}}</span><br>
                                        <!-- <span class="text_MINS">{{bucket.PRETTY_MINS}}</span> -->
                                    </div>
                                    <div class="task-box-footer">

                                            <div class="flex flex-column md:flex-col">
                                                <div class="mb-2 mr-2" v-if="bucket.MAN_FLAG_WAITING !== ''">
                                                    <Button label="Success" style="font-size: 0.9rem" class="p-button-rounded p-button-danger mr-2 mb-2">WAITING_FOR_HUMAN</Button>
                                                </div>
                                                <div class="mb-2 mr-2"  v-if="bucket.MAN_FLAG_HUMAN !== ''"> 
                                                    <Button label="Success" style="font-size: 0.9rem" class="p-button-rounded p-button-warning mr-2 mb-2">HUMAN_MANUAL_ACTIVITY</Button>
                                                </div>

                                            </div>
                                        <br>
                                        
                                    </div>
                                </div>
                            </div>    
                            <!-- = = =   BOX FINISH = = = = = = -->
                                <!-- END OF LOOP -->
                                </div>

                                <!--
                                <h5>Orders for {{slotProps.data.ORDER_ID}}</h5>
                                <DataTable :value="slotProps.data.orders" responsiveLayout="scroll">
                                <Column field="customer" header="Customer" :sortable="true">
                                <template #body="slotProps">
                                {{slotProps.data.customer}}
                                </template>
                                </Column>

                                </DataTable>
                                -->
						</div>
					</template> <!-- end of Expansion panel -->

				</DataTable> <!-- Master Data Table -->
			</div>
        </div>



<!--
        REGULAR TABLE
                <h5 class="total_title">Total Results: <span class="results_text">{{total_results}}</span> </h5>
				<DataTable :value="MaxMet_REPORT_Table" :paginator="true" class="p-datatable-gridlines" :rows="10" dataKey="id" :rowHover="true" 
					v-model:filters="filters1" filterDisplay="menu" :loading="loading1" :filters="filters1" responsiveLayout="scroll"
					:globalFilterFields="['ORDER_ID','DESC','representative.name','balance','status']" >
					<template #header>
                        <div class="flex justify-content-between flex-column sm:flex-row">
                            <Button type="button" icon="pi pi-filter-slash" label="Reset Filters" class="p-button-outlined mb-2" @click="clearFilter1()"/>
                            <span class="p-input-icon-left mb-2">
                                <i class="pi pi-search" />
                                <InputText v-model="filters1['global'].value" placeholder="Keyword Search" style="width: 100%"/>
                            </span>
                        </div>
                    </template>
                    <template #empty>
                        No customers found.
                    </template>
                    <template #loading>
                        Loading customers data. Please wait.
                    </template>


                    <Column field="ORDER_ID" header="Order ID" style="min-width:25rem">                        
                        <template #body="{data}">
                            <span style="color:blue">{{data.ORDER_ID}}</span>
                        </template>						
                        <template #filter="{filterModel}">
                            <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by OrderID"/>
                        </template>
                    </Column>

                    <Column field="RRRRRRRRRRRRRR" header="Date Start" style="min-width:12rem">
                        <template #body="{data}">
                            <span style="color:purple">{{data.DATE_START}}</span>
                        </template>
                        <template #filter="{filterModel}">
                            <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by name"/>
                        </template>
                    </Column>					

                    <Column field="RRRRRRRRRRRRRR" header="Date Finished" style="min-width:12rem">
                        <template #body="{data}">
                            {{data.DATE_FINISH}}
                        </template>
                        <template #filter="{filterModel}">
                            <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by name"/>
                        </template>
                    </Column>


                    <Column field="DESC" header="DESC" style="min-width:12rem">
                        <template #body="{data}">
                            {{data.DESC}}
                        </template>
                        <template #filter="{filterModel}">
                            <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by name"/>
                        </template>
                    </Column>

                    <Column field="RRRRRRRRRRRRRR" header="Client" style="min-width:12rem">
                        <template #body="{data}">
                            {{data.CLIENT}}
                        </template>
                        <template #filter="{filterModel}">
                            <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by name"/>
                        </template>
                    </Column>

                    <Column field="RRRRRRRRRRRRRR" header="Product" style="min-width:12rem">
                        <template #body="{data}">
                            {{data.PRODUCT}}
                        </template>
                        <template #filter="{filterModel}">
                            <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by name"/>
                        </template>
                    </Column>

                    <Column field="RRRRRRRRRRRRRR" header="Total Duration" style="min-width:12rem">
                        <template #body="{data}">
                            {{data.DURATION}}
                        </template>
                        <template #filter="{filterModel}">
                            <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by name"/>
                        </template>
                    </Column>

                    <Column field="RRRRRRRRRRRRRR" header="Square Kilo" style="min-width:12rem">
                        <template #body="{data}">
                            {{data.SQKM}}
                        </template>
                        <template #filter="{filterModel}">
                            <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by name"/>
                        </template>
                    </Column>

                    <Column field="RRRRRRRRRRRRRR" header="Order Placed to Material Selection" style="min-width:12rem">	
                        <template #body="{data}">
                            {{data.ORDER_PLACED}}							
                        </template>
                        <template #filter="{filterModel}">							
                            <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by name"/>
                        </template>
                    </Column>					

               <Column field="RRRRRRRRRRRRRR" header="Material Selection in Flame UI to BBA Start (HU) " style="min-width:12rem">	
                        <template #body="{data}">
                            {{data.MATERIAL_SELECT}}							
                        </template>
                        <template #filter="{filterModel}">							
                            <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by XXXXXX"/>
                        </template>
                    </Column>											

               <Column field="RRRRRRRRRRRRRR" header="BBA Start to BBA Complete (WA, HU)" style="min-width:12rem">	
                        <template #body="{data}">
                            {{data.BBA_START}}							
                        </template>
                        <template #filter="{filterModel}">							
                            <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by XXXXXX"/>
                        </template>
                    </Column>			
               <Column field="RRRRRRRRRRRRRR" header="BBA Complete to GEO Start" style="min-width:12rem">	
                        <template #body="{data}">
                            {{data.BBA_COMPLETE}}							
                        </template>
                        <template #filter="{filterModel}">							
                            <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by XXXXXX"/>
                        </template>
                    </Column>								
               <Column field="RRRRRRRRRRRRRR" header="GEO Processor Setup DURATION" style="min-width:12rem">	
                        <template #body="{data}">
                            {{data.GEO_SETUP}}							
                        </template>
                        <template #filter="{filterModel}">							
                            <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by XXXXXX"/>
                        </template>
                    </Column>			
               <Column field="RRRRRRRRRRRRRR" header="GEO Start to GEO Processor Edit (WA)" style="min-width:12rem">	
                        <template #body="{data}">
                            {{data.GEO_START}}							
                        </template>
                        <template #filter="{filterModel}">							
                            <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by XXXXXX"/>
                        </template>
                    </Column>			
               <Column field="RRRRRRRRRRRRRR" header="GEO Processor Edit to EXPORT (HU)" style="min-width:12rem">	
                        <template #body="{data}">
                            {{data.GEO_EDIT}}							
                        </template>
                        <template #filter="{filterModel}">							
                            <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by XXXXXX"/>
                        </template>
                    </Column>			
               <Column field="RRRRRRRRRRRRRR" header="GEO_Part1 GEO Export to Meta Prep" style="min-width:12rem">	
                        <template #body="{data}">
                            {{data.GEO_PART1}}							
                        </template>
                        <template #filter="{filterModel}">							
                            <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by XXXXXX"/>
                        </template>
                    </Column>			
               <Column field="RRRRRRRRRRRRRR" header="GEO_Part2 GEO Meta Prep to QC" style="min-width:12rem">	
                        <template #body="{data}">
                            {{data.GEO_PART2}}							
                        </template>
                        <template #filter="{filterModel}">							
                            <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by XXXXXX"/>
                        </template>
                    </Column>				
               <Column field="RRRRRRRRRRRRRR" header="GEO_Part3 GEO QC to Publish (WA, HU)" style="min-width:12rem">	
                        <template #body="{data}">
                            {{data.GEO_PART3}}							
                        </template>
                        <template #filter="{filterModel}">							
                            <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by XXXXXX"/>
                        </template>
                    </Column>			
               <Column field="RRRRRRRRRRRRRR" header="GEO_Part4 GEO QC to Publish" style="min-width:12rem">	
                        <template #body="{data}">
                            {{data.GEO_PART4}}							
                        </template>
                        <template #filter="{filterModel}">							
                            <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by XXXXXX"/>
                        </template>
                    </Column>			
               <Column field="RRRRRRRRRRRRRR" header="GeoProcessor Export to MPQ Published (Sum of N - Q)" style="min-width:12rem">	
                        <template #body="{data}">
                            {{data.GEO_EXPORT_FINAL}}							
                        </template>
                        <template #filter="{filterModel}">							
                            <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by XXXXXX"/>
                        </template>
                    </Column>																																										

				</DataTable>
            </div>
		</div> 
-->
   

<!-- 
		<div class="col-12">
			<div class="card">
				<h5>Frozen Columns</h5>
                <ToggleButton v-model="idFrozen" onIcon="pi pi-lock" offIcon="pi pi-lock-open" onLabel="Unfreeze Id" offLabel="Freeze Id" style="width: 10rem" />

                <DataTable :value="customer2" :scrollable="true" scrollHeight="400px" :loading="loading2" scrollDirection="both" class="mt-3">
                    <Column field="name" header="Name" :style="{width:'150px'}" frozen></Column>
                    <Column field="id" header="Id" :style="{width:'100px'}" :frozen="idFrozen"></Column>
                    <Column field="name" header="Name" :style="{width:'200px'}"></Column>
                    <Column field="country.name" header="Country" :style="{width:'200px'}">
						<template #body="{data}">
							<img src="@/assets/demo/flags/flag_placeholder.png" :class="'flag flag-' + data.country.code" width="30" />
							<span style="margin-left: .5em; vertical-align: middle" class="image-text">{{data.country.name}}</span>
						</template>
					</Column>
                    <Column field="date" header="Date" :style="{width:'200px'}"></Column>
                    <Column field="company" header="Company" :style="{width:'200px'}"></Column>
                    <Column field="status" header="Status" :style="{width:'200px'}">
						<template #body="{data}">
                            <span :class="'customer-badge status-' + data.status">{{data.status}}</span>
                        </template>
					</Column>
                    <Column field="activity" header="Activity" :style="{width:'200px'}"></Column>
                    <Column field="representative.name" header="Representative" :style="{width:'200px'}">
						<template #body="{data}">
                            <img :alt="data.representative.name" :src="'demo/images/avatar/' + data.representative.image" width="32" style="vertical-align: middle" />
                            <span style="margin-left: .5em; vertical-align: middle" class="image-text">{{data.representative.name}}</span>
                        </template>
					</Column>
                    <Column field="balance" header="Balance" :style="{width:'150px'}" frozen alignFrozen="right">
                        <template #body="{data}">
                            <span class="text-bold">{{formatCurrency(data.balance)}}</span>
                        </template>
                    </Column>
                </DataTable>
			</div>
		</div>
-->

<!--     
		<div class="col-12">
			<div class="card">
				<h5>Row Expand</h5>
				<DataTable :value="products" v-model:expandedRows="expandedRows" dataKey="id" responsiveLayout="scroll">
					<template #header>
						<div>
							<Button icon="pi pi-plus" label="Expand All" @click="expandAll" class="mr-2 mb-2" />
							<Button icon="pi pi-minus" label="Collapse All" @click="collapseAll" class="mb-2" />
						</div>
					</template>
					<Column :expander="true" headerStyle="width: 3rem" />
					<Column field="name" header="Name" :sortable="true">
						<template #body="slotProps">
							{{slotProps.data.name}}
						</template>
					</Column>
					<Column header="Image">
						<template #body="slotProps">
							<img :src="'demo/images/product/' + slotProps.data.image" :alt="slotProps.data.image" class="shadow-2" width="100" />
						</template>
					</Column>
					<Column field="price" header="Price" :sortable="true">
						<template #body="slotProps">
							{{formatCurrency(slotProps.data.price)}}
						</template>
					</Column>
					<Column field="category" header="Category" :sortable="true">
					<template #body="slotProps">
							{{formatCurrency(slotProps.data.category)}}
						</template></Column>
					<Column field="rating" header="Reviews" :sortable="true">
						<template #body="slotProps">
							<Rating :modelValue="slotProps.data.rating" :readonly="true" :cancel="false" />
						</template>
					</Column>
					<Column field="inventoryStatus" header="Status" :sortable="true">
						<template #body="slotProps">
							<span :class="'product-badge status-' + (slotProps.data.inventoryStatus ? slotProps.data.inventoryStatus.toLowerCase() : '')">{{slotProps.data.inventoryStatus}}</span>
						</template>
					</Column>
					<template #expansion="slotProps">
						<div class="p-3">
							<h5>Orders for {{slotProps.data.name}}</h5>
							<DataTable :value="slotProps.data.orders" responsiveLayout="scroll">
								<Column field="id" header="Id" :sortable="true">
									<template #body="slotProps">
										{{slotProps.data.id}}
									</template>
								</Column>
								<Column field="customer" header="Customer" :sortable="true">
									<template #body="slotProps">
										{{slotProps.data.customer}}
									</template>
								</Column>
								<Column field="date" header="Date" :sortable="true">
									<template #body="slotProps">
										{{slotProps.data.date}}
									</template>
								</Column>
								<Column field="amount" header="Amount" :sortable="true">
									<template #body="slotProps" :sortable="true">
										{{formatCurrency(slotProps.data.amount)}}
									</template>
								</Column>
								<Column field="status" header="Status" :sortable="true">
									<template #body="slotProps">
										<span :class="'order-badge order-' + (slotProps.data.status ? slotProps.data.status.toLowerCase() : '')">{{slotProps.data.status}}</span>
									</template>
								</Column>
								<Column headerStyle="width:4rem">
									<template #body>
										<Button icon="pi pi-search" />
									</template>
								</Column>
							</DataTable>
						</div>
					</template>
				</DataTable>
			</div>
		</div>
-->

<!--
		<div class="col-12">
			<div class="card">
				<h5>Subheader Grouping</h5>
				<DataTable :value="customer3" rowGroupMode="subheader" groupRowsBy="representative.name"
                    sortMode="single" sortField="representative.name" :sortOrder="1" scrollable scrollHeight="400px">
                    <Column field="representative.name" header="Representative"></Column>
                    <Column field="name" header="Name" style="min-width:200px"></Column>
                    <Column field="country" header="Country" style="min-width:200px">
                        <template #body="slotProps">
                            <img src="@/assets/demo/flags/flag_placeholder.png" :class="'flag flag-' + slotProps.data.country.code" width="30" />
                            <span class="image-text ml-2">{{slotProps.data.country.name}}</span>
                        </template>
                    </Column>
                    <Column field="company" header="Company" style="min-width:200px"></Column>
                    <Column field="status" header="Status" style="min-width:200px">
                        <template #body="slotProps">
                            <span :class="'customer-badge status-' + slotProps.data.status">{{slotProps.data.status}}</span>
                        </template>
                    </Column>
                    <Column field="date" header="Date" style="min-width:200px"></Column>
                    <template #groupheader="slotProps">
						<img :alt="slotProps.data.representative.name" :src="'demo/images/avatar/' + slotProps.data.representative.image" width="32" style="vertical-align: middle" />
                        <span class="image-text ml-2">{{slotProps.data.representative.name}}</span>
                    </template>
                    <template #groupfooter="slotProps">
                        <td style="text-align: right" class="text-bold pr-6">Total Customers: {{calculateCustomerTotal(slotProps.data.representative.name)}}</td>
                    </template>
                </DataTable>
			</div>
		</div>
-->
		

<!-- END OF PAGE CONTENT -->
</div></template>



<!-- 
= = = =
= = = = 2. Import Core JavaScript
= = = =
-->
<script src="./MAXMET_Report_TABLE.js"></script>



<!-- 
= = = =
= = = = 3. Import Core CSS
= = = =
-->
<style scoped lang="scss">
	@import './MAXMET_Report_TABLE.css';
</style>
