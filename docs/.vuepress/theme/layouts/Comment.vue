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
      loadGitalk() {
        console.log(`load gitalk in ${location.href}`);
        const commentConfig = {
          clientID: 'Iv1.bd9184303aaf4a57',
          clientSecret: 'd88fb04084e97ffaf2d4f23dc01b69105f932318',
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
