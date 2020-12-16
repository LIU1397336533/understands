<template>
  <div id="app">
    <div class="header">
      <div class="headtop">
        <span class="zi">知之为知之</span>
      </div>
      <div class="headbottom">
        <i class="icon iconfont icon-fangdajing"></i>
        <input type="text" placeholder="注册资本缴纳有何要求？">
      </div>
    </div>
    <div class="content">
      <router-view/>
    </div>
    <div class="footer">
      <div>
        <i class="icon iconfont icon-fangdajing"></i>
        <span>问答</span>
      </div>
      <div>
        <i class="icon iconfont icon-fangdajing"></i>
        <span>发现</span>
      </div>
      <div>
        <i class="icon iconfont icon-fangdajing"></i>
        <span>我的</span>
      </div>
    </div>

  </div>
</template>

<style lang="scss">
html,body{
  width: 100%;
  height: 100%;
}
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
  #app{
    width: 100%;
    display: flex;
    flex-direction: column;
    .header{
      width: 100%;
      padding: 20px 40px;
      box-sizing: border-box;
      background: #0084ff;
      .headtop{
        display: flex;
        justify-content: center;
        padding: 40px 0;
        color: #fff;
      }
      .headbottom{
        width: 100%;
        padding: 20px 30px;
        background: #fff;
        border-radius: 10px;
        box-sizing: border-box;
        i{
          font-size: 28px;
          padding-left: 30px;
        }
        input{
          border:none;
          outline: none;
          padding-left: 20px;
        }
      }
    }
    .content{
      flex: 1;
      background: #ecf1f4;
    }
    .footer{
      width: 100%;
      position: fixed;
      bottom:0;
      left:0;
      background: #fff;
      display: flex;
      div{
        width: 33.3333%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px 0;
        span{
          font-size: 26px;
        }

        .iconfont{
          font-size: 40px;
        }
      }
    }
  }
</style>

