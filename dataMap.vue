<!--
 描述: 首页
-->

<template>
  <div class="page-container">
    <div class="page-wrap" ref="editor">
      <div class="page-header"></div>
      <div class="page-content">
        <div class="page-content-left">
          <div class="page-title-top rowBox">
            <div class="title-rgdl">
              日供电量<span class="title-label top_r"
                ><span class="title-label-num top_r">{{ rgdl }}</span
                >kW-h</span
              >
            </div>
            <div class="title-rzdfh">
              日最大负荷<span class="title-label top_r"
                ><span class="title-label-num top_r">{{ rzdfh }}</span
                >kW</span
              >
            </div>
          </div>
          <div class="page-section">
            <div class="page-title">地区负荷曲线</div>
            <div class="page-cont h109">
              <commonChart
                :chartId="'chart_dqfhqx'"
                :currentOption="option_dqfhqx"
              />
            </div>
          </div>
          <div class="page-section">
            <div class="page-title">智慧站线</div>
            <div class="page-cont zhzx_div">
              <ul class="img-text-list rowBox rowBox-ar">
                <li>
                  <img
                    class="w96"
                    src="../assets/image/jqdw/zhzx.png"
                    alt="海坨智能变电站"
                  />
                  <span class="f16">海坨智能变电站</span>
                </li>
                <li>
                  <img
                    class="w96"
                    src="../assets/image/jqdw/zhdl.png"
                    alt="海坨智能变电站"
                  />
                  <span class="f16">松海智慧线路</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="page-section">
            <div class="page-title">日线损率</div>
            <div class="page-cont h128 rowBox rxsl_div">
              <div class="piechart_three">
                <commonChart
                  :chartId="'ringpie_zhxsl'"
                  :currentOption="option_zhxsl"
                />
                <span class="f14 color_subtext">综合线损率</span>
              </div>
              <div class="piechart_three">
                <commonChart
                  :chartId="'ringpie_fxxshgl'"
                  :currentOption="option_fxxshgl"
                />
                <span class="f14 color_subtext">分线线损合格率</span>
              </div>
              <div class="piechart_three">
                <commonChart
                  :chartId="'ringpie_tqxshgl'"
                  :currentOption="option_tqxshgl"
                />
                <span class="f14 color_subtext">台区线损合格率</span>
              </div>
            </div>
          </div>
          <div class="page-section">
            <div class="page-title">输电线路</div>
            <div class="page-cont">
              <ul class="img-text-list rowBox w_bfb_45">
                <li class="rowBox w_bfb_50">
                  <div class="img-text-list-l columnBox mr10">
                    <img
                      class="w62"
                      src="../assets/image/jqdw/sd-500.png"
                      alt="500kV输电线路"
                    />
                  </div>
                  <div class="img-text-list-r columnBox">
                    <div class="columnBox mb11">
                      <span class="f14 color_subtext">数量(条)</span>
                      <span class="f20 c_white">{{ sdxl_500kV_NUM }}</span>
                    </div>
                    <div class="columnBox">
                      <span class="f12 color_subtext">总长度(KM)</span>
                      <span class="f20 c_white">{{ sdxl_500kV_LENGTH }}</span>
                    </div>
                  </div>
                </li>
                <li class="rowBox">
                  <div class="img-text-list-l columnBox mr10 f-citems">
                    <img
                      class="w62"
                      src="../assets/image/jqdw/sd-220.png"
                      alt="220kV输电线路"
                    />
                  </div>
                  <div class="img-text-list-r columnBox">
                    <div class="columnBox mb11">
                      <span class="f14 color_subtext">数量(条)</span>
                      <span class="f20 c_white">{{ sdxl_220kV_NUM}}</span>
                    </div>
                    <div class="columnBox">
                      <span class="f12 color_subtext">总长度(KM)</span>
                      <span class="f20 c_white">{{ sdxl_220kV_LENGTH }}</span>
                    </div>
                  </div>
                </li>
                <li class="rowBox">
                  <div class="img-text-list-l columnBox mr10 f-citems">
                    <img
                      class="w62"
                      src="../assets/image/jqdw/sd-110.png"
                      alt="110kV输电线路"
                    />
                  </div>
                  <div class="img-text-list-r columnBox">
                    <div class="columnBox mb11">
                      <span class="f14 color_subtext">数量(条)</span>
                      <span class="f20 c_white">{{ sdxl_110kV_NUM }}</span>
                    </div>
                    <div class="columnBox">
                      <span class="f12 color_subtext">总长度(KM)</span>
                      <span class="f20 c_white">{{sdxl_110kV_LENGTH}}</span>
                    </div>
                  </div>
                </li>
                <li class="rowBox">
                  <div class="img-text-list-l columnBox mr10 f-citems">
                    <img
                      class="w62"
                      src="../assets/image/jqdw/sd-35.png"
                      alt="35kV输电线路"
                    />
                  </div>
                  <div class="img-text-list-r columnBox">
                    <div class="columnBox mb11">
                      <span class="f14 color_subtext">数量(条)</span>
                      <span class="f20 c_white">{{ sdxl_35kV_NUM }}</span>
                    </div>
                    <div class="columnBox">
                      <span class="f12 color_subtext">总长度(KM)</span>
                      <span class="f20 c_white">{{ sdxl_35kV_LENGTH }}</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="page-section">
            <div class="page-title">变电站</div>
            <div class="page-cont">
              <ul class="img-text-list rowBox w_bfb_45">
                <li class="rowBox">
                  <div class="img-text-list-l columnBox mr10">
                    <img
                      class="w62"
                      src="../assets/image/jqdw/bd-500.png"
                      alt="500kV变电路"
                    />
                  </div>
                  <div class="img-text-list-r columnBox">
                    <div class="columnBox mb11">
                      <span class="f14 color_subtext">数量（座）</span>
                      <span class="f20 c_white">{{ bdz_500kV_NUM }}</span>
                    </div>
                    <div class="columnBox">
                      <span class="f12 color_subtext">总容量（MVA）</span>
                      <span class="f20 c_white">{{ bdz_500kV_CAPACITY }}</span>
                    </div>
                  </div>
                </li>
                <li class="rowBox">
                  <div class="img-text-list-l columnBox mr10 f-citems">
                    <img
                      class="w62"
                      src="../assets/image/jqdw/bd-220.png"
                      alt="220kV变电路"
                    />
                  </div>
                  <div class="img-text-list-r columnBox">
                    <div class="columnBox mb11">
                      <span class="f14 color_subtext">数量(条)</span>
                      <span class="f20 c_white">{{ bdz_220kV_NUM }}</span>
                    </div>
                    <div class="columnBox">
                      <span class="f12 color_subtext">总容量（MVA）</span>
                      <span class="f20 c_white">{{ bdz_220kV_CAPACITY}}</span>
                    </div>
                  </div>
                </li>
                <li class="rowBox">
                  <div class="img-text-list-l columnBox mr10 f-citems">
                    <img
                      class="w62"
                      src="../assets/image/jqdw/bd-110.png"
                      alt="110kV变电路"
                    />
                  </div>
                  <div class="img-text-list-r columnBox">
                    <div class="columnBox mb11">
                      <span class="f14 color_subtext">数量(条)</span>
                      <span class="f20 c_white">{{ bdz_110kV_NUM }}</span>
                    </div>
                    <div class="columnBox">
                      <span class="f12 color_subtext">总容量（MVA）</span>
                      <span class="f20 c_white">{{ bdz_110kV_CAPACITY }}</span>
                    </div>
                  </div>
                </li>
                <li class="rowBox">
                  <div class="img-text-list-l columnBox mr10 f-citems">
                    <img
                      class="w62"
                      src="../assets/image/jqdw/bd-35.png"
                      alt="35kV变电路"
                    />
                  </div>
                  <div class="img-text-list-r columnBox">
                    <div class="columnBox mb11">
                      <span class="f14 color_subtext">数量(条)</span>
                      <span class="f20 c_white">{{ bdz_35kV_NUM }}</span>
                    </div>
                    <div class="columnBox">
                      <span class="f12 color_subtext">总容量（MVA）</span>
                      <span class="f20 c_white">{{ bdz_35kV_CAPACITY}}</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="page-content-center">
          <div class="page-header-list-wrap">
            <ul class="page-header-list" @click="switchRout($event)">
              <li class="tab_qjgl" data-rout="qjgl">全景概览</li>
              <li class="tab_jqzndw active" data-rout="home">坚强智能电网</li>
              <li class="tab_qyqdasq" data-rout="yqdasq">延庆冬奥赛区</li>
              <li class="tab_daptss" data-rout="daptss">冬奥配套设施</li>
              <li class="tab_nxzdpj" data-rout="nxzdpj">能效诊断评价</li>
            </ul>
          </div>
          <div class="mapWrap">
            <div id="allmap"></div>
          </div>
        </div>
        <div class="page-content-right">
          <div class="page-title-top rowBox">
            <div class="title-jrswdl">今日新能源上网电量</div>
            <div class="title-jrswdl-val">
              <span class="fyear top_r">{{ jrswdl }}</span
              ><span class="f14">kW-h</span>
            </div>
          </div>
          <div class="page-section">
            <div class="page-title">张北绿电日上网电量</div>
            <div class="page-cont h146">
              <commonChart
                :chartId="'chart_zbldrswdl'"
                :currentOption="option_zbldrswdl"
              />
            </div>
          </div>
          <div class="page-section">
            <div class="page-title">
              鹿鸣山风电厂日上网电量
              <span class="zjrl"
                >装机容量<span class="zjrlNum">{{ zjrl_lmsfdc }}</span
                ><span class="f14">kW</span></span
              >
            </div>
            <div class="page-cont h146">
              <commonChart
                :chartId="'chart_lmsfdcrswdl'"
                :currentOption="option_lmsfdcrswdl"
              />
            </div>
          </div>
          <div class="page-section">
            <div class="page-title">
              龙庆峡光伏电厂日上网电量<span class="zjrl"
                >装机容量<span class="zjrlNum">{{ zjrl_lqxgfdc }}</span>
                <span class="f14">kW</span>
              </span>
            </div>
            <div class="page-cont h146">
              <commonChart
                :chartId="'chart_lqxgfdcrswdl'"
                :currentOption="option_lqxgfdcrswdl"
              />
            </div>
          </div>
          <div class="page-section">
            <div class="page-title">
              八达岭光热电厂日上网电量<span class="zjrl"
                >装机容量<span class="zjrlNum">{{ zjrl_bdlgrdc }}</span
                ><span class="f14">kW</span></span
              >
            </div>
            <div class="page-cont h146">
              <commonChart
                :chartId="'chart_bdlgrdcrswdl'"
                :currentOption="option_bdlgrdcrswdl"
              />
            </div>
          </div>
          <div class="page-section">
            <div class="page-title">
              德清源沼气电厂日上网电量<span class="zjrl"
                >装机容量<span class="zjrlNum">{{ zjrl_dqyzqdc }}</span
                ><span class="f14">kW</span></span
              >
            </div>
            <div class="page-cont h146">
              <commonChart
                :chartId="'chart_dqyzqdcrswdl'"
                :currentOption="option_dqyzqdcrswdl"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- <sinan /> -->
      <!-- <seamless />
      <pyramid /> -->
    </div>
  </div>
</template>

<script>
import { screenSize } from "@/assets/js/utils";
import yanqing from "@/assets/json/yanqing.json";
import yqopt from "@/assets/js/yqopt";

//接口调用
import { findTodayEle,findTodayCap ,findTodayCapCurve,findLoseRate,findLine,findStation,findOnlineDetail } from '@/api/index.js';


let _this;var option_zhxsl_data=''
export default {
  name: "Home",
  components: {},
  data() {
    return {
      rgdl: "",
      rzdfh: "",
      // 输电线路
      sdxl_500kV_NUM:'',
      sdxl_220kV_NUM:'',
      sdxl_110kV_NUM:'',
      sdxl_35kV_NUM:'',
      sdxl_500kV_LENGTH:'',
      sdxl_220kV_LENGTH:'',
      sdxl_110kV_LENGTH:'',
      sdxl_35kV_LENGTH:'',
      // 变电站
      bdz_500kV_NUM:'',
      bdz_220kV_NUM:'',
      bdz_110kV_NUM:'',
      bdz_35kV_NUM:'',
      bdz_500kV_CAPACITY:'',
      bdz_220kV_CAPACITY:'',
      bdz_110kV_CAPACITY:'',
      bdz_35kV_CAPACITY:'',
      // bdz_35kV_zrl: 1000,
      option_zhxsl: {},
      option_fxxshgl: {},
      option_tqxshgl: {},
      option_dqfhqx: {},
      option_zbldrswdl: {},
      option_lmsfdcrswdl: {},
      option_lqxgfdcrswdl: {},
      option_bdlgrdcrswdl: {},
      option_dqyzqdcrswdl: {},
      // 今日新能源上网电量
      jrswdl:"",
      // 装机容量
      zjrl_lmsfdc: "",
      zjrl_lqxgfdc: "",
      zjrl_bdlgrdc: "",
      zjrl_dqyzqdc: "",
    };
  },
  computed: {},
  created() {},
  mounted() {
    var c=[];
    this.$nextTick(() => {
      //地图
      //this.addIconOverlay();
      //接口请求
       _this=this;
      // 请求日用电量
      findTodayEle().then(res => {
        if (res.status == "success") {
          for(var i=0;i<res.data.length;i++){
            this.rgdl=res.data[i].NUM
          }
        }else{
          alert(res.msg);  
        }
      });
      // 日最大负荷
      findTodayCap().then(res => {
        // console.log(res.data);
        if (res.status == "success") {
          for(var i=0;i<res.data.length;i++){
            this.rzdfh=res.data[i].NUM
          }
        }else{
          alert(res.msg);  
        }
      });
      // 地区负荷曲线
      findTodayCapCurve().then(res => {
        if (res.status == "success") {
          let dqfh_time=[],dqfh_NUM=[]
          for(var i=0;i<res.data.length;i++){
            this.option_dqfhqx = this.GLOBAL.chart_option_dqfhqx;
            dqfh_time.push(res.data[i].TIME)
            this.option_dqfhqx.xAxis.data=dqfh_time
            dqfh_NUM.push(res.data[i].NUM)
            this.option_dqfhqx.series[0].data=dqfh_NUM
          }
        }else{
          alert(res.msg);  
        }
      });
      // 日线损率 
      findLoseRate().then(res => {
        if (res.status == "success") {
          for(var i=0;i<res.data.length;i++){ 
            if(res.data[i].TYPE==1){
              //从全局变量中获取配置文件
              //从配置对象中找到data，和占比率 并修改值
              this.option_zhxsl = this.GLOBAL.chart_option_rxsl;
              let option_zhxsl_s = this.option_zhxsl.series
              //  value值
              option_zhxsl_s[0].data.value=res.data[i].NUM1
              // console.log(option_zhxsl_s )

              // 计算占比
              var ZB=res.data[i].ALLNUM - res.data[i].NUM1
              option_zhxsl_s[0].data[1].value=ZB
              // console.log(ZB)

              // 计算率
              this.option_zhxsl.title.text=(res.data[i].NUM1/res.data[i].ALLNUM).toFixed(4)
              this.option_zhxsl.title.text=(this.option_zhxsl.title.text)*100
              // console.info(this.option_zhxsl.title.text);

            }else if(res.data[i].TYPE==2){
              this.option_fxxshgl = this.GLOBAL.chart_option_fxxshgl;
              let option_fxxshgl_s = this.option_fxxshgl.series
              //  value值
              option_fxxshgl_s[0].data.value=res.data[i].NUM1

              // 计算占比
              var ZB=res.data[i].ALLNUM - res.data[i].NUM1
              option_fxxshgl_s[0].data[1].value=ZB

              // 计算率
              this.option_fxxshgl.title.text=(res.data[i].NUM1/res.data[i].ALLNUM).toFixed(4)
              this.option_fxxshgl.title.text=(this.option_fxxshgl.title.text)*100

            }else if(res.data[i].TYPE==3){
              this.option_tqxshgl = this.GLOBAL.chart_option_tqxshgl;
              let option_tqxshgl_s = this.option_tqxshgl.series
              //  value值
              option_tqxshgl_s[0].data.value=res.data[i].NUM1

              // 计算占比
              var ZB=res.data[i].ALLNUM - res.data[i].NUM1
              option_tqxshgl_s[0].data[1].value=ZB

              // 计算率
              this.option_tqxshgl.title.text=(res.data[i].NUM1/res.data[i].ALLNUM).toFixed(4)
              this.option_tqxshgl.title.text=(this.option_tqxshgl.title.text)*100
              // console.info(this.option_tqxshgl.title.text);

            }
          }
        }else{
          alert(res.msg);  
        }  
      });
 
      // 输电线路  findLine 
      findLine().then(res => {
        if (res.status == "success") {
          for(var i=0;i<res.data.length;i++){
            if(res.data[i].TYPE=='500kV'){
              this.sdxl_500kV_NUM=res.data[i].NUM
              this.sdxl_500kV_LENGTH=res.data[i].LENGTH;
            }else if(res.data[i].TYPE=='220kV'){
              this.sdxl_220kV_NUM=res.data[i].NUM;
              this.sdxl_220kV_LENGTH=res.data[i].LENGTH;
            }else if(res.data[i].TYPE=='110kV'){
              this.sdxl_110kV_NUM=res.data[i].NUM;
              this.sdxl_110kV_LENGTH=res.data[i].LENGTH;
            }
            else if(res.data[i].TYPE=='35kV'){
              this.sdxl_35kV_NUM=res.data[i].NUM;
              this.sdxl_35kV_LENGTH=res.data[i].LENGTH;
            }
          }
        }else{
          alert(res.msg);  
        }
      });
      // 变电站 findStation   
      findStation().then(res => {
        if (res.status == "success") {
          for(var i=0;i<res.data.length;i++){
            if(res.data[i].TYPE=='500kV'){
              this.bdz_500kV_NUM=res.data[i].NUM
              this.bdz_500kV_CAPACITY=res.data[i].CAPACITY;
            }else if(res.data[i].TYPE=='220kV'){
              this.bdz_220kV_NUM=res.data[i].NUM;
              this.bdz_220kV_CAPACITY=res.data[i].CAPACITY;
            }else if(res.data[i].TYPE=='110kV'){
              this.bdz_110kV_NUM=res.data[i].NUM;
              this.bdz_110kV_CAPACITY=res.data[i].CAPACITY;
            }
            else if(res.data[i].TYPE=='35kV'){
              this.bdz_35kV_NUM=res.data[i].NUM;
              this.bdz_35kV_CAPACITY=res.data[i].CAPACITY;
            }
          }
        }else{
          alert(res.msg);  
        }          
      });
      //右侧日上网电量
      findOnlineDetail().then(res => {
        if (res.status == "success") {
          // 图表数据
          let IN=res.data.IN;
          // 装机容量
          let OUT=res.data.OUT;
          var jrswdl_zx_num=0;
          for(var i=0;i<OUT.length;i++){
            if(OUT[i].TYPE=='2'){
              this.zjrl_lmsfdc=OUT[i].CAPACITYNUM
            }else if(OUT[i].TYPE=='3'){
              this.zjrl_lqxgfdc=OUT[i].CAPACITYNUM
            }else if(OUT[i].TYPE=='4'){
              this.zjrl_bdlgrdc=OUT[i].CAPACITYNUM
            }else if(OUT[i].TYPE=='5'){
              this.zjrl_dqyzqdc=OUT[i].CAPACITYNUM
            }
            jrswdl_zx_num += OUT[i].CAPACITYNUM 
          }
            this.jrswdl=jrswdl_zx_num
          // 张北绿电日上网电量
          let zb_time=[],zb_NUM=[],lms_time=[],lms_NUM=[],lqx_time=[],lqx_NUM=[],bdl_time=[],bdl_NUM=[],dqy_time=[],dqy_NUM=[]
          for(var i=0;i<IN.length;i++){
            if(IN[i].TYPE=='1'){
              this.option_zbldrswdl = this.GLOBAL.chart_option_zbldrswdl; 
              zb_time.push(IN[i].TIME)
              this.option_zbldrswdl.xAxis.data=zb_time
              zb_NUM.push(IN[i].ELENUM)
              this.option_zbldrswdl.series[0].data=zb_NUM
            }else if(IN[i].TYPE=='2'){
              this.option_lmsfdcrswdl = this.GLOBAL.chart_option_lmsfdcrswdl; 
              lms_time.push(IN[i].TIME)
              this.option_lmsfdcrswdl.xAxis.data=lms_time
              lms_NUM.push(IN[i].ELENUM)
              this.option_lmsfdcrswdl.series[0].data=lms_NUM
            }else if(IN[i].TYPE=='3'){
              this.option_lqxgfdcrswdl = this.GLOBAL.chart_option_lqxgfdcrswdl; 
              lqx_time.push(IN[i].TIME)
              this.option_lqxgfdcrswdl.xAxis.data=lqx_time
              lqx_NUM.push(IN[i].ELENUM)
              this.option_lqxgfdcrswdl.series[0].data=lqx_NUM      
            }else if(IN[i].TYPE=='4'){
              this.option_bdlgrdcrswdl = this.GLOBAL.chart_option_bdlgrdcrswdl; 
              bdl_time.push(IN[i].TIME)
              this.option_bdlgrdcrswdl.xAxis.data=bdl_time
              bdl_NUM.push(IN[i].ELENUM)
              this.option_bdlgrdcrswdl.series[0].data=bdl_NUM      
            }else if(IN[i].TYPE=='5'){
              this.option_dqyzqdcrswdl = this.GLOBAL.chart_option_dqyzqdcrswdl;
              dqy_time.push(IN[i].TIME)
              this.option_dqyzqdcrswdl.xAxis.data=dqy_time
              dqy_NUM.push(IN[i].ELENUM)
              this.option_dqyzqdcrswdl.series[0].data=dqy_NUM      
            }
          }  
        }else{
          alert(res.msg);  
        }
      });
    });
             
    //环形图配置项初始化


    // this.option_dqfhqx = this.GLOBAL.chart_option_dqfhqx;
    // this.option_zbldrswdl = this.GLOBAL.chart_option_zbldrswdl;
    // this.option_lmsfdcrswdl = this.GLOBAL.chart_option_lmsfdcrswdl;
    // this.option_lqxgfdcrswdl = this.GLOBAL.chart_option_lqxgfdcrswdl;
    // this.option_bdlgrdcrswdl = this.GLOBAL.chart_option_bdlgrdcrswdl;
    // this.option_dqyzqdcrswdl = this.GLOBAL.chart_option_dqyzqdcrswdl;

    //页面缩放
    //screenSize(this.$refs.editor)
  },
  methods: {
    addIconOverlay() {
      //this.currentMap
      var map = initMap({
        areaflag: "延庆区",
        tilt: 45,
        heading: 0,
        center: [116.1282, 40.449],
        zoom: "11.8",
        style: darkStyle,
      });

      /**
       * 连线动画
       * 方向：高往低
       * */
      var dataline = [];
      dataline.push(
        {
          type: "Feature",
          properties: {
            road: "昌平站-延庆换流站",
            count: 500,
          },
          geometry: {
            type: "LineString",
            coordinates: [
              [116.26968383789062, 40.26695230509778],
              [116.00051879882811, 40.37061262953356],
            ],
          },
        },
        {
          type: "Feature",
          properties: {
            road: "延庆换流站-西白庙",
            count: 220,
          },
          geometry: {
            type: "LineString",
            coordinates: [
              [116.00051879882811, 40.37061262953356],
              [115.99639892578125, 40.47620304302563],
            ],
          },
        },
        {
          type: "Feature",
          properties: { road: "西白庙-松山站", count: 110 },
          geometry: {
            type: "LineString",
            coordinates: [
              [115.99639892578125, 40.47620304302563],
              [115.9442138671875, 40.50231368920858],
            ],
          },
        },
        {
          type: "Feature",
          properties: { road: "松山站-海陀站", count: 110 },
          geometry: {
            type: "LineString",
            coordinates: [
              [115.9442138671875, 40.50231368920858],
              [115.806884765625, 40.509622849596695],
            ],
          },
        },
        {
          type: "Feature",
          properties: { road: "西白庙-康庄", count: 110 },
          geometry: {
            type: "LineString",
            coordinates: [
              [115.99639892578125, 40.47620304302563],
              [115.92636108398438, 40.4166327886885],
            ],
          },
        },
        {
          type: "Feature",
          properties: { road: "西白庙-东曹营", count: 220 },
          geometry: {
            type: "LineString",
            coordinates: [
              [115.99639892578125, 40.47620304302563],
              [116.12823486328126, 40.4490371952376],
            ],
          },
        },
        {
          type: "Feature",
          properties: { road: "东曹营-八达岭站", count: 220 },
          geometry: {
            type: "LineString",
            coordinates: [
              [116.12823486328126, 40.4490371952376],
              [116.21887207031249, 40.487692978918865],
            ],
          },
        },
        {
          type: "Feature",
          properties: { road: "八达岭站-东杏园", count: 110 },
          geometry: {
            type: "LineString",
            coordinates: [
              [116.21887207031249, 40.487692978918865],
              [116.14334106445314, 40.556591288249905],
            ],
          },
        },
        {
          type: "Feature",
          properties: { road: "八达岭站-延庆站", count: 110 },
          geometry: {
            type: "LineString",
            coordinates: [
              [116.21887207031249, 40.487692978918865],
              [116.25045776367186, 40.54406959045767],
            ],
          },
        },
        {
          type: "Feature",
          properties: { road: "八达岭站-下庄站", count: 110 },
          geometry: {
            type: "LineString",
            coordinates: [
              [116.21887207031249, 40.487692978918865],
              [116.26007080078125, 40.324561023141236],
            ],
          },
        },
        {
          type: "Feature",
          properties: { road: "海陀站-奥运村站", count: 110 },
          geometry: {
            type: "LineString",
            coordinates: [
              [115.806884765625, 40.509622849596695],
              [115.9112548828125, 40.5920567159421],
            ],
          },
        },
        {
          type: "Feature",
          properties: { road: "奥运村站--东杏园", count: 110 },
          geometry: {
            type: "LineString",
            coordinates: [
              [115.9112548828125, 40.5920567159421],
              [116.14334106445314, 40.556591288249905],
            ],
          },
        }
      );

      var view = new mapvgl.View({
        map: map,
      });

      //宽线条
      var lineLayer = new mapvgl.LineLayer({
        color: function (data) {
          if (data.properties.count == 110) {
            return "#1cecff";
          } else if (data.properties.count == 220) {
            return "#3b9cff";
          } else if (data.properties.count == 500) {
            return "#e38622";
          }
        },
        blend: "lighter",
        width: 4,
        style: "road",
      });

      view.addLayer(lineLayer);
      lineLayer.setData(dataline);

      //蚯蚓线
      var lineFlowLayer = new mapvgl.LineFlowLayer({
        color: function (data) {
          if (data.properties.count == 110) {
            return "#1cecff";
          } else if (data.properties.count == 220) {
            return "#3b9cff";
          } else if (data.properties.count == 500) {
            return "#e38622";
          }
        },
        zoom: 4,
        width: 10,
        animation: true,
        duration: 1, // 循环时间2s
        trailLength: 0.6, // 拖尾长度占间隔的0.4
        interval: 0.2, // 粒子长度占线整体长度的0.2
      });

      view.addLayer(lineFlowLayer);
      lineFlowLayer.setData(dataline);

      /**
       * 添加icon图层
       *
       * */

      var data110 = [],
        data220 = [],
        data500 = [],
        datazq = [],
        datagf = [],
        datagr = [],
        datafd = [];
      data110.push(
        {
          type: "Feature",
          properties: {
            "marker-color": "#00ffff",
            "marker-size": "medium",
            "marker-symbol": "",
            name: "110kv海陀站",
          },
          geometry: {
            type: "Point",
            coordinates: [115.806884765625, 40.509622849596695],
          },
        },
        {
          type: "Feature",
          properties: {
            "marker-color": "#00ffff",
            "marker-size": "medium",
            "marker-symbol": "",
            name: "110kv奥运村站",
          },
          geometry: {
            type: "Point",
            coordinates: [115.9112548828125, 40.5920567159421],
          },
        },
        {
          type: "Feature",
          properties: {
            "marker-color": "#00ffff",
            "marker-size": "medium",
            "marker-symbol": "",
            name: "110kv松山站",
          },
          geometry: {
            type: "Point",
            coordinates: [115.9442138671875, 40.50231368920858],
          },
        },
        {
          type: "Feature",
          properties: {
            "marker-color": "#00ffff",
            "marker-size": "medium",
            "marker-symbol": "",
            name: "110kv东杏园",
          },
          geometry: {
            type: "Point",
            coordinates: [116.14334106445314, 40.556591288249905],
          },
        },
        {
          type: "Feature",
          properties: {
            "marker-color": "#00ffff",
            "marker-size": "medium",
            "marker-symbol": "",
            name: "110kv延庆站",
          },
          geometry: {
            type: "Point",
            coordinates: [116.25045776367186, 40.54406959045767],
          },
        },
        {
          type: "Feature",
          properties: {
            "marker-color": "#00ffff",
            "marker-size": "medium",
            "marker-symbol": "",
            name: "110kv康庄站",
          },
          geometry: {
            type: "Point",
            coordinates: [115.92636108398438, 40.4166327886885],
          },
        }
      );
      data220.push(
        {
          type: "Feature",
          properties: {
            "marker-color": "#0080ff",
            "marker-size": "medium",
            "marker-symbol": "",
            name: "220kv西白庙站",
          },
          geometry: {
            type: "Point",
            coordinates: [115.99639892578125, 40.47620304302563],
          },
        },
        {
          type: "Feature",
          properties: {
            "marker-color": "#0080ff",
            "marker-size": "medium",
            "marker-symbol": "",
            name: "220kv东曹营站",
          },
          geometry: {
            type: "Point",
            coordinates: [116.12823486328126, 40.4490371952376],
          },
        },
        {
          type: "Feature",
          properties: {
            "marker-color": "#0080ff",
            "marker-size": "medium",
            "marker-symbol": "",
            name: "220kv八达岭站",
          },
          geometry: {
            type: "Point",
            coordinates: [116.21887207031249, 40.487692978918865],
          },
        },
        {
          type: "Feature",
          properties: {
            "marker-color": "#0080ff",
            "marker-size": "medium",
            "marker-symbol": "",
            name: "220kv下庄变电站",
          },
          geometry: {
            type: "Point",
            coordinates: [116.26007080078125, 40.324561023141236],
          },
        }
      );
      data500.push(
        {
          type: "Feature",
          properties: {
            "marker-color": "#ff8040",
            "marker-size": "medium",
            "marker-symbol": "",
            name: "500kv延庆换流站",
          },
          geometry: {
            type: "Point",
            coordinates: [116.00051879882811, 40.37061262953356],
          },
        },
        {
          type: "Feature",
          properties: {
            "marker-color": "#ff8040",
            "marker-size": "medium",
            "marker-symbol": "",
            name: "500kv昌平站",
          },
          geometry: {
            type: "Point",
            coordinates: [116.26968383789062, 40.26695230509778],
          },
        }
      );
      datazq.push({
        type: "Feature",
        properties: {
          "marker-color": "#ff8080",
          "marker-size": "medium",
          "marker-symbol": "",
          name: "德青源沼气",
        },
        geometry: {
          type: "Point",
          coordinates: [115.84671020507814, 40.483515047963024],
        },
      });
      datagf.push({
        type: "Feature",
        properties: {
          "marker-color": "#ff0000",
          "marker-size": "medium",
          "marker-symbol": "",
          name: "龙庆峡光伏",
        },
        geometry: {
          type: "Point",
          coordinates: [116.30126953125, 40.63688312646408],
        },
      });
      datagr.push({
        type: "Feature",
        properties: {
          "marker-color": "#ff00ff",
          "marker-size": "medium",
          "marker-symbol": "",
          name: "八达岭光热",
        },
        geometry: {
          type: "Point",
          coordinates: [116.16668701171875, 40.42813291388417],
        },
      });
      datafd.push({
        type: "Feature",
        properties: {
          "marker-color": "#008040",
          "marker-size": "medium",
          "marker-symbol": "",
          name: "鹿鸣山风电",
        },
        geometry: {
          type: "Point",
          coordinates: [115.88790893554686, 40.329795743702064],
        },
      });

      var view110 = new mapvgl.View({
          map: map,
        }),
        view220 = new mapvgl.View({
          map: map,
        }),
        view500 = new mapvgl.View({
          map: map,
        }),
        viewzq = new mapvgl.View({
          map: map,
        }),
        viewgf = new mapvgl.View({
          map: map,
        }),
        viewgr = new mapvgl.View({
          map: map,
        }),
        viewfd = new mapvgl.View({
          map: map,
        });

      var layer110 = new mapvgl.IconLayer({
        width: 43,
        height: 69,
        offset: [0, -69 / 2 / 2],
        icon: "images/bdz110.png",
        enablePicked: true, // 是否可以拾取
        selectedIndex: -1, // 选中项
        selectedColor: "#ffffff", // 选中项颜色
        autoSelect: false, // 根据鼠标位置来自动设置选中项
        onClick: (e) => {
          // 点击事件
          var dItem = e.dataItem;
          if (!dItem) {
            return;
          }
          console.log("当前点name：" + dItem.properties.name);
          console.log(dItem.geometry);
          let currentLat = dItem.geometry.coordinates[0],
            currentLng = dItem.geometry.coordinates[1];
          console.log("点击的坐标--lat：  " + currentLat);
          console.log("点击的坐标--lng：  " + currentLng);
        },
        onDblClick: (e) => {
          console.log("double click", e);
        },
        onRightClick: (e) => {
          console.log("right click", e);
        },
      });
      view110.addLayer(layer110);
      layer110.setData(data110);

      var layer220 = new mapvgl.IconLayer({
        width: 43,
        height: 69,
        offset: [0, -69 / 2 / 2],
        icon: "images/bdz220.png",
        enablePicked: true, // 是否可以拾取
        selectedIndex: -1, // 选中项
        selectedColor: "#ffffff", // 选中项颜色
        autoSelect: false, // 根据鼠标位置来自动设置选中项
        onClick: (e) => {
          // 点击事件
          var dItem = e.dataItem;
          if (!dItem) {
            return;
          }
          console.log("当前点name：" + dItem.properties.name);
          console.log(dItem.geometry);
          let currentLat = dItem.geometry.coordinates[0],
            currentLng = dItem.geometry.coordinates[1];
          console.log("点击的坐标--lat：  " + currentLat);
          console.log("点击的坐标--lng：  " + currentLng);
        },
        onDblClick: (e) => {
          console.log("double click", e);
        },
        onRightClick: (e) => {
          console.log("right click", e);
        },
      });
      view220.addLayer(layer220);
      layer220.setData(data220);

      var layer500 = new mapvgl.IconLayer({
        width: 43,
        height: 69,
        offset: [0, -69 / 2 / 2],
        icon: "images/bdz500.png",
        enablePicked: true, // 是否可以拾取
        selectedIndex: -1, // 选中项
        selectedColor: "#ffffff", // 选中项颜色
        autoSelect: false, // 根据鼠标位置来自动设置选中项
        text: "500",
        onClick: (e) => {
          // 点击事件
          var dItem = e.dataItem;
          if (!dItem) {
            return;
          }
          console.log("当前点name：" + dItem.properties.name);
          console.log(dItem.geometry);
          let currentLat = dItem.geometry.coordinates[0],
            currentLng = dItem.geometry.coordinates[1];
          console.log("点击的坐标--lat：  " + currentLat);
          console.log("点击的坐标--lng：  " + currentLng);
        },
        onDblClick: (e) => {
          console.log("double click", e);
        },
        onRightClick: (e) => {
          console.log("right click", e);
        },
      });
      view500.addLayer(layer500);
      layer500.setData(data500);

      var layerzq = new mapvgl.IconLayer({
        width: 42,
        height: 47,
        offset: [0, -47 / 2 / 2],
        icon: "images/zq.png",
        enablePicked: true, // 是否可以拾取
        selectedIndex: -1, // 选中项
        selectedColor: "#ffffff", // 选中项颜色
        autoSelect: false, // 根据鼠标位置来自动设置选中项
        onClick: (e) => {
          // 点击事件
          var dItem = e.dataItem;
          if (!dItem) {
            return;
          }
          console.log("当前点name：" + dItem.properties.name);
          console.log(dItem.geometry);
          let currentLat = dItem.geometry.coordinates[0],
            currentLng = dItem.geometry.coordinates[1];
          console.log("点击的坐标--lat：  " + currentLat);
          console.log("点击的坐标--lng：  " + currentLng);
        },
        onDblClick: (e) => {
          console.log("double click", e);
        },
        onRightClick: (e) => {
          console.log("right click", e);
        },
      });
      viewzq.addLayer(layerzq);
      layerzq.setData(datazq);

      var layergf = new mapvgl.IconLayer({
        width: 42,
        height: 47,
        offset: [0, -47 / 2 / 2],
        icon: "images/gf.png",
        enablePicked: true, // 是否可以拾取
        selectedIndex: -1, // 选中项
        selectedColor: "#ffffff", // 选中项颜色
        autoSelect: false, // 根据鼠标位置来自动设置选中项
        onClick: (e) => {
          // 点击事件
          var dItem = e.dataItem;
          if (!dItem) {
            return;
          }
          if (!dItem) {
            return;
          }
          console.log("当前点name：" + dItem.properties.name);
          console.log(dItem.geometry);
          let currentLat = dItem.geometry.coordinates[0],
            currentLng = dItem.geometry.coordinates[1];
          console.log("点击的坐标--lat：  " + currentLat);
          console.log("点击的坐标--lng：  " + currentLng);
        },
        onDblClick: (e) => {
          console.log("double click", e);
        },
        onRightClick: (e) => {
          console.log("right click", e);
        },
      });
      viewgf.addLayer(layergf);
      layergf.setData(datagf);

      var layergr = new mapvgl.IconLayer({
        width: 43,
        height: 51,
        offset: [0, -51 / 2 / 2],
        icon: "images/gr.png",
        enablePicked: true, // 是否可以拾取
        selectedIndex: -1, // 选中项
        selectedColor: "#ffffff", // 选中项颜色
        autoSelect: false, // 根据鼠标位置来自动设置选中项
        onClick: (e) => {
          // 点击事件
          var dItem = e.dataItem;
          if (!dItem) {
            return;
          }
          console.log("当前点name：" + dItem.properties.name);
          console.log(dItem.geometry);
          let currentLat = dItem.geometry.coordinates[0],
            currentLng = dItem.geometry.coordinates[1];
          console.log("点击的坐标--lat：  " + currentLat);
          console.log("点击的坐标--lng：  " + currentLng);
        },
        onDblClick: (e) => {
          console.log("double click", e);
        },
        onRightClick: (e) => {
          console.log("right click", e);
        },
      });
      viewgr.addLayer(layergr);
      layergr.setData(datagr);

      var layerfd = new mapvgl.IconLayer({
        width: 42,
        height: 47,
        offset: [0, -47 / 2 / 2],
        icon: "images/fd.png",
        enablePicked: true, // 是否可以拾取
        selectedIndex: -1, // 选中项
        selectedColor: "#ffffff", // 选中项颜色
        autoSelect: false, // 根据鼠标位置来自动设置选中项
        onClick: (e) => {
          // 点击事件
          var dItem = e.dataItem;
          if (!dItem) {
            return;
          }
          console.log("当前点name：" + dItem.properties.name);
          console.log(dItem.geometry);
          let currentLat = dItem.geometry.coordinates[0],
            currentLng = dItem.geometry.coordinates[1];
          console.log("点击的坐标--lat：  " + currentLat);
          console.log("点击的坐标--lng：  " + currentLng);
        },
        onDblClick: (e) => {
          console.log("double click", e);
        },
        onRightClick: (e) => {
          console.log("right click", e);
        },
      });
      viewfd.addLayer(layerfd);
      layerfd.setData(datafd);

      map.setDefaultCursor("default");
    },

    switchRout(e) {
      if (!$(e.target).hasClass("active")) {
        let rout = $(e.target).attr("data-rout");
        $(e.target).addClass("active");
        $(e.target).siblings().removeClass("active");
        this.$router.push("/" + rout);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.page-container {
  /*width: 1920px;
  height: 1080px;*/
  /* width: 3840px;
  height: 1080px;*/
  /*width: 5120px;
  height: 1536px;*/

  .page-wrap {
    position: relative;
    display: flex;
    transform-origin: 0px 0px 0px;
    background-image: url("../assets/image/bg.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: 0 0;
    background-color: rgb(0, 0, 0);
    min-width: auto;
    min-height: auto;
    /*暂时设置屏幕尺寸 */
    width: 100%;
    height: 100%;
    .page-header {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 200;
      width: 100%;
      height: 100px;
      background-color: transparent;
      background-image: url("../assets/image/head.png");
      background-size: auto;
      background-repeat: no-repeat;
      background-position: center top;
      border: none;
    }
    .page-content {
      width: 100%;
      flex: 1;
      margin-top: 100px;
      display: flex;
      flex-direction: row;
      align-content: flex-start;
      justify-content: space-between;
      .page-content-left {
        min-width: 435px;
        width: 435px;
        margin-left: 10px;
        background-color: transparent;
      }
      .page-content-center {
        flex: 1;
        background-color: transparent;
        position: relative;
        .page-header-list-wrap {
          width: 944px;
          height: 54px;
          line-height: 54px;
          transform: translateX(-50%);
          margin-left: 49%;
          /* background-image: url('../assets/image/page-header-list-bg.png');*/
          background-size: 100% 100%;
          background-repeat: no-repeat;
          background-position: 0 0;
          z-index: 200;
          .page-header-list {
            display: flex;
            flex-direction: row;
            align-content: center;
            justify-content: center;
            align-items: center;
            width: 840px;
            height: 54px;
            margin: 0 auto;

            li {
              text-align: center;
              flex: 1;
              background-image: none;
              background-position: center center;
              background-repeat: no-repeat;
              background-size: 100% 100%;
              color: #fff;
              font-size: 18px;
              height: 100%;
              cursor: pointer;
            }
            li.active {
              background-image: url("../assets/image/header_active.png");
              background-size: contain;
              background-repeat: no-repeat;
              background-position: center center;
              color: #2ec6ff;
              font-size: 22px;
            }
          }
        }
        .mapWrap {
          height: calc(100% - 54px);
          /*margin-top:-200px;*/
          #allmap {
            width: 100%;
            height: 100%;
            background-image: url("../assets/image/jqdw/map_bg.png");
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center -20%;
            background-color: rgb(0, 0, 0);
          }
        }
      }
      .page-content-right {
        min-width: 435px;
        width: 435px;
        margin-right: 10px;
        background-color: transparent;
      }

      .page-title-top {
        font-size: 18px;
        height: 40px;
        line-height: 40px;
        padding: 0 16px;
        background-image: url("../assets/image/title.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: 0 0;
        color: #fff;
        .title-label {
          font-size: 14px;
          .title-label-num {
            font-family: "YEAR";
            font-size: 28px;
          }
        }
      }
      .page-section {
        margin-top: 4px;
        .page-title {
          position: relative;
          height: 34px;
          line-height: 34px;
          border-left: 4px solid #27f2ff;
          text-indent: 20px;
          color: #fff;
          font-size: 20px;
          font-weight: bold;

          background: linear-gradient(
            to right,
            rgba(11, 58, 119, 1),
            rgba(11, 58, 119, 0)
          ); /* 标准的语法 */
          .zjrl {
            position: absolute;
            right: 10px;
            font-size: 16px;
            width:35%;
            .zjrlNum {
              font-family: "YEAR";
              font-size: 20px;
              margin-left: 10px;
            }
          }
        }
        .page-cont {
          position: relative;
        }
        .page-cont.h109 {
          width: 100%;
          height: 109px;
        }
        .page-cont.h146 {
          width: 100%;
          height: 146px;
        }
        .page-cont.h156 {
          width: 100%;
          height: 156px;
        }
        .page-cont.h128 {
          width: 100%;
          height: 128px;
        }
        .page-cont.h108 {
          width: 100%;
          height: 108px;
        }
        .img-text-list {
          color: #fff;
          li {
            margin-top: 2px;
            display: flex;
            flex-direction: column;
            align-content: center;
            justify-content: center;
            color: #bde6ea;
          }
          li.rowBox {
            flex-direction: row !important;
            flex-wrap: nowrap;
          }
        }
        .img-text-list.w_bfb_45 {
          li {
            width: 50%;
          }
        }
      }
      // 新增
      // 左上顶部
      .top_r{
        padding-left: 3px;
        padding-right: 3px;
      }
      .piechart_three {
        width: 30%;
        height: 65%;
        text-align: center;
        // padding-top: 10px;
      }
      .color_subtext {
        color: #bde6ea;
      }
      .w62 {
        margin-bottom: 0px !important;
      }
      .rxsl_div {
        justify-content: start;
        align-items: center;
        // padding-top: 5px;
      }
      .img-text-list.w_bfb_45 {
        margin-bottom: 2px;
        padding-left: 10px;
      }
      .img-text-list {
        li {
          justify-content: flex-start !important;
        }
      }
      /*智慧战线*/
      .zhzx_div li {
        padding: 0 10px;
        width: 40%;
      }
      img.w96 {
        margin-bottom: 0px;
      }
    }
  }
}
</style>
