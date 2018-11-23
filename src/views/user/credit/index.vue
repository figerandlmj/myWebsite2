<template>
  <div class="credit">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane :label="'全部 ' + totalData" name="first"></el-tab-pane>
      <el-tab-pane :label="'审核中 ' + num['second']" name="second"></el-tab-pane>
      <el-tab-pane :label="'审核通过 ' + num['third']" name="third"></el-tab-pane>
      <el-tab-pane :label="'审核拒绝 ' + num['fourth']" name="fourth"></el-tab-pane>
    </el-tabs>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="uuid"
        label="借款申请编号"
        width="200">
      </el-table-column>
      <el-table-column
        prop="project"
        label="产品名称">
      </el-table-column>
      <el-table-column
        prop="appamount"
        label="申请金额（元）">
      </el-table-column>
      <el-table-column
        prop="examamount"
        label="审批金额（元）">
      </el-table-column>
      <el-table-column
        label="还款方式">
        <template slot-scope="scope">
          {{ scope.row.repaytype === 0 ? '定额本息' : scope.row.repaytype === 1 ? '等额本息' : scope.row.repaytype === 2 ? '随借随还' : '' }}
        </template>
      </el-table-column>
      <el-table-column
        prop="lasttime"
        label="借款期限">
      </el-table-column>
      <el-table-column
        label="状态">
        <template slot-scope="scope">
          {{ scope.row.status === 0 ? '审核中' : scope.row.status === 1 ? '审核通过' : scope.row.status === 2 ? '审核拒绝' : '' }}
        </template>
      </el-table-column>
      <el-table-column
        prop="created"
        label="申请时间"
        width="160">
      </el-table-column>
    </el-table>
    <el-pagination v-if="totalData"
      background
      layout="prev, pager, next"
      :total="totalData"
      @current-change="currentChange">
    </el-pagination>
  </div>
</template>

<script>
  import { getApply, getApplyStatus } from '@/api/login'
  export default {
    name: 'credit',
    components: {

    },
    data () {
      return {
        activeName: 'first',
        status: '',//状态
        num: {
          'second': 0,
          'third': 0,
          'fourth': 0,
        },
        pageNumber: 1,//当前页码
        tableData: [],
        totalData: 0,
      }
    },
    created() {
      this.init()
      this.getStatus()
    },
    methods: {
      getStatus(){
        // 获取借款列表各状态数据条数
        getApplyStatus().then(response => {
          const code = response.code;
          if(code === 200) {
            let data = response.data
            this.num['second'] = data.unexam
            this.num['third'] = data.pass
            this.num['fourth'] = data.unpass
            this.totalData = data.unexam + data.pass + data.unpass
          }else{
            console.log(response.msg);
          }
        }).catch(error => {
          console.log(error);
        })
      },
      init(){
        let param = {
          status: this.status,
          pageNumber: this.pageNumber,
          pageSize: 10
        }
        // 个人中心，借款列表
        getApply(param).then(response => {
          const code = response.code;
          if(code === 200) {
            this.tableData = response.data.list
            // this.totalData = response.data.totalRow
          }else if(code === 500){
            this.$message('请先登录');
            localStorage.removeItem('userMobile');
            this.$router.push({
              name: 'login'
            });
          }else{
            console.log(response.msg);
          }
        }).catch(error => {
          console.log(error);
        })
      },
      // tab筛选
      handleClick(tab, event) {
        // console.log(this.activeName);
        this.status = this.activeName === 'second' ? 0 : this.activeName === 'third' ? 1 : this.activeName === 'fourth' ? 2 : ''
        this.pageNumber = 1;
        this.init();
      },
      // 分页
      currentChange(currentPage) {
        this.pageNumber = currentPage;
        this.init();
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .el-pagination{
    float: right;
    margin-top: 20px;
  }
</style>
