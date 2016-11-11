
export default {
  data() {
    return {
      userInfo: null
    };
  },
  computed: {

  },
  methods: {
    async checkIfLogin() {
      var res = await this.api("get","ac/cms/signined")
      if(res.resultCode===10) this.userInfo = res.response

    },
    onRouterChange() {
      console.log("onRouterChange")
    }
  },
  watch: {
    '$route': 'onRouterChange'
  },
  filters: {
    date(val) {
      return moment(val).format("YYYY-MM-DD")
    },
    time(val) {
      return moment(val).format("HH:mm:ss")
    }
  },
  directives: {
    popup: {
      inserted(el) {
        $(el).magnificPopup({
          type: 'inline',
          preloader: false,
          callbacks: {
            beforeOpen: ()=> {
            },
            beforeClose: ()=> {
            },
          }
        });
      }
    }
  }
};




