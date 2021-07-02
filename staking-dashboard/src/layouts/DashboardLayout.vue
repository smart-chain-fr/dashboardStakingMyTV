<template>
    <div id="layout-dashboard">
        <Navigation address="0x1234567890987654"/>
        <router-view/>
    </div>
</template>

<script>
import Navigation from "./components/Navigation";

export default {
    name: "DashboardLayout",
    props: {
        source: String
    },
    components: {
        Navigation
    }
}
</script>
<style>
    html {
        background-color: black!important;
    }
</style>
