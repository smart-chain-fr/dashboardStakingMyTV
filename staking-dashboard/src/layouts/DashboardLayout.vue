<template>
    <div id="layout-dashboard">
        <Navigation/>
        <router-view/>
    </div>
</template>

<script>
import Navigation from "./components/Navigation";

// import {mapGetters} from "vuex";
export default {
    name: "DashboardLayout",
    props: {
        source: String
    },
    components: {
        Navigation
    },
    computed: {
        
    }
}
</script>
<style>
    html {
        background-color: black!important;
    }
</style>
