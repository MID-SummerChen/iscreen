export default {
  data() {
    return {
      host: "http://113.196.112.149:8080",
      path: "adps_dev/api",
      isLoading: false,
      resultCodes: [
        {code: 10, msg: "執行成功"},
        {code: 101, msg: "等待驗證"},
        {code: 20, msg: "執行失敗"},
        {code: 201, msg: "參數錯誤"},
        {code: 202, msg: "帳號錯誤"},
        {code: 203, msg: "密碼錯誤"},
        {code: 204, msg: "登入狀態錯誤(未登入)"},
        {code: 205, msg: "權限錯誤"},
        {code: 206, msg: "記錄不存在錯誤"},
        {code: 207, msg: "髒資料"},
        {code: 208, msg: "記錄重複錯誤"},
        {code: 209, msg: "違法存取錯誤"},
        {code: 210, msg: "檔案格式錯誤"},
        {code: 211, msg: "檔案大小錯誤"},
        {code: 212, msg: "圖檔比例錯誤"},
        {code: 213, msg: "關連資料存在錯誤"},
        {code: 300, msg: "記錄狀態錯誤"},
        {code: 301, msg: "存在待審核記錄錯誤"},
        {code: 302, msg: "不存在待審核記錄錯誤"},
        {code: 303, msg: "不存在合法記錄錯誤"},
        {code: 400, msg: "沒有資源錯誤"},
        {code: 999, msg: "Client端網路錯誤"},
      ]
    }
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
    onReqSuccess(res) {
      var _index = _.findIndex(this.resultCodes,{code: res.resultCode})
      if(_index > -1){
        swal(this.resultCodes[_index].msg)
      }
    },
    onReqError(res) {
      swal("連線逾時或系統錯誤")
    }
  }
};




