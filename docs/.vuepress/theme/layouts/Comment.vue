<template>
    <div class="theme-default-content gitalk-container">
        <div id="gitalk-container"></div>
    </div>
</template>

<script>
  import 'gitalk/dist/gitalk.css'
  import Gitalk from 'gitalk'

  export default {
    name: 'comment',
    mounted() {
      this.loadGitalk();

      this.$router.afterEach((to, from) => {
        this.$nextTick(function() {
          //页面Dom加载完成后执行
          if (to.path != from.path) {
            this.loadGitalk();
          }
        });
      });
    },
    methods: {
      encode(s) {
        const code = 0x2020;
        let result = '';
        for (let c of s) {
          result += String.fromCharCode(c.charCodeAt() ^ code);
        }
        return result;
      },
      loadGitalk() {
        console.log(`load gitalk in ${location.href}`);
        const commentConfig = {
          clientID: this.encode('⁩⁖‑‎⁂⁄’‑‘—–‐–⁁⁁⁆—⁁―‗'),
          clientSecret: this.encode('⁄‘‘⁆⁂‐—‐‘—⁅’‗⁆⁆⁁⁆‒⁄—⁆‒–⁄⁃‐‑⁂‖’‑‐―⁆’–‒–‑‘'),
          repo: 'docs',
          owner: 'turbo-tunnel',
          admin: ['drunkdream'],
          id: location.pathname,
          proxy: 'https://corsproxy.io/?https://github.com/login/oauth/access_token'
        };
        const container = document.getElementById('gitalk-container');
        container.innerHTML = '';
        const gitalk = new Gitalk(commentConfig);
        gitalk.render('gitalk-container');
      }
    }
  };
</script>
