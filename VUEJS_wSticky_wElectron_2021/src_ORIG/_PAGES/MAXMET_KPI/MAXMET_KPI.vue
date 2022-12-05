<template><div class="grid"><div class="col-12">			

<div class="card" >
    <Toolbar class="mb-4">
        <template v-slot:start>
            <h5 class="total_title">KPIs for: <span class="results_text">{{KPI_DESC}}</span> </h5>
            
        </template>
        <template v-slot:end>  

<router-link to="/report?CHECKRELOAD=skip">
    <Button icon="pi pi-book" label="View Metric Report"  class="mr-2 mb-2" />
</router-link>


<router-link to="/kpi">
    <Button icon="pi pi-sliders-h" label="View KPIs Summary Report" class="mr-2 mb-2 p-button-outlined mb-2" />
</router-link>

        </template>
    </Toolbar>

<!-- = = == WHOLE ROW STARTS HERE  ALL KPIs---> 
        <div class="flex flex-column md:flex-row">
                <!-- = = = = = = =  BOX STARTS HERE = = = = = = = -->                               
                    <div class="col-12 lg:col-4"  >                            
                        <div class="widget-task-box widget-task-box-1" width="1.rem" >
                            <div class="task-box-header" style="background-color: #1D5AAD;" >   
                                <div class="flex flex-column md:flex-row">
                                    <div class="mb-2 mr-2">           
                                        <Badge Badge :value="A" size="large" severity="warning" class="mr-2"><span class="kpi_desc"><b></b></span> Total Orders</Badge>                                                
                                    </div>
                                    <div class="mb-2 mr-2" >
                                        <span class="bucket_TEXT"> </span>
                                    </div>
                                </div>                                        
                            </div>
                            <div class="task-box-content">
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 0 - 500:   </div>
                                    <div class="kpi_value">  {{TOTAL_in_RANGE_0}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 500 - 1000:   </div>
                                    <div class="kpi_value">  {{TOTAL_in_RANGE_500}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 1000 - 1500:   </div>
                                    <div class="kpi_value">  {{TOTAL_in_RANGE_1000}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 1500 - 2000:   </div>
                                    <div class="kpi_value">  {{TOTAL_in_RANGE_1500}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 2000+ plus:   </div>
                                    <div class="kpi_value">  {{TOTAL_in_RANGE_2000}}</div>
                                </div>

                            </div>
                            <div class="task-box-footer">
                                <!--
                                    <div class="flex flex-column md:flex-col">
                                        <div class="mb-2 mr-2" v-if="bucket.MAN_FLAG_A !== ''">
                                            <Button label="Success" style="font-size: 0.9rem" class="p-button-rounded p-button-danger mr-2 mb-2">WAITING_FOR_HUMAN</Button>
                                        </div>
                                        <div class="mb-2 mr-2"  v-if="bucket.MAN_FLAG_B !== ''"> 
                                            <Button label="Success" style="font-size: 0.9rem" class="p-button-rounded p-button-warning mr-2 mb-2">HUMAN_MANUAL_ACTIVITY</Button>
                                        </div>

                                    </div>
                                    -->
                                <br>                                        
                            </div> <!-- end of footer -->
                        </div>                        
                    </div>    
                <!-- = = =   BOX FINISH = = = = = = -->
                <!-- = = = = = = =  BOX STARTS HERE = = = = = = = -->                               
                    <div class="col-12 lg:col-4"  >                            
                        <div class="widget-task-box widget-task-box-1" width="1.rem" >
                            <div class="task-box-header" style="background-color: #1D5AAD;" >   
                                <div class="flex flex-column md:flex-row">
                                    <div class="mb-2 mr-2">           
                                        <Badge Badge :value="A" size="large" severity="warning" class="mr-2"><span class="kpi_desc"><b></b></span> AVG Time Spent (hrs)</Badge>                                                
                                    </div>
                                    <div class="mb-2 mr-2" >
                                        <span class="bucket_TEXT"> </span>
                                    </div>
                                </div>                                        
                            </div>
                            <div class="task-box-content">
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 0 - 500:   </div>
                                    <div class="kpi_value">  {{AVG_TIME_SPENT_WAITING_0}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 500 - 1000:   </div>
                                    <div class="kpi_value">  {{AVG_TIME_SPENT_WAITING_500}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 1000 - 1500:   </div>
                                    <div class="kpi_value">  {{AVG_TIME_SPENT_WAITING_1000}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 1500 - 2000:   </div>
                                    <div class="kpi_value">  {{AVG_TIME_SPENT_WAITING_1500}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 2000+ plus:   </div>
                                    <div class="kpi_value">  {{AVG_TIME_SPENT_WAITING_2000}}</div>
                                </div>

                            </div>
                            <div class="task-box-footer">
                                <!--
                                    <div class="flex flex-column md:flex-col">
                                        <div class="mb-2 mr-2" v-if="bucket.MAN_FLAG_A !== ''">
                                            <Button label="Success" style="font-size: 0.9rem" class="p-button-rounded p-button-danger mr-2 mb-2">WAITING_FOR_HUMAN</Button>
                                        </div>
                                        <div class="mb-2 mr-2"  v-if="bucket.MAN_FLAG_B !== ''"> 
                                            <Button label="Success" style="font-size: 0.9rem" class="p-button-rounded p-button-warning mr-2 mb-2">HUMAN_MANUAL_ACTIVITY</Button>
                                        </div>

                                    </div>
                                    -->
                                <br>                                        
                            </div> <!-- end of footer -->
                        </div>                        
                    </div>    
                <!-- = = =   BOX FINISH = = = = = = -->
                <!-- = = = = = = =  BOX STARTS HERE = = = = = = = -->                               
                    <div class="col-12 lg:col-4"  >                            
                        <div class="widget-task-box widget-task-box-1" width="1.rem" >
                            <div class="task-box-header" style="background-color: #1D5AAD;" >   
                                <div class="flex flex-column md:flex-row">
                                    <div class="mb-2 mr-2">           
                                        <Badge Badge :value="A" size="large" severity="warning" class="mr-2"><span class="kpi_desc"><b></b></span> 90th Percentile (SQKM)</Badge>                                                
                                    </div>
                                    <div class="mb-2 mr-2" >
                                        <span class="bucket_TEXT"> </span>
                                    </div>
                                </div>                                        
                            </div>
                            <div class="task-box-content">
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 0 - 500:   </div>
                                    <div class="kpi_value">  {{TOTAL_in_RANGE_0}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 500 - 1000:   </div>
                                    <div class="kpi_value">  {{TOTAL_in_RANGE_0}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 1000 - 1500:   </div>
                                    <div class="kpi_value">  {{TOTAL_in_RANGE_0}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 1500 - 2000:   </div>
                                    <div class="kpi_value">  {{TOTAL_in_RANGE_0}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 2000+ plus:   </div>
                                    <div class="kpi_value">  {{TOTAL_in_RANGE_0}}</div>
                                </div>

                            </div>
                            <div class="task-box-footer">
                                <!--
                                    <div class="flex flex-column md:flex-col">
                                        <div class="mb-2 mr-2" v-if="bucket.MAN_FLAG_A !== ''">
                                            <Button label="Success" style="font-size: 0.9rem" class="p-button-rounded p-button-danger mr-2 mb-2">WAITING_FOR_HUMAN</Button>
                                        </div>
                                        <div class="mb-2 mr-2"  v-if="bucket.MAN_FLAG_B !== ''"> 
                                            <Button label="Success" style="font-size: 0.9rem" class="p-button-rounded p-button-warning mr-2 mb-2">HUMAN_MANUAL_ACTIVITY</Button>
                                        </div>

                                    </div>
                                    -->
                                <br>                                        
                            </div> <!-- end of footer -->
                        </div>                        
                    </div>    
                <!-- = = =   BOX FINISH = = = = = = -->                                   
        </div> <!-- end of flex ROW -->
<!-- = = = = WHOLE ROW ENDS = = = = = =end of row -->



<h4>PRODUCTS:</h4>
<!-- = = == WHOLE ROW STARTS HERE --->  <!-- VIVID ADVACNED -->
        <div class="flex flex-column md:flex-row">
                <!-- = = = = = = =  BOX STARTS HERE = = = = = = = -->                               
                    <div class="col-12 lg:col-4"  >                            
                        <div class="widget-task-box widget-task-box-1" width="1.rem" >
                            <div class="task-box-header" style="background-color: #1D5AAD;" >   
                                <div class="flex flex-column md:flex-row">
                                    <div class="mb-2 mr-2">           
                                        <Badge Badge :value="A" size="large" severity="warning" class="mr-2"><span class="kpi_desc"><b>( Vivid Advanced )</b></span> Total Orders</Badge>                                                
                                    </div>
                                    <div class="mb-2 mr-2" >
                                        <span class="bucket_TEXT"> </span>
                                    </div>
                                </div>                                        
                            </div>
                            <div class="task-box-content">
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 0 - 500:   </div>
                                    <div class="kpi_value">  {{PROD_VA_0}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 500 - 1000:   </div>
                                    <div class="kpi_value">  {{PROD_VA_500}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 1000 - 1500:   </div>
                                    <div class="kpi_value">  {{PROD_VA_1000}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 1500 - 2000:   </div>
                                    <div class="kpi_value">  {{PROD_VA_1500}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 2000+ plus:   </div>
                                    <div class="kpi_value">  {{PROD_VA_2000}}</div>
                                </div>

                            </div>
                            <div class="task-box-footer">
                                <!--
                                    <div class="flex flex-column md:flex-col">
                                        <div class="mb-2 mr-2" v-if="bucket.MAN_FLAG_A !== ''">
                                            <Button label="Success" style="font-size: 0.9rem" class="p-button-rounded p-button-danger mr-2 mb-2">WAITING_FOR_HUMAN</Button>
                                        </div>
                                        <div class="mb-2 mr-2"  v-if="bucket.MAN_FLAG_B !== ''"> 
                                            <Button label="Success" style="font-size: 0.9rem" class="p-button-rounded p-button-warning mr-2 mb-2">HUMAN_MANUAL_ACTIVITY</Button>
                                        </div>

                                    </div>
                                    -->
                                <br>                                        
                            </div> <!-- end of footer -->
                        </div>                        
                    </div>    
                <!-- = = =   BOX FINISH = = = = = = -->
                <!-- = = = = = = =  BOX STARTS HERE = = = = = = = -->                               
                    <div class="col-12 lg:col-4"  >                            
                        <div class="widget-task-box widget-task-box-1" width="1.rem" >
                            <div class="task-box-header" style="background-color: #1D5AAD;" >   
                                <div class="flex flex-column md:flex-row">
                                    <div class="mb-2 mr-2">           
                                        <Badge Badge :value="A" size="large" severity="warning" class="mr-2"><span class="kpi_desc"><b>( Vivid Advanced )</b></span> AVG Time Spent (hrs)</Badge>                                                
                                    </div>
                                    <div class="mb-2 mr-2" >
                                        <span class="bucket_TEXT"> </span>
                                    </div>
                                </div>                                        
                            </div>
                            <div class="task-box-content">
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 0 - 500:   </div>
                                    <div class="kpi_value">  {{PROD_VPREM_0}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 500 - 1000:   </div>
                                    <div class="kpi_value">  {{PROD_VPREM_500}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 1000 - 1500:   </div>
                                    <div class="kpi_value">  {{PROD_VPREM_1000}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 1500 - 2000:   </div>
                                    <div class="kpi_value">  {{PROD_VPREM_1500}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 2000+ plus:   </div>
                                    <div class="kpi_value">  {{PROD_VPREM_2000}}</div>
                                </div>

                            </div>
                            <div class="task-box-footer">
                                <!--
                                    <div class="flex flex-column md:flex-col">
                                        <div class="mb-2 mr-2" v-if="bucket.MAN_FLAG_A !== ''">
                                            <Button label="Success" style="font-size: 0.9rem" class="p-button-rounded p-button-danger mr-2 mb-2">WAITING_FOR_HUMAN</Button>
                                        </div>
                                        <div class="mb-2 mr-2"  v-if="bucket.MAN_FLAG_B !== ''"> 
                                            <Button label="Success" style="font-size: 0.9rem" class="p-button-rounded p-button-warning mr-2 mb-2">HUMAN_MANUAL_ACTIVITY</Button>
                                        </div>

                                    </div>
                                    -->
                                <br>                                        
                            </div> <!-- end of footer -->
                        </div>                        
                    </div>    
                <!-- = = =   BOX FINISH = = = = = = -->
                <!-- = = = = = = =  BOX STARTS HERE = = = = = = = -->                               
                    <div class="col-12 lg:col-4"  >                            
                        <div class="widget-task-box widget-task-box-1" width="1.rem" >
                            <div class="task-box-header" style="background-color: #1D5AAD;" >   
                                <div class="flex flex-column md:flex-row">
                                    <div class="mb-2 mr-2">           
                                        <Badge Badge :value="A" size="large" severity="warning" class="mr-2"><span class="kpi_desc"><b>( Vivid Advanced )</b></span> 90th Percentile (SQKM)</Badge>                                                
                                    </div>
                                    <div class="mb-2 mr-2" >
                                        <span class="bucket_TEXT"> </span>
                                    </div>
                                </div>                                        
                            </div>
                            <div class="task-box-content">
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 0 - 500:   </div>
                                    <div class="kpi_value">  {{TOTAL_in_RANGE_0}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 500 - 1000:   </div>
                                    <div class="kpi_value">  {{TOTAL_in_RANGE_0}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 1000 - 1500:   </div>
                                    <div class="kpi_value">  {{TOTAL_in_RANGE_0}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 1500 - 2000:   </div>
                                    <div class="kpi_value">  {{TOTAL_in_RANGE_0}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 2000+ plus:   </div>
                                    <div class="kpi_value">  {{TOTAL_in_RANGE_0}}</div>
                                </div>

                            </div>
                            <div class="task-box-footer">
                                <!--
                                    <div class="flex flex-column md:flex-col">
                                        <div class="mb-2 mr-2" v-if="bucket.MAN_FLAG_A !== ''">
                                            <Button label="Success" style="font-size: 0.9rem" class="p-button-rounded p-button-danger mr-2 mb-2">WAITING_FOR_HUMAN</Button>
                                        </div>
                                        <div class="mb-2 mr-2"  v-if="bucket.MAN_FLAG_B !== ''"> 
                                            <Button label="Success" style="font-size: 0.9rem" class="p-button-rounded p-button-warning mr-2 mb-2">HUMAN_MANUAL_ACTIVITY</Button>
                                        </div>

                                    </div>
                                    -->
                                <br>                                        
                            </div> <!-- end of footer -->
                        </div>                        
                    </div>    
                <!-- = = =   BOX FINISH = = = = = = -->                                   
        </div> <!-- end of flex ROW -->
<!-- = = = = WHOLE ROW ENDS = = = = = =end of row -->



<!-- = = == WHOLE ROW STARTS HERE --->  <!-- VIVID PREMIUM -->
        <div class="flex flex-column md:flex-row">
                <!-- = = = = = = =  BOX STARTS HERE = = = = = = = -->                               
                    <div class="col-12 lg:col-4"  >                            
                        <div class="widget-task-box widget-task-box-1" width="1.rem" >
                            <div class="task-box-header" style="background-color: #1D5AAD;" >   
                                <div class="flex flex-column md:flex-row">
                                    <div class="mb-2 mr-2">           
                                        <Badge Badge :value="A" size="large" severity="warning" class="mr-2"><span class="kpi_desc"><b>( Vivid PREMIUM )</b></span> Total Orders</Badge>                                                
                                    </div>
                                    <div class="mb-2 mr-2" >
                                        <span class="bucket_TEXT"> </span>
                                    </div>
                                </div>                                        
                            </div>

                            
                            <div class="task-box-content">
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 0 - 500:   </div>
                                    <div class="kpi_value">  {{PROD_VPREM.TOTAL_in_RANGE_0}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 500 - 1000:   </div>
                                    <div class="kpi_value">  {{PROD_VPREM.TOTAL_in_RANGE_500}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 1000 - 1500:   </div>
                                    <div class="kpi_value">  {{PROD_VPREM.TOTAL_in_RANGE_1000}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 1500 - 2000:   </div>
                                    <div class="kpi_value">  {{PROD_VPREM.TOTAL_in_RANGE_1500}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 2000+ plus:   </div>
                                    <div class="kpi_value">  {{PROD_VPREM.TOTAL_in_RANGE_2000}}</div>
                                </div>

                            </div>
                            <div class="task-box-footer">
                                <!--
                                    <div class="flex flex-column md:flex-col">
                                        <div class="mb-2 mr-2" v-if="bucket.MAN_FLAG_A !== ''">
                                            <Button label="Success" style="font-size: 0.9rem" class="p-button-rounded p-button-danger mr-2 mb-2">WAITING_FOR_HUMAN</Button>
                                        </div>
                                        <div class="mb-2 mr-2"  v-if="bucket.MAN_FLAG_B !== ''"> 
                                            <Button label="Success" style="font-size: 0.9rem" class="p-button-rounded p-button-warning mr-2 mb-2">HUMAN_MANUAL_ACTIVITY</Button>
                                        </div>

                                    </div>
                                    -->
                                <br>                                        
                            </div> <!-- end of footer -->
                        </div>                        
                    </div>    
                <!-- = = =   BOX FINISH = = = = = = -->
                <!-- = = = = = = =  BOX STARTS HERE = = = = = = = -->                               
                    <div class="col-12 lg:col-4"  >                            
                        <div class="widget-task-box widget-task-box-1" width="1.rem" >
                            <div class="task-box-header" style="background-color: #1D5AAD;" >   
                                <div class="flex flex-column md:flex-row">
                                    <div class="mb-2 mr-2">           
                                        <Badge Badge :value="A" size="large" severity="warning" class="mr-2"><span class="kpi_desc"><b>( Vivid PREMIUM )</b></span> AVG Time Spent (hrs)</Badge>                                                
                                    </div>
                                    <div class="mb-2 mr-2" >
                                        <span class="bucket_TEXT"> </span>
                                    </div>
                                </div>                                        
                            </div>
                            <div class="task-box-content">
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 0 - 500:   </div>
                                    <div class="kpi_value">  {{PROD_VPREM.AVG_TIME_SPENT_WAITING_0}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 500 - 1000:   </div>
                                    <div class="kpi_value">  {{PROD_VPREM.AVG_TIME_SPENT_WAITING_500}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 1000 - 1500:   </div>
                                    <div class="kpi_value">  {{PROD_VPREM.AVG_TIME_SPENT_WAITING_1000}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 1500 - 2000:   </div>
                                    <div class="kpi_value">  {{PROD_VPREM.AVG_TIME_SPENT_WAITING_1500}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 2000+ plus:   </div>
                                    <div class="kpi_value">  {{PROD_VPREM.AVG_TIME_SPENT_WAITING_2000}}</div>
                                </div>

                            </div>
                            <div class="task-box-footer">
                                <!--
                                    <div class="flex flex-column md:flex-col">
                                        <div class="mb-2 mr-2" v-if="bucket.MAN_FLAG_A !== ''">
                                            <Button label="Success" style="font-size: 0.9rem" class="p-button-rounded p-button-danger mr-2 mb-2">WAITING_FOR_HUMAN</Button>
                                        </div>
                                        <div class="mb-2 mr-2"  v-if="bucket.MAN_FLAG_B !== ''"> 
                                            <Button label="Success" style="font-size: 0.9rem" class="p-button-rounded p-button-warning mr-2 mb-2">HUMAN_MANUAL_ACTIVITY</Button>
                                        </div>

                                    </div>
                                    -->
                                <br>                                        
                            </div> <!-- end of footer -->
                        </div>                        
                    </div>    
                <!-- = = =   BOX FINISH = = = = = = -->
                <!-- = = = = = = =  BOX STARTS HERE = = = = = = = -->                               
                    <div class="col-12 lg:col-4"  >                            
                        <div class="widget-task-box widget-task-box-1" width="1.rem" >
                            <div class="task-box-header" style="background-color: #1D5AAD;" >   
                                <div class="flex flex-column md:flex-row">
                                    <div class="mb-2 mr-2">           
                                        <Badge Badge :value="A" size="large" severity="warning" class="mr-2"><span class="kpi_desc"><b>( Vivid PREMIUM )</b></span> 90th Percentile (SQKM)</Badge>                                                
                                    </div>
                                    <div class="mb-2 mr-2" >
                                        <span class="bucket_TEXT"> </span>
                                    </div>
                                </div>                                        
                            </div>
                            <div class="task-box-content">
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 0 - 500:   </div>
                                    <div class="kpi_value">  {{PROD_VPREM.SQKM_90th_RANGE_0}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 500 - 1000:   </div>
                                    <div class="kpi_value">  {{PROD_VPREM.SQKM_90th_RANGE_500}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 1000 - 1500:   </div>
                                    <div class="kpi_value">  {{PROD_VPREM.SQKM_90th_RANGE_1000}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 1500 - 2000:   </div>
                                    <div class="kpi_value">  {{PROD_VPREM.SQKM_90th_RANGE_1500}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 2000+ plus:   </div>
                                    <div class="kpi_value">  {{PROD_VPREM.SQKM_90th_RANGE_2000}}</div>
                                </div>

                            </div>
                            <div class="task-box-footer">
                                <!--
                                    <div class="flex flex-column md:flex-col">
                                        <div class="mb-2 mr-2" v-if="bucket.MAN_FLAG_A !== ''">
                                            <Button label="Success" style="font-size: 0.9rem" class="p-button-rounded p-button-danger mr-2 mb-2">WAITING_FOR_HUMAN</Button>
                                        </div>
                                        <div class="mb-2 mr-2"  v-if="bucket.MAN_FLAG_B !== ''"> 
                                            <Button label="Success" style="font-size: 0.9rem" class="p-button-rounded p-button-warning mr-2 mb-2">HUMAN_MANUAL_ACTIVITY</Button>
                                        </div>

                                    </div>
                                    -->
                                <br>                                        
                            </div> <!-- end of footer -->
                        </div>                        
                    </div>    
                <!-- = = =   BOX FINISH = = = = = = -->                                   
        </div> <!-- end of flex ROW -->
<!-- = = = = WHOLE ROW ENDS = = = = = =end of row -->


<h4>CLIENTS:</h4>
<!-- = = == WHOLE ROW STARTS HERE --->  <!-- CLIENT: EGIS-->
        <div class="flex flex-column md:flex-row">
                <!-- = = = = = = =  BOX STARTS HERE = = = = = = = -->                               
                    <div class="col-12 lg:col-4"  >                            
                        <div class="widget-task-box widget-task-box-1" width="1.rem" >
                            <div class="task-box-header" style="background-color: #1D5AAD;" >   
                                <div class="flex flex-column md:flex-row">
                                    <div class="mb-2 mr-2">           
                                        <Badge Badge :value="A" size="large" severity="warning" class="mr-2"><span class="kpi_desc"><b>( eGIS )</b></span> Total Orders</Badge>                                                
                                    </div>
                                    <div class="mb-2 mr-2" >
                                        <span class="bucket_TEXT"> </span>
                                    </div>
                                </div>                                        
                            </div>
                            <div class="task-box-content">
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 0 - 500:   </div>
                                    <div class="kpi_value">  {{TOTAL_in_RANGE_0}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 500 - 1000:   </div>
                                    <div class="kpi_value">  {{TOTAL_in_RANGE_0}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 1000 - 1500:   </div>
                                    <div class="kpi_value">  {{TOTAL_in_RANGE_0}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 1500 - 2000:   </div>
                                    <div class="kpi_value">  {{TOTAL_in_RANGE_0}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 2000+ plus:   </div>
                                    <div class="kpi_value">  {{TOTAL_in_RANGE_0}}</div>
                                </div>

                            </div>
                            <div class="task-box-footer">
                                <!--
                                    <div class="flex flex-column md:flex-col">
                                        <div class="mb-2 mr-2" v-if="bucket.MAN_FLAG_A !== ''">
                                            <Button label="Success" style="font-size: 0.9rem" class="p-button-rounded p-button-danger mr-2 mb-2">WAITING_FOR_HUMAN</Button>
                                        </div>
                                        <div class="mb-2 mr-2"  v-if="bucket.MAN_FLAG_B !== ''"> 
                                            <Button label="Success" style="font-size: 0.9rem" class="p-button-rounded p-button-warning mr-2 mb-2">HUMAN_MANUAL_ACTIVITY</Button>
                                        </div>

                                    </div>
                                    -->
                                <br>                                        
                            </div> <!-- end of footer -->
                        </div>                        
                    </div>    
                <!-- = = =   BOX FINISH = = = = = = -->
                <!-- = = = = = = =  BOX STARTS HERE = = = = = = = -->                               
                    <div class="col-12 lg:col-4"  >                            
                        <div class="widget-task-box widget-task-box-1" width="1.rem" >
                            <div class="task-box-header" style="background-color: #1D5AAD;" >   
                                <div class="flex flex-column md:flex-row">
                                    <div class="mb-2 mr-2">           
                                        <Badge Badge :value="A" size="large" severity="warning" class="mr-2"><span class="kpi_desc"><b>( eGIS )</b></span> AVG Time Spent (hrs)</Badge>                                                
                                    </div>
                                    <div class="mb-2 mr-2" >
                                        <span class="bucket_TEXT"> </span>
                                    </div>
                                </div>                                        
                            </div>
                            <div class="task-box-content">
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 0 - 500:   </div>
                                    <div class="kpi_value">  {{TOTAL_in_RANGE_0}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 500 - 1000:   </div>
                                    <div class="kpi_value">  {{TOTAL_in_RANGE_0}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 1000 - 1500:   </div>
                                    <div class="kpi_value">  {{TOTAL_in_RANGE_0}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 1500 - 2000:   </div>
                                    <div class="kpi_value">  {{TOTAL_in_RANGE_0}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 2000+ plus:   </div>
                                    <div class="kpi_value">  {{TOTAL_in_RANGE_0}}</div>
                                </div>

                            </div>
                            <div class="task-box-footer">
                                <!--
                                    <div class="flex flex-column md:flex-col">
                                        <div class="mb-2 mr-2" v-if="bucket.MAN_FLAG_A !== ''">
                                            <Button label="Success" style="font-size: 0.9rem" class="p-button-rounded p-button-danger mr-2 mb-2">WAITING_FOR_HUMAN</Button>
                                        </div>
                                        <div class="mb-2 mr-2"  v-if="bucket.MAN_FLAG_B !== ''"> 
                                            <Button label="Success" style="font-size: 0.9rem" class="p-button-rounded p-button-warning mr-2 mb-2">HUMAN_MANUAL_ACTIVITY</Button>
                                        </div>

                                    </div>
                                    -->
                                <br>                                        
                            </div> <!-- end of footer -->
                        </div>                        
                    </div>    
                <!-- = = =   BOX FINISH = = = = = = -->
                <!-- = = = = = = =  BOX STARTS HERE = = = = = = = -->                               
                    <div class="col-12 lg:col-4"  >                            
                        <div class="widget-task-box widget-task-box-1" width="1.rem" >
                            <div class="task-box-header" style="background-color: #1D5AAD;" >   
                                <div class="flex flex-column md:flex-row">
                                    <div class="mb-2 mr-2">           
                                        <Badge Badge :value="A" size="large" severity="warning" class="mr-2"><span class="kpi_desc"><b>( eGIS )</b></span> 90th Percentile (SQKM)</Badge>                                                
                                    </div>
                                    <div class="mb-2 mr-2" >
                                        <span class="bucket_TEXT"> </span>
                                    </div>
                                </div>                                        
                            </div>
                            <div class="task-box-content">
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 0 - 500:   </div>
                                    <div class="kpi_value">  {{TOTAL_in_RANGE_0}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 500 - 1000:   </div>
                                    <div class="kpi_value">  {{TOTAL_in_RANGE_0}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 1000 - 1500:   </div>
                                    <div class="kpi_value">  {{TOTAL_in_RANGE_0}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 1500 - 2000:   </div>
                                    <div class="kpi_value">  {{TOTAL_in_RANGE_0}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 2000+ plus:   </div>
                                    <div class="kpi_value">  {{TOTAL_in_RANGE_0}}</div>
                                </div>

                            </div>
                            <div class="task-box-footer">
                                <!--
                                    <div class="flex flex-column md:flex-col">
                                        <div class="mb-2 mr-2" v-if="bucket.MAN_FLAG_A !== ''">
                                            <Button label="Success" style="font-size: 0.9rem" class="p-button-rounded p-button-danger mr-2 mb-2">WAITING_FOR_HUMAN</Button>
                                        </div>
                                        <div class="mb-2 mr-2"  v-if="bucket.MAN_FLAG_B !== ''"> 
                                            <Button label="Success" style="font-size: 0.9rem" class="p-button-rounded p-button-warning mr-2 mb-2">HUMAN_MANUAL_ACTIVITY</Button>
                                        </div>

                                    </div>
                                    -->
                                <br>                                        
                            </div> <!-- end of footer -->
                        </div>                        
                    </div>    
                <!-- = = =   BOX FINISH = = = = = = -->                                   
        </div> <!-- end of flex ROW -->
<!-- = = = = WHOLE ROW ENDS = = = = = =end of row -->




<!-- = = == WHOLE ROW STARTS HERE --->  <!-- CLIENT GLOBAL PRODUCTION-->
        <div class="flex flex-column md:flex-row">
                <!-- = = = = = = =  BOX STARTS HERE = = = = = = = -->                               
                    <div class="col-12 lg:col-4"  >                            
                        <div class="widget-task-box widget-task-box-1" width="1.rem" >
                            <div class="task-box-header" style="background-color: #1D5AAD;" >   
                                <div class="flex flex-column md:flex-row">
                                    <div class="mb-2 mr-2">           
                                        <Badge Badge :value="A" size="large" severity="warning" class="mr-2"><span class="kpi_desc"><b>( GlobalProduction )</b></span> Total Orders</Badge>                                                
                                    </div>
                                    <div class="mb-2 mr-2" >
                                        <span class="bucket_TEXT"> </span>
                                    </div>
                                </div>                                        
                            </div>
                            <div class="task-box-content">
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 0 - 500:   </div>
                                    <div class="kpi_value">  {{TOTAL_in_RANGE_0}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 500 - 1000:   </div>
                                    <div class="kpi_value">  {{TOTAL_in_RANGE_0}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 1000 - 1500:   </div>
                                    <div class="kpi_value">  {{TOTAL_in_RANGE_0}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 1500 - 2000:   </div>
                                    <div class="kpi_value">  {{TOTAL_in_RANGE_0}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 2000+ plus:   </div>
                                    <div class="kpi_value">  {{TOTAL_in_RANGE_0}}</div>
                                </div>

                            </div>
                            <div class="task-box-footer">
                                <!--
                                    <div class="flex flex-column md:flex-col">
                                        <div class="mb-2 mr-2" v-if="bucket.MAN_FLAG_A !== ''">
                                            <Button label="Success" style="font-size: 0.9rem" class="p-button-rounded p-button-danger mr-2 mb-2">WAITING_FOR_HUMAN</Button>
                                        </div>
                                        <div class="mb-2 mr-2"  v-if="bucket.MAN_FLAG_B !== ''"> 
                                            <Button label="Success" style="font-size: 0.9rem" class="p-button-rounded p-button-warning mr-2 mb-2">HUMAN_MANUAL_ACTIVITY</Button>
                                        </div>

                                    </div>
                                    -->
                                <br>                                        
                            </div> <!-- end of footer -->
                        </div>                        
                    </div>    
                <!-- = = =   BOX FINISH = = = = = = -->
                <!-- = = = = = = =  BOX STARTS HERE = = = = = = = -->                               
                    <div class="col-12 lg:col-4"  >                            
                        <div class="widget-task-box widget-task-box-1" width="1.rem" >
                            <div class="task-box-header" style="background-color: #1D5AAD;" >   
                                <div class="flex flex-column md:flex-row">
                                    <div class="mb-2 mr-2">           
                                        <Badge Badge :value="A" size="large" severity="warning" class="mr-2"><span class="kpi_desc"><b>( GlobalProduction )</b></span> AVG Time Spent (hrs)</Badge>                                                
                                    </div>
                                    <div class="mb-2 mr-2" >
                                        <span class="bucket_TEXT"> </span>
                                    </div>
                                </div>                                        
                            </div>
                            <div class="task-box-content">
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 0 - 500:   </div>
                                    <div class="kpi_value">  {{TOTAL_in_RANGE_0}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 500 - 1000:   </div>
                                    <div class="kpi_value">  {{TOTAL_in_RANGE_0}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 1000 - 1500:   </div>
                                    <div class="kpi_value">  {{TOTAL_in_RANGE_0}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 1500 - 2000:   </div>
                                    <div class="kpi_value">  {{TOTAL_in_RANGE_0}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 2000+ plus:   </div>
                                    <div class="kpi_value">  {{TOTAL_in_RANGE_0}}</div>
                                </div>

                            </div>
                            <div class="task-box-footer">
                                <!--
                                    <div class="flex flex-column md:flex-col">
                                        <div class="mb-2 mr-2" v-if="bucket.MAN_FLAG_A !== ''">
                                            <Button label="Success" style="font-size: 0.9rem" class="p-button-rounded p-button-danger mr-2 mb-2">WAITING_FOR_HUMAN</Button>
                                        </div>
                                        <div class="mb-2 mr-2"  v-if="bucket.MAN_FLAG_B !== ''"> 
                                            <Button label="Success" style="font-size: 0.9rem" class="p-button-rounded p-button-warning mr-2 mb-2">HUMAN_MANUAL_ACTIVITY</Button>
                                        </div>

                                    </div>
                                    -->
                                <br>                                        
                            </div> <!-- end of footer -->
                        </div>                        
                    </div>    
                <!-- = = =   BOX FINISH = = = = = = -->
                <!-- = = = = = = =  BOX STARTS HERE = = = = = = = -->                               
                    <div class="col-12 lg:col-4"  >                            
                        <div class="widget-task-box widget-task-box-1" width="1.rem" >
                            <div class="task-box-header" style="background-color: #1D5AAD;" >   
                                <div class="flex flex-column md:flex-row">
                                    <div class="mb-2 mr-2">           
                                        <Badge Badge :value="A" size="large" severity="warning" class="mr-2"><span class="kpi_desc"><b>( GlobalProduction )</b></span> 90th Percentile (SQKM)</Badge>                                                
                                    </div>
                                    <div class="mb-2 mr-2" >
                                        <span class="bucket_TEXT"> </span>
                                    </div>
                                </div>                                        
                            </div>
                            <div class="task-box-content">
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 0 - 500:   </div>
                                    <div class="kpi_value">  {{TOTAL_in_RANGE_0}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 500 - 1000:   </div>
                                    <div class="kpi_value">  {{TOTAL_in_RANGE_0}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 1000 - 1500:   </div>
                                    <div class="kpi_value">  {{TOTAL_in_RANGE_0}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 1500 - 2000:   </div>
                                    <div class="kpi_value">  {{TOTAL_in_RANGE_0}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 2000+ plus:   </div>
                                    <div class="kpi_value">  {{TOTAL_in_RANGE_0}}</div>
                                </div>

                            </div>
                            <div class="task-box-footer">
                                <!--
                                    <div class="flex flex-column md:flex-col">
                                        <div class="mb-2 mr-2" v-if="bucket.MAN_FLAG_A !== ''">
                                            <Button label="Success" style="font-size: 0.9rem" class="p-button-rounded p-button-danger mr-2 mb-2">WAITING_FOR_HUMAN</Button>
                                        </div>
                                        <div class="mb-2 mr-2"  v-if="bucket.MAN_FLAG_B !== ''"> 
                                            <Button label="Success" style="font-size: 0.9rem" class="p-button-rounded p-button-warning mr-2 mb-2">HUMAN_MANUAL_ACTIVITY</Button>
                                        </div>

                                    </div>
                                    -->
                                <br>                                        
                            </div> <!-- end of footer -->
                        </div>                        
                    </div>    
                <!-- = = =   BOX FINISH = = = = = = -->                                   
        </div> <!-- end of flex ROW -->
<!-- = = = = WHOLE ROW ENDS = = = = = =end of row -->



<!-- = = == WHOLE ROW STARTS HERE --->  <!-- CLIENT: APSPROD-->
        <div class="flex flex-column md:flex-row">
                <!-- = = = = = = =  BOX STARTS HERE = = = = = = = -->                               
                    <div class="col-12 lg:col-4"  >                            
                        <div class="widget-task-box widget-task-box-1" width="1.rem" >
                            <div class="task-box-header" style="background-color: #1D5AAD;" >   
                                <div class="flex flex-column md:flex-row">
                                    <div class="mb-2 mr-2">           
                                        <Badge Badge :value="A" size="large" severity="warning" class="mr-2"><span class="kpi_desc"><b>( APSDevOps )</b></span> Total Orders</Badge>                                                
                                    </div>
                                    <div class="mb-2 mr-2" >
                                        <span class="bucket_TEXT"> </span>
                                    </div>
                                </div>                                        
                            </div>
                            <div class="task-box-content">
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 0 - 500:   </div>
                                    <div class="kpi_value">  {{TOTAL_in_RANGE_0}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 500 - 1000:   </div>
                                    <div class="kpi_value">  {{TOTAL_in_RANGE_0}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 1000 - 1500:   </div>
                                    <div class="kpi_value">  {{TOTAL_in_RANGE_0}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 1500 - 2000:   </div>
                                    <div class="kpi_value">  {{TOTAL_in_RANGE_0}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 2000+ plus:   </div>
                                    <div class="kpi_value">  {{TOTAL_in_RANGE_0}}</div>
                                </div>

                            </div>
                            <div class="task-box-footer">
                                <!--
                                    <div class="flex flex-column md:flex-col">
                                        <div class="mb-2 mr-2" v-if="bucket.MAN_FLAG_A !== ''">
                                            <Button label="Success" style="font-size: 0.9rem" class="p-button-rounded p-button-danger mr-2 mb-2">WAITING_FOR_HUMAN</Button>
                                        </div>
                                        <div class="mb-2 mr-2"  v-if="bucket.MAN_FLAG_B !== ''"> 
                                            <Button label="Success" style="font-size: 0.9rem" class="p-button-rounded p-button-warning mr-2 mb-2">HUMAN_MANUAL_ACTIVITY</Button>
                                        </div>

                                    </div>
                                    -->
                                <br>                                        
                            </div> <!-- end of footer -->
                        </div>                        
                    </div>    
                <!-- = = =   BOX FINISH = = = = = = -->
                <!-- = = = = = = =  BOX STARTS HERE = = = = = = = -->                               
                    <div class="col-12 lg:col-4"  >                            
                        <div class="widget-task-box widget-task-box-1" width="1.rem" >
                            <div class="task-box-header" style="background-color: #1D5AAD;" >   
                                <div class="flex flex-column md:flex-row">
                                    <div class="mb-2 mr-2">           
                                        <Badge Badge :value="A" size="large" severity="warning" class="mr-2"><span class="kpi_desc"><b>( APSDevOps )</b></span> AVG Time Spent (hrs)</Badge>                                                
                                    </div>
                                    <div class="mb-2 mr-2" >
                                        <span class="bucket_TEXT"> </span>
                                    </div>
                                </div>                                        
                            </div>
                            <div class="task-box-content">
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 0 - 500:   </div>
                                    <div class="kpi_value">  {{TOTAL_in_RANGE_0}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 500 - 1000:   </div>
                                    <div class="kpi_value">  {{TOTAL_in_RANGE_0}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 1000 - 1500:   </div>
                                    <div class="kpi_value">  {{TOTAL_in_RANGE_0}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 1500 - 2000:   </div>
                                    <div class="kpi_value">  {{TOTAL_in_RANGE_0}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 2000+ plus:   </div>
                                    <div class="kpi_value">  {{TOTAL_in_RANGE_0}}</div>
                                </div>

                            </div>
                            <div class="task-box-footer">
                                <!--
                                    <div class="flex flex-column md:flex-col">
                                        <div class="mb-2 mr-2" v-if="bucket.MAN_FLAG_A !== ''">
                                            <Button label="Success" style="font-size: 0.9rem" class="p-button-rounded p-button-danger mr-2 mb-2">WAITING_FOR_HUMAN</Button>
                                        </div>
                                        <div class="mb-2 mr-2"  v-if="bucket.MAN_FLAG_B !== ''"> 
                                            <Button label="Success" style="font-size: 0.9rem" class="p-button-rounded p-button-warning mr-2 mb-2">HUMAN_MANUAL_ACTIVITY</Button>
                                        </div>

                                    </div>
                                    -->
                                <br>                                        
                            </div> <!-- end of footer -->
                        </div>                        
                    </div>    
                <!-- = = =   BOX FINISH = = = = = = -->
                <!-- = = = = = = =  BOX STARTS HERE = = = = = = = -->                               
                    <div class="col-12 lg:col-4"  >                            
                        <div class="widget-task-box widget-task-box-1" width="1.rem" >
                            <div class="task-box-header" style="background-color: #1D5AAD;" >   
                                <div class="flex flex-column md:flex-row">
                                    <div class="mb-2 mr-2">           
                                        <Badge Badge :value="A" size="large" severity="warning" class="mr-2"><span class="kpi_desc"><b>( APSDevOps
                                         )</b></span> 90th Percentile (SQKM)</Badge>                                                
                                    </div>
                                    <div class="mb-2 mr-2" >
                                        <span class="bucket_TEXT"> </span>
                                    </div>
                                </div>                                        
                            </div>
                            <div class="task-box-content">
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 0 - 500:   </div>
                                    <div class="kpi_value">  {{TOTAL_in_RANGE_0}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 500 - 1000:   </div>
                                    <div class="kpi_value">  {{TOTAL_in_RANGE_0}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 1000 - 1500:   </div>
                                    <div class="kpi_value">  {{TOTAL_in_RANGE_0}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 1500 - 2000:   </div>
                                    <div class="kpi_value">  {{TOTAL_in_RANGE_0}}</div>
                                </div>
                                <div class="flex flex-column md:flex-row">
                                    <div class="range_text" :style="{width:'150px', align: right}"> SQKM 2000+ plus:   </div>
                                    <div class="kpi_value">  {{TOTAL_in_RANGE_0}}</div>
                                </div>

                            </div>
                            <div class="task-box-footer">
                                <!--
                                    <div class="flex flex-column md:flex-col">
                                        <div class="mb-2 mr-2" v-if="bucket.MAN_FLAG_A !== ''">
                                            <Button label="Success" style="font-size: 0.9rem" class="p-button-rounded p-button-danger mr-2 mb-2">WAITING_FOR_HUMAN</Button>
                                        </div>
                                        <div class="mb-2 mr-2"  v-if="bucket.MAN_FLAG_B !== ''"> 
                                            <Button label="Success" style="font-size: 0.9rem" class="p-button-rounded p-button-warning mr-2 mb-2">HUMAN_MANUAL_ACTIVITY</Button>
                                        </div>

                                    </div>
                                    -->
                                <br>                                        
                            </div> <!-- end of footer -->
                        </div>                        
                    </div>    
                <!-- = = =   BOX FINISH = = = = = = -->                                   
        </div> <!-- end of flex ROW -->
<!-- = = = = WHOLE ROW ENDS = = = = = =end of row -->
</div> <!-- end of card -->
            

            
<!-- END OF PAGE CONTENT -->
</div></div></template>



<!-- 
= = = =
= = = = 2. Import Core JavaScript
= = = =
-->
<script src="./MAXMET_KPI.js"></script>



<!-- 
= = = =
= = = = 3. Import Core CSS
= = = =
-->
<style scoped lang="scss">
	@import './MAXMET_KPI.css';
</style>
