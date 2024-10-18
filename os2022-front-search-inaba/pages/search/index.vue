<template>
  <v-app>
    <v-container class="grand-box">
      <section class="th-par">
        <Hero class="top-header"> 企画検索</Hero>
      </section>

      <!--<h1>JSONP APIリクエスト - クエリパラメータ付き</h1>
      <input type="text" id="query" placeholder="検索キーワードを入力" />
      <button id="fetch-data" >データを取得</button>
      <pre id="result">あああ</pre>-->

      <div class="loc_date-area">
        <div class="th-input-par">
          <form @submit.prevent="performSearch" class="search-form-1">
            <label>
              <input v-model="searchQuery" type="text" placeholder="キーワードを入力" />
            </label>
            <button type="submit" aria-label="検索" />
          </form>
        </div>

        <div class="date-area">
          <PartTitle :bg-color="'blue'">
            日時<span class="chip multi">複数選択可</span>
          </PartTitle>
          <div class="option">
            <v-checkbox v-model="selectedDates" :value="'11/4'" label="11/4（土）" color="primary" />
            <v-checkbox v-model="selectedDates" :value="'11/5'" label="11/5（日）" color="primary" />
          </div>
        </div>

        <div class="date-area">
          <PartTitle :bg-color="'blue'">
            場所<span class="chip multi">複数選択可</span>
          </PartTitle>
          <div class="option">
            <v-checkbox v-model="selectedLocations" :value="'早稲田キャンパス'" label="早稲田キャンパス" color="primary" />
            <v-checkbox v-model="selectedLocations" :value="'戸山キャンパス'" label="戸山キャンパス" color="primary" />
            <v-checkbox v-model="selectedLocations" :value="'キャンパス構外'" label="キャンパス構外" color="primary" />
          </div>
        </div>

        <!-- ジャンル選択部分をカテゴリーごとに分ける -->
        <div class="date-area">
          <PartTitle :bg-color="'blue'">
            ジャンル<span class="chip only">複数選択不可</span>
          </PartTitle>
          <v-radio-group v-model="selectedGenre" column>
            <!-- 飲食 -->
            <div class="po-wide">
              <p class="po-title">飲食</p>
              <div class="option left-space">
                <v-radio :value="'食べ物'" label="食べ物" color="primary" />
                <v-radio :value="'飲み物'" label="飲み物" color="primary" />
              </div>
            </div>

            <!-- 参加型 -->
            <div class="po-wide">
              <p class="po-title">参加型</p>
              <div class="option left-space">
                <v-radio :value="'遊び・ゲーム'" label="遊び・ゲーム" color="primary" />
                <v-radio :value="'制作'" label="制作" color="primary" />
                <v-radio :value="'その他'" label="その他" color="primary" />
              </div>
            </div>

            <!-- パフォーマンス -->
            <div class="po-wide">
              <p class="po-title">パフォーマンス</p>
              <div class="option left-space">
                <v-radio :value="'ダンス'" label="ダンス" color="primary" />
                <v-radio :value="'劇'" label="劇" color="primary" />
              </div>
            </div>

            <!-- 音楽 -->
            <div class="po-wide">
              <p class="po-title">音楽</p>
              <div class="option left-space">
                <v-radio :value="'バンド'" label="バンド" color="primary" />
                <v-radio :value="'合唱'" label="合唱" color="primary" />
              </div>
            </div>

            <!-- 展示 -->
            <div class="po-wide">
              <p class="po-title">展示</p>
              <div class="option left-space">
                <v-radio :value="'アート'" label="アート" color="primary" />
                <v-radio :value="'写真'" label="写真" color="primary" />
              </div>
            </div>

            <!-- 物販・講演などその他 -->
            <div class="po-wide">
              <p class="po-title">その他</p>
              <div class="option left-space">
                <v-radio :value="'物販'" label="物販" color="primary" />
                <v-radio :value="'講演'" label="講演" color="primary" />
                <v-radio :value="'学び'" label="学び" color="primary" />
                <v-radio :value="'ゲスト枠'" label="ゲスト枠" color="primary" />
              </div>
            </div>
          </v-radio-group>
        </div>
      </div>

      <!-- この条件で検索 -->
      <!-- elevationは改行しないとエラー吐くので注意（Macの場合：command+k → sで保存） -->
      <div class="under-action">
        <v-btn color="primary" class="po-btn" elevation="1" @click="performSearch">この条件で検索
        </v-btn>
        <p class="spr-t">
          <span>{{ projects.length }}</span>件の企画が見つかりました
        </p>
      </div>

      <!-- 検索結果を表示 -->
      <div class="result" id="result">
        <p class="title">検索結果</p>
        <v-list dense>
          <v-list-item v-for="(project, index) in projects" :key="index" @click="openDialog(project)">
            <v-list-item-avatar class="res-av">
              <img src="https://cdn.quasar.dev/img/parallax2.jpg" alt="Avatar" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{ project.title }}</v-list-item-title>
              <v-list-item-subtitle>{{ project.org }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>

      <!-- ダイアログ -->
      <v-dialog v-model="dialog" class="eve-dia" max-width="500px">
        <v-card class="border">
          <!-- 上部画像 -->
          <img class="top-img" :src="selectedProject.url || 'https://picsum.photos/500/300'" alt="Project Image" />

          <!-- アイコン・企画名・団体名 -->
          <v-card-title class="title-section">
            <v-icon class="mr-2" color="primary">mdi-music-note</v-icon>
            <div>
              <span class="eve-headline">{{ selectedProject.title }}</span>
              <div class="eve-team">{{ selectedProject.org }}</div>
            </div>
          </v-card-title>

          <!-- 概要 -->
          <v-card-text>
            <div class="about">
              <strong class="st">【企画概要】</strong>
              <p class="main-text">{{ selectedProject.text }}</p>
            </div>

            <!-- 企画時間・場所 -->
            <div>
              <strong>【企画時間・場所】</strong>
              <div class="date-card-par">
                <div class="date-card">
                  <v-icon class="mr-1">mdi-calendar</v-icon>11/4（土）<br />
                  10:00~13:00<br />15:00~18:00
                </div>
                <div class="date-card">
                  <v-icon class="mr-1">mdi-calendar</v-icon>11/5（日）<br />
                  10:00~13:00
                </div>
              </div>
              <div class="pos">
                <v-icon>mdi-map-marker</v-icon>{{ selectedProject.loc_det }}
              </div>
            </div>

            <!-- Googleマップリンクボタン -->
            <v-btn block color="primary" class="mt-3">
              Googleマップで場所を表示
            </v-btn>
          </v-card-text>

          <!-- 閉じるボタン -->
          <v-card-actions class="flex-center">
            <v-btn icon @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

    </v-container>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      selectedProject: {},
      projects: [],
      searchQuery: '', // 検索キーワード
      limit: 10,
      page: 1,
      selectedDates: [], // 選択された日時
      selectedLocations: [], // 選択された場所
      selectedGenre: '', // 選択されたジャンル
    };
  },
  methods: {
    openDialog(project) {
      this.selectedProject = project;
      this.dialog = true;
    },

    sendJsonpRequest(url, callbackName) {
      const script = document.createElement('script');
      script.src = `${url}&callback=${callbackName}`;

      script.onload = () => script.remove();
      document.body.appendChild(script);
    },

    handleApiResponse(data) {
      console.log('API Response:', data);
      this.projects = data.result.items || [];
      this.scrollToResults(); // 検索結果にスクロール
    },

    performSearch() {
      const apiUrl = 'https://as.yellow.asp.appirits.com/wasedasai/search.json';

      const params = new URLSearchParams({
        q: this.searchQuery,
      });

      if (this.selectedDates.length) {
        params.append('date', this.selectedDates.join(','));
      }
      if (this.selectedLocations.length) {
        params.append('location', this.selectedLocations.join(','));
      }
      if (this.selectedGenre) {
        params.append('genre', this.selectedGenre);
      }

      const fullUrl = `${apiUrl}?${params.toString()}`;
      window.handleApiResponse = this.handleApiResponse;
      this.sendJsonpRequest(fullUrl, 'handleApiResponse');
    },

    scrollToResults() {
      const resultElement = document.getElementById('result');
      if (resultElement) {
        resultElement.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
};
</script>


<style>
:root {
  --theme-orange: #f3982d;
  --theme-green: #4cbbb4;
  --theme-blue: #59c3e1;
  --text-color: #3e3a39;
  --mainfont: 'Noto Sans JP', 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif;
}

.grand-box {
  font-family: var(--mainfont);
  max-width: 780px;
  margin: 0 auto;
  padding-top: 0;
}

.th-par {
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
}

.top-header {
  width: 100svw;
}

.loc_date-area {
  width: 100%;
  padding: 0px;
}

/* ここからキーワード検索ボックスのCSS */
.th-input-par {
  width: 80%;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 32px;
}

.search-form-1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  border: 1px solid var(--theme-blue);
}

.search-form-1 input {
  width: 100%;
  max-width: 500px;
  height: 40px;
  padding: 4px 12px;
  border: none;
  box-sizing: border-box;
  font-size: 1em;
  outline: none;
}

.search-form-1 input::placeholder {
  color: #777777;
}

.search-form-1 button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 40px;
  border: none;
  background-color: var(--theme-blue);
  cursor: pointer;
}

.search-form-1 button::after {
  width: 20px;
  height: 20px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z' fill='%23fff'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  content: '';
}

/* ここからカテゴリ検索のCSS */
.date-area {
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: 100%;
  align-items: baseline;
}

.PartTitle {
  display: flex;
  align-items: center;
}

.chip {
  font-size: 12px;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 1px 6px;
  padding-bottom: 2px;
  margin-left: 14px;
  font-weight: normal;
}

.chip.multi {
  background-color: var(--theme-green);
  color: white;
}

.option {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 16px;
  align-items: center;
}

.chip.only {
  background-color: var(--text-color);
  color: white;
}

.po-title {
  font-size: 14px;
  font-weight: 500 !important;
  margin-bottom: 4px !important;
}

/* ここから「この条件で検索する」のCSS */
.under-action {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 32px;
}

.po-btn {
  background-color: var(--theme-blue) !important;
  width: 80vw;
  max-width: 300px;
  border-radius: 0px;
}

.spr-t {
  font-size: 14px;
  margin-top: 8px;
}

.spr-t span {
  font-weight: 500;
  font-size: 24px;
  color: var(--theme-blue);
}

/* ここから検索結果を表示する部分のCSS */
.result .title {
  font-weight: 500;
  font-size: 16px;
}

.res-av {
  border-radius: 4px !important;
  margin-right: 8px;
  height: 60px !important;
  width: 60px !important;
}

.res-title {
  color: var(--theme-blue);
  font-size: 16px;
  font-weight: 500 !important;
  margin-bottom: 8px !important;
  line-height: 1em !important;
  font-family: var(--mainfont);
}

.res-par-icon {
  color: var(--theme-orange) !important;
}

/* ここからダイアログのCSS */
.eve-dia {
  width: 100%;
  max-width: 500px;
  border-radius: 50px !important;
  font-family: var(--mainfont);
}

.border {
  border: solid 5px #59C3E1 !important;
  border-radius: 0px !important;
}

.eve-dia .top-img {
  width: 100%;
  max-height: 200px;
  object-fit: cover;
}

.title-section {
  flex: 1;
}

.mr-1 {
  color: white !important;
}

.mt-3 {
  margin-top: 16px;
}

.eve-headline {
  font-size: 18px;
  font-weight: 500;
  font-family: var(--mainfont);
  border-bottom: solid 1px var(--theme-blue);
  width: 100%;
}

.eve-team {
  font-size: 14px;
}

.st {
  width: 100%;
  text-align: center;
  margin-bottom: 4px;
}

.main-text {
  font-family: var(--mainfont);
  color: var(--text-color) !important;
}

.date-card-par {
  display: flex;
  align-items: flex-start;
  gap: 8px;
}

.date-card {
  background-color: var(--theme-blue);
  color: white;
  font-weight: 500;
  font-family: var(--mainfont);
  box-sizing: border-box;
  border-radius: 10px;
  padding: 16px;
  min-height: 100px;
}

.pos {
  margin: 8px 0 !important;
  font-size: 14px;
  font-family: var(--mainfont);
}

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Vuetifyコンポーネント */
.v-application .primary--text {
  color: var(--theme-blue) !important;
  caret-color: var(--theme-blue) !important;
}

.v-application .primary {
  background-color: var(--theme-blue) !important;
  border-color: var(--theme-blue) !important;
}

.v-input--radio-group--column .v-radio {
  margin-bottom: 0px !important;
}

.v-messages {
  min-height: 0 !important;
  height: 0 !important;
  display: none !important;
}

.v-input--selection-controls {
  margin-top: 0px;
  padding-top: 0px;
}

.v-label {
  font-size: 14px !important;
}

.v-card__title {
  line-height: 1.5rem !important;
}
</style>
