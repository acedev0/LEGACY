<template>
    <h4>Reusable CSS widgets for your applications.</h4>
	<div class="grid">
		<div class="col-12">
            <h4>Task Boxes</h4>
            <div class="grid">
					<div class="col-12 lg:col-4">
						<div class="widget-task-box widget-task-box-1">
							<div class="task-box-header">
								<i class="pi pi-refresh"></i>
							</div>
							<div class="task-box-content">
								<h3>Client Meeting</h3>
								<p>Waiting brief from the client</p>
							</div>
							<div class="task-box-footer">
								<span class="task-status">WAITING</span>
								<img src="layout/images/avatar1.png">
								<img src="layout/images/avatar2.png">
								<img src="layout/images/avatar3.png">
							</div>
						</div>
					</div>
					<div class="col-12 lg:col-4">
						<div class="widget-task-box widget-task-box-2">
							<div class="task-box-header">
								<i class="pi pi-refresh"></i>
							</div>
							<div class="task-box-content">
								<h3>Sale Reports</h3>
								<p>Annual reports per branch</p>
							</div>
							<div class="task-box-footer">
								<span class="task-status">IN PROGRESS</span>
								<img src="layout/images/avatar2.png">
								<img src="layout/images/avatar3.png">
								<img src="layout/images/avatar4.png">
							</div>
						</div>
					</div>
					<div class="col-12 lg:col-4">
						<div class="widget-task-box widget-task-box-3">
							<div class="task-box-header">
								<i class="pi pi-refresh"></i>
							</div>
							<div class="task-box-content">
								<h3>Marketing Meeting</h3>
								<p>Marketing meeting to review sales.</p>
							</div>
							<div class="task-box-footer">
								<span class="task-status">ON HOLD</span>
								<img src="layout/images/avatar1.png">
								<img src="layout/images/avatar2.png">
								<img src="layout/images/avatar3.png">
							</div>
						</div>
					</div>
				</div>
		</div>

		<div class="col-12">
			<div class="card">
				<h4>Overview Boxes</h4>
				<div class="grid">
					<div class="col-12 md:col-3">
						<div class="widget-overview-box widget-overview-box-1">
							<div class="overview-box-header"></div>
								<div class="overview-box-content">
									<div class="overview-box-icon"><i class="pi pi-envelope"></i></div>
									<div class="overview-box-title">Messages</div>
									<div class="overview-box-count">152</div>
								</div>
							</div>
						</div>
						<div class="col-12 md:col-3">
							<div class="widget-overview-box widget-overview-box-2">
								<div class="overview-box-header"></div>
								<div class="overview-box-content">
									<div class="overview-box-icon"><i class="pi pi-map-marker"></i></div>
									<div class="overview-box-title">Check-Ins</div>
									<div class="overview-box-count">532</div>
								</div>
							</div>
						</div>
						<div class="col-12 md:col-3">
							<div class="widget-overview-box widget-overview-box-3">
								<div class="overview-box-header"></div>
								<div class="overview-box-content">
									<div class="overview-box-icon"><i class="pi pi-file"></i></div>
									<div class="overview-box-title">Files Sycned</div>
									<div class="overview-box-count">28</div>
								</div>
							</div>
						</div>
					<div class="col-12 md:col-3">
						<div class="widget-overview-box widget-overview-box-4">
							<div class="overview-box-header"></div>
							<div class="overview-box-content">
								<div class="overview-box-icon"><i class="pi pi-users"></i></div>
								<div class="overview-box-title">Users Online</div>
								<div class="overview-box-count">256</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="col-12 lg:col-6">
			<div class="card widget-chat">
				<h4>Chat</h4>
				<ul>
					<li class="clearfix message-from">
						<img src="layout/images/avatar2.png" alt="serenity-layout"/>
						<span>Retro occupy organic, stumptown shabby chic pour-over roof party DIY normcore.</span>
					</li>
					<li class="clearfix message-own">
						<img src="layout/images/avatar.png" alt="serenity-layout"/>
						<span>Actually artisan organic occupy, Wes Anderson ugh whatever pour-over gastropub selvage.</span>
					</li>
					<li class="clearfix message-from">
						<img src="layout/images/avatar2.png" alt="serenity-layout"/>
						<span>Chillwave craft beer tote bag stumptown quinoa hashtag.</span>
					</li>
					<li class="clearfix message-own">
						<img src="layout/images/avatar.png" alt="serenity-layout"/>
						<span>Dreamcatcher locavore iPhone chillwave, occupy trust fund slow-carb distillery art party narwhal.</span>
					</li>
					<li class="clearfix message-own">
						<span>Sed ut perspiciatis unde omnis iste natus.</span>
					</li>
					<li class="clearfix message-from">
						<img src="layout/images/avatar2.png" alt="serenity-layout"/>
						<span>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.</span>
					</li>
					<li class="clearfix message-own">
						<img src="layout/images/avatar.png" alt="serenity-layout"/>
						<span>At vero eos et accusamus.</span>
					</li>
				</ul>
				<div class="new-message">
					<div class="message-attachment">
						<i class="pi pi-paperclip"></i>
					</div>
					<div class="message-input">
						<input type="text" placeholder="Write a message"/>
					</div>
				</div>
			</div>
		</div>

		<div class="col-12 lg:col-6">
			<div class="card widget-status-bars">
				<h4>Status Bars</h4>
				<ul>
					<li>
						<div class="widget-status-bar widget-status-bar-1">
							<div class="status-bar-value" style="width:22%">22%</div>
						</div>
						<span>Users</span>
						<i class="pi pi-user"></i>
					</li>
					<li>
						<div class="widget-status-bar widget-status-bar-2">
							<div class="status-bar-value" style="width:78%">78%</div>
						</div>
						<span>Confirmed</span>
						<i class="pi pi-check-circle"></i>
					</li>
					<li>
						<div class="widget-status-bar widget-status-bar-3">
							<div class="status-bar-value" style="width:51%">51%</div>
						</div>
						<span>Defects</span>
						<i class="pi pi-sliders-h"></i>
					</li>
					<li>
						<div class="widget-status-bar widget-status-bar-4">
							<div class="status-bar-value" style="width:68%">68%</div>
						</div>
						<span>Issues</span>
						<i class="pi pi-exclamation-triangle"></i>
					</li>
					<li>
						<div class="widget-status-bar widget-status-bar-5">
							<div class="status-bar-value" style="width:80%">80%</div>
						</div>
						<span>Searches</span>
						<i class="pi pi-search"></i>
					</li>
				</ul>
			</div>

			<div class="card widget-image-box">
				<img src="layout/images/dashboard/gradient-waters.png" library="serenity-layout" />
				<div class="image-box-content">
					<h5>Gradient Waters</h5>
					<span class="image-box-tag">article</span>
					<p>
						Derive inexpedient reason law virtues superiority victorious. Overcome pious horror suicide revaluation. Holiest ocean society disgust passion value love.
						Faithful mountains morality hope disgust merciful moral will revaluation society fearful love.
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis,
						culpa ratione quam perferendis esse, cupiditate neque quas!
					</p>
				</div>
			</div>
		</div>

		<div class="col-12 lg:col-4">
			<div class="card widget-user-card">
				<div class="user-card-header">
					<img src="layout/images/dashboard/usercard.png" library="serenity-layout" width="100"/>
				</div>
				<div class="user-card-content">
					<img src="layout/images/avatar.png" library="serenity-layout" />

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
									<div class="project-progressbar-value" style="width: 50%"></div>
								</div>
							</li>
							<li class="clearfix">
								<i class="pi pi-dollar"></i>
								<span class="project-title">Revenue</span>
								<span class="project-detail">+20%</span>
								<div class="project-progressbar">
									<div class="project-progressbar-value" style="width: 20%"></div>
								</div>
							</li>
							<li class="clearfix">
								<i class="pi pi-money-bill"></i>
								<span class="project-title">Payments</span>
								<span class="project-detail">24 new</span>
								<div class="project-progressbar">
									<div class="project-progressbar-value" style="width: 65%"></div>
								</div>
							</li>
							<li class="clearfix">
								<i class="pi pi-briefcase"></i>
								<span class="project-title">Clients</span>
								<span class="project-detail">+80%</span>
								<div class="project-progressbar">
									<div class="project-progressbar-value" style="width: 80%"></div>
								</div>
							</li>
							<li class="clearfix">
								<i class="pi pi-chart-bar"></i>
								<span class="project-title">Turnover</span>
								<span class="project-detail">+40%</span>
								<div class="project-progressbar">
									<div class="project-progressbar-value" style="width: 40%"></div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<div class="col-12 lg:col-4">
			<div class="card p-fluid">
				<h4>Contact Form</h4>
				<div class="field">
					<label for="firstname">First Name</label>
					<InputText id="firstname" />
				</div>
				<div class="field">
					<label for="lastname">Last Name</label>
					<InputText id="lastname" />
				</div>
				<div class="field">
					<label for="message">Message</label>
					<Textarea id="message" ></Textarea>
				</div>
				<Button type="button" label="Send"></Button>
			</div>
		</div>

		<div class="col-12 lg:col-4">
			<div class="widget-pricing-box">
				<div class="pricing-header">
					<h3>PROFESSIONAL</h3>
					<p>Most Popular</p>
				</div>
			
				<div class="pricing-content">
					<div class="pricing-fee">10$</div>	
					<ul>
						<li><i class="pi pi-check-circle"></i> Responsive</li>
						<li><i class="pi pi-check-circle"></i> Push Messages</li>
						<li><i class="pi pi-check-circle"></i> 10 Support Tickets</li>
						<li><i class="pi pi-check-circle"></i> Free Shipping</li>
					</ul>
					<button class="ui-button ui-widget ui-corner-all ui-button-text-only pink-btn">
						<span class="ui-button-text">BUY NOW</span>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Widgets"
	}
</script>

<style scoped>

</style>
