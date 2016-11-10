<template>
  <div>
    <form id="record-form" class="white-popup-block mfp-hide">
      <h1>	105 / 12 / 02 時段狀態</h1>
      <fieldset style="border:0;">

        <table class="table table-hover accounts">
          <thead>
          <tr>
            <th width="15%">位置</th>
            <th width="25%">日期</th>
            <th width="30%">時間</th>

            <th width="10%">狀態</th>

          </tr>
          </thead>
          <tbody>
          <tr v-for="f in uFrmList">
            <td>{{getMedName(f.medSn)}}</td>
            <td>{{f.frmDate | date}}</td>
            <td>{{f.frmStartAt | time}} ~ {{f.frmEndAt | time}}</td>

            <td v-if="f.frmStatus==='DONE'" class="status fontG">已播</td>
            <td v-if="f.frmStatus==='DUE'" class="status">已過期</td>
            <td v-else class="status fontR">未播</td>
          </tr>

          </tbody>
        </table>


      </fieldset>
      <div class="form-group">
        <div class="col-xs-12 col-md-12 Checkout">
          共<span>{{uFrmList.length}}</span> 格  共 <span>{{uFrmList.length * 15}}</span>秒
        </div>
      </div>

    </form>
    <div class="pagecontainer">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="con_box">
              <div class="record_con clearfix">
                <div class=" col-md-12">
                  <h1>影格記錄</h1>
                  <table class="table table-hover accounts">
                    <thead>
                    <tr>
                      <th>位置</th>
                      <th>日期</th>
                      <th>格數 / 秒</th>
                      <!--<th>開始時間</th>-->
                      <!--<th>結束時間</th>-->
                      <th>明細</th>

                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(arr,dateKey) in uFrmDateList">
                      <td>{{getMedName(arr[0].medSn)}}</td>
                      <!--<td>{{arr[0].Media_medSn.medTitle}}</td>-->
                      <td>{{dateKey | date}}</td>
                      <td>{{arr.length}} 格 共 {{arr.length * 15}}秒</td>
                      <!--<td>{{f.frmStartAt | time}}</td>-->
                      <!--<td>{{f.frmEndAt | time}}</td>-->
                      <td class="lists">
                        <button v-popup
                                @click="showFrameDetail(dateKey)"
                                data-mfp-src="#record-form"
                                class="btn btn-is btn-sm"
                        >明細</button>
                      </td>
                    </tr>

                    </tbody>
                  </table>

                </div>

                <div class="page-nation">
                  <ul class="pagination  pagination-sm">
                    <li class="disabled"><span>«</span></li>
                    <li class="active"><span>1</span></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">6</a></li>
                    <li><a href="#">7</a></li>
                    <li><a href="#">8</a></li>
                    <li><a href="#">9</a></li>
                    <li class="disabled"><span>...</span></li><li>
                    <li><a rel="next" href="#">Next</a></li>

                  </ul>
                </div>
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
    mixins: [apiUtil,comUtil],
    data(){
      return{
        testArr: null,
        initUserFrames: [],
        uFrmList: [],
        uFrmDateList: [],
        currentFrame: {},
      }
    },
    beforeMount() {
      this.checkIfLogin()

    },
    computed: {
      mediaList() {
        return this.$parent.mediaList ? this.$parent.mediaList : null
      }
    },
    watch: {
      userInfo(val) {
        if(val) this.getMediaFrame()
      }
    },
    mounted() {
    },
    methods: {
      showFrameDetail(date) {
        this.uFrmList = _.filter(this.initUserFrames,{frmDate: date})
      },
      async getMediaFrame() {
        var data = {
          ac_sn: this.userInfo.acSn
        }
        var res = await this.api("get","med/frm/id/search",data)
        this.initUserFrames = res.response.items
        this.uFrmDateList = _.groupBy(this.initUserFrames,"frmDate")
        console.log(this.uFrmDateList)
        this.testArr = this.uFrmDateList

//        var res = await this.api("get","ord")
      },
      getMedName(medSn) {
       return _.find(this.mediaList,{medSn}).medTitle
      }
    }
  }
</script>

<style lang="stylus">

</style>
