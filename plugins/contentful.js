import Vue from "vue";
import { createClient } from "contentful";

Vue.prototype.$api = createClient({
    space: process.env.CTF_SPACE_ID,
    accessToken: process.env.CTF_CDA_ACCESS_TOKEN,
});
