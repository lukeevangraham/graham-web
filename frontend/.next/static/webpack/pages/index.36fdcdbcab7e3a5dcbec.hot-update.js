webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/Contact/Contact.module.scss":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./components/Contact/Contact.module.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".Contact_contactForm__y-UaF {\\n  max-width: 100rem;\\n  margin: auto;\\n  display: grid;\\n  grid-template-columns: repeat(auto-fit, minmax(45%, 1fr));\\n  grid-template-rows: repeat(3, -webkit-min-content);\\n  grid-template-rows: repeat(3, min-content);\\n  align-items: flex-start;\\n  grid-gap: 3rem;\\n}\\n.Contact_contactForm__input__3texR {\\n  font-size: 1.5rem;\\n  font-family: inherit;\\n  color: #59441c;\\n  padding: 1.3rem;\\n  border-radius: 5px;\\n  background-color: rgba(240, 240, 240, 0.9);\\n  border: 3px solid transparent;\\n  transition: all 0.3s;\\n}\\n.Contact_contactForm__input__3texR:focus {\\n  outline: none;\\n  box-shadow: 0 0 5px 4px #525252;\\n  border-bottom: 4px solid #3498bf;\\n}\\n.Contact_contactForm__input__3texR::-webkit-input-placeholder {\\n  color: #59441c;\\n}\\n.Contact_contactForm__inputName__2B3s5 {\\n  grid-row: 1/2;\\n}\\n.Contact_contactForm__inputEmail__A4sS8 {\\n  grid-row: 2/3;\\n}\\n.Contact_contactForm__inputPhone__2C5Np {\\n  grid-row: 3/4;\\n}\\n.Contact_contactForm__message__2TZnX {\\n  grid-row: 1/4;\\n  grid-column: 2/-1;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://Contact.module.scss\",\"webpack://../../assets/css/sass/abstracts/_variables.scss\"],\"names\":[],\"mappings\":\"AAEA;EAGE,iBAAA;EACA,YAAA;EACA,aAAA;EACA,yDAAA;EACA,kDAAA;EAAA,0CAAA;EACA,uBAAA;EACA,cAAA;AAHF;AAKE;EACE,iBAAA;EACA,oBAAA;EACA,cCMK;EDLL,eAAA;EACA,kBAAA;EACA,0CAAA;EACA,6BAAA;EACA,oBAAA;AAHJ;AAKI;EACI,aAAA;EACA,+BAAA;EACA,gCAAA;AAHR;AAMI;EACI,cCRC;ADIT;AAOI;EACI,aAAA;AALR;AAOI;EACI,aAAA;AALR;AAOI;EACI,aAAA;AALR;AASE;EACI,aAAA;EACA,iBAAA;AAPN\",\"sourcesContent\":[\"@import \\\"../../assets/css/sass/abstracts/variables\\\";\\n\\n.contactForm {\\n  // background-color: orangered;\\n\\n  max-width: 100rem;\\n  margin: auto;\\n  display: grid;\\n  grid-template-columns: repeat(auto-fit, minmax(45%, 1fr));\\n  grid-template-rows: repeat(3, min-content);\\n  align-items: flex-start;\\n  grid-gap: 3rem;\\n\\n  &__input {\\n    font-size: 1.5rem;\\n    font-family: inherit;\\n    color: $color5;\\n    padding: 1.3rem;\\n    border-radius: 5px;\\n    background-color: rgba($color4, .9);\\n    border: 3px solid transparent;\\n    transition: all .3s;\\n\\n    &:focus {\\n        outline: none;\\n        box-shadow: 0 0 5px 4px $colorBaseGrayDarker;\\n        border-bottom: 4px solid $color3;\\n    }\\n\\n    &::-webkit-input-placeholder {\\n        color: $color5;\\n    }\\n\\n    &Name {\\n        grid-row: 1 / 2;\\n    }\\n    &Email {\\n        grid-row: 2 / 3;\\n    }\\n    &Phone {\\n        grid-row: 3 / 4;\\n    }\\n  }\\n\\n  &__message {\\n      grid-row: 1 / 4;\\n      grid-column: 2 / -1;\\n  }\\n}\\n\",\"// COLORS\\n\\n$color1: #1747a6;\\n$color1Lighter: lighten($color1, 50%);\\n$color1Light: lighten($color1, 25%);\\n$color1Dark: darken($color1, 10%);\\n$color1Darker: darken($color1, 40%);\\n\\n$color2: #0367a6;\\n$color2Lighter: lighten($color2, 50%);\\n$color2Light: lighten($color2, 25%);\\n$color2Dark: darken($color2, 10%);\\n$color2Darker: darken($color2, 20%);\\n\\n$color3: #3498bf;\\n$color3Lighter: lighten($color3, 50%);\\n$color3Light: lighten($color3, 25%);\\n$color3Dark: darken($color3, 10%);\\n$color3Darker: darken($color3, 25%);\\n\\n$color4: rgb(240, 240, 240);\\n\\n$color5: #59441c;\\n$color5Lighter: lighten($color5, 50%);\\n$color5Light: lighten($color5, 25%);\\n$color5Dark: darken($color5, 10%);\\n$color5Darker: darken($color5, 40%);\\n\\n$colorBaseGray: rgb(107, 107, 107);\\n$colorBaseGrayLighter: #ebebeb;\\n$colorBaseGrayLight: #cccaca;\\n$colorBaseGrayDark: #787878;\\n$colorBaseGrayDarker: #525252;\\n\\n\\n\\n// FONT\\n$default-font-size: 1.6rem;\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"contactForm\": \"Contact_contactForm__y-UaF\",\n\t\"contactForm__input\": \"Contact_contactForm__input__3texR\",\n\t\"contactForm__inputName\": \"Contact_contactForm__inputName__2B3s5\",\n\t\"contactForm__inputEmail\": \"Contact_contactForm__inputEmail__A4sS8\",\n\t\"contactForm__inputPhone\": \"Contact_contactForm__inputPhone__2C5Np\",\n\t\"contactForm__message\": \"Contact_contactForm__message__2TZnX\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWN0L0NvbnRhY3QubW9kdWxlLnNjc3M/ZWFmNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLG9IQUF5RDtBQUNuRztBQUNBO0FBQ0EsOEJBQThCLFFBQVMsZ0NBQWdDLHNCQUFzQixpQkFBaUIsa0JBQWtCLDhEQUE4RCx1REFBdUQsK0NBQStDLDRCQUE0QixtQkFBbUIsR0FBRyxzQ0FBc0Msc0JBQXNCLHlCQUF5QixtQkFBbUIsb0JBQW9CLHVCQUF1QiwrQ0FBK0Msa0NBQWtDLHlCQUF5QixHQUFHLDRDQUE0QyxrQkFBa0Isb0NBQW9DLHFDQUFxQyxHQUFHLGlFQUFpRSxtQkFBbUIsR0FBRywwQ0FBMEMsa0JBQWtCLEdBQUcsMkNBQTJDLGtCQUFrQixHQUFHLDJDQUEyQyxrQkFBa0IsR0FBRyx3Q0FBd0Msa0JBQWtCLHNCQUFzQixHQUFHLE9BQU8sZ0pBQWdKLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLCtFQUErRSxrQkFBa0IsbUNBQW1DLHdCQUF3QixpQkFBaUIsa0JBQWtCLDhEQUE4RCwrQ0FBK0MsNEJBQTRCLG1CQUFtQixnQkFBZ0Isd0JBQXdCLDJCQUEyQixxQkFBcUIsc0JBQXNCLHlCQUF5QiwwQ0FBMEMsb0NBQW9DLDBCQUEwQixpQkFBaUIsd0JBQXdCLHVEQUF1RCwyQ0FBMkMsT0FBTyxzQ0FBc0MseUJBQXlCLE9BQU8sZUFBZSwwQkFBMEIsT0FBTyxjQUFjLDBCQUEwQixPQUFPLGNBQWMsMEJBQTBCLE9BQU8sS0FBSyxrQkFBa0Isd0JBQXdCLDRCQUE0QixLQUFLLEdBQUcsbUNBQW1DLHdDQUF3QyxzQ0FBc0Msb0NBQW9DLHNDQUFzQyxxQkFBcUIsd0NBQXdDLHNDQUFzQyxvQ0FBb0Msc0NBQXNDLHFCQUFxQix3Q0FBd0Msc0NBQXNDLG9DQUFvQyxzQ0FBc0MsZ0NBQWdDLHFCQUFxQix3Q0FBd0Msc0NBQXNDLG9DQUFvQyxzQ0FBc0MsdUNBQXVDLGlDQUFpQywrQkFBK0IsOEJBQThCLGdDQUFnQyw0Q0FBNEMsbUJBQW1CO0FBQ3YvRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/IS4vY29tcG9uZW50cy9Db250YWN0L0NvbnRhY3QubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuQ29udGFjdF9jb250YWN0Rm9ybV9feS1VYUYge1xcbiAgbWF4LXdpZHRoOiAxMDByZW07XFxuICBtYXJnaW46IGF1dG87XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg0NSUsIDFmcikpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgLXdlYmtpdC1taW4tY29udGVudCk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCBtaW4tY29udGVudCk7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGdyaWQtZ2FwOiAzcmVtO1xcbn1cXG4uQ29udGFjdF9jb250YWN0Rm9ybV9faW5wdXRfXzN0ZXhSIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBjb2xvcjogIzU5NDQxYztcXG4gIHBhZGRpbmc6IDEuM3JlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAyNDAsIDI0MCwgMC45KTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcbi5Db250YWN0X2NvbnRhY3RGb3JtX19pbnB1dF9fM3RleFI6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggNHB4ICM1MjUyNTI7XFxuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzM0OThiZjtcXG59XFxuLkNvbnRhY3RfY29udGFjdEZvcm1fX2lucHV0X18zdGV4Ujo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBjb2xvcjogIzU5NDQxYztcXG59XFxuLkNvbnRhY3RfY29udGFjdEZvcm1fX2lucHV0TmFtZV9fMkIzczUge1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG59XFxuLkNvbnRhY3RfY29udGFjdEZvcm1fX2lucHV0RW1haWxfX0E0c1M4IHtcXG4gIGdyaWQtcm93OiAyLzM7XFxufVxcbi5Db250YWN0X2NvbnRhY3RGb3JtX19pbnB1dFBob25lX18yQzVOcCB7XFxuICBncmlkLXJvdzogMy80O1xcbn1cXG4uQ29udGFjdF9jb250YWN0Rm9ybV9fbWVzc2FnZV9fMlRablgge1xcbiAgZ3JpZC1yb3c6IDEvNDtcXG4gIGdyaWQtY29sdW1uOiAyLy0xO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vQ29udGFjdC5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovLy4uLy4uL2Fzc2V0cy9jc3Mvc2Fzcy9hYnN0cmFjdHMvX3ZhcmlhYmxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBR0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlEQUFBO0VBQ0Esa0RBQUE7RUFBQSwwQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQUhGO0FBS0U7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0NNSztFRExMLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQkFBQTtBQUhKO0FBS0k7RUFDSSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtBQUhSO0FBTUk7RUFDSSxjQ1JDO0FESVQ7QUFPSTtFQUNJLGFBQUE7QUFMUjtBQU9JO0VBQ0ksYUFBQTtBQUxSO0FBT0k7RUFDSSxhQUFBO0FBTFI7QUFTRTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtBQVBOXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgXFxcIi4uLy4uL2Fzc2V0cy9jc3Mvc2Fzcy9hYnN0cmFjdHMvdmFyaWFibGVzXFxcIjtcXG5cXG4uY29udGFjdEZvcm0ge1xcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkO1xcblxcbiAgbWF4LXdpZHRoOiAxMDByZW07XFxuICBtYXJnaW46IGF1dG87XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg0NSUsIDFmcikpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgbWluLWNvbnRlbnQpO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBncmlkLWdhcDogM3JlbTtcXG5cXG4gICZfX2lucHV0IHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBjb2xvcjogJGNvbG9yNTtcXG4gICAgcGFkZGluZzogMS4zcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yNCwgLjkpO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcztcXG5cXG4gICAgJjpmb2N1cyB7XFxuICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDVweCA0cHggJGNvbG9yQmFzZUdyYXlEYXJrZXI7XFxuICAgICAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgJGNvbG9yMztcXG4gICAgfVxcblxcbiAgICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gICAgICAgIGNvbG9yOiAkY29sb3I1O1xcbiAgICB9XFxuXFxuICAgICZOYW1lIHtcXG4gICAgICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgfVxcbiAgICAmRW1haWwge1xcbiAgICAgICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICB9XFxuICAgICZQaG9uZSB7XFxuICAgICAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIH1cXG4gIH1cXG5cXG4gICZfX21lc3NhZ2Uge1xcbiAgICAgIGdyaWQtcm93OiAxIC8gNDtcXG4gICAgICBncmlkLWNvbHVtbjogMiAvIC0xO1xcbiAgfVxcbn1cXG5cIixcIi8vIENPTE9SU1xcblxcbiRjb2xvcjE6ICMxNzQ3YTY7XFxuJGNvbG9yMUxpZ2h0ZXI6IGxpZ2h0ZW4oJGNvbG9yMSwgNTAlKTtcXG4kY29sb3IxTGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yMSwgMjUlKTtcXG4kY29sb3IxRGFyazogZGFya2VuKCRjb2xvcjEsIDEwJSk7XFxuJGNvbG9yMURhcmtlcjogZGFya2VuKCRjb2xvcjEsIDQwJSk7XFxuXFxuJGNvbG9yMjogIzAzNjdhNjtcXG4kY29sb3IyTGlnaHRlcjogbGlnaHRlbigkY29sb3IyLCA1MCUpO1xcbiRjb2xvcjJMaWdodDogbGlnaHRlbigkY29sb3IyLCAyNSUpO1xcbiRjb2xvcjJEYXJrOiBkYXJrZW4oJGNvbG9yMiwgMTAlKTtcXG4kY29sb3IyRGFya2VyOiBkYXJrZW4oJGNvbG9yMiwgMjAlKTtcXG5cXG4kY29sb3IzOiAjMzQ5OGJmO1xcbiRjb2xvcjNMaWdodGVyOiBsaWdodGVuKCRjb2xvcjMsIDUwJSk7XFxuJGNvbG9yM0xpZ2h0OiBsaWdodGVuKCRjb2xvcjMsIDI1JSk7XFxuJGNvbG9yM0Rhcms6IGRhcmtlbigkY29sb3IzLCAxMCUpO1xcbiRjb2xvcjNEYXJrZXI6IGRhcmtlbigkY29sb3IzLCAyNSUpO1xcblxcbiRjb2xvcjQ6IHJnYigyNDAsIDI0MCwgMjQwKTtcXG5cXG4kY29sb3I1OiAjNTk0NDFjO1xcbiRjb2xvcjVMaWdodGVyOiBsaWdodGVuKCRjb2xvcjUsIDUwJSk7XFxuJGNvbG9yNUxpZ2h0OiBsaWdodGVuKCRjb2xvcjUsIDI1JSk7XFxuJGNvbG9yNURhcms6IGRhcmtlbigkY29sb3I1LCAxMCUpO1xcbiRjb2xvcjVEYXJrZXI6IGRhcmtlbigkY29sb3I1LCA0MCUpO1xcblxcbiRjb2xvckJhc2VHcmF5OiByZ2IoMTA3LCAxMDcsIDEwNyk7XFxuJGNvbG9yQmFzZUdyYXlMaWdodGVyOiAjZWJlYmViO1xcbiRjb2xvckJhc2VHcmF5TGlnaHQ6ICNjY2NhY2E7XFxuJGNvbG9yQmFzZUdyYXlEYXJrOiAjNzg3ODc4O1xcbiRjb2xvckJhc2VHcmF5RGFya2VyOiAjNTI1MjUyO1xcblxcblxcblxcbi8vIEZPTlRcXG4kZGVmYXVsdC1mb250LXNpemU6IDEuNnJlbTtcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjb250YWN0Rm9ybVwiOiBcIkNvbnRhY3RfY29udGFjdEZvcm1fX3ktVWFGXCIsXG5cdFwiY29udGFjdEZvcm1fX2lucHV0XCI6IFwiQ29udGFjdF9jb250YWN0Rm9ybV9faW5wdXRfXzN0ZXhSXCIsXG5cdFwiY29udGFjdEZvcm1fX2lucHV0TmFtZVwiOiBcIkNvbnRhY3RfY29udGFjdEZvcm1fX2lucHV0TmFtZV9fMkIzczVcIixcblx0XCJjb250YWN0Rm9ybV9faW5wdXRFbWFpbFwiOiBcIkNvbnRhY3RfY29udGFjdEZvcm1fX2lucHV0RW1haWxfX0E0c1M4XCIsXG5cdFwiY29udGFjdEZvcm1fX2lucHV0UGhvbmVcIjogXCJDb250YWN0X2NvbnRhY3RGb3JtX19pbnB1dFBob25lX18yQzVOcFwiLFxuXHRcImNvbnRhY3RGb3JtX19tZXNzYWdlXCI6IFwiQ29udGFjdF9jb250YWN0Rm9ybV9fbWVzc2FnZV9fMlRablhcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/Contact/Contact.module.scss\n");

/***/ })

})