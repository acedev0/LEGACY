<template>
	<div class="grid dashboard">
		<div class="col-12 lg:col-4">
			<div class="task-box task-box-1">
				<div class="task-box-header">
					<i class="pi pi-refresh"></i>
				</div>
				<div class="task-box-content">
					<h3>TERRY TEST for DASH - Client Meeting</h3>
					<p>Waiting brief from the client</p>
				</div>
				<div class="task-box-footer">
					<span class="task-status">WAITING</span>
					<img src="layout/images/avatar1.png" alt="avatar1"/>
					<img src="layout/images/avatar2.png" alt="avatar2"/>
					<img src="layout/images/avatar3.png" alt="avatar3"/>
				</div>
			</div>
		</div>
		<div class="col-12 lg:col-4">
			<div class="task-box task-box-2">
				<div class="task-box-header">
					<i class="pi pi-refresh"></i>
				</div>
				<div class="task-box-content">
					<h3>Sale Reports</h3>
					<p>Annual reports per branch</p>
				</div>
				<div class="task-box-footer">
					<span class="task-status">IN PROGRESS</span>
					<img src="layout/images/avatar2.png" alt="avatar2"/>
					<img src="layout/images/avatar3.png" alt="avatar3"/>
					<img src="layout/images/avatar4.png" alt="avatar4"/>
				</div>
			</div>
		</div>
		<div class="col-12 lg:col-4">
			<div class="task-box task-box-3">
				<div class="task-box-header">
					<i class="pi pi-refresh"></i>
				</div>
				<div class="task-box-content">
					<h3>Marketing Meeting</h3>
					<p>Marketing meeting to review sales.</p>
				</div>
				<div class="task-box-footer">
					<span class="task-status">ON HOLD</span>
					<img src="layout/images/avatar1.png" alt="avatar1"/>
					<img src="layout/images/avatar2.png" alt="avatar2"/>
					<img src="layout/images/avatar3.png" alt="avatar3"/>
				</div>
			</div>
		</div>

		<div class="col-12 md:col-3">
			<div class="overview-box overview-box-1">
				<div class="overview-box-header"></div>
				<div class="overview-box-content">
					<div class="overview-box-icon"><i class="pi pi-envelope"></i></div>
					<div class="overview-box-title">Messages</div>
					<div class="overview-box-count">152</div>
				</div>
			</div>
		</div>
		<div class="col-12 md:col-3">
			<div class="overview-box overview-box-2">
				<div class="overview-box-header"></div>
				<div class="overview-box-content">
					<div class="overview-box-icon"><i class="pi pi-map-marker"></i></div>
					<div class="overview-box-title">Check-Ins</div>
					<div class="overview-box-count">532</div>
				</div>
			</div>
		</div>
		<div class="col-12 md:col-3">
			<div class="overview-box overview-box-3">
				<div class="overview-box-header"></div>
				<div class="overview-box-content">
					<div class="overview-box-icon"><i class="pi pi-file"></i></div>
					<div class="overview-box-title">Files Sycned</div>
					<div class="overview-box-count">28</div>
				</div>
			</div>
		</div>
		<div class="col-12 md:col-3">
			<div class="overview-box overview-box-4">
				<div class="overview-box-header"></div>
				<div class="overview-box-content">
					<div class="overview-box-icon"><i class="pi pi-users"></i></div>
					<div class="overview-box-title">Users Online</div>
					<div class="overview-box-count">256</div>
				</div>
			</div>
		</div>

        <div class="col-12 lg:col-8">
            <Panel header="Sales Graph" class="mb-5">
                <Chart type="line" :data="chartData" :options="chartOptions"/>
            </Panel>

            <div class="card">
                <DataTable :value="products" :rows="5" style="margin-bottom: 20px" :paginator="true" responsiveLayout="scroll">
                    <Column>
                        <template #header>
                            Logo
                        </template>
                        <template #body="slotProps">
                            <span class="p-column-title">Image</span>
                            <img :src="'demo/images/product/' + slotProps.data.image" :alt="slotProps.data.image" width="50" />
                        </template>
                    </Column>
                    <Column field="name" header="Name" :sortable="true">
                        <template #body="slotProps">
                            <span class="p-column-title">Name</span>
                            {{slotProps.data.name}}
                        </template>
                    </Column>
                    <Column field="category" header="Category" :sortable="true">
                        <template #body="slotProps">
                            <span class="p-column-title">Category</span>
                            {{slotProps.data.category}}
                        </template>
                    </Column>
                    <Column field="price" header="Price" :sortable="true">
                        <template #body="slotProps">
                            <span class="p-column-title">Price</span>
                            {{formatCurrency(slotProps.data.price)}}
                        </template>
                    </Column>
                    <Column>
                        <template #header>
                            View
                        </template>
                        <template #body>
                            <Button icon="pi pi-search" type="button" class="p-button-success mr-2 mb-1"></Button>
                            <Button icon="pi pi-times" type="button" class="p-button-danger mb-1"></Button>
                        </template>
                    </Column>
                </DataTable>
            </div>
        </div>

		<div class="col-12 lg:col-4">
            <div class="messages mb-5">
                <Panel header="Messages">
                    <ul>
                        <li>
                            <div class="flex justify-content-between align-items-center">
                                <div style="flex-grow: 1">
                                    <img src="layout/images/avatar1.png" width="45" alt="avatar1" />
                                    <div>
                                        <span class="name">Joshua Williams</span>
                                        <span class="message">Sales reports attached.</span>
                                    </div>
                                </div>
                                <div class="flex">
                                    <Button icon="pi pi-times" title="Reply" class="remove-btn"></Button>
                                    <Button icon="pi pi-comment" title="Reply" class="message-btn p-button-secondary"></Button>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="flex justify-content-between align-items-center">
                                <div style="flex-grow: 1">
                                    <img src="layout/images/avatar2.png" width="45" alt="avatar2" />
                                    <div>
                                        <span class="name">Emily Watson</span>
                                        <span class="message">Meeting at 2pm tomorrow.</span>
                                    </div>
                                </div>
                                <div class="flex">
                                    <Button icon="pi pi-times" title="Reply" class="remove-btn"></Button>
                                    <Button icon="pi pi-comment" title="Reply" class="message-btn p-button-secondary"></Button>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="flex justify-content-between align-items-center">
                                <div style="flex-grow: 1">
                                    <img src="layout/images/avatar3.png" width="45" alt="avatar3" />
                                    <div>
                                        <span class="name">James White</span>
                                        <span class="message">Status update required.</span>
                                    </div>
                                </div>
                                <div class="flex">
                                    <Button icon="pi pi-times" title="Reply" class="remove-btn"></Button>
                                    <Button icon="pi pi-comment" title="Reply" class="message-btn p-button-secondary"></Button>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="flex justify-content-between align-items-center">
                                <div style="flex-grow: 1">
                                    <img src="layout/images/avatar4.png" width="45" alt="avatar4" />
                                    <div>
                                        <span class="name">David Hughes</span>
                                        <span class="message">Exchange rates estimates.</span>
                                    </div>
                                </div>
                                <div class="flex">
                                    <Button icon="pi pi-times" title="Reply" class="remove-btn"></Button>
                                    <Button icon="pi pi-comment" title="Reply" class="message-btn p-button-secondary"></Button>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="flex justify-content-between align-items-center">
                                <div style="flex-grow: 1">
                                    <img src="demo/images/avatar/ivanmagalhaes.png" width="45">
                                    <div class="flex flex-column">
                                        <span class="name">Ivan Magalhaes</span>
                                        <span class="message">Meeting at 2pm tomorrow.</span>
                                    </div>
                                </div>
                                <div class="flex">
                                    <Button icon="pi pi-times" title="Reply" class="remove-btn"></Button>
                                    <Button icon="pi pi-comment" title="Reply" class="message-btn p-button-secondary"></Button>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="flex justify-content-between align-items-center">
                                <div style="flex-grow: 1">
                                    <img src="demo/images/avatar/amyelsner.png" width="45">
                                    <div class="flex flex-column">
                                        <span class="name">Amy Elsner</span>
                                        <span class="message">Sales reports attached.</span>
                                    </div>
                                </div>
                                <div class="flex">
                                    <Button icon="pi pi-times" title="Reply" class="remove-btn"></Button>
                                    <Button icon="pi pi-comment" title="Reply" class="message-btn p-button-secondary"></Button>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="flex justify-content-between align-items-center">
                                <div style="flex-grow: 1">
                                    <img src="demo/images/avatar/annafali.png" width="45">
                                    <div class="flex flex-column">
                                        <span class="name">Anna Fali</span>
                                        <span class="message">Meeting at 2pm tomorrow.</span>
                                    </div>
                                </div>
                                <div class="flex">
                                    <Button icon="pi pi-times" title="Reply" class="remove-btn"></Button>
                                    <Button icon="pi pi-comment" title="Reply" class="message-btn p-button-secondary"></Button>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="flex justify-content-between align-items-center">
                                <div style="flex-grow: 1">
                                    <img src="demo/images/avatar/bernardodominic.png" width="45">
                                    <div class="flex flex-column">
                                        <span class="name">Bernardo Dominic</span>
                                        <span class="message">Status update required.</span>
                                    </div>
                                </div>
                                <div class="flex">
                                    <Button icon="pi pi-times" title="Reply" class="remove-btn"></Button>
                                    <Button icon="pi pi-comment" title="Reply" class="message-btn p-button-secondary"></Button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </Panel>
            </div>

            <div class="user-card card">
                <div class="user-card-header">
                    <img src="layout/images/dashboard/usercard.png" alt="serenity-layout" width="100"/>
                </div>
                <div class="user-card-content">
                    <img src="layout/images/avatar.png" alt="serenity-layout"/>
                    <!-- <Button icon="pi pi-cog" class="p-button-secondary"></Button> -->

                    <div class="user-card-name">
                        <span>Wendy Lorina</span>
                    </div>

                    <div class="user-detail">
                        <ul>
                            <li class="clearfix">
                                <i class="pi pi-list"></i>
                                <span class="project-title">Tasks</span>
                                <span class="project-detail">3 open</span>
                                <div class="project-progressbar">
                                    <div class="project-progressbar-value" style="width:50%"></div>
                                </div>
                            </li>
                            <li class="clearfix">
                                <i class="pi pi-dollar"></i>
                                <span class="project-title">Revenue</span>
                                <span class="project-detail">+20%</span>
                                <div class="project-progressbar">
                                    <div class="project-progressbar-value" style="width:20%"></div>
                                </div>
                            </li>
                            <li class="clearfix">
                                <i class="pi pi-money-bill"></i>
                                <span class="project-title">Payments</span>
                                <span class="project-detail">24 new</span>
                                <div class="project-progressbar">
                                    <div class="project-progressbar-value" style="width:65%"></div>
                                </div>
                            </li>
                            <li class="clearfix">
                                <i class="pi pi-briefcase"></i>
                                <span class="project-title">Clients</span>
                                <span class="project-detail">+80%</span>
                                <div class="project-progressbar">
                                    <div class="project-progressbar-value" style="width:80%"></div>
                                </div>
                            </li>
                            <li class="clearfix">
                                <i class="pi pi-chart-bar"></i>
                                <span class="project-title">Turnover</span>
                                <span class="project-detail">+40%</span>
                                <div class="project-progressbar">
                                    <div class="project-progressbar-value" style="width:40%"></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
		</div>
		<div class="col-12 lg:col-6">
			<div class="chat">
				<Panel header="Chat">
					<TabView>
						<TabPanel header="Sales Team">
							<ul class="chat-messages">
								<li class="message-from">
									<img src="layout/images/avatar2.png" alt="serenity-layout"/>
									<span>Retro occupy organic, stumptown shabby chic pour-over roof party DIY normcore.</span>
								</li>
                                <li class="message-from">
                                    <span>Tofu glossier bicycle rights banh mi direct trade austin salvia slow-carb occupy.</span>
                                </li>
								<li class="message-own">
									<img src="layout/images/avatar.png" alt="serenity-layout"/>
									<span>Actually artisan organic occupy, Wes Anderson ugh whatever pour-over gastropub selvage.</span>
								</li>
								<li class="message-from">
									<img src="layout/images/avatar2.png" alt="serenity-layout"/>
									<span>Chillwave craft beer tote bag stumptown quinoa hashtag.</span>
								</li>
								<li class="message-own">
									<img src="layout/images/avatar.png" alt="serenity-layout"/>
									<span>Dreamcatcher locavore iPhone chillwave, occupy trust fund slow-carb distillery art party narwhal.</span>
								</li>
								<li class="message-own">
									<span>Sed ut perspiciatis unde omnis iste natus.</span>
								</li>
								<li class="message-from">
									<img src="layout/images/avatar2.png" alt="serenity-layout"/>
									<span>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.</span>
								</li>
								<li class="message-own">
									<img src="layout/images/avatar.png" alt="serenity-layout"/>
									<span>At vero eos et accusamus.</span>
								</li>
							</ul>
						</TabPanel>
						<TabPanel header="Design Team">
							<ul class="chat-messages">
								<li class="message-from">
									<img src="layout/images/avatar3.png" alt="serenity-layout"/>
									<span>Cliche flannel fam mixtape.</span>
								</li>
                                <li class="message-from">
                                    <span>Dreamcatcher locavore iPhone chillwave, occupy trust fund slow-carb distillery art party narwhal.</span>
                                </li>
								<li class="message-own">
									<img src="layout/images/avatar.png" alt="serenity-layout"/>
									<span>Tofu glossier bicycle rights banh mi direct trade austin salvia slow-carb occupy.</span>
								</li>
								<li class="message-from">
									<img src="layout/images/avatar3.png" alt="serenity-layout"/>
									<span>Crucifix tote bag pork belly distillery church-key jianbing jean shorts taxidermy.</span>
								</li>
								<li class="message-own">
									<img src="layout/images/avatar.png" alt="serenity-layout"/>
									<span>Deep v hexagon street art migas butcher, keytar biodiesel bicycle rights typewriter cornhole actually next.</span>
								</li>
								<li class="message-own">
									<span>Oh. You need a little dummy text for your mockup? How quaint.</span>
								</li>
								<li class="message-from">
									<img src="layout/images/avatar3.png" alt="serenity-layout"/>
									<span>Salvia woke bushwick leggings mumblecore poke tumblr master cleanse.</span>
								</li>
								<li class="message-own">
									<img src="layout/images/avatar.png" alt="serenity-layout"/>
									<span>Skateboard ethical adaptogen, quinoa wolf poutine echo park.</span>
								</li>
							</ul>
						</TabPanel>
					</TabView>

					<div class="new-message">
						<div class="message-attachment">
							<i class="pi pi-paperclip"></i>
						</div>
						<div class="message-input">
							<input type="text" class="pl-2" placeholder="Write a message"/>
						</div>
					</div>
				</Panel>
			</div>
		</div>
		<div class="col-12 lg:col-6">
			<div class="global-sales mb-5">
				<Panel header="Global Sales by Region">
					<table>
						<thead>
						<tr>
							<th></th>
							<th></th>
							<th></th>
							<th>Total Sales</th>
							<th>Change</th>
							<th>Status</th>
						</tr>
						</thead>
						<tbody>
						<tr>
							<td>1</td>
							<td><img src="layout/images/dashboard/flag-brazil.png" alt="serenity-layout" width="45"/></td>
							<td>BRAZIL</td>
							<td>4234</td>
							<td>35%</td>
							<td><i class="pi pi-arrow-up up-arrow"></i></td>
							<td>
								<Button icon="pi pi-times" title="Reply" class="remove-btn"></Button>
								<Button icon="pi pi-comment" title="Reply" class="message-btn p-button-secondary"></Button>
							</td>
						</tr>
						<tr>
							<td>2</td>
							<td><img src="layout/images/dashboard/flag-china.png" alt="serenity-layout" width="45"/></td>
							<td>CHINA</td>
							<td>3214</td>
							<td>25%</td>
							<td><i class="pi pi-arrow-up up-arrow"></i></td>
							<td>
								<Button icon="pi pi-times" title="Reply" class="remove-btn"></Button>
								<Button icon="pi pi-comment" title="Reply" class="message-btn p-button-secondary"></Button>
							</td>
						</tr>
						<tr>
							<td>3</td>
							<td><img src="layout/images/dashboard/flag-belgium.png" alt="serenity-layout" width="45"/></td>
							<td>BELGIUM</td>
							<td>2842</td>
							<td>28%</td>
							<td><i class="pi pi-arrow-down down-arrow"></i></td>
							<td>
								<Button icon="pi pi-times" title="Reply" class="remove-btn"></Button>
								<Button icon="pi pi-comment" title="Reply" class="message-btn p-button-secondary"></Button>
							</td>
						</tr>
						<tr>
							<td>4</td>
							<td><img src="layout/images/dashboard/flag-france.png" alt="serenity-layout" width="45"/></td>
							<td>FRANCE</td>
							<td>1942</td>
							<td>15%</td>
							<td><i class="pi pi-arrow-down down-arrow"></i></td>
							<td>
								<Button icon="pi pi-times" title="Reply" class="remove-btn"></Button>
								<Button icon="pi pi-comment" title="Reply" class="message-btn p-button-secondary"></Button>
							</td>
						</tr>
						<tr>
							<td>5</td>
							<td><img src="layout/images/dashboard/flag-uk.png" alt="serenity-layout" width="45"/>
							</td>
							<td>UK</td>
							<td>1956</td>
							<td>25%</td>
							<td><i class="pi pi-arrow-up up-arrow"></i></td>
							<td>
								<Button icon="pi pi-times" title="Reply" class="remove-btn"></Button>
								<Button icon="pi pi-comment" title="Reply" class="message-btn p-button-secondary"></Button>
							</td>
						</tr>
						</tbody>
					</table>
				</Panel>
			</div>

            <div class="status-bars">
                <div class="card">
                    <ul>
                        <li>
                            <div class="status-bar status-bar-1">
                                <div class="status-bar-value" style="width:22%">22%</div>
                            </div>
                            <span>Users</span>
                            <i class="pi pi-user"></i>
                        </li>
                        <li>
                            <div class="status-bar status-bar-2">
                                <div class="status-bar-value" style="width:78%">78%</div>
                            </div>
                            <span>Confirmed</span>
                            <i class="pi pi-check-circle"></i>
                        </li>
                        <li>
                            <div class="status-bar status-bar-3">
                                <div class="status-bar-value" style="width:51%">51%</div>
                            </div>
                            <span>Defects</span>
                            <i class="pi pi-sliders-h"></i>
                        </li>
                        <li>
                            <div class="status-bar status-bar-4">
                                <div class="status-bar-value" style="width:68%">68%</div>
                            </div>
                            <span>Issues</span>
                            <i class="pi pi-exclamation-triangle"></i>
                        </li>
                        <li>
                            <div class="status-bar status-bar-5">
                                <div class="status-bar-value" style="width:80%">80%</div>
                            </div>
                            <span>Searches</span>
                            <i class="pi pi-search"></i>
                        </li>
                    </ul>
                </div>
            </div>
		</div>
	</div>
</template>

<script>
import ProductService from "../service/ProductService";

export default {
	data() {
		return {
			menuItems: [
				{label: "Save", icon: "pi pi-check"},
				{label: "Update", icon: "pi pi-refresh"},
				{label: "Delete", icon: "pi pi-trash"}
			],
			products: null,
			chartData: {
				labels: ["January", "February", "March", "April", "May", "June", "July"],
				datasets: [
					{
						label: "First Dataset",
						data: [65, 59, 80, 81, 56, 55, 40],
						fill: false,
						borderColor: "#FFC107",
						tension: .4
					},
					{
						label: "Second Dataset",
						data: [28, 48, 40, 19, 86, 27, 90],
						fill: false,
						borderColor: "#03A9F4",
						tension: .4
					},
				]
			},
            chartOptions: {
                plugins: {
                    legend: {
                        labels: {
                            color: "#A0A7B5"
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: "#A0A7B5"
                        },
                        grid: {
                            color:  "rgba(160, 167, 181, .3)",
                        }
                    },
                    y: {
                        ticks: {
                            color: "#A0A7B5"
                        },
                        grid: {
                            color:  "rgba(160, 167, 181, .3)",
                        }
                    },
                }
            }
		}
	},
	productService: null,
	created() {
		this.productService = new ProductService();
	},
	mounted() {
		this.productService.getProductsSmall().then(data => this.products = data);
	},
	methods: {
		toggle(event) {
			this.$refs.menu.toggle(event);
		},
		formatCurrency(value) {
			return value.toLocaleString("en-US", {style: "currency", currency: "USD"});
		}
	}
}
</script>
