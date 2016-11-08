
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
      if(res.resultCode===204){
        this.$router.push("/")
      }
      if(res.resultCode===10) {
        this.userInfo = res.response
      }

    },
    onRouterChange() {
      console.log("onRouterChange")
    }
  },
  watch: {
    '$route': 'onRouterChange'
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




