
export default {
  data() {
    return {
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

    }
  },
  directives: {
    popup: {
      inserted(el) {
        $(el).magnificPopup({
          type: 'inline',
          preloader: false,
          callbacks: {
            beforeOpen: function() {
            }
          }
        });
      }
    }
  }
};




