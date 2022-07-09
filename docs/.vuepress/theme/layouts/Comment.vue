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
      const commentConfig = {
        clientID: 'Iv1.bd9184303aaf4a57',
        clientSecret: 'd88fb04084e97ffaf2d4f23dc01b69105f932318',
        repo: 'docs',
        owner: 'turbo-tunnel',
        admin: ['drunkdream'],
        id: location.pathname,
        proxy: 'https://corsproxy.io/?https://github.com/login/oauth/access_token'
      };
      const gitalk = new Gitalk(commentConfig);
      gitalk.render('gitalk-container');
    }
  };
</script>