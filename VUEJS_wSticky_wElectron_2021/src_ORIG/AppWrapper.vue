<template>
    <Login v-if="$route.path === '/login'" />
    <Error v-else-if="$route.path === '/error'" />
    <Access v-else-if="$route.path === '/access'" />
    <NotFound v-else-if="$route.path === '/notfound'" />
    <App v-else :theme="theme" :layoutScheme="layoutScheme" :layoutColor="layoutColor" :darkMenu='darkMenu' @menu-color-change="menuColorChange"
         @theme-change="changeTheme" @layout-change="changeLayout" @layout-scheme-change='changeLayoutScheme' />
</template>

<script>
    import App from './App.vue';
    import Error from './pages/Error';
    import Access from './pages/Access';
    import Login from './pages/Login';
    import NotFound from './pages/NotFound';

	export default {
        data() {
            return {
                theme: 'deeppurple',
                layoutScheme: 'light',
                layoutColor: 'deeppurple',
                darkMenu: false
            }
        },
        methods: {
            menuColorChange(menuColor) {
                this.darkMenu = menuColor;
            },
            changeLayoutScheme(scheme) {
                this.layoutScheme = scheme;
                this.darkMenu = scheme === 'dark';

                const themeLink = document.getElementById('theme-css');
                const urlTokens = themeLink.getAttribute('href').split('/');
                urlTokens[urlTokens.length - 1] = 'theme-' + this.layoutScheme + '.css';
                const newURL = urlTokens.join('/');

                this.replaceLink(themeLink, newURL);
            },
            changeTheme(theme) {
                this.theme = theme;

                const themeLink = document.getElementById('theme-css');
                const themeHref = '/theme/' + theme + '/theme-' + this.layoutScheme + '.css';
                this.replaceLink(themeLink, themeHref);
            },
            changeLayout(layout) {
                this.layoutColor = layout

                const layoutLink = document.getElementById('layout-css');
                const layoutHref = '/layout/css/layout-' + layout + '.css';
                this.replaceLink(layoutLink, layoutHref);
            },
            replaceLink(linkElement, href) {
                const id = linkElement.getAttribute('id');
                const cloneLinkElement = linkElement.cloneNode(true);

                cloneLinkElement.setAttribute('href', href);
                cloneLinkElement.setAttribute('id', id + '-clone');

                linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);

                cloneLinkElement.addEventListener('load', () => {
                    linkElement.remove();
                    cloneLinkElement.setAttribute('id', id);
                });
            },
        },
        components: {
            "App": App,
            "Error": Error,
            "Access": Access,
            "Login": Login,
            "NotFound": NotFound
        }
	}
</script>

<style scoped>
</style>
