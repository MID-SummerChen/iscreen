import path from 'path';
export default {
  data() {
    return {
      host: "http://113.196.112.149:8080",
      path: "adps_dev/api",
      isLoading: false,
    };
  },
  computed: {

  },
  methods: {
    api(method,url,data) {
      return $.ajax({
        method: method,
        url: `${this.host}/${this.path}/${url}`,
        data,
        xhrFields: {withCredentials: true},
        crossDomain: true,
        complete: this.onReqComplete,
        success: this.onReqSuccess,
        beforeSend: this.beforeReq,
        error: this.onReqError
      });
    },
    beforeReq() {
      this.isLoading = true
      console.log(this.isLoading)
    },
    onReqComplete() {
      this.isLoading = false
      console.log(this.isLoading)
    },
    onReqSuccess() {
      swal("成功")
    },
    onReqError() {
      swal("錯誤發生")
    }
  }
};




