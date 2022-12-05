<template><div id="layout-config" :class="containerClass">

<!-- Gets rid of that gear and other stuff i dont need
        <a href="#" class="layout-config-button" id="layout-config-button" @click="toggleConfigurator">
            <i class="pi pi-cog"></i>
        </a>
        <a href="#" class="layout-config-close" @click="hideConfigurator">
            <i class="pi pi-times"></i>
        </a>
        <div class="layout-config-content">
            <div class="px-3 pt-3">
                <h5>Theme Customization</h5>
                <span>Serenity offers different themes for layout, topbar, menu etc.</span>
            </div>

            <hr class="mb-0" />

            <div class="layout-config-options p-3">
                <h6 class="mt-0">Layout Color Mode</h6>
                <div class="formgroup-inline">
                    <div class="field-radiobutton">
                        <RadioButton id="dark" name="layoutScheme" value="dark" v-model="d_layoutScheme" @change="changeLayoutScheme($event, 'dark')" />
                        <label for="dark">Dark</label>
                    </div>

                    <div class="field-radiobutton">
                        <RadioButton id="light" name="layoutScheme" value="light" v-model="d_layoutScheme" @change="changeLayoutScheme($event, 'light')" />
                        <label for="light">Light</label>
                    </div>
                </div>

                <h6 class="mt-0">Menu Mode</h6>
                <div class="formgroup-inline">
                    <div class="field-radiobutton">
                        <RadioButton id="overlay" name="layoutMode" value="overlay" v-if="d_layoutMode !== 'static'"
                            v-model="d_layoutMode" @change="changeLayout($event, 'overlay')" />
                        <RadioButton id="overlay" name="layoutMode" value="static" v-if="d_layoutMode === 'static'"
                            v-model="d_layoutMode" @change="changeLayout($event, 'static')" />
                        <label for="overlay">Vertical</label>
                    </div>
                    <div class="field-radiobutton">
                        <RadioButton id="horizontal" name="layoutMode" value="horizontal" v-model="d_layoutMode" @change="changeLayout($event, 'horizontal')" />
                        <label for="horizontal">Horizontal</label>
                    </div>
                </div>

                <h6 class="mt-0">Menu Color Mode</h6>
                <div class="formgroup-inline">
                    <div class="field-radiobutton">
                        <RadioButton id="dark" name="darkMenu" :value="true" v-model="d_darkMenu" :disabled="d_layoutScheme === 'dark'"
                            :style="{cursor: d_layoutScheme === 'dark' ? 'default' : 'pointer'}" @change="changeMenuColor($event, true)" />
                        <label for="dark">Dark</label>
                    </div>

                    <div class="field-radiobutton">
                        <RadioButton id="light" name="darkMenu" :value="false" v-model="d_darkMenu" :disabled="d_layoutScheme === 'dark'"
                            :style="{cursor: d_layoutScheme === 'dark' ? 'default' : 'pointer'}" @change="changeMenuColor($event, false)" />
                        <label for="light">Light</label>
                    </div>
                </div>

                <h6 class="mt-0">Orientation</h6>
                <div class="formgroup-inline">
                    <div class="field-radiobutton">
                        <RadioButton id="ltr" name="ltr" :value="false" v-model="d_isRTL" @change="changeOrientation($event, false)" />
                        <label for="ltr">LTR</label>
                    </div>

                    <div class="field-radiobutton">
                        <RadioButton id="rtl" name="rtl" :value="true" v-model="d_isRTL" @change="changeOrientation($event, true)" />
                        <label for="rtl">RTL</label>
                    </div>
                </div>

                <h6 class="mt-0">Input Style</h6>
                <div class="formgroup-inline">
                    <div class="field-radiobutton">
                        <RadioButton id="input_outlined" name="inputstyle" value="outlined" :modelValue="value" @update:modelValue="onChange" />
                        <label for="input_outlined">Outlined</label>
                    </div>
                    <div class="field-radiobutton">
                        <RadioButton id="input_filled" name="inputstyle" value="filled" :modelValue="value" @update:modelValue="onChange" />
                        <label for="input_filled">Filled</label>
                    </div>
                </div>

                <h6 class="mt-0">Ripple Effect</h6>
                <InputSwitch :modelValue='rippleActive' @update:modelValue='onRippleChange' />

                <h6>Flat Layouts</h6>
                <div class="layout-themes">
                    <div v-for="l of layoutColors" :key="l.name">
                        <a href="#" @click="changeLayoutColor($event, l.file)" class="flat-layouts" :style="{backgroundColor:l.color}">
                            <i class="pi pi-check" v-if="layoutColor === l.file"></i>
                        </a>
                    </div>
                </div>

                <h6>Special Layouts</h6>
                <div class="layout-themes">
                    <div v-for="l of layoutSpecialColors" :key="l.name">
                        <a href="#" @click="changeLayoutColor($event, l.file)">
                            <img :src="'layout/images/configurator/layout/special/' + l.image" :alt="l.name">
                            <i class="pi pi-check" v-if="layoutColor === l.file"></i>
                        </a>
                    </div>
                </div>

                <h6>Component Themes</h6>
                <div class="layout-themes">
                    <div v-for="t of themes" :key="t.name">
                        <a href="#" @click="changeTheme($event, t.name)" class="flat-layouts" :style="{backgroundColor:t.color}">
                            <i class="pi pi-check" v-if="theme === t.name"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
-->    
</div></template>

<script>
export default {
    emits: ['layout-change', 'menu-color-change', 'layout-color-change', 'theme-change', 'layout-scheme-change', 'change-orientation'],
    props: {
        layoutMode: {
            type: String,
            default: null,
        },
        darkMenu: {
            type: Boolean,
            default: null,
        },
        layoutScheme: {
            type: String,
            default: 'light',
        },
        layoutColor: {
            type: String,
            default: null,
        },
        layoutColors: {
            type: Array,
            default: null,
        },
        layoutSpecialColors: {
            type: Array,
            default: null,
        },
        theme: {
            type: String,
            default: null,
        },
        themes: {
            type: Array,
            default: null,
        },
        isRTL: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            active: false,
            d_layoutMode: this.layoutMode,
            d_darkMenu: this.darkMenu,
            d_layoutScheme: this.layoutScheme,
            d_isRTL: this.isRTL,
        };
    },
    watch: {
        $route() {
            if (this.active) {
                this.active = false;
                this.unbindOutsideClickListener();
            }
        },
        layoutMode(newValue) {
            this.d_layoutMode = newValue;
        },
        darkMenu(newValue) {
            this.d_darkMenu = newValue;
        },
        layoutScheme(newValue) {
            this.d_layoutScheme = newValue;
        },
        isRTL(newValue) {
            this.d_isRTL = newValue;
        },
    },
    outsideClickListener: null,
    methods: {
        onChange(value) {
            this.$primevue.config.inputStyle = value;
        },
        onRippleChange(value) {
            this.$primevue.config.ripple = value;
        },
        toggleConfigurator(event) {
            this.active = !this.active;
            event.preventDefault();

            if (this.active)
                this.bindOutsideClickListener();
            else
                this.unbindOutsideClickListener();
        },
        hideConfigurator(event) {
            this.active = false;
            this.unbindOutsideClickListener();
            event.preventDefault();
        },
        changeLayout(event, layoutMode) {
            this.$emit('layout-change', layoutMode);
            event.preventDefault();
        },
        changeLayoutScheme(event, scheme) {
            this.$emit('layout-scheme-change', scheme);
            event.preventDefault();
        },
        changeMenuColor(event, menuColor) {
            this.$emit('menu-color-change', menuColor);
            event.preventDefault();
        },
        changeLayoutColor(event, topbarColor, logo) {
            this.$emit('layout-color-change', topbarColor, logo);
            event.preventDefault();
        },
        changeTheme(event, theme) {
            this.$emit('theme-change', theme);
            event.preventDefault();
        },
        bindOutsideClickListener() {
            if (!this.outsideClickListener) {
                this.outsideClickListener = (event) => {
                    if (this.active && this.isOutsideClicked(event)) {
                        this.active = false;
                    }
                };
                document.addEventListener('click', this.outsideClickListener);
            }
        },
        unbindOutsideClickListener() {
            if (this.outsideClickListener) {
                document.removeEventListener('click', this.outsideClickListener);
                this.outsideClickListener = null;
            }
        },
        isOutsideClicked(event) {
            return !(this.$el.isSameNode(event.target) || this.$el.contains(event.target));
        },
        changeOrientation(event, orientation) {
            this.$emit('change-orientation', orientation);
            event.preventDefault();
        },
    },
    computed: {
        containerClass() {
            return ['layout-config', { 'layout-config-active': this.active }];
        },
        rippleActive() {
            return this.$primevue.config.ripple;
        },
        value() {
            return this.$primevue.config.inputStyle;
        },
    },
};
</script>
