# Notes

## Setup

### 10. 
```
$ vue create basic
```

### 20. 

Move all packages to devDependencies. Add:
```
    "@voxgig/model": "voxgig/model",
    "@voxgig/model-vue": "voxgig/model-vue",
    "jsonic": "github:rjrodger/jsonic#nextgen",
    "vuetify": "^2.5.1",
    "vuetify-loader": "1.7.2"
```


### 30.

Setup public and account pages:
* rename src/main.js to src/index.js
* create vue.config.js:
```
module.exports = {
  pages: {
    index: 'src/index.js',
    account: 'src/account.js',
  }
}
```


### 40. 
Refactor file names: https://github.com/voxgig/model-vue/commit/dc5858ae11d8c34083ea65bd2e8df1c3c461bc88





