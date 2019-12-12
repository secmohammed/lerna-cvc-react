
export default class {
    protected $axios:any;
    constructor(axios: any) {
        this.$axios = axios;
    }
    index() {
        return this.$axios.$get('/categories');
    }
    store(data) {
        return this.$axios.post('/categories', data);
    }
    update(id, data) {
        return this.$axios.put(`/categories/${id}`, data);
    }
    delete(id) {
        return this.$axios.delete(`/categories/${id}`)
    }
}
