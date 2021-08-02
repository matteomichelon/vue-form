/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

// Richiamo vuelidate
Vue.use(vuelidate["default"]); // For form_age

var minMaxAge = validators.between(12, 120);
new Vue({
  el: '#root',

  /* DATA */
  data: {
    formStartNone: false,
    recapFormBlock: false,
    displayMobile: false,
    windowWidth: 0,
    widthXs: 600,
    submitStatus: '',
    formAge: false,
    formEmail: false,
    checkBlock: false,
    pulsebottom: 'pulsebottom',
    init: null,

    /* Form Object */
    form_name: {
      name: null
    },
    form_age: {
      age: null
    },
    form_email: {
      email: null,
      newsletter: false
    },

    /* Form Success */
    form_name_success: false,
    form_age_success: false,
    form_email_success: false
  },

  /* VALIDATIONS */
  validations: {
    form_name: {
      name: {
        required: validators.required // $v.form.name.required

      }
    },
    form_age: {
      age: {
        required: validators.required,
        // $v.form.age.required
        integer: validators.integer,
        // $v.form.age.integer
        minMaxAge: minMaxAge // $v.form.age.minMaxAge

      }
    },
    form_email: {
      email: {
        email: validators.email,
        required: validators.requiredIf(function () {
          return !!this.form_email.newsletter;
        })
      }
    }
  },

  /* METHODS */
  methods: {
    // Funzione per accedere al form
    startForm: function startForm() {
      this.formStartNone = true;
      setTimeout(function () {
        // Mi permette di posizionare il cursore nell'id prelevato
        document.getElementById("name").focus();
      }, 500);
    },
    // Funzione per il refresh della pagina
    reloadForm: function reloadForm() {
      window.location.reload();
    },
    // Funzione per la validazione del campo
    // Deve avere un paramentro. Esempio: $v.form.email
    validClass: function validClass(fieldForm) {
      return !fieldForm.$invalid && fieldForm.$model && fieldForm.$dirty;
    },
    // Funzione per l'errore del campo
    // Deve avere un paramentro. Esempio: $v.form.email
    errorClass: function errorClass(fieldForm) {
      return fieldForm.$error;
    },
    //-------------

    /* Send Form */
    //-------------
    // Funzione Invia Form per il nome
    // Entra in funzione quando il button viene premuto
    sendForm_name: function sendForm_name() {
      var _this = this;

      this.$v.form_name.$touch(); // Se il form non risulta valido non entra nel codice

      if (!this.$v.form_name.$invalid) {
        // Se il form è già stato compilato entra in questo codice
        if (this.submitStatus.length > 0) {
          window.location.href = '#form-age';
          this.submitStatus = ''; // Mi permette di posizionare il cursore nell'id prelevato

          document.getElementById("age").focus();
        } else {
          this.form_name_success = true;
          this.submitStatus = 'PENDING';
          setTimeout(function () {
            _this.submitStatus = 'OK';
          }, 1000);
        }
      }
    },
    // Funzione Invia Form per l'età
    // Entra in funzione quando il button viene premuto
    sendForm_age: function sendForm_age() {
      var _this2 = this;

      this.$v.form_age.$touch(); // Se il form non risulta valido non entra nel codice

      if (!this.$v.form_age.$invalid) {
        // Se il form è già stato compilato entra in questo codice
        if (this.submitStatus.length > 0) {
          window.location.href = '#form-email';
          this.submitStatus = ''; // Mi permette di posizionare il cursore nell'id prelevato

          document.getElementById("email").focus();
        } else {
          this.form_age_success = true;
          this.submitStatus = 'PENDING';
          setTimeout(function () {
            _this2.submitStatus = 'OK';
          }, 1000);
        }
      }
    },
    // Funzione Invia Form per l'email
    // Entra in funzione quando il button viene premuto
    sendForm_email: function sendForm_email() {
      var _this3 = this;

      this.$v.form_email.$touch(); // Se il form non risulta valido non entra nel codice

      if (!this.$v.form_email.$invalid) {
        // Se il form è già stato compilato entra in questo codice
        if (this.submitStatus.length > 0) {
          this.submitStatus = '';
          this.recapFormNone = true;
        } else {
          this.submitStatus = 'PENDING';
          setTimeout(function () {
            _this3.submitStatus = 'OK';
          }, 1000);
        }
      }
    },
    //-----------------

    /* end Send Form */
    //-----------------
    // Funzione toggle per aggiungere il check alla input 
    // per avere la padronanza sugli stili css della checkbox
    checkboxToggle: function checkboxToggle() {
      this.form_email.newsletter = !this.form_email.newsletter;
      this.checkBlock = !this.checkBlock;
    },
    // Funzione per monitorare la larghezza del monitor
    // Gestita dal Mounted
    getWindowWidth: function getWindowWidth() {
      this.windowWidth = document.documentElement.clientWidth;
    },
    // Funzioni per Nav
    formAgeTrue: function formAgeTrue() {
      this.formAge = true;
      this.submitStatus = false;
    },
    formEmailTrue: function formEmailTrue() {
      this.formEmail = true;
      this.submitStatus = false;
    }
  },
  // Rimuove l'evento in ascolto getWindowWidth
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this.getWindowWidth);
  },

  /* MOUNTED */
  mounted: function mounted() {
    // Funzione per monitorare la larghezza del monitor
    this.$nextTick(function () {
      window.addEventListener('resize', this.getWindowWidth); //Init

      this.getWindowWidth();
    });
  }
});

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/dist/app": 0,
/******/ 			"dist/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkvue_form"] = self["webpackChunkvue_form"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["dist/app"], () => (__webpack_require__("./src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["dist/app"], () => (__webpack_require__("./src/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;