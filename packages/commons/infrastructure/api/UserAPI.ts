export default class {
  protected $axios: any;
  constructor(axios: any) {
    this.$axios = axios;
  }
  login(data: any) {
    return this.$axios.post('/login', data);
  }
  signup(data: any) {
    console.log(data);
    return this.$axios.post('/auth/register', data);
  }
  forgotPass(email: string) {
    return this.$axios.post('/forgotPass', email);
  }
  changeUserData(data: any) {
    return this.$axios.update('/changeData', data);
  }
  validatePayment(data: any) {
    return this.$axios.post('/payment', data);
  }
}
