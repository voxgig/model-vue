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
    vue: {
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue',
      root: 'Vue'
    },
    vuetify: {
      commonjs: 'vuetify',
      commonjs2: 'vuetify',
      amd: 'vuetify',
      root: 'Vuetify'
    }
    }
    //externals: /vuetify\/lib/,
  },
}
