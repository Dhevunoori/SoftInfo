<template>
    <div>
        <md-card v-for="item in items" :key="item.id" class="md-elevation-15">
            <md-card-header style="background-color: lightgray;">
                <div class="md-title">{{item.title}}</div>
            </md-card-header>
            <md-card-content>
                {{item.description}}
            </md-card-content>
            <md-card-actions>
                <md-button @click="removeItem(item.id)" class="md-icon-button md-raised">
                    <md-icon>delete</md-icon>
                </md-button>
            </md-card-actions>
        </md-card>
    </div>
</template>
<script>
export default {
    data() {
        return {
            items: [
                { title: "Brown eggs", id: 1, description: "Raw organic brown eggs in a basket", price: 28.1 },
                { title: "Asparagus", id: 2, description: "Asparagus with ham on the wooden table", price: 18.95 },
                { title: "Green smoothie", id: 3, description: "Glass of green smoothie with quail egg's yolk, served with cocktail tube, green apple and baby spinach leaves over tin surface. ", price: 17.68 },
                { title: "Raw legums", id: 4, description: "Raw legums on the wooden table", price: 17.11 }],
        }
    },
    created() {
        this.$store.commit('setTotalItems', this.items);
    },
    watch: {
        $route() {
            if (!this.$route.query.searchText) {
                this.items = this.$store.getters.gettotalItems;
            } else {
                this.getFilteredItem(this.$route.query.searchText);
            }
        }
    },
    mounted() {
        if (this.$route.query.searchText) {
            this.getFilteredItem(this.$route.query.searchText);
        }
    },
    methods: {
        /* Removes selected item from items on delete button click and returns remaing items.*/
        removeItem(key) {
            this.items = this.items.filter(item => {
                return item.id !== key;
            })
        },
        /*Gets the searched item from totalItems*/
        getFilteredItem(searchItem) {
            this.items = this.$store.getters.gettotalItems.filter(item => {
                return item.title === searchItem.replaceAll('-', ' ');
            })
        }
    }
}
</script>
<style scoped>
.md-card {
    width: 250px;
    margin: 20px;
    display: inline-block;
}

.md-card-content {
    overflow-y: auto;
    height: 80px
}
</style>