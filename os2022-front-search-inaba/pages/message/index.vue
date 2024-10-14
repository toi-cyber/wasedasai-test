<script>
export default {
  layout: 'maintenance',
  head: {
    title: '地域×早大生メッセージ企画',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '地域の飲食店と早大生が相互に抱いている想いを発信します！'
      },
      {
        hid: 'keyword',
        name: 'keyword',
        content:
          '早稲田 早稲田大学 早稲田祭 早稲田祭2023 地域 早大生 メッセージ 企画'
      },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '地域×早大生メッセージ企画やる'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '地域の飲食店と早大生が相互に抱いている想いを発信します！'
      },
      { hid: 'og:url', property: 'og:url', content: '/online' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://wasedasai.net/images/logo.png'
      }
    ]
  }
}
</script>

<template>
  <div>
    <section>
      <div id="message_hero_alternate" class="message_hero_alternate">
        <h2 id="message_hero_title" class="message_hero_title">
          ユメを追う早大生へのエール<br />〜早稲田のまちと早大生のつながり〜
        </h2>
      </div>
    </section>

    <!------------------------------HTML:main_contents------------------------------>
    <div class="message_wrap1">
      <div id="main_covered_contents1" class="main_covered_contents1">
        <div>
          <Content>
            <section class="messagesection message01">
              <!------------------------------sec_title_alter------------------------------>
              <div class="section_title_alternate margin1">
                <div class="sc_title_alter_left">
                  <div class="triangle_up_left" />
                  <div class="triangle_down_left" />
                </div>
                <div class="sectiontitle ribbon1_alter">
                  <p class="donnakikaku1">
                    地域×早大生メッセージ取り組みってどんな企画？
                  </p>
                  <p class="donnakikaku2">
                    地域×早大生メッセージ取り組み<br />ってどんな企画？
                  </p>
                </div>
                <div class="sc_title_alter_right">
                  <div class="triangle_up_right" />
                  <div class="triangle_down_right" />
                </div>
              </div>

              <!------------------------------main_contents1------------------------------>
              <div class="g_section-content">
                <Paragraph class="sukima">
                  本企画は、<b>地域の飲食店と早大生が相互に抱いている想いを目に見える形にして発信していく企画</b>です。</Paragraph
                >
                <Paragraph
                  >早大生を代表し、早稲田大学のサークルのみなさまには早稲田大学周辺地域の飲食店のみなさまに対しての想いを込めた色紙を作成していただきました。
                  そして早稲田大学周辺地域の飲食店のみなさまからは早大生に対しての想いを込めたビデオメッセージをいただきます。
                  そうすることで、日頃から相互に抱いている目には見えなかった想いを目に見える形にし、
                  多くの方に早稲田大学周辺地域の飲食店と早大生のつながりを感じていただけるようにしたのがこの企画です。
                  早稲田にしかない地域と早大生の素敵なつながりを感じることができる暖かい企画になっています。
                </Paragraph>
                <!--<div>image（オンラインで楽しめる企画を探すページの画像）</div>-->
              </div>
              <div class="imagescontainer01">
                <div class="imagescover">
                  <img
                    src="~/assets/images/message/managerandstudent1.JPG"
                    class="message_image1 mess_photo"
                    loading="eager"
                    onload="ImageGuide1();" />
                  <img
                    src="~/assets/images/message/managerandstudent2.JPG"
                    class="message_image2 mess_photo"
                    loading="eager"
                    onload="ImageGuide2();" />
                </div>
              </div>
            </section>

            <section class="messagesection message02">
              <!------------------------------sec_title_alter------------------------------>
              <div class="section_title_alternate margin1">
                <div class="sc_title_alter_left">
                  <div class="triangle_up_left" />
                  <div class="triangle_down_left" />
                </div>
                <div class="sectiontitle ribbon1_alter">
                  <p class="donnakikaku1">
                    コロナ禍によって進化したメッセージ企画
                  </p>
                  <p class="donnakikaku2">
                    コロナ禍によって進化した<br />メッセージ企画
                  </p>
                </div>
                <div class="sc_title_alter_right">
                  <div class="triangle_up_right" />
                  <div class="triangle_down_right" />
                </div>
              </div>

              <!------------------------------main_contents2------------------------------>
              <div class="g_section-content">
                <Paragraph class="sukima">
                  本企画の前身は早大生を代表した早稲田大学のサークルのみなさまも、早稲田大学周辺地域の飲食店のみなさまも、
                  お互い色紙にメッセージを書いて想いを送り合うという形でした。
                  そしてその色紙を早稲田祭当日に休憩スペースなどに展示することによって来場者のみなさまへ発信していました。
                </Paragraph>
                <Paragraph>
                  しかし、2020年の新型コロナウイルスの感染拡大により、本企画も大きく変化しました。
                  早稲田祭2020がオンライン開催となったことで、展示形式をとっていた本企画もこのままの形式では早稲田大学周辺地域のみなさまと早大生の想いを見える形にできなくなってしまったのです。。
                  そこで、企画担当者はこれをきっかけに本企画のオンライン化を進めました。企画の実施形態を休憩所での展示形式から動画形式へ変更したのです。
                </Paragraph>
                <Paragraph>
                  まず早稲田祭2020では色紙は例年通り、各サークルのみなさまに書いていただきつつ、店舗の方々からのメッセージを動画にてリレー方式でつなげていきました。
                  そして完成した動画はSNSを通して拡散されていきました。
                  ご覧になった方もいらっしゃるかもしれませんが、NHKのニュースにも取り上げていただくことができました。
                </Paragraph>
                <Paragraph>
                  そして早稲田祭2021では早稲田大学周辺地域のみなさまと早大生がつながりをより持てる企画へとさらに進化しました。
                  実際に色紙を渡す際に色紙を作成したサークルのみなさまと一緒に直接店舗を訪問したのです。またZoomで参加団体・参加者のみなさまからワセメシへの感謝の一言を伝えていただきました。
                </Paragraph>
                <Paragraph>
                  早稲田祭2022では、祭当日に各ステージやVR企画内でのメッセージ動画の放映を実現させました。各種SNSでの拡散も含め、メッセージ企画が広くさまざまな人に知られる企画になりました。
                </Paragraph>
                <Paragraph>
                  早稲田祭2023でも早稲田祭当日の各ステージでの放映、SNSでの拡散を通じて、より多くの方に早稲田大学周辺地域の飲食店のみなさまと早大生のつながりの暖かさを感じていただければ幸いです。
                </Paragraph>
              </div>

              <div class="imagescontainer02">
                <div class="imagescover">
                  <img
                    src="~/assets/images/message/vision1.JPG"
                    class="message_image3 mess_photo_single"
                    loading="eager"
                    onload="ImageGuide3();" />
                </div>
              </div>
            </section>

            <section class="messagesection message03">
              <!------------------------------sec_title_alter------------------------------>
              <div class="section_title_alternate margin1">
                <div class="sc_title_alter_left">
                  <div class="triangle_up_left" />
                  <div class="triangle_down_left" />
                </div>
                <div class="sectiontitle ribbon1_alter">
                  <p class="donnakikaku1">
                    早稲田祭2023における企画の実施について
                  </p>
                  <p class="donnakikaku2">
                    早稲田祭2023における<br />企画の実施について
                  </p>
                </div>
                <div class="sc_title_alter_right">
                  <div class="triangle_up_right" />
                  <div class="triangle_down_right" />
                </div>
              </div>

              <!------------------------------main_contents3------------------------------>
              <div class="g_section-content">
                <Paragraph class="sukima"
                  >本年度のメッセージ企画でのテーマは早稲田祭2023のメインテーマを踏まえて、「ユメを追う早大生へのエール」となっております。<br />
                  本年度は動画の構成と色紙のQRコード添付という2点を大きく変更いたしました。
                  まず、昨年度までの動画を進化させて、より早大生と地域の飲食店の方々の繋がりや「ワセメシ」の素晴らしさを動画を見る方々に伝えられるように、
                  店内での食レポシーンを含めるなどの工夫も行いました。この撮影は、地域の飲食店の方々と参加団体の早大生が繋がる機会の創出に繋がりました。
                  また、ロングバージョンとショートバージョンの動画を２本用意することで、多くの人に見てもらうと同時に、
                  店主の方や参加団体のみなさまからのメッセージシーンの全てを動画にすることを可能にしました。
                </Paragraph>
                <Paragraph
                  >そして、各種SNSや早稲田祭当日のビジョン放映に加えて、より多くの方々の目に留まるよう当企画の動画QRコードを早大生から地域の飲食店の方々へ送る色紙に添付しました。
                  この色紙が飾られている店舗にてQRコードを読み取っていただくことでも動画を再生できます。QRを読みにお店に伺ったり、お店でたまたまQRを読みこみ、
                  早大生とのつながりを実感したりしていただけると幸いです。たくさんの早大生のみなさまが店を訪れ、まちと学生の繋がりを感じていただくことこそが、動画の再生回数以上に大きな意味を持つと考えています。
                  なお、本企画で作成した動画は、早稲田祭2023当日に各ステージやVR企画内にて放映するほか、各種SNSでも配信しますので、ぜひチェックしてみてください。
                </Paragraph>
              </div>

              <div class="imagescontainer03">
                <div class="imagescover">
                  <img
                    src="~/assets/images/message/coloredpaper1.JPG"
                    class="message_image4 mess_photo"
                    loading="eager"
                    onload="ImageGuide4();" />
                  <img
                    src="~/assets/images/message/coloredpaper2.JPG"
                    class="message_image5 mess_photo"
                    loading="eager"
                    onload="ImageGuide5();" />
                </div>
              </div>
            </section>

            <section class="messagesection message04">
              <!-----------------------------sec_title_alter------------------------------>
              <div class="section_title_alternate margin1">
                <div class="sc_title_alter_left">
                  <div class="triangle_up_left" />
                  <div class="triangle_down_left" />
                </div>
                <div class="sectiontitle ribbon2_alter">
                  <p class="donnakikaku">ご協力いただいているみなさまへ</p>
                </div>
                <div class="sc_title_alter_right">
                  <div class="triangle_up_right" />
                  <div class="triangle_down_right" />
                </div>
              </div>

              <!------------------------------main_contents4------------------------------>
              <div class="g_section-content">
                <Paragraph class="sukima">
                  本企画は、早稲田のまちを彩る「ワセメシ」と呼ばれる早稲田大学周辺地域の飲食店のみなさま、早大生を代表して色紙作成をしてくださるサークルのみなさまのご協力によって実現しています。
                  互いに抱いている想いを目に見える形として発信することができているのも、ひとえにみなさまのご協力のおかげです。ありがとうございます。<br />
                  ワセメシ店主のみなさまからの早大生へ想いを日々感じ、我々、早大生からもワセメシ店主のみなさまに感謝の心を伝えていけたらと思います。
                  本企画がより強いつながりを構築するきっかけとなれば幸いです。そして今後もワセメシ店舗様に加えて、早稲田祭に来場しこの企画を目にする全ての人に感謝の気持ちが伝わるような、
                  素晴らしい企画を目指していきます。
                </Paragraph>
              </div>
            </section>

            <section class="messagesection message05">
              <!-----------------------------sec_title_alter------------------------------>
              <div class="section_title_alternate margin1">
                <div class="sc_title_alter_left">
                  <div class="triangle_up_left" />
                  <div class="triangle_down_left" />
                </div>
                <div class="sectiontitle ribbon2_alter">
                  <p class="donnakikaku">参加団体・協力店舗名</p>
                </div>
                <div class="sc_title_alter_right">
                  <div class="triangle_up_right" />
                  <div class="triangle_down_right" />
                </div>
              </div>

              <!------------------------------main_contents5------------------------------>
              <div class="g_section-content">
                <Paragraph class="message_group_list sukima">
                  【参加団体名（敬称略）】<br />
                  早稲田大学チアダンスチームMYNX<br />
                  早稲田大学男子チアリーディングSHOCKERS<br />
                  まっちワークグループ早稲田<br />
                  早稲田大学放送研究会<br />
                  早稲田大学男祭り2023<br />
                  早稲田大学よさこいチーム東京花火<br />
                  TAP-LOVERS<br />
                  Twinkle<br />
                  aka Wa.Se.Da.<br />
                  企画集団便利舎<br />
                  下駄っぱーず<br />
                  <br /><br />
                  【協力店舗名】<br />
                  Whistle Cafe<br />
                  もちだ酒店<br />
                  三品食堂<br />
                  東京麺珍亭本舗<br />
                  武道家 本店<br />
                  図星 はなれ<br />
                  炭焼丼専門店 どんぴしゃり<br />
                  高田牧舎<br />
                  早稲田 モンスターズキッチン<br />
                  GOOD MORNING CAFE 早稲田<br />
                  こはぜ珈琲 早稲田店<br />
                  キッチン ミキ<br />
                  武蔵野アブラ學会 早稲田総本店<br />
                </Paragraph>
              </div>
            </section>

            <section class="messagesection message06">
              <!-----------------------------sec_title_alter------------------------------>
              <div class="margin1">
                <PartTitle :bg-color="'orange'"
                  >以下のリンクからメッセージ動画をご覧いただけます。</PartTitle
                >
              </div>
              <!------------------------------main_contents6------------------------------>
              <div class="g_section-content">
                <Paragraph class="message_link_list sukima">
                  <a
                    href="https://twitter.com/wasedasai/status/1716409139650273325?s=46"
                    target="_blank"
                    rel="noopener noreferrer">
                    早稲田祭2023公式Twitter ショート版</a
                  ><br />
                  <a
                    href="https://www.instagram.com/reel/CyvYcJJSm4x/?igshid=MzRlODBiNWFlZA=="
                    target="_blank"
                    rel="noopener noreferrer">
                    早稲田祭2023公式Instagram ショート版</a
                  ><br />
                  <a
                    href="https://youtu.be/i91sPqTlmY0"
                    target="_blank"
                    rel="noopener noreferrer">
                    早稲田祭2023公式Youtube ロング版</a
                  >
                </Paragraph>
              </div>
            </section>
          </Content>
        </div>
      </div>

      <!------------------------------HTML:curve_view------------------------------>
      <div id="roundcurve_cover" class="roundcurve_cover">
        <div class="roundcurve_cover_inner">
          <!------------------------------一番こいgreen------------------------------>
          <svg
            class="roundcurve1"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            width="100%"
            height="5000px"
            viewBox="0 0 100 500"
            style="background-color: rgba(0, 0, 0, 0)">
            <path
              d="M39,0 S-10,20 30,41 S80,60 85,69 S85,90 40,129 S47,180 60,202 S50,232 20,249 S30,300 57,360 S76,400 40,500 S30,520 40,580 S70,600 50,600"
              fill="none"
              stroke="#64BE92"
              stroke-width="0.2" />
          </svg>

          <!------------------------------一番うすいgreen------------------------------>
          <svg
            class="roundcurve2"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            width="100%"
            height="5000px"
            viewBox="0 0 100 500"
            style="background-color: rgba(0, 0, 0, 0)">
            <path
              d="M40,0 S-10,20 30,40 S80,60 85,70 S85,90 40,130 S45,180 60,200 S50,230 25,260 S30,300 70,360 S65,400 40,500 S30,530 40,580 S73,600 50,600"
              fill="none"
              stroke="#B7E4D2"
              stroke-width="0.5" />
          </svg>

          <!------------------------------きみどり------------------------------>
          <svg
            class="roundcurve3"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            width="100%"
            height="5000px"
            viewBox="0 0 100 500"
            style="background-color: rgba(0, 0, 0, 0)">
            <path
              d="M41,0 S-10,21 30,40 S78,60 84,70 S85,92 41,128 S48,180 59,203 S51,230 19,260 S29,303 70,360 S80,400 20,500 S15,510 40,580 S67,610 50,600"
              fill="none"
              stroke="#A4C843"
              stroke-width="0.4" />
          </svg>
        </div>
      </div>
    </div>

    <!------------------------------SCRIPT:curve_height_controll------------------------------>
    <script>
      var pageheight = document.getElementById(
        'main_covered_contents1'
      ).clientHeight
      var pageheightdb = pageheight * 1.1

      var pagewidth = document.getElementById(
        'message_hero_alternate'
      ).clientWidth

      var curveend = document.getElementById('roundcurve_cover')
      curveend.style.height = pageheightdb + 'px'

      var herotextwidth = document.getElementById('message_hero_title')
      herotextwidth.style.width = pagewidth + 'px'

      function ImageGuide1() {
        var pageheight = document.getElementById(
          'main_covered_contents1'
        ).clientHeight
        var pageheightdb = pageheight * 1.1

        var curveend = document.getElementById('roundcurve_cover')
        curveend.style.height = pageheightdb + 'px'
      }

      function ImageGuide2() {
        var pageheight = document.getElementById(
          'main_covered_contents1'
        ).clientHeight
        var pageheightdb = pageheight * 1.1

        var curveend = document.getElementById('roundcurve_cover')
        curveend.style.height = pageheightdb + 'px'
      }

      function ImageGuide3() {
        var pageheight = document.getElementById(
          'main_covered_contents1'
        ).clientHeight
        var pageheightdb = pageheight * 1.1

        var curveend = document.getElementById('roundcurve_cover')
        curveend.style.height = pageheightdb + 'px'
      }

      function ImageGuide4() {
        var pageheight = document.getElementById(
          'main_covered_contents1'
        ).clientHeight
        var pageheightdb = pageheight * 1.1

        var curveend = document.getElementById('roundcurve_cover')
        curveend.style.height = pageheightdb + 'px'
      }

      function ImageGuide5() {
        var pageheight = document.getElementById(
          'main_covered_contents1'
        ).clientHeight
        var pageheightdb = pageheight * 1.1

        var curveend = document.getElementById('roundcurve_cover')
        curveend.style.height = pageheightdb + 'px'
      }

      //画面サイズ変更時にcurve_height,herotext_widthを再計算
      window.addEventListener('resize', function () {
        var pageheight = document.getElementById(
          'main_covered_contents1'
        ).clientHeight
        var pageheightdb = pageheight * 1.1

        var pagewidth = document.getElementById(
          'message_hero_alternate'
        ).clientWidth

        var curveend = document.getElementById('roundcurve_cover')
        curveend.style.height = pageheightdb + 'px'

        var herotextwidth = document.getElementById('message_hero_title')
        herotextwidth.style.width = pagewidth + 'px'
      })
    </script>
  </div>
</template>

<!----------------------------------------CSS(scoped)---------------------------------------->
<style scoped>
/*------------------------------CSS:main------------------------------*/
a {
  text-decoration: none;
  color: #cc3399;
}
a:hover {
  color: #e084c1;
}
.messagesection {
  margin-top: 25px;
  display: flex;
  flex-direction: column;
}
.margin1 {
  text-align: center;
  margin-top: 60px;
}
.sukima {
  padding-top: 15px;
}

.message_group_list,
.message_link_list {
  text-align: center;
}

.imagescontainer01 {
  max-width: 1200px;
  margin: 0 0 0 auto;
  display: flex;
}
@media screen and (max-width: 768px) {
  .imagescontainer01 {
    margin: 0 0 0 0;
    justify-content: center;
  }
}
.imagescontainer02 {
  max-width: 1200px;
  margin: 0 auto 0 0;
  display: flex;
}
@media screen and (max-width: 768px) {
  .imagescontainer02 {
    margin: 0 0 0 0;
    justify-content: center;
  }
}
.imagescontainer03 {
  max-width: 1200px;
  margin: 0 0 0 auto;
  display: flex;
}
@media screen and (max-width: 768px) {
  .imagescontainer03 {
    margin: 0 0 0 0;
    justify-content: center;
  }
}
.imagescover {
  display: flex;
  width: fit-content;
}

.mess_photo {
  min-width: 140px;
  width: 30vw;
  max-width: 300px;
  height: auto;
  margin: 1%;
  border-radius: 3%;
  box-shadow: 3px 1px 10px rgb(110, 110, 110);
}
.mess_photo_single {
  min-width: 220px;
  width: 35vw;
  max-width: 400px;
  height: auto;
  margin: 1%;
  border-radius: 3%;
  box-shadow: 3px 1px 10px rgb(110, 110, 110);
}

/*------------------------------CSS:hero_alternate------------------------------*/
.message_hero_alternate {
  color: #1b1725;
  text-align: center;
  padding-top: 12%;
  background-image: url('~assets/images/heropc.png');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: auto;
  position: relative;
  object-fit: cover;
}
@media screen and (max-width: 1200px) {
  .message_hero_alternate {
    background-image: url('~assets/images/herosp.png');
  }
}
.message_hero_title {
  font-size: 24px;
  font-family: 'senobi-gothic', sans-serif;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}

@media screen and (max-width: 700px) {
  .message_hero_title {
    font-size: 17px;
    line-height: 23px;
  }
}

@media screen and (max-width: 500px) {
  .message_hero_title {
    font-size: 15px;
    line-height: 19px;
  }
}

@media screen and (max-width: 390px) {
  .message_hero_title {
    font-size: 13px;
    line-height: 15px;
  }
}

/*------------------------------CSS:sectionTitle_alternate------------------------------*/
.section_title_alternate {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.sc_title_alter_left {
  display: flex;
  flex-direction: column;
  margin-right: -0.5px;
}
.sc_title_alter_right {
  display: flex;
  flex-direction: column;
  margin-left: -0.5px;
}

.donnakikaku1 {
  display: block;
  font-size: 18px;
}
@media screen and (max-width: 1200px) {
  .donnakikaku1 {
    display: none;
    font-size: 13px;
  }
}
.donnakikaku2 {
  display: none;
  font-size: 18px;
}
@media screen and (max-width: 1200px) {
  .donnakikaku2 {
    display: block;
    font-size: 13px;
  }
}
.donnakikaku {
  font-size: 18px;
}
@media screen and (max-width: 1200px) {
  .donnakikaku {
    font-size: 13px;
  }
}
.ribbon1_alter {
  display: inline-block;
  position: relative;
  height: 50px;
  line-height: 50px;
  text-align: center;
  padding: 0 30px;
  font-size: 18px;
  background: #f7b9d3;
  color: #fff;
  box-sizing: border-box;
  font-family: 'Senobi-Gothic';
  font-weight: bold;
}
@media screen and (max-width: 1200px) {
  .ribbon1_alter {
    font-size: 13px;
    height: 30px;
    line-height: 15px;
    padding: 0 30px;
  }
}
@media screen and (max-width: 350px) {
  .ribbon1_alter {
    padding: 0 10px;
  }
}

.ribbon2_alter {
  display: inline-block;
  position: relative;
  height: 50px;
  line-height: 50px;
  text-align: center;
  padding: 0 30px;
  font-size: 18px;
  background: #f7b9d3;
  color: #fff;
  box-sizing: border-box;
  font-family: 'Senobi-Gothic';
  font-weight: bold;
}
@media screen and (max-width: 1200px) {
  .ribbon2_alter {
    font-size: 13px;
    height: 25px;
    line-height: 25px;
  }
}
@media screen and (max-width: 350px) {
  .ribbon2_alter {
    padding: 0 10px;
  }
}

.triangle_up_left {
  height: 50%;
  width: 20px;
  clip-path: polygon(100% 0, 100% 100%, 0 0);
  background: #f7b9d3;
}
.triangle_down_left {
  height: 50%;
  width: 20px;
  clip-path: polygon(100% 0, 100% 100%, 0 100%);
  background: #f7b9d3;
}
.triangle_up_right {
  height: 50%;
  width: 20px;
  clip-path: polygon(100% 0, 0 100%, 0 0);
  background: #f7b9d3;
}
.triangle_down_right {
  height: 50%;
  width: 20px;
  clip-path: polygon(100% 100%, 0 0, 0 100%);
  background: #f7b9d3;
}
@media screen and (max-width: 1200px) {
  .triangle_up_left {
    width: 10px;
  }
  .triangle_down_left {
    width: 10px;
  }
  .triangle_up_right {
    width: 10px;
  }
  .triangle_down_right {
    width: 10px;
  }
}

/*------------------------------CSS:curve_view------------------------------*/
.message_wrap1 {
  display: flex;
  justify-content: center;
}

.main_covered_contents1 {
  position: relative;
  z-index: 10;
}

.roundcurve_cover {
  width: 90%;
  max-width: 1200px;
  position: absolute;
  overflow-y: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.roundcurve_cover::-webkit-scrollbar {
  display: none;
}

.roundcurve_cover_inner {
  width: 100%;
  height: fit-content;
  position: relative;
}

.roundcurve1 {
  position: absolute;
  z-index: 3;
  top: 0px;
  left: 5px;
}
.roundcurve2 {
  position: absolute;
  z-index: 1;
  top: -20px;
}
.roundcurve3 {
  position: absolute;
  z-index: 2;
  top: -40px;
  left: 30px;
}
</style>
