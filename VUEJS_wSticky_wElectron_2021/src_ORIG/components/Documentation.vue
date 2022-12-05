<template>
    <div class="grid">
        <div class="col-12">
            <div class="card docs">
                <h4>Current Version</h4>
                <p>Vue 3 and PrimeVue 3.x</p>

                <h4>Getting Started</h4>
                <p>Serenity is an application template for Vue based on the <a href="https://cli.vuejs.org/">Vue CLI</a> that provides out-of-the-box standard
                tooling for Vue projects. If you don't have CLI installed already run the following command.</p>
<pre v-code><code>
npm install -g @vue/cli

# OR

yarn global add @vue/cli

</code></pre>

                <p>Once CLI is ready in your system, extract the contents of the Serenity zip file distribution, cd to the directory and install the libraries from npm.</p>

<pre v-code><code>
cd serenity
npm install
npm run serve

</code></pre>

                <p>The application should run at http://localhost:8080/, you may now start with the development of your application.</p>

                <h4>Important CLI Commands</h4>
                <p>Following commands are derived from CLI.</p>
<pre v-code><code>
"npm run serve": Starts the development server
"npm run build": Builds the application for deployment.
"npm run lint": Executes the lint checks.
"npm run test:unit": Runs the tests.

</code></pre>

                <h4>Structure</h4>
                <p>Serenity consists of 2 main parts; the application layout and the resources. <i>App.vue</i> inside src folder is the main component containing the template for the base layout
                    whereas required resources such as SASS structure for the layout are placed inside the <b>src/assets/sass/layout</b> folder.</p>

                <h4>Template</h4>
                <p>Main layout is the template of the <i>App.vue</i>, it is divided into a couple of child components such as topbar, content, menu and footer. Here is template of the
                    <i>App.vue</i> component that implements the logic such as menu state, layout modes and other configurable options.
                </p>

<pre v-code><code>
&lt;template&gt;
    &lt;div :class="containerClass" @click="onWrapperClick"&gt;
        &lt;div ref="sidebar" :class="sidebarClass" @click="onSidebarClick" @mouseenter="onSidebarMouseEnter" @mouseleave="onSidebarMouseLeave"&gt;
            &lt;div class="sidebar-logo"&gt;
                &lt;button class="p-link"&gt;
                    &lt;img alt="logo" src="layout/images/logo-slim.png" /&gt;
                    &lt;span class="app-name"&gt;SERENITY&lt;/span&gt;
                &lt;/button&gt;
                &lt;button class="p-link sidebar-anchor" title="Toggle Menu" @click="onToggleMenuClick"&gt; &lt;/button&gt;
            &lt;/div&gt;

            &lt;div class="layout-menu-container"&gt;
                &lt;AppMenu :model="menu" :layoutMode="layoutMode" :active="menuActive" @menuitem-click="onMenuItemClick" @root-menuitem-click="onRootMenuItemClick"&gt;&lt;/AppMenu&gt;
            &lt;/div&gt;
        &lt;/div&gt;

        &lt;div class="layout-main"&gt;
            &lt;AppTopBar :layoutMode="layoutMode" :activeTopbarItem="activeTopbarItem" :topbarMenuActive="topbarMenuActive" @menu-button-click="onMenuButtonClick"
                    @topbar-item-click="onTopbarItemClick" @topbar-mobile-menu-button-click="onTopbarMobileMenuButtonClick"/&gt;

            &lt;AppBreadcrumb&gt;&lt;/AppBreadcrumb&gt;

            &lt;div class="layout-content"&gt;
                &lt;router-view /&gt;
            &lt;/div&gt;

            &lt;AppConfig :layoutMode="layoutMode" @layout-change="onLayoutChange" :darkMenu="darkMenu" @menu-color-change="onMenuColorChange"
                    :layoutColor="layoutColor" :layoutSpecialColors="layoutSpecialColors" :layoutColors="layoutColors" @layout-color-change="changeLayout"
                    :theme="theme" :themes="themeColors" @theme-change="changeTheme" :compactMode="compactMode" @change-theme-style="changeThemeStyle"
                    :isRTL="isRTL" @change-orientation="changeOrientation"&gt;&lt;/AppConfig&gt;

            &lt;AppFooter /&gt;

            &lt;div class="layout-main-mask" v-if="mobileMenuActive"&gt;&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/template&gt;

</code></pre>

                <h4>Menu</h4>
                <p>Menu is a separate component defined in <i>AppMenu.vue</i> file based on PrimeVue MenuModel API. In order to define the menuitems,
                    navigate to data section of <i>App.vue</i> file and define your own model as a nested structure using the menu property.
                    Here is the menu component from the demo application. Notice that menu object is bound to the model property of AppMenu component as shown above.</p>

<div style="overflow: auto; height: 400px; margin-bottom: 10px">
<pre v-code.script><code>
data() &#123;
    return &#123;
        menu : [
            {
				label: 'Favorites', icon: 'pi pi-fw pi-home',
				items: [
					{label: 'Dashboard', icon: 'pi pi-fw pi-home', to:'/'},
				]				
			},
            {
                label: 'UI Kit', icon: 'pi pi-fw pi-star-o', badge: 6,
                items: [
                    {label: 'Form Layout', icon: 'pi pi-fw pi-id-card', to: '/formlayout'},
                    {label: 'Input', icon: 'pi pi-fw pi-check-square', to: '/input'},
                    {label: "Float Label", icon: "pi pi-fw pi-bookmark", to: "/floatlabel"},
                    {label: "Invalid State", icon: "pi pi-fw pi-exclamation-circle", to: "invalidstate"},
                    {label: 'Button', icon: 'pi pi-fw pi-mobile', to: '/button'},
                    {label: 'Table', icon: 'pi pi-fw pi-table', to: '/table'},
                    {label: 'List', icon: 'pi pi-fw pi-list', to: '/list'},
                    {label: 'Tree', icon: 'pi pi-fw pi-share-alt', to: '/tree'},
                    {label: 'Panel', icon: 'pi pi-fw pi-tablet', to: '/panel'},
                    {label: 'Overlay', icon: 'pi pi-fw pi-clone', to: '/overlay'},
                    {label: "Media", icon: "pi pi-fw pi-image", to: "/media"},
                    {label: 'Menu', icon: 'pi pi-fw pi-bars', to: '/menus'},
                    {label: 'Message', icon: 'pi pi-fw pi-comment', to: '/messages'},
                    {label: 'File', icon: 'pi pi-fw pi-file', to: '/file'},
                    {label: 'Chart', icon: 'pi pi-fw pi-chart-bar', to: '/chart'},
                    {label: 'Misc', icon: 'pi pi-fw pi-circle-off', to: '/misc'},
                ]
            },
            {
                label: "Utilities", icon:'pi pi-fw pi-compass',
                items: [
                    {label: 'Display', icon:'pi pi-fw pi-desktop', to:'/display'},
                    {label: 'Elevation', icon:'pi pi-fw pi-external-link', to:'/elevation'},
                    {label: 'Flexbox', icon:'pi pi-fw pi-directions', to:'/flexbox'},
                    {label: 'Icons', icon:'pi pi-fw pi-prime', to:'/icons'},
                    {label: 'Widgets', icon:'pi pi-fw pi-star-o', to:'/widgets'},
                    {label: 'Grid System', icon:'pi pi-fw pi-th-large', to:'/grid'},
                    {label: 'Spacing', icon:'pi pi-fw pi-arrow-right', to:'/spacing'},
                    {label: 'Typography', icon:'pi pi-fw pi-align-center', to:'/typography'},
                    {label: 'Text', icon:'pi pi-fw pi-pencil', to:'/text'},
                ]
            },
            {
                label: "UI Blocks", icon: "pi pi-building",
                items: [
                    {label: "Free Blocks", icon: "pi pi-fw pi-eye", to: "/blocks", badge: "NEW"},
                    {label: "All Blocks", icon: "pi pi-fw pi-globe", url: "https://www.primefaces.org/primeblocks-vue"}
                ]
            },
            {
                label: 'Pages', icon: 'pi pi-fw pi-briefcase', badge: 8, badgeStyleClass: 'teal-badge',
                items: [
                    {label: 'Crud', icon: 'pi pi-fw pi-pencil', to: '/crud'},
                    {label: 'Calendar', icon: 'pi pi-fw pi-calendar-plus', to: '/calendar'},
                    {label: 'Timeline', icon: 'pi pi-fw pi-calendar', to: '/timeline'},
                    {label: 'Landing', icon: 'pi pi-fw pi-globe', url: 'pages/landing.html', target: '_blank'},
                    {label: 'Login', icon: 'pi pi-fw pi-sign-in', to: '/login'},
                    {label: 'Invoice', icon: 'pi pi-fw pi-dollar', to: '/invoice'},
                    {label: 'Help', icon: 'pi pi-fw pi-question-circle', to: '/help'},
                    {label: 'Error', icon: 'pi pi-fw pi-times-circle', to: '/error'},
                    {label: 'Not Found', icon: 'pi pi-fw pi-exclamation-circle', to: '/notfound'},
                    {label: 'Access Denied', icon: 'pi pi-fw pi-lock', to: '/access'},
                    {label: 'Empty', icon: 'pi pi-fw pi-circle-off', to: '/empty'}
                ]
            },
            {
                label: 'Menu Hierarchy', icon: 'pi pi-fw pi-sort-amount-down-alt',
                items: [
                    {
                        label: 'Submenu 1', icon: 'pi pi-fw pi-circle-off',
                        items: [
                            {
                                label: 'Submenu 1.1', icon: 'pi pi-fw pi-circle-off',
                                items: [
                                    {label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-circle-off'},
                                    {label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-circle-off'},
                                    {label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-circle-off'},
                                ]
                            },
                            {
                                label: 'Submenu 1.2', icon: 'pi pi-fw pi-circle-off',
                                items: [
                                    {label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-circle-off'},
                                    {label: 'Submenu 1.2.2', icon: 'pi pi-fw pi-circle-off'}
                                ]
                            },
                        ]
                    },
                    {
                        label: 'Submenu 2', icon: 'pi pi-fw pi-circle-off',
                        items: [
                            {
                                label: 'Submenu 2.1', icon: 'pi pi-fw pi-circle-off',
                                items: [
                                    {label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-circle-off'},
                                    {label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-circle-off'},
                                    {label: 'Submenu 2.1.3', icon: 'pi pi-fw pi-circle-off'},
                                ]
                            },
                            {
                                label: 'Submenu 2.2', icon: 'pi pi-fw pi-circle-off',
                                items: [
                                    {label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-circle-off'},
                                    {label: 'Submenu 2.2.2', icon: 'pi pi-fw pi-circle-off'}
                                ]
                            },
                        ]
                    }
                ]
            },
            {
				label: 'Start', icon: 'pi pi-fw pi-download',
				items: [
					{
						label: 'Buy Now', icon: 'pi pi-shopping-cart', command: () => { window.location = "https://www.primefaces.org/store"}
					},
					{
						label: 'Documentation', icon: 'pi pi-fw pi-info-circle', to: '/documentation'
					}
				]
			}
        ]
    &#125;
&#125;

</code></pre>
</div>

                <h4>Integration with an Existing CLI Project</h4>
				<p>
					To setup Serenity in an existing project, follow the steps
					below;
				</p>

				<ul>
					<li>Copy the <i>public</i> and <i>src/assets</i> folder to your projects folder with the same name</li>
					<li>Copy all <i>src/App*.vue</i> files to the src folder of your application.</li>
				</ul>

				<p>Install PrimeVue</p>

<pre v-code><code>
npm install primevue@latest --save 
npm install	primeicons@latest --save

</code></pre>

                <p>Add PrimeVue CSS at styles section in main.js.</p>

<pre v-code><code>
import 'primevue/resources/primevue.min.css';   	//required: PrimeVue components
import 'primeicons/primeicons.css';	 				//required: PrimeIcons 					
import './App.scss'; 	                            //your styles and overrides 

</code></pre>

                <p>Last part is adding theme and layout css files, in the CLI app they are defined using link tags in index.html so the demo can switch them on
                    the fly by changing the path however if this is not a requirement, you may also add them to the styles configuration so they go inside the bundle.</p>

                <h4>Integration with an Existing Non-CLI Project</h4>
                <p>For an existing project that do not use CLI, setup steps are more or less similar. Start with installing the dependencies listed above in package.json</p>
                <p>Copy the <i>src/assets</i> folder to your application and include the resources listed above with a module bundler like webpack or using link-script tags.</p>
                <p>Finally copy the contents of App.vue to your application's main component template such as <i>app/index.html</i> along
                    with the sub components which are AppMenu.vue, AppTopbar.vue and AppFooter.vue.</p>

                <h4>Theme</h4>
                <p>Serenity provides 18 PrimeVue themes out of the box, setup of a theme simple including the css of theme to your page that are located inside public/theme folder.</p>
                <p>In the demo application, theme css file is added to the index page to enable themeswitcher functionality however since VueCLI supports
                    SASS compilation via webpack, you may also import the sass of the theme to App.vue as well.</p>
                <ul>
                    <li>theme-amber</li>
                    <li>theme-blue</li>
                    <li>theme-bluegrey</li>
                    <li>theme-brown</li>
                    <li>theme-cyan</li>
                    <li>theme-deeporange</li>
                    <li>theme-deeppurple</li>
                    <li>theme-green</li>
                    <li>theme-grey</li>
                    <li>theme-indigo</li>
                    <li>theme-lightblue</li>
                    <li>theme-lightgreen</li>
                    <li>theme-lime</li>
                    <li>theme-orange</li>
                    <li>theme-pink</li>
                    <li>theme-purple</li>
                    <li>theme-teal</li>
                    <li>theme-yellow</li>
                </ul>

                <p>A custom theme can be developed by the following steps.</p>
                <ul>
                    <li>Choose a custom theme name such as theme-myown.</li>
                    <li>Create a file named theme-myown.scss under <i>public/theme folder</i>.</li>
                    <li>Define the variables listed below and import the <i>.../../src/assets/sass/theme/_theme.scss</i> file.</li>
                    <li>Build the scss to generate css.</li>
                    <li>Include the theme file to your application.</li>
                </ul>

                <p>Here are the variables required to create a theme which are the primary and accent colors along with their shades.</p>

<pre v-code.css><code>
$primaryColor:#607D8B;
$primaryTextColor:#ffffff;
$accentColor:#7CB342;
$accentTextColor: #ffffff;

@import '../../src/assets/sass/theme/_theme';

</code></pre>

                <p>If you prefer to compile manually, an example sass command to compile the css would be;</p>

<pre v-code><code>
sass public/theme/mytheme/theme.scss:public/theme/mytheme/theme.css

</code></pre>

                <p>Watch mode is handy to avoid compiling everytime when a change is made, instead use the following command
                so that sass generates the file whenever you make a customization. This builds all css files whenever a change is made to any scss file.</p>
<pre v-code><code>
sass --update public/layout/css/:public/layout/css/
sass --update public/theme/:public/theme/

</code></pre>

                <p>Same can also be applied to layout itself;</p>
                <ul>
                    <li>Choose a layout name such as layout-myown.</li>
                    <li>Create an empty file named layout-myown.scss inside <i>layout/css</i> folder.</li>
                    <li>Define the variables listed below and import the <i>../../../src/assets/sass/layout/layout.scss</i> file.</li>
                    <li>Build the scss to generate css</li>
                    <li>Serve the css by importing it using a link tag or a bundler.</li>
                </ul>

                <p>Here are the variables required to create a layout, you may need to change the last line according to the
                    relative path of the sass folder in your application.</p>
<div style="overflow: auto; height: 400px; margin-bottom: 10px">
<pre v-code.css><code>
/* Sidebar */
$sidebarLogoBgColor:rgba(36,50,59,0.5);
$sidebarBgColor:#566e87;
$darkSidebarBgColor:#202d35;
$menuBgImageLight:'bg-moody-light.png';
$menuBgImageDark:'bg-moody-dark.png';
$horizontalMenuBgImageLight:'bg-moody-light-horizontal.png';
$horizontalMenuBgImageDark:'bg-moody-dark-horizontal.png';
$horizontalMenuBgColor:#080A10;
$horizontalDarkMenuBgColor:#0A1118;

/* Primary */
$primaryColor:#607D8B;
$primaryDarkColor:#496475;
$primaryLightColor:#90A4AE;
$primaryLightestColor:#E8EAF6;
$primaryTextColor:#ffffff;

/* Accent */
$accentColor:#7CB342;
$accentLightColor:#9CCC65;
$accentTextColor:#ffffff;

/* Topbar */
$topbarTextColor:#E8EAF6;
$topbarIconColor:#E8EAF6;

/* Submenu */
$submenuBgColor:rgba(255,255,255,0.2);
$darkSubmenuBgColor:rgba(255,255,255,0.15);
$horizontalSubmenuBgColor:#2b3d4c;
$horizontalDarkSubmenuBgColor:#0e161e;
$horizontalSubmenuitemHoverBgColor: rgba(255, 255, 255, 0.4);
$horizontalSubmenuitemDarkHoverBgColor: rgba(255, 255, 255, 0.4);
$horizontalSubmenuitemDarkHoverTextColor:#ffffff;
$horizontalMenuActiveTextColor:#ffffff;
$horizontalMenuActiveHoverTextColor:#ffffff;
$horizontalDarkMenuActiveTextColor:#ffffff;
$horizontalDarkMenuActiveHoverTextColor:#ffffff;

/* Default MenuItem */
$menuitemTextColor:#ffffff;
$menuitemIconTextColor:#ffffff;

/* Hover MenuItem */
$menuitemHoverBgColor:rgba(0,0,0,0.4);
$menuitemHoverTextColor:#ffffff;
$menuitemHoverIconTextColor:#ffffff;

/* Active MenuItem */
$menuitemActiveBgColor:#7CB342;
$menuitemActiveTextColor:#ffffff;
$menuitemActiveIconTextColor:#ffffff;
$subMenuitemActiveTextColor:#9CCC65;
$subMenuitemActiveIconTextColor:#9CCC65;

/* Dark Default MenuItem */
$darkMenuitemTextColor:#dee0e3;
$darkMenuitemIconTextColor:#dee0e3;

/* Dark Hover MenuItem */
$darkMenuitemHoverBgColor:#rgba(255,255,255,0.4);
$darkMenuitemHoverTextColor:#ffffff;
$darkMenuitemHoverIconTextColor:#ffffff;

/* Dark Active MenuItem */
$darkMenuitemActiveBgColor:#7CB342;
$darkMenuitemActiveTextColor:#ffffff;
$darkMenuitemActiveIconTextColor:#ffffff;
$darksubMenuitemActiveTextColor:#9CCC65;
$darksubMenuitemActiveIconTextColor:#9CCC65;

@import '../../sass/layout/_layout';

</code></pre>
</div>
                <h4>Common SASS Variables</h4>
                <p>In case you'd like to customize the shared variables, use the variables files under theme or layout folders.</p>

                <h5>src/assets/sass/layout/_variables.scss</h5>
<pre v-code.css><code>
$textColor:rgba(0,0,0.87);
$textSecondaryColor:rgba(0,0,0,.60);
$fontSize:14px;
$fontFamily:Roboto,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;
$lineHeight:18px;
$transitionDuration:.2s;
$borderRadius:4px;
$inputOptionPadding:.625em .875em;
$hoverBgColor:#e8e8e8;
$hoverTextColor:#000000;
$activeMenuItemBadgeColor:#ffffff;
$activeMenuItemBadgeTextColor:#212121;
$dividerColor:#bdbdbd;
$letterSpacing:.25px;
$overlayMaskBgColor:#424242;

$bodyBgColor:#F5F5F5;
$topbarSubmenuHoverBgColor:#f1f2f7;
$topbarMobileMenuBgColor:#ffffff;
$mobileBreakpoint:1024px;
$menuScrollBarBgColor:#aaaaaa;
$topbarMenuBgColor:#ffffff;
$breadcrumbBgColor:#ffffff;
$footerBgColor:#ffffff;

</code></pre>

                <h5>src/assets/sass/variables/_variables.scss</h5>
<div style="overflow: auto; height: 400px; margin-bottom: 10px">
<pre v-code.css><code>
$colors: (
    "blue": #2196F3,
    "green": #689F38,
    "yellow": #FBC02D,
    "cyan": #00BCD4,
    "pink": #E91E63,
    "indigo": #4E5FBB,
    "teal": #009688,
    "orange": #FF9800,
    "bluegray": #607D8B,
    "purple": #9C27B0
);

$emphasis-high:rgba(0,0,0,.87) !default;
$emphasis-medium:rgba(0,0,0,.60) !default;
$emphasis-low:rgba(0,0,0,.38) !default;
$emphasis-lower:rgba(0,0,0,.12) !default;
$overlayColor:#000000 !default;

//global
$fontFamily:Roboto,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif !default;
$fontSize:1rem !default;
$fontWeight:normal !default;
$textColor:$emphasis-high !default;
$textSecondaryColor:$emphasis-medium !default;
$borderRadius:4px !default;
$transitionDuration:.2s !default;
$formElementTransition:background-color $transitionDuration, border-color $transitionDuration, color $transitionDuration, box-shadow $transitionDuration, background-size 0.2s cubic-bezier(0.64, 0.09, 0.08, 1) !default;
$actionIconTransition:background-color $transitionDuration, color $transitionDuration, box-shadow $transitionDuration !default;
$listItemTransition:none !default;
$primeIconFontSize:1rem !default;
$divider:1px solid rgba(0,0,0,.12) !default;
$inlineSpacing:.5rem !default;
$disabledOpacity:.38 !default;
$maskBg:rgba(0, 0, 0, 0.32) !default;
$loadingIconFontSize:2rem !default;
$errorColor:#B00020 !default;

//selected state
$highlightBg:rgba($primaryColor, .12) !default;
$highlightTextColor:$primaryColor !default;

//scale
$scaleSM:0.875 !default;
$scaleLG:1.25 !default;

//focus
$focusOutlineColor:transparent !default;
$focusOutline:0 none !default;
$focusOutlineOffset:0 !default;
$focusShadow:none !default;

//action icons
$actionIconWidth:2.5rem !default;
$actionIconHeight:2.5rem !default;
$actionIconBg:transparent !default;
$actionIconBorder:0 none !default;
$actionIconColor:$textSecondaryColor !default;
$actionIconHoverBg:rgba(0,0,0,.04) !default;
$actionIconHoverBorderColor:transparent !default;
$actionIconHoverColor:$textSecondaryColor !default;
$actionIconBorderRadius:50% !default;

//input field (e.g. inputtext, spinner, inputmask)
$inputPadding:1rem 1rem !default;
$inputTextFontSize:1rem !default;
$inputBg:#ffffff !default;
$inputTextColor:$emphasis-high !default;
$inputIconColor:$emphasis-medium !default;
$inputBorder:1px solid $emphasis-low !default;
$inputHoverBorderColor:$emphasis-high !default;
$inputFocusBorderColor:$primaryColor !default;
$inputErrorBorderColor:$errorColor !default;
$inputPlaceholderTextColor:$emphasis-medium !default;
$inputFilledBg:#f5f5f5 !default;
$inputFilledHoverBg:#ececec !default;
$inputFilledFocusBg:#dcdcdc !default;

//input groups
$inputGroupBg:$inputBg !default;
$inputGroupTextColor:$emphasis-medium !default;
$inputGroupAddOnMinWidth:2.357rem !default;

//input lists (e.g. dropdown, autocomplete, multiselect, orderlist)
$inputListBg:#ffffff !default;
$inputListTextColor:$textColor !default;
$inputListBorder:1px solid #e5e5e5 !default;
$inputListPadding:0 !default;
$inputListItemPadding:1rem 1rem !default;
$inputListItemBg:transparent !default;
$inputListItemTextColor:$textColor !default;
$inputListItemHoverBg:rgba(0,0,0,.04) !default;
$inputListItemTextHoverColor:$textColor !default;
$inputListItemBorder:0 none !default;
$inputListItemBorderRadius:0 !default;
$inputListItemMargin:0 !default;
$inputListItemFocusShadow:none !default;
$inputListHeaderPadding:1rem !default;
$inputListHeaderMargin:0 !default;
$inputListHeaderBg:#ffffff !default;
$inputListHeaderTextColor:$textColor !default;
$inputListHeaderBorder:1px solid rgba(0,0,0,.12) !default;

//inputs with overlays (e.g. autocomplete, dropdown, multiselect)
$inputOverlayBg:$inputListBg !default;
$inputOverlayHeaderBg:$inputListHeaderBg !default;
$inputOverlayBorder:0 none !default;
$inputOverlayShadow:0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12) !default;

//password
$passwordMeterBg:rgba($primaryColor, .32) !default;
$passwordWeakBg:#D32F2F !default;
$passwordMediumBg:#FBC02D !default;
$passwordStrongBg:#689F38 !default;

//button
$buttonPadding:0.714rem 1rem !default;
$buttonIconOnlyWidth:3rem !default;
$buttonIconOnlyPadding:0.714rem !default;
$buttonBg:$primaryColor !default;
$buttonTextColor:$primaryTextColor !default;
$buttonBorder:0 none !default;
$buttonHoverBg:rgba($primaryColor, .92) !default;
$buttonTextHoverColor:$primaryTextColor !default;
$buttonHoverBorderColor:transparent !default;
$buttonActiveBg:rgba($primaryColor, .68) !default;
$buttonTextActiveColor:$primaryTextColor !default;
$buttonActiveBorderColor:transparent !default;
$raisedButtonShadow:0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12) !default;
$roundedButtonBorderRadius:2rem !default;

$textButtonHoverBgOpacity:.04 !default;
$textButtonActiveBgOpacity:.16 !default;
$outlinedButtonBorder:1px solid !default;
$plainButtonTextColor:$textSecondaryColor !default;
$plainButtonHoverBgColor:rgba(0,0,0,.04) !default;
$plainButtonActiveBgColor:rgba(0,0,0,.16) !default;

$secondaryButtonBg:$accentColor !default;
$secondaryButtonTextColor:$accentTextColor !default;
$secondaryButtonBorder:0 none !default;
$secondaryButtonHoverBg:rgba($accentColor, .92) !default;
$secondaryButtonTextHoverColor:$accentTextColor !default;
$secondaryButtonHoverBorderColor:transparent !default;
$secondaryButtonActiveBg:rgba($accentColor, .68) !default;
$secondaryButtonTextActiveColor:$accentTextColor !default;
$secondaryButtonActiveBorderColor:transparent !default;
$secondaryButtonFocusShadow:none !default;

$infoButtonBg:#2196F3 !default;
$infoButtonTextColor:#ffffff !default;
$infoButtonBorder:0 none !default;
$infoButtonHoverBg:rgba(#2196F3, .92) !default;
$infoButtonTextHoverColor:#ffffff !default;
$infoButtonHoverBorderColor:transparent !default;
$infoButtonActiveBg:rgba(#2196F3, .68) !default;
$infoButtonTextActiveColor:#ffffff !default;
$infoButtonActiveBorderColor:transparent !default;
$infoButtonFocusShadow:none !default;

$successButtonBg:#689F38 !default;
$successButtonTextColor:#ffffff !default;
$successButtonBorder:0 none !default;
$successButtonHoverBg:rgba(#689F38, .92) !default;
$successButtonTextHoverColor:#ffffff !default;
$successButtonHoverBorderColor:transparent !default;
$successButtonActiveBg:rgba(#689F38, .68) !default;
$successButtonTextActiveColor:#ffffff !default;
$successButtonActiveBorderColor:transparent !default;
$successButtonFocusShadow:none !default;

$warningButtonBg:#FBC02D !default;
$warningButtonTextColor:#212529 !default;
$warningButtonBorder:0 none !default;
$warningButtonHoverBg:rgba(#FBC02D, .92) !default;
$warningButtonTextHoverColor:#212529 !default;
$warningButtonHoverBorderColor:transparent !default;
$warningButtonActiveBg:rgba(#FBC02D, .68) !default;
$warningButtonTextActiveColor:#212529 !default;
$warningButtonActiveBorderColor:transparent !default;
$warningButtonFocusShadow:none !default;

$helpButtonBg:#9C27B0 !default;
$helpButtonTextColor:#ffffff !default;
$helpButtonBorder:0 none !default;
$helpButtonHoverBg:rgba(#9C27B0, .92) !default;
$helpButtonTextHoverColor:#ffffff !default;
$helpButtonHoverBorderColor:transparent !default;
$helpButtonActiveBg:rgba(#9C27B0, .68) !default;
$helpButtonTextActiveColor:#ffffff !default;
$helpButtonActiveBorderColor:transparent !default;
$helpButtonFocusShadow:none !default;

$dangerButtonBg:#D32F2F !default;
$dangerButtonTextColor:#ffffff !default;
$dangerButtonBorder:0 none !default;
$dangerButtonHoverBg:rgba(#D32F2F, .92) !default;
$dangerButtonTextHoverColor:#ffffff !default;
$dangerButtonHoverBorderColor:transparent !default;
$dangerButtonActiveBg:rgba(#D32F2F, .68) !default;
$dangerButtonTextActiveColor:#ffffff !default;
$dangerButtonActiveBorderColor:transparent !default;
$dangerButtonFocusShadow:none !default;

$linkButtonColor:$primaryColor !default;
$linkButtonHoverColor:$primaryColor !default;
$linkButtonTextHoverDecoration:underline !default;
$linkButtonFocusShadow:none !default;

//checkbox
$checkboxWidth:18px !default;
$checkboxHeight:18px !default;
$checkboxBorder:2px solid #757575 !default;
$checkboxIconFontSize:14px !default;
$checkboxActiveBorderColor:$primaryColor !default;
$checkboxActiveBg:$primaryColor !default;
$checkboxIconActiveColor:$primaryTextColor !default;
$checkboxActiveHoverBg:$primaryColor !default;
$checkboxIconActiveHoverColor:$primaryTextColor !default;
$checkboxActiveHoverBorderColor:$primaryColor !default;

//radiobutton
$radiobuttonWidth:20px !default;
$radiobuttonHeight:20px !default;
$radiobuttonBorder:2px solid #757575 !default;
$radiobuttonIconSize:10px !default;
$radiobuttonActiveBorderColor:$primaryColor !default;
$radiobuttonActiveBg:$primaryTextColor !default;
$radiobuttonIconActiveColor:$primaryColor !default;
$radiobuttonActiveHoverBg:$primaryTextColor !default;
$radiobuttonIconActiveHoverColor:$primaryColor !default;
$radiobuttonActiveHoverBorderColor:$primaryColor !default;

//colorpicker
$colorPickerPreviewWidth:2rem !default;
$colorPickerPreviewHeight:2rem !default;
$colorPickerBg:#323232 !default;
$colorPickerBorderColor:#191919 !default;
$colorPickerHandleColor:#ffffff !default;

//togglebutton
$toggleButtonBg:#ffffff !default;
$toggleButtonBorder:1px solid rgba(0,0,0,.12) !default;
$toggleButtonTextColor:$textColor !default;
$toggleButtonIconColor:$textSecondaryColor !default;
$toggleButtonHoverBg:#f6f6f6 !default;
$toggleButtonHoverBorderColor:rgba(0,0,0,.12) !default;
$toggleButtonTextHoverColor:$textColor !default;
$toggleButtonIconHoverColor:$textSecondaryColor !default;
$toggleButtonActiveBg:#e0e0e1 !default;
$toggleButtonActiveBorderColor:#e0e0e1 !default;
$toggleButtonTextActiveColor:$textColor !default;
$toggleButtonIconActiveColor:$textSecondaryColor !default;
$toggleButtonActiveHoverBg:#d9d8d9 !default;
$toggleButtonActiveHoverBorderColor:#d9d8d9 !default;
$toggleButtonTextActiveHoverColor:$textColor !default;
$toggleButtonIconActiveHoverColor:$textSecondaryColor !default;

//inplace
$inplacePadding:$inputPadding !default;
$inplaceHoverBg:rgba(0,0,0,.04) !default;
$inplaceTextHoverColor:$textColor !default;

//rating
$ratingIconFontSize:1.143rem !default;
$ratingCancelIconColor:#B00020 !default;
$ratingCancelIconHoverColor:#B00020 !default;
$ratingStarIconOffColor:$primaryColor !default;
$ratingStarIconOnColor:$primaryColor !default;
$ratingStarIconHoverColor:$primaryColor !default;

//slider
$sliderBg:#c1c1c1 !default;
$sliderBorder:0 none !default;
$sliderHorizontalHeight:2px !default;
$sliderVerticalWidth:2px !default;
$sliderHandleWidth:20px !default;
$sliderHandleHeight:20px !default;
$sliderHandleBg:$primaryColor !default;
$sliderHandleBorder:0 none !default;
$sliderHandleBorderRadius:50% !default;
$sliderHandleHoverBorderColor:0 none !default;
$sliderHandleHoverBg:$primaryColor !default;
$sliderRangeBg:$primaryColor !default;

//calendar
$calendarTableMargin:.5rem 0 !default;
$calendarPadding:.5rem !default;
$calendarBg:#ffffff !default;
$calendarInlineBg:$calendarBg !default;
$calendarTextColor:$textColor !default;
$calendarBorder:$inputListBorder !default;
$calendarOverlayBorder:$inputOverlayBorder !default;

$calendarHeaderPadding:.5rem !default;
$calendarHeaderBg:#ffffff !default;
$calendarInlineHeaderBg:$calendarBg !default;
$calendarHeaderBorder:$divider !default;
$calendarHeaderTextColor:$textColor !default;
$calendarHeaderFontWeight:500 !default;
$calendarHeaderCellPadding:.5rem !default;

$calendarCellDatePadding:.5rem !default;
$calendarCellDateWidth:2.5rem !default;
$calendarCellDateHeight:2.5rem !default;
$calendarCellDateBorderRadius:50% !default;
$calendarCellDateBorder:1px solid transparent !default;
$calendarCellDateHoverBg:rgba(0,0,0,.04) !default;
$calendarCellDateTodayBg:#ffffff !default;
$calendarCellDateTodayBorderColor: rgba(0,0,0,12) !default;
$calendarCellDateTodayTextColor:$textColor !default;

$calendarButtonBarPadding:1rem 0 !default;
$calendarTimePickerPadding:.5rem !default;
$calendarTimePickerElementPadding:0 .5rem !default;
$calendarTimePickerTimeFontSize:1.25rem !default;

$calendarBreakpoint:769px !default;
$calendarCellDatePaddingSM:0 !default;

//input switch
$inputSwitchWidth:2.75rem !default;
$inputSwitchHeight:1rem !default;
$inputSwitchBorderRadius:.5rem !default;
$inputSwitchHandleWidth:1.50rem !default;
$inputSwitchHandleHeight:1.50rem !default;
$inputSwitchHandleBorderRadius:50% !default;
$inputSwitchSliderPadding:-1px !default;
$inputSwitchSliderOffBg:rgba(0,0,0,.38) !default;
$inputSwitchHandleOffBg:#ffffff !default;
$inputSwitchSliderOffHoverBg:rgba(0,0,0,.38) !default;
$inputSwitchSliderOnBg:rgba($primaryColor, .5) !default;
$inputSwitchSliderOnHoverBg:rgba($primaryColor, .5) !default;
$inputSwitchHandleOnBg:$primaryColor !default;

//panel
$panelHeaderBorderColor: #e0e0e0 !default;
$panelHeaderBorder:1px solid #e0e0e0 !default;
$panelHeaderBg:#ffffff !default;
$panelHeaderTextColor:$textColor !default;
$panelHeaderFontWeight:500 !default;
$panelHeaderPadding:1rem !default;
$panelToggleableHeaderPadding:.5rem 1rem !default;

$panelHeaderHoverBg:rgba(0,0,0,.04) !default;
$panelHeaderHoverBorderColor:#e0e0e0 !default;
$panelHeaderTextHoverColor:$textColor !default;

$panelContentBorderColor: #e0e0e0 !default;
$panelContentBorder:1px solid #e0e0e0 !default;
$panelContentBg:#ffffff !default;
$panelContentTextColor:$textColor !default;
$panelContentPadding:1rem !default;

$panelFooterBorder:1px solid #e0e0e0 !default;
$panelFooterBg:#ffffff !default;
$panelFooterTextColor:$textColor !default;
$panelFooterPadding:1rem 1rem !default;

//accordion
$accordionSpacing:0 !default;
$accordionHeaderBorder:0 none !default;
$accordionHeaderBg:#ffffff !default;
$accordionHeaderTextColor:$textColor !default;
$accordionHeaderFontWeight:400 !default;
$accordionHeaderPadding:1.5rem !default;

$accordionHeaderHoverBg:#f6f6f6 !default;
$accordionHeaderHoverBorderColor:transparent !default;
$accordionHeaderTextHoverColor:$textColor !default;

$accordionHeaderActiveBg:#ffffff !default;
$accordionHeaderActiveBorderColor:transparent !default;
$accordionHeaderTextActiveColor:$textColor !default;

$accordionHeaderActiveHoverBg:#ffffff !default;
$accordionHeaderActiveHoverBorderColor:transparent !default;
$accordionHeaderTextActiveHoverColor:$textColor !default;

$accordionContentBorder:0 none !default;
$accordionContentBg:#ffffff !default;
$accordionContentTextColor:$textColor !default;
$accordionContentPadding:1rem 1.5rem !default;

//tabview
$tabviewNavBorder:solid rgba(0,0,0,.12) !default;
$tabviewNavBorderWidth:0 0 1px 0 !default;
$tabviewNavBg:#ffffff !default;

$tabviewHeaderSpacing:0 !default;
$tabviewHeaderBorder:solid rgba(0,0,0,.12) !default;
$tabviewHeaderBorderWidth:0 0 1px 0 !default;
$tabviewHeaderBorderColor:transparent transparent rgba(0,0,0,.12) transparent !default;
$tabviewHeaderBg:#ffffff !default;
$tabviewHeaderTextColor:$textSecondaryColor !default;
$tabviewHeaderFontWeight:500 !default;
$tabviewHeaderPadding:1rem 1.5rem !default;
$tabviewHeaderMargin:0 0 -1px 0 !default;

$tabviewHeaderHoverBg:rgba($primaryColor,.04) !default;
$tabviewHeaderHoverBorderColor:rgba(0,0,0,.12) !default;
$tabviewHeaderTextHoverColor:$textSecondaryColor !default;

$tabviewHeaderActiveBg:#ffffff !default;
$tabviewHeaderActiveBorderColor:rgba(0,0,0,.12) !default;
$tabviewHeaderTextActiveColor:$primaryColor !default;

$tabviewContentBorder:0 none !default;
$tabviewContentBg:#ffffff !default;
$tabviewContentTextColor:$textColor !default;
$tabviewContentPadding:$panelContentPadding !default;

//upload
$fileUploadProgressBarHeight:4px !default;
$fileUploadContentPadding:2rem 1rem !default;

//scrollpanel
$scrollPanelTrackBorder:0 none !default;
$scrollPanelTrackBg:rgba(0,0,0,.12) !default;

//card
$cardBodyPadding:1rem !default;
$cardTitleFontSize:1.5rem !default;
$cardTitleFontWeight:700 !default;
$cardSubTitleFontWeight:400 !default;
$cardSubTitleColor:$textSecondaryColor !default;
$cardContentPadding:1rem 0 !default;
$cardFooterPadding:1rem 0 0 0 !default;
$cardShadow:0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12) !default;

//editor
$editorToolbarBg:$panelHeaderBg !default;
$editorToolbarBorder:$panelHeaderBorder !default;
$editorToolbarPadding:$panelHeaderPadding !default;
$editorToolbarIconColor:$textSecondaryColor !default;
$editorToolbarIconHoverColor:$textColor !default;
$editorIconActiveColor:$primaryColor !default;
$editorContentBorder:$panelContentBorder !default;
$editorContentBg:$panelContentBg !default;

//paginator
$paginatorBg:#ffffff !default;
$paginatorTextColor:$textColor !default;
$paginatorBorder:solid #e4e4e4 !default;
$paginatorBorderWidth:0 !default;
$paginatorPadding:.5rem 1rem !default;
$paginatorElementWidth:$buttonIconOnlyWidth !default;
$paginatorElementHeight:$buttonIconOnlyWidth !default;
$paginatorElementBg:transparent !default;
$paginatorElementBorder:0 none !default;
$paginatorElementIconColor:$textSecondaryColor !default;
$paginatorElementHoverBg:rgba(0,0,0,.04) !default;
$paginatorElementHoverBorderColor:transparent !default;
$paginatorElementIconHoverColor:$textSecondaryColor !default;
$paginatorElementBorderRadius:50% !default;
$paginatorElementMargin:.143rem !default;
$paginatorElementPadding:0 !default;

//table
$tableHeaderBorder:1px solid #e4e4e4 !default;
$tableHeaderBorderWidth:0 0 1px 0 !default;
$tableHeaderBg:#ffffff !default;
$tableHeaderTextColor:$textColor !default;
$tableHeaderFontWeight:500 !default;
$tableHeaderPadding:1rem 1rem !default;

$tableHeaderCellPadding:1rem 1rem !default;
$tableHeaderCellBg:#ffffff !default;
$tableHeaderCellTextColor:$textColor !default;
$tableHeaderCellFontWeight:500 !default;
$tableHeaderCellBorder:1px solid #e4e4e4 !default;
$tableHeaderCellBorderWidth:0 0 1px 0 !default;
$tableHeaderCellHoverBg:rgba(0,0,0,.04) !default;
$tableHeaderCellTextHoverColor:$textColor !default;
$tableHeaderCellIconColor:$textSecondaryColor !default;
$tableHeaderCellIconHoverColor:$textSecondaryColor !default;
$tableHeaderCellHighlightBg:#ffffff !default;
$tableHeaderCellHighlightTextColor:$textColor !default;
$tableHeaderCellHighlightHoverBg:rgba(0,0,0,.04) !default;
$tableHeaderCellHighlightTextHoverColor:$textColor !default;
$tableSortableColumnBadgeSize:1.143rem !default;

$tableBodyRowBg:#ffffff !default;
$tableBodyRowTextColor:$textColor !default;
$tableBodyRowEvenBg:rgba(0,0,0,.02) !default;
$tableBodyRowHoverBg:rgba(0,0,0,.04) !default;
$tableBodyRowTextHoverColor:$textColor !default;
$tableBodyCellBorder:1px solid #e4e4e4 !default;
$tableBodyCellBorderWidth:0 0 1px 0 !default;
$tableBodyCellPadding:1rem 1rem !default;

$tableFooterCellPadding:1rem 1rem !default;
$tableFooterCellBg:#ffffff !default;
$tableFooterCellTextColor:$textColor !default;
$tableFooterCellFontWeight:500 !default;
$tableFooterCellBorder:1px solid #e4e4e4 !default;
$tableFooterCellBorderWidth:0 0 1px 0 !default;
$tableResizerHelperBg:$primaryColor !default;

$tableFooterBorder:1px solid #e4e4e4 !default;
$tableFooterBorderWidth:0 0 1px 0 !default;
$tableFooterBg:#ffffff !default;
$tableFooterTextColor:$textColor !default;
$tableFooterFontWeight:500 !default;
$tableFooterPadding:1rem 1rem !default;

$tableCellContentAlignment:left !default;
$tableTopPaginatorBorderWidth:0 0 1px 0 !default;
$tableBottomPaginatorBorderWidth:0 0 1px 0 !default;

$tableScaleSM:0.5 !default;
$tableScaleLG:1.25 !default;

//dataview
$dataViewContentPadding:1rem 0 !default;
$dataViewContentBorder:0 none !default;
$dataViewListItemBorder:solid rgba(0,0,0,.12) !default;
$dataViewListItemBorderWidth:0 0 1px 0 !default;

//schedule
$fullCalendarEventBg:$highlightBg !default;
$fullCalendarEventBorderColor:$highlightBg !default;
$fullCalendarEventBorder:1px solid $highlightBg !default;
$fullCalendarEventTextColor:$highlightTextColor !default;

//tree
$treeNodePadding:.25rem !default;
$treeNodeContentPadding:.5rem !default;
$treeNodeChildrenPadding:0 0 0 1rem !default;
$treeNodeIconColor:$textSecondaryColor !default;

//timeline
$timelineVerticalEventContentPadding:0 1rem !default;
$timelineHorizontalEventContentPadding:1rem 0 !default;
$timelineEventMarkerWidth:1rem !default;
$timelineEventMarkerHeight:1rem !default;
$timelineEventMarkerBorderRadius:50% !default;
$timelineEventMarkerBorder:0 none !default;
$timelineEventMarkerBackground:#bdbdbd !default;
$timelineEventConnectorSize:2px !default;
$timelineEventColor:#bdbdbd !default;

//org chart
$organizationChartConnectorColor:rgba(0,0,0,.12) !default;

//message
$messageMargin:1rem 0 !default;
$messagePadding: 1.25rem 1.5rem !default;
$messageBorderWidth:0 0 0 0 !default;
$messageIconFontSize:1.5rem !default;
$messageTextFontSize:1rem !default;
$messageTextFontWeight:500 !default;

//inline message
$inlineMessagePadding:$inputPadding !default;
$inlineMessageMargin:0 !default;
$inlineMessageIconFontSize:1rem !default;
$inlineMessageTextFontSize:1rem !default;
$inlineMessageBorderWidth:1px !default;

//toast
$toastIconFontSize:2rem !default;
$toastMessageTextMargin:0 0 0 1rem !default;
$toastMargin:0 0 1rem 0 !default;
$toastPadding:1.5rem !default;
$toastBorderWidth:0 0 0 0 !default;
$toastShadow:0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12) !default;
$toastOpacity:.9 !default;
$toastTitleFontWeight:700 !default;
$toastDetailMargin:$inlineSpacing 0 0 0 !default;

//severities
$infoMessageBg:#B3E5FC !default;
$infoMessageBorder:solid transparent !default;
$infoMessageTextColor:#01579B !default;
$infoMessageIconColor:#01579B !default;
$successMessageBg:#C8E6C9 !default;
$successMessageBorder:solid transparent !default;
$successMessageTextColor:#1B5E20 !default;
$successMessageIconColor:#1B5E20 !default;
$warningMessageBg:#FFECB3 !default;
$warningMessageBorder:solid transparent !default;
$warningMessageTextColor:#7f6003 !default;
$warningMessageIconColor:#7f6003 !default;
$errorMessageBg:#FFCDD2 !default;
$errorMessageBorder:solid transparent !default;
$errorMessageTextColor:#B71C1C !default;
$errorMessageIconColor:#B71C1C !default;

//overlays
$overlayContentBorder:0 none !default;
$overlayContentBg:$panelContentBg !default;
$overlayContainerShadow:0 11px 15px -7px rgba(0,0,0,.2), 0 24px 38px 3px rgba(0,0,0,.14), 0 9px 46px 8px rgba(0,0,0,.12) !default;

//dialog
$dialogHeaderBg:#ffffff !default;
$dialogHeaderBorder:0 none !default;
$dialogHeaderTextColor:$textColor !default;
$dialogHeaderFontWeight:500 !default;
$dialogHeaderFontSize:1.25rem !default;
$dialogHeaderPadding:1.5rem !default;
$dialogContentPadding:0 1.5rem 1.5rem 1.5rem !default;
$dialogFooterBorder:0 none !default;
$dialogFooterPadding:1rem 1.5rem !default;

//confirmpopup
$confirmPopupContentPadding:1.5rem !default;
$confirmPopupFooterPadding:0 1.5rem 1rem 1.5rem !default;

//tooltip
$tooltipBg:rgba(97,97,97,.9) !default;
$tooltipTextColor:#ffffff !default;
$tooltipPadding:.5rem !default;

//steps
$stepsItemBg:transparent !default;
$stepsItemBorder:1px solid transparent !default;
$stepsItemTextColor:$textColor !default;
$stepsItemNumberWidth:2rem !default;
$stepsItemNumberHeight:2rem !default;
$stepsItemNumberFontSize:1.143rem !default;
$stepsItemNumberColor:$textColor !default;
$stepsItemNumberBorderRadius:50% !default;
$stepsItemActiveFontWeight:500 !default;

//progressbar
$progressBarHeight:4px !default;
$progressBarBorder:0 none !default;
$progressBarBg:rgba($primaryColor, .32) !default;
$progressBarValueBg:$primaryColor !default;

//menu (e.g. menu, menubar, tieredmenu)
$menuWidth:12.5rem !default;
$menuBg:#ffffff !default;
$menuBorder:1px solid #e5e5e5 !default;
$menuTextColor:$textColor !default;
$menuitemPadding:1rem 1rem !default;
$menuitemBorderRadius:0 !default;
$menuitemTextColor:$textColor !default;
$menuitemIconColor:$textSecondaryColor !default;
$menuitemTextHoverColor:$textColor !default;
$menuitemIconHoverColor:$textSecondaryColor !default;
$menuitemHoverBg:rgba(0,0,0,.04) !default;
$menuitemTextActiveColor:$textColor !default;
$menuitemIconActiveColor:$textSecondaryColor !default;
$menuitemActiveBg:rgba(0,0,0,.04) !default;
$menuitemSubmenuIconFontSize:.875rem !default;
$submenuHeaderMargin:0 !default;
$submenuHeaderPadding:1rem !default;
$submenuHeaderBg:#ffffff !default;
$submenuHeaderTextColor:$textSecondaryColor !default;
$submenuHeaderBorderRadius:0 !default;
$submenuHeaderFontWeight:400 !default;
$overlayMenuBg:$menuBg !default;
$overlayMenuBorder:0 none !default;
$overlayMenuShadow:0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12) !default;
$verticalMenuPadding:.5rem 0 !default;
$menuSeparatorMargin:.5rem 0 !default;

$breadcrumbPadding:1rem !default;
$breadcrumbBg:#ffffff !default;
$breadcrumbBorder:1px solid #e5e5e5 !default;
$breadcrumbItemTextColor:$textColor !default;
$breadcrumbItemIconColor:$textSecondaryColor !default;
$breadcrumbLastItemTextColor:$textColor !default;
$breadcrumbLastItemIconColor:$textSecondaryColor !default;
$breadcrumbSeparatorColor:$textSecondaryColor !default;

$horizontalMenuPadding:1rem !default;
$horizontalMenuBg:transparent !default;
$horizontalMenuBorder:1px solid #e5e5e5 !default;
$horizontalMenuTextColor:$textColor !default;
$horizontalMenuRootMenuitemPadding:1rem !default;
$horizontalMenuRootMenuitemBorderRadius:$borderRadius !default;
$horizontalMenuRootMenuitemTextColor:$textColor !default;
$horizontalMenuRootMenuitemIconColor:$textSecondaryColor !default;
$horizontalMenuRootMenuitemTextHoverColor:$textColor !default;
$horizontalMenuRootMenuitemIconHoverColor:$textSecondaryColor !default;
$horizontalMenuRootMenuitemHoverBg:rgba(0,0,0,.04) !default;
$horizontalMenuRootMenuitemTextActiveColor:$textColor !default;
$horizontalMenuRootMenuitemIconActiveColor:$textSecondaryColor !default;
$horizontalMenuRootMenuitemActiveBg:rgba(0,0,0,.04) !default;

//badge and tag
$badgeBg:$primaryColor !default;
$badgeTextColor:$primaryTextColor !default;
$badgeMinWidth:1.5rem !default;
$badgeHeight:1.5rem !default;
$badgeFontWeight:700 !default;
$badgeFontSize:.75rem !default;

$tagPadding:.25rem .4rem !default;

//carousel
$carouselIndicatorsPadding:1rem !default;
$carouselIndicatorBg:#dcdcdc !default;
$carouselIndicatorHoverBg:#ececec !default;
$carouselIndicatorBorderRadius:0 !default;
$carouselIndicatorWidth:2rem !default;
$carouselIndicatorHeight:.5rem !default;

//galleria
$galleriaMaskBg:rgba(0,0,0,0.9) !default;
$galleriaCloseIconMargin:.5rem !default;
$galleriaCloseIconFontSize:2rem !default;
$galleriaCloseIconBg:transparent !default;
$galleriaCloseIconColor:rgba(255,255,255,.87) !default;
$galleriaCloseIconHoverBg:rgba(255,255,255,0.1) !default;
$galleriaCloseIconHoverColor:rgba(255,255,255,.87) !default;
$galleriaCloseIconWidth:4rem !default;
$galleriaCloseIconHeight:4rem !default;
$galleriaCloseIconBorderRadius:50% !default;

$galleriaItemNavigatorBg:transparent !default;
$galleriaItemNavigatorColor:#f6f6f6 !default;
$galleriaItemNavigatorMargin:0 .5rem !default;
$galleriaItemNavigatorFontSize:2rem !default;
$galleriaItemNavigatorHoverBg:rgba(255,255,255,0.1) !default;
$galleriaItemNavigatorHoverColor:rgba(255,255,255,.87) !default;
$galleriaItemNavigatorWidth:4rem !default;
$galleriaItemNavigatorHeight:4rem !default;
$galleriaItemNavigatorBorderRadius:50% !default;

$galleriaCaptionBg:rgba(0,0,0,.5) !default;
$galleriaCaptionTextColor:rgba(255,255,255,.87) !default;
$galleriaCaptionPadding:1rem !default;

$galleriaIndicatorsPadding:1rem !default;
$galleriaIndicatorBg:#dcdcdc !default;
$galleriaIndicatorHoverBg:#ececec !default;
$galleriaIndicatorBorderRadius:50% !default;
$galleriaIndicatorWidth:1.25rem !default;
$galleriaIndicatorHeight:1.25rem !default;
$galleriaIndicatorsBgOnItem:rgba(0,0,0,.5) !default;
$galleriaIndicatorBgOnItem:rgba(255,255,255,.4) !default;
$galleriaIndicatorHoverBgOnItem:rgba(255,255,255,.6) !default;

$galleriaThumbnailContainerBg:rgba(0,0,0,.9) !default;
$galleriaThumbnailContainerPadding:1rem .25rem !default;
$galleriaThumbnailNavigatorBg:transparent !default;
$galleriaThumbnailNavigatorColor:rgba(255,255,255,.87) !default;
$galleriaThumbnailNavigatorHoverBg:rgba(255,255,255,0.1) !default;
$galleriaThumbnailNavigatorHoverColor:rgba(255,255,255,.87) !default;
$galleriaThumbnailNavigatorBorderRadius:50% !default;
$galleriaThumbnailNavigatorWidth:2rem !default;
$galleriaThumbnailNavigatorHeight:2rem !default;

//divider
$dividerHorizontalMargin:1.25rem 0 !default;
$dividerHorizontalPadding:0 1.25rem !default;
$dividerVerticalMargin:0 1.25rem !default;
$dividerVerticalPadding:1.25rem 0 !default;
$dividerSize:1px !default;
$dividerColor:rgba(0,0,0,.12) !default;

//avatar
$avatarBg:rgba(0,0,0,.12) !default;
$avatarTextColor:$textColor !default;

//chip
$chipBg:rgba(0,0,0,.12) !default;
$chipTextColor:$textColor !default;
$chipBorderRadius: 16px !default;

//scrollTop
$scrollTopBg:$accentColor !default;
$scrollTopHoverBg:rgba($accentColor, .92) !default;
$scrollTopWidth:3rem !default;
$scrollTopHeight:3rem !default;
$scrollTopBorderRadius:50% !default;
$scrollTopFontSize:1.5rem !default;
$scrollTopTextColor:$accentTextColor !default;

//skeleton
$skeletonBg:rgba(0,0,0,.08) !default;
$skeletonAnimationBg:rgba(255,255,255,0.4) !default;

//splitter
$splitterGutterBg:rgba(0,0,0,.04) !default;
$splitterGutterHandleBg:rgba(0,0,0,.12) !default;

//speeddial
$speedDialButtonWidth: 4rem !default;
$speedDialButtonHeight: 4rem !default;
$speedDialButtonIconFontSize: 2rem !default;
$speedDialActionWidth: 3rem !default;
$speedDialActionHeight: 3rem !default;
$speedDialActionBg: $accentColor !default;
$speedDialActionHoverBg: rgba($accentColor, .92) !default;
$speedDialActionTextColor: #fff !default;
$speedDialActionTextHoverColor: #fff !default;

//dock
$dockActionWidth: 4rem !default;
$dockActionHeight: 4rem !default;
$dockItemPadding: .5rem !default;
$dockCurrentItemMargin: 1.5rem !default;
$dockFirstItemsMargin: 1.3rem !default;
$dockSecondItemsMargin: 0.9rem !default;
$dockBg: rgba(255,255,255,.1) !default;
$dockBorder: 1px solid rgba(255,255,255,0.2) !default;
$dockPadding: .5rem .5rem !default;
$dockBorderRadius: .5rem !default;

//image
$imageMaskBg:rgba(0,0,0,0.9) !default;
$imagePreviewToolbarPadding:1rem !default;
$imagePreviewIndicatorColor:#f8f9fa !default;
$imagePreviewIndicatorBg:rgba(0,0,0,0.5) !default;
$imagePreviewActionIconBg:transparent !default;
$imagePreviewActionIconColor:#f8f9fa !default;
$imagePreviewActionIconHoverBg:rgba(255,255,255,0.1) !default;
$imagePreviewActionIconHoverColor:#f8f9fa !default;
$imagePreviewActionIconWidth:3rem !default;
$imagePreviewActionIconHeight:3rem !default;
$imagePreviewActionIconFontSize:1.5rem !default;
$imagePreviewActionIconBorderRadius:50% !default;

:root {
    --surface-a:#ffffff;
    --surface-b:#fafafa;
    --surface-c:rgba(0,0,0,.04);
    --surface-d:rgba(0,0,0,.12);
    --surface-e:#ffffff;
    --surface-f:#ffffff;
    --text-color:#{$textColor};
    --text-color-secondary:#{$textSecondaryColor};
    --primary-color:#{$primaryColor};
    --primary-color-text:#{$primaryTextColor};
    --font-family:#{$fontFamily};
    --surface-0: #ffffff;
    --surface-50: #FAFAFA;
    --surface-100: #F5F5F5;
    --surface-200: #EEEEEE;
    --surface-300: #E0E0E0;
    --surface-400: #BDBDBD;
    --surface-500: #9E9E9E;
    --surface-600: #757575;
    --surface-700: #616161;
    --surface-800: #424242;
    --surface-900: #212121;
    --gray-50: #FAFAFA;
    --gray-100: #F5F5F5;
    --gray-200: #EEEEEE;
    --gray-300: #E0E0E0;
    --gray-400: #BDBDBD;
    --gray-500: #9E9E9E;
    --gray-600: #757575;
    --gray-700: #616161;
    --gray-800: #424242;
    --gray-900: #212121;
    --content-padding:#{$panelContentPadding};
    --inline-spacing:#{$inlineSpacing};
    --border-radius:#{$borderRadius};
    --surface-ground:#fafafa;
    --surface-section:#ffffff;
    --surface-card:#ffffff;
    --surface-overlay:#ffffff;
    --surface-border:rgba(0,0,0,.12);
    --surface-hover:rgba(0,0,0,.04);
}

</code></pre>
</div>

                <h4>Menu Modes</h4>
                <p>Menu has 2 modes; vertical and horizontal. Layout container element in App.vue is used to define which mode to use by adding specific classes. List
                below indicates the style classes for each mode.</p>

                <ul>
                    <li>Vertical: "layout-wrapper layout-wrapper-static"</li>
                    <li>Horizontal: "layout-wrapper layout-menu-horizontal"</li>
                </ul>

                <p>It is also possible to leave the choice to the user by keeping the preference at a component and using an expression to bind it so that user can switch between modes. Sample
                application has an example implementation of such use case. Refer to App.vue for an example.</p>

                <h4>Dark Menu</h4>
                <p>In addition to the layout options, menu also provides a dark alternative to the light mode. This mode is enabled by adding "layout-sidebar-dark" style class
                to "layout-sidebar" element in app.menu.component.html.</p>

                <h4>RTL</h4>
                <p>Layout can be used in RTL orientation as well by adding "layout-rtl" to the "layout-wrapper" div in App.vue.</p>

                <h4>Grid CSS</h4>
                <p>Serenity uses PrimeVue Flex Grid CSS throughout the demos such as Dashboard, however any Grid library can be used with it since Serenity Layout itself does not depend on PrimeFlex CSS.</p>

                <h4>Customizing Styles</h4>
                <p>It is suggested to add your customizations in the following sass files under the overrides folder instead of adding them to the
                    scss files under sass folder to avoid maintenance issues after an update.</p>

                <ul>
                    <li><b>_layout_variables</b>: Variables of the layout.</li>
                    <li><b>_layout_styles</b>: Styles for the layout.</li>
                    <li><b>_theme_variables</b>: Variables of the theme.</li>
                    <li><b>_theme_styles</b>: Styles for the theme.</li>
                </ul>

                <h4>Migration Guide</h4>
                <p>Every change is included in <b>CHANGELOG.md</b> file at the root folder of the distribution along with the instructions to update.</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped lang="scss">
@import '../assets/demo/styles/documentation.scss';

i {
    background-color: #fcf2a7;
    font-family: monaco,Consolas,Lucida Console,monospace;
    font-weight: 700;
    font-style: normal;
    font-size: 14px;
    padding: 2px;
}

li {
    line-height: 1.5;
}
</style>
