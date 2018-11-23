<template>
    <section class="container">
        <div class="card">
            <div class="card-header">
                Manager User
            </div>
            <div class="card-body">
                <nuxt-link to="/users/create" class="btn btn-primary">Create User</nuxt-link>
                <table class="table table-striped table-bordered">
                    <thead class="thead-dark">
                        <tr>
                        <th scope="col" width='5%'>#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in users" :key="user.id">
                            <td width="5%">{{user.id}}</td>
                            <td>{{user.name}}</td>
                            <td>{{user.email}}</td>
                            <td>{{user.status ? 'Actived' : 'Disabled'}}</td>
                            <td>
                                <span class="btn btn-warning" @click="edit(user.id)">edit</span>
                                <span class="btn btn-danger"  @click="del(user.id)">del</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    async fetch ({ store, params }) {   
       await store.dispatch('user/getUsers');
    },
    computed: {
        users () { 
            return this.$store.state.user.users
        }
    },
    methods: {
        edit(id) {
            return this.$router.push({name: 'users-edit-id', params: {id}})
        },
        async del(id) {
            await this.$store.dispatch('user/deleteUser', id);
            this.$store.dispatch('user/getUsers');
        },
    }
}
</script>

<style>
    tbody {
        display:block;
        height:400px;
        overflow:auto;
    }
    thead, tbody tr {
        display:table;
        width:100%;
        table-layout:fixed;
    }
    thead {
        width: calc( 100% - 1em )
    }
</style>
