module.exports = {
  runtimeCompiler: true,
  css: {
    extract: true,
  },
  pages: {
    index: 'src/index.js',
  },
  configureWebpack: {
    externals: {
      'vue': {
        commonjs: 'vue',
        commonjs2: 'vue',
        amd: 'vue',
        root: 'Vue'
      },
      
      'vue-router': {
        commonjs: 'vue-router',
        commonjs2: 'vue-router',
        amd: 'vue-router',
        root: 'vue-router'
      },

      'vuetify': {
        commonjs: 'vuetify',
        commonjs2: 'vuetify',
        amd: 'vuetify',
        root: 'Vuetify'
      }
    }
  },
}
