<template>
  <div>
    <form id="Checkout-form" class="white-popup-block mfp-hide">
      <h1>已選擇時段</h1>
      <fieldset>

        <table class="table table-hover accounts">
          <thead>
          <tr>
            <th width="15%">位置</th>
            <th width="25%">日期</th>
            <th width="30%">格數 / 秒</th>
            <th width="20%">金額</th>
            <th width="10%">狀態</th>

          </tr>
          </thead>
          <tbody>
          <tr>
            <td>頂好</td>
            <td> 105 / 12 / 02</td>
            <td>12 格 共 180秒</td>
            <td class="t-color4">1200元</td>
            <td class=""><button type="button" class="btn btn-is btn-sm"><i class="glyphicon glyphicon-trash"></i></button></td>
          </tr>

          </tbody>
        </table>

      </fieldset>
      <div class="form-group">
        <div class="col-xs-12 col-md-12 Checkout">
          共<span>23</span> 格  共 <span>345</span>秒  <span>2300</span>元
        </div>
      </div>
      <div class="form-group">
        <div class="col-xs-12 col-md-12 Checkout">
          <label><input type="checkbox" value=""> 請勾選同意 iscreen 的 <a href="#">服務條款</a> 以及 <a href="#">穩私權政策</a></label>
        </div>
      </div>
      <div class="form-group">
        <div class="row">

          <div class="col-xs-12 col-md-12"><a href="#" class="btn btn-is btn-block btn-lg">確定結帳</a></div>

        </div>
      </div>
    </form>


    <div class="pagecontainer">
      <div class="container">
        <div class="row">

          <div class="col-md-12">
            <div class="con_box">
              <div class="con_bar clearfix">
                <form class="form-inline">

                  <div class="col-md-7 col-md-offset-1">
                            <!--<span class="Checkout">-->
                              <!--共 <span>{{frameList ? frameList.length : 0}}</span> 格-->
                            <!--</span>-->
                            <span class="Checkout">
                              已選 <span>{{selectedFrame.length}}</span> 格
                            </span>

                    <span class="Checkout">
                              共 <span>{{selectedFrame.length * 15}}</span> 秒
                            </span>

                    <span class="Checkout"> 共<span>{{ selectedFrame.length * medUnitPrice }}</span> 元 </span>
                  </div>
                  <div class="col-md-3">
                    <button type="submit"
                            data-mfp-src="#Checkout-form"
                            v-popup
                            class="btn btn-Checkout popup-with-form"
                            @click="groupByDate"
                    >結 帳</button>
                  </div>

                </form>

              </div>
              <div class="con_bar clearfix">
                <form class="form-inline">
                  <div class="col-md-3 col-md-offset-1">
                    <h1>{{mediaTitle}}</h1>
                  </div>
                  <div class="col-md-3 text-center">
                    <select class="form-control" v-model="setDate">
                      <option value="">請選擇日期</option>
                      <option v-for="item in dateList" :value="item.date">{{item.date | date}}</option>
                    </select>
                  </div>
                  <div class="col-md-3 text-center">
                    <select class="form-control" v-model="setHour" :disabled="!setDate">
                      <option value="">請選擇時間</option>
                      <option v-for="h in hourList" :value="h">{{h | time}}</option>
                    </select>
                  </div>

                </form>
              </div>


              <div class="con_time">

                <ul v-if="setDate">
                  <li v-for="(f,i) in frameList">
                    <a :class="{time_no: f.frmStatus === 'SOLD', time_yes: f.selected}" @click="selectTime(f,i,f.frmStatus)">
                      <p>{{f.frmStartAt | time}}</p>
                      <p>{{f.frmEndAt | time}}</p>
                    </a>
                  </li>
                </ul>
              </div>


            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>
<script>

  import apiUtil from '../../utils/apiUtil'
  import comUtil from '../../utils/comUtil'

  export default{
    mixins: [comUtil,apiUtil],
    data(){
      return{
        mediaCls: null,
        frameList: null,
        mediaTitle: "",
        dateList: [],
        hourList: [],
        selectedFrame: [],
        medUnitPrice: 0,
        setDate: "",
        setHour: "",
      }
    },
    watch: {
      selectedFrame(val) {
        sessionStorage.setItem("cart", JSON.stringify(val))
      },
      setDate(date) {
        if(date) {
          var i = _.findIndex(this.dateList,{date})
          var targetDate = this.dateList[i]
          var sh = moment(targetDate.startAt)
          var eh = moment(targetDate.endAt)
          this.makeHourList(sh,eh)
        }
      },
      setHour(hour) {
        if(hour) {
          this.getMedFrame()
        }
      }
    },
    beforeMount() {
      this.checkIfLogin()
      if(sessionStorage.getItem("cart")){
        this.selectedFrame = JSON.parse(sessionStorage.getItem("cart"))
      }
    },
    mounted() {
      this.getData()
    },
    methods: {
      async getMedFrame() {
        let data = {
          med_sn: this.$route.params.sn,
          date: moment(this.setDate).format("YYYY-MM-DD"),
          hour: moment(this.setHour).hour(),
          orderBy: "frmStartAt",
        }
        var res = await this.api("get","med/frm/id/search",data)
        this.frameList = _.map(res.response.items,item=>{
          item.selected = false
          return item
        })
        var cart = JSON.parse(sessionStorage.getItem("cart"))
        _.each(cart,item=>{
          _.each(this.frameList,frm=>{
            if(item.frmId === frm.frmId){
              frm.selected = true
            }
          })
        })

      },
      makeHourList(sh,eh) {
        this.hourList = []
        while(sh < eh) {
          this.hourList.push(+sh)
          sh = sh.add(1,'hours')
        }
        this.setHour = this.hourList[0]
      },
      async getData() {
        var res = await this.api("get",`med/${this.$route.params.sn}`)
        this.mediaTitle = res.response.medTitle
        this.medUnitPrice = res.response.medUnitPrice
        let data = {
          medSn: this.$route.params.sn,
          medStartDate: moment().add(1, 'days').format("YYYY-MM-DD"),
          medEndDate: moment().add(61, 'days').format("YYYY-MM-DD"),
          orderBy: "date"
        }

        var res = await this.api("get",`med/date`,data)
        this.dateList = res.response.items

      },
      selectTime(f,i,status) {
        if(status!=='SOLD'){
          this.frameList[i].selected = !this.frameList[i].selected
          if(this.frameList[i].selected){
            this.selectedFrame = _.concat(this.selectedFrame,[this.frameList[i]])
          }else{
            this.selectedFrame = _.filter(this.selectedFrame,frm=>{
              return frm.frmId !== this.frameList[i].frmId
            })
          }
        }

      },
      groupByDate() {
        var arr = _.keyBy(this.selectedFrame,"frmDate")
        console.log(arr)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  ul > li
    a
      padding: 0
      cursor: pointer
      &.time_no
        cursor: default
    label
      display: block
      cursor: pointer


</style>
