<template>
  <div class="main">
    <div class="triangle-topleft"></div>
    <div class="content">
      <div class="head_portrait">
        <img class="img-circle" src="../assets/images/banner_01.png">
      </div>
      <div class="content_left pull-left">
        <div class="_head">
          <img src="../assets/images/banner_01.png" alt="">
          <div>
            <h4>I-intern北美实习平台</h4>
            <span class="way">申请方式/Enrollment Process</span>
          </div>
        </div>
        <div class="month_member pull-right">
          <div class="s_trangle-topleft"></div>
          月会员制
          <div class="s_trangle-bottomright"></div>
        </div>
        <div class="content_text">
          <p>
            vip月会员制申请流程与说明：<br>
            费用为599USD/月，<br>
            排期等待实习项目导师的简历筛选和电话面试。<br>
            录取率约60%。
          </p>
          <p>
            优势：<br>
            可对多个项目进行申请 <br>
            增加录取可能，<br>
            获得多次面试机会，<br>
            适合自信自身能力或有<br>
            经验的学生或学者
          </p>
          <p>
            月会员可享受：<br>
            其他课程/活动/项目 <br>
            或简历润色/模拟面试<br>
            9折折扣码。<br>
            并享受 <br>
            管家一站式服务<br>
            24/7为你定制<br>
            私人职业未来
          </p>
        </div>
      </div>
      <div class="content_right_top pull-right">
        <div class="logo"></div>
        <div class="month_member">
          <div class="s_trangle-topleft"></div>
          EB加急VIP
          <div class="s_trangle-bottomright"></div>
        </div>
        <div class="apply_for">
          <span>Early Bird申请</span>
          <p>
            对心仪的单个项目 <br>
            进行全力加速申请，<br>
            通过简历和个人能力 <br>
            匹配后,<br>
            马上得到I-intern <br>
            安排的电话面试，<br>
            录取率高达约83% <br>
            即可开始远程实习 <br>
            或保留位置推后实习
          </p>
        </div>
      </div>
      <div class="content_right_bottom">
        <figure>
          <img src="../assets/images/banner_01.png"/>
          <figcaption>www.lintern.com</figcaption>
        </figure>
        <div class="advantage">
          <span>EB加急VIP优势</span>
          <p>
            更快更精准的实习项目申请，<br>
            跳过排期，直接与导师面对面，<br>
            与企业进行职业规划和安排<br>
            享受月会员所有服务，<br>
            再加上免费的实习项目经历的简历撰写<br>
            实习项目证书<br>
            大概率获得导师推荐信<br>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "terrace"
    }
</script>

<style lang="less">

  html{
    max-width:1200px;
    min-width:1200px;
    margin:0 auto;
    height:100%;
    background:#ccc;
  }
  body{
    .main{
      position: relative;
      font-size: 20px;
      padding:5px 0 20px 5px;
      .triangle-topleft {
        width: 0;
        height: 0;
        border-top: 950px solid #333;
        border-right:1050px solid transparent;
        box-sizing: border-box;
      }
      .content{
        height:100%;
        position: absolute;
        top:0;
        color:#ccc;
        .head_portrait{
          width:300px;
          height:300px;
          position: absolute;
          top:0;
          left: 0;
          bottom: 0;
          right: 0;
          margin:auto;
          img{
            width:100%;
            height:100%;
          }
        }
        .content_left{
          width:650px;
          margin-left:80px;
          ._head{
            display: flex;
            justify-content: space-between;
            margin-top:30px;
            img{
              width:200px;
              height:125px;
              margin-top:20px;
            }
            h4{
              font-size:35px;
              letter-spacing: 3px;
            }
            .way{
              display: block;
              text-align: center;
              font-size: 24px;
            }
          }
          .month_member{
            width:180px;
            text-align: center;
            font-size: 24px;
            color:darkolivegreen;
            .s_trangle-topleft{
              width: 0;
              height: 0;
              border-top: 20px solid #99cc66;
              border-right:20px solid transparent;
            }
            .s_trangle-bottomright{
              width: 0;
              height: 0;
              border-bottom: 20px solid #ffcc66;
              border-left:20px solid transparent;
              margin-left:160px
            }
          }
          .content_text{
            p{
              margin:20px auto;
              line-height: 30px;
              letter-spacing: 3px;
              font-size:20px;
            }
          }
        }
        .content_right_top{
          width: 450px;
          margin-top:210px;
          .logo{
            width:50px;
            height:75px;
            background:url("../assets/images/logo.png");
            background-size:100% 100%;
            margin-left: 280px;
          }
          .month_member{
            margin: 50px 160px;
            width:180px;
            text-align: center;
            font-size: 24px;
            color:darkolivegreen;
            .s_trangle-topleft{
              width: 0;
              height: 0;
              border-top: 20px solid #99cc66;
              border-right:20px solid transparent;
            }
            .s_trangle-bottomright{
              width: 0;
              height: 0;
              border-bottom: 20px solid #ffcc66;
              border-left:20px solid transparent;
              margin-left:160px
            }
          }
          .apply_for{
            margin-top: 30px;
            padding-left: 185px;
            span{
              padding:5px 10px;
              background:#333;
              margin-left:15px;
            }
            p{
              color:#333;
              margin: 20px auto;
              line-height: 30px;
              letter-spacing: 3px;
              font-size: 20px;
            }
          }
        }
        .content_right_bottom{
          position: absolute;
          bottom:15px;
          left:20%;
          display: flex;
          align-items: flex-end;
          figure{
            margin-right: 50px;
            margin-bottom: 20px;
            img{
              width: 200px;
              height: 125px;
              margin-top: 20px;
            }
            figcaption{
              font-size: 25px;
              text-align: center;
              color:#333;
            }
          }
          .advantage{
            margin: 0 0 10px 40px;
            span{
              padding:5px 10px;
              background:#333;
              margin-left:60px;
            }
            p{
              color:#333;
              margin: 20px auto;
              line-height: 30px;
              letter-spacing: 3px;
              font-size: 20px;
            }
          }
        }
      }
    }
  }
</style>
