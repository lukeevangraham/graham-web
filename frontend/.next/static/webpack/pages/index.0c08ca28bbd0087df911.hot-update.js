webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/Contact/Contact.module.scss":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./components/Contact/Contact.module.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".Contact_contactForm__y-UaF {\\n  max-width: 100rem;\\n  margin: auto;\\n  display: grid;\\n  grid-template-columns: repeat(auto-fit, minmax(45%, 1fr));\\n  grid-column: repeat(3, min-content);\\n  align-items: flex-start;\\n  grid-gap: 3rem;\\n}\\n.Contact_contactForm__input__3texR {\\n  font-size: 1.5rem;\\n  font-family: inherit;\\n  color: #59441c;\\n  padding: 1.3rem;\\n  border-radius: 5px;\\n  background-color: rgba(240, 240, 240, 0.9);\\n  border: 3px solid transparent;\\n  transition: all 0.3s;\\n}\\n.Contact_contactForm__input__3texR:focus {\\n  outline: none;\\n  box-shadow: 0 0 5px 4px #525252;\\n  border-bottom: 4px solid #3498bf;\\n}\\n.Contact_contactForm__input__3texR::-webkit-input-placeholder {\\n  color: #59441c;\\n}\\n.Contact_contactForm__inputName__2B3s5 {\\n  grid-row: 1/2;\\n}\\n.Contact_contactForm__inputName__2B3s5 {\\n  grid-row: 2/3;\\n}\\n.Contact_contactForm__inputPhone__2C5Np {\\n  grid-row: 3/4;\\n}\\n.Contact_contactForm__message__2TZnX {\\n  grid-row: 1/-1;\\n  grid-column: 2/-1;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://Contact.module.scss\",\"webpack://../../assets/css/sass/abstracts/_variables.scss\"],\"names\":[],\"mappings\":\"AAEA;EAGE,iBAAA;EACA,YAAA;EACA,aAAA;EACA,yDAAA;EACA,mCAAA;EACA,uBAAA;EACA,cAAA;AAHF;AAKE;EACE,iBAAA;EACA,oBAAA;EACA,cCMK;EDLL,eAAA;EACA,kBAAA;EACA,0CAAA;EACA,6BAAA;EACA,oBAAA;AAHJ;AAKI;EACI,aAAA;EACA,+BAAA;EACA,gCAAA;AAHR;AAMI;EACI,cCRC;ADIT;AAOI;EACI,aAAA;AALR;AAOI;EACI,aAAA;AALR;AAOI;EACI,aAAA;AALR;AASE;EACI,cAAA;EACA,iBAAA;AAPN\",\"sourcesContent\":[\"@import \\\"../../assets/css/sass/abstracts/variables\\\";\\n\\n.contactForm {\\n  // background-color: orangered;\\n\\n  max-width: 100rem;\\n  margin: auto;\\n  display: grid;\\n  grid-template-columns: repeat(auto-fit, minmax(45%, 1fr));\\n  grid-column: repeat(3, min-content);\\n  align-items: flex-start;\\n  grid-gap: 3rem;\\n\\n  &__input {\\n    font-size: 1.5rem;\\n    font-family: inherit;\\n    color: $color5;\\n    padding: 1.3rem;\\n    border-radius: 5px;\\n    background-color: rgba($color4, .9);\\n    border: 3px solid transparent;\\n    transition: all .3s;\\n\\n    &:focus {\\n        outline: none;\\n        box-shadow: 0 0 5px 4px $colorBaseGrayDarker;\\n        border-bottom: 4px solid $color3;\\n    }\\n\\n    &::-webkit-input-placeholder {\\n        color: $color5;\\n    }\\n\\n    &Name {\\n        grid-row: 1 / 2;\\n    }\\n    &Name {\\n        grid-row: 2 / 3;\\n    }\\n    &Phone {\\n        grid-row: 3 / 4;\\n    }\\n  }\\n\\n  &__message {\\n      grid-row: 1 / -1;\\n      grid-column: 2 / -1;\\n  }\\n}\\n\",\"// COLORS\\n\\n$color1: #1747a6;\\n$color1Lighter: lighten($color1, 50%);\\n$color1Light: lighten($color1, 25%);\\n$color1Dark: darken($color1, 10%);\\n$color1Darker: darken($color1, 40%);\\n\\n$color2: #0367a6;\\n$color2Lighter: lighten($color2, 50%);\\n$color2Light: lighten($color2, 25%);\\n$color2Dark: darken($color2, 10%);\\n$color2Darker: darken($color2, 20%);\\n\\n$color3: #3498bf;\\n$color3Lighter: lighten($color3, 50%);\\n$color3Light: lighten($color3, 25%);\\n$color3Dark: darken($color3, 10%);\\n$color3Darker: darken($color3, 25%);\\n\\n$color4: rgb(240, 240, 240);\\n\\n$color5: #59441c;\\n$color5Lighter: lighten($color5, 50%);\\n$color5Light: lighten($color5, 25%);\\n$color5Dark: darken($color5, 10%);\\n$color5Darker: darken($color5, 40%);\\n\\n$colorBaseGray: rgb(107, 107, 107);\\n$colorBaseGrayLighter: #ebebeb;\\n$colorBaseGrayLight: #cccaca;\\n$colorBaseGrayDark: #787878;\\n$colorBaseGrayDarker: #525252;\\n\\n\\n\\n// FONT\\n$default-font-size: 1.6rem;\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"contactForm\": \"Contact_contactForm__y-UaF\",\n\t\"contactForm__input\": \"Contact_contactForm__input__3texR\",\n\t\"contactForm__inputName\": \"Contact_contactForm__inputName__2B3s5\",\n\t\"contactForm__inputPhone\": \"Contact_contactForm__inputPhone__2C5Np\",\n\t\"contactForm__message\": \"Contact_contactForm__message__2TZnX\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWN0L0NvbnRhY3QubW9kdWxlLnNjc3M/ZWFmNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLG9IQUF5RDtBQUNuRztBQUNBO0FBQ0EsOEJBQThCLFFBQVMsZ0NBQWdDLHNCQUFzQixpQkFBaUIsa0JBQWtCLDhEQUE4RCx3Q0FBd0MsNEJBQTRCLG1CQUFtQixHQUFHLHNDQUFzQyxzQkFBc0IseUJBQXlCLG1CQUFtQixvQkFBb0IsdUJBQXVCLCtDQUErQyxrQ0FBa0MseUJBQXlCLEdBQUcsNENBQTRDLGtCQUFrQixvQ0FBb0MscUNBQXFDLEdBQUcsaUVBQWlFLG1CQUFtQixHQUFHLDBDQUEwQyxrQkFBa0IsR0FBRywwQ0FBMEMsa0JBQWtCLEdBQUcsMkNBQTJDLGtCQUFrQixHQUFHLHdDQUF3QyxtQkFBbUIsc0JBQXNCLEdBQUcsT0FBTyxnSkFBZ0osV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLCtFQUErRSxrQkFBa0IsbUNBQW1DLHdCQUF3QixpQkFBaUIsa0JBQWtCLDhEQUE4RCx3Q0FBd0MsNEJBQTRCLG1CQUFtQixnQkFBZ0Isd0JBQXdCLDJCQUEyQixxQkFBcUIsc0JBQXNCLHlCQUF5QiwwQ0FBMEMsb0NBQW9DLDBCQUEwQixpQkFBaUIsd0JBQXdCLHVEQUF1RCwyQ0FBMkMsT0FBTyxzQ0FBc0MseUJBQXlCLE9BQU8sZUFBZSwwQkFBMEIsT0FBTyxhQUFhLDBCQUEwQixPQUFPLGNBQWMsMEJBQTBCLE9BQU8sS0FBSyxrQkFBa0IseUJBQXlCLDRCQUE0QixLQUFLLEdBQUcsbUNBQW1DLHdDQUF3QyxzQ0FBc0Msb0NBQW9DLHNDQUFzQyxxQkFBcUIsd0NBQXdDLHNDQUFzQyxvQ0FBb0Msc0NBQXNDLHFCQUFxQix3Q0FBd0Msc0NBQXNDLG9DQUFvQyxzQ0FBc0MsZ0NBQWdDLHFCQUFxQix3Q0FBd0Msc0NBQXNDLG9DQUFvQyxzQ0FBc0MsdUNBQXVDLGlDQUFpQywrQkFBK0IsOEJBQThCLGdDQUFnQyw0Q0FBNEMsbUJBQW1CO0FBQ3Y2RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPyEuL2NvbXBvbmVudHMvQ29udGFjdC9Db250YWN0Lm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLkNvbnRhY3RfY29udGFjdEZvcm1fX3ktVWFGIHtcXG4gIG1heC13aWR0aDogMTAwcmVtO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNDUlLCAxZnIpKTtcXG4gIGdyaWQtY29sdW1uOiByZXBlYXQoMywgbWluLWNvbnRlbnQpO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBncmlkLWdhcDogM3JlbTtcXG59XFxuLkNvbnRhY3RfY29udGFjdEZvcm1fX2lucHV0X18zdGV4UiB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgY29sb3I6ICM1OTQ0MWM7XFxuICBwYWRkaW5nOiAxLjNyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjQwLCAyNDAsIDAuOSk7XFxuICBib3JkZXI6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbn1cXG4uQ29udGFjdF9jb250YWN0Rm9ybV9faW5wdXRfXzN0ZXhSOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3gtc2hhZG93OiAwIDAgNXB4IDRweCAjNTI1MjUyO1xcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICMzNDk4YmY7XFxufVxcbi5Db250YWN0X2NvbnRhY3RGb3JtX19pbnB1dF9fM3RleFI6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICM1OTQ0MWM7XFxufVxcbi5Db250YWN0X2NvbnRhY3RGb3JtX19pbnB1dE5hbWVfXzJCM3M1IHtcXG4gIGdyaWQtcm93OiAxLzI7XFxufVxcbi5Db250YWN0X2NvbnRhY3RGb3JtX19pbnB1dE5hbWVfXzJCM3M1IHtcXG4gIGdyaWQtcm93OiAyLzM7XFxufVxcbi5Db250YWN0X2NvbnRhY3RGb3JtX19pbnB1dFBob25lX18yQzVOcCB7XFxuICBncmlkLXJvdzogMy80O1xcbn1cXG4uQ29udGFjdF9jb250YWN0Rm9ybV9fbWVzc2FnZV9fMlRablgge1xcbiAgZ3JpZC1yb3c6IDEvLTE7XFxuICBncmlkLWNvbHVtbjogMi8tMTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL0NvbnRhY3QubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uLi8uLi9hc3NldHMvY3NzL3Nhc3MvYWJzdHJhY3RzL192YXJpYWJsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUdFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx5REFBQTtFQUNBLG1DQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FBSEY7QUFLRTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQ01LO0VETEwsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSw2QkFBQTtFQUNBLG9CQUFBO0FBSEo7QUFLSTtFQUNJLGFBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0FBSFI7QUFNSTtFQUNJLGNDUkM7QURJVDtBQU9JO0VBQ0ksYUFBQTtBQUxSO0FBT0k7RUFDSSxhQUFBO0FBTFI7QUFPSTtFQUNJLGFBQUE7QUFMUjtBQVNFO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FBUE5cIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCBcXFwiLi4vLi4vYXNzZXRzL2Nzcy9zYXNzL2Fic3RyYWN0cy92YXJpYWJsZXNcXFwiO1xcblxcbi5jb250YWN0Rm9ybSB7XFxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7XFxuXFxuICBtYXgtd2lkdGg6IDEwMHJlbTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDQ1JSwgMWZyKSk7XFxuICBncmlkLWNvbHVtbjogcmVwZWF0KDMsIG1pbi1jb250ZW50KTtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZ3JpZC1nYXA6IDNyZW07XFxuXFxuICAmX19pbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgY29sb3I6ICRjb2xvcjU7XFxuICAgIHBhZGRpbmc6IDEuM3JlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjQsIC45KTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XFxuXFxuICAgICY6Zm9jdXMge1xcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCA1cHggNHB4ICRjb2xvckJhc2VHcmF5RGFya2VyO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICRjb2xvcjM7XFxuICAgIH1cXG5cXG4gICAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICAgICAgICBjb2xvcjogJGNvbG9yNTtcXG4gICAgfVxcblxcbiAgICAmTmFtZSB7XFxuICAgICAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIH1cXG4gICAgJk5hbWUge1xcbiAgICAgICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICB9XFxuICAgICZQaG9uZSB7XFxuICAgICAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIH1cXG4gIH1cXG5cXG4gICZfX21lc3NhZ2Uge1xcbiAgICAgIGdyaWQtcm93OiAxIC8gLTE7XFxuICAgICAgZ3JpZC1jb2x1bW46IDIgLyAtMTtcXG4gIH1cXG59XFxuXCIsXCIvLyBDT0xPUlNcXG5cXG4kY29sb3IxOiAjMTc0N2E2O1xcbiRjb2xvcjFMaWdodGVyOiBsaWdodGVuKCRjb2xvcjEsIDUwJSk7XFxuJGNvbG9yMUxpZ2h0OiBsaWdodGVuKCRjb2xvcjEsIDI1JSk7XFxuJGNvbG9yMURhcms6IGRhcmtlbigkY29sb3IxLCAxMCUpO1xcbiRjb2xvcjFEYXJrZXI6IGRhcmtlbigkY29sb3IxLCA0MCUpO1xcblxcbiRjb2xvcjI6ICMwMzY3YTY7XFxuJGNvbG9yMkxpZ2h0ZXI6IGxpZ2h0ZW4oJGNvbG9yMiwgNTAlKTtcXG4kY29sb3IyTGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yMiwgMjUlKTtcXG4kY29sb3IyRGFyazogZGFya2VuKCRjb2xvcjIsIDEwJSk7XFxuJGNvbG9yMkRhcmtlcjogZGFya2VuKCRjb2xvcjIsIDIwJSk7XFxuXFxuJGNvbG9yMzogIzM0OThiZjtcXG4kY29sb3IzTGlnaHRlcjogbGlnaHRlbigkY29sb3IzLCA1MCUpO1xcbiRjb2xvcjNMaWdodDogbGlnaHRlbigkY29sb3IzLCAyNSUpO1xcbiRjb2xvcjNEYXJrOiBkYXJrZW4oJGNvbG9yMywgMTAlKTtcXG4kY29sb3IzRGFya2VyOiBkYXJrZW4oJGNvbG9yMywgMjUlKTtcXG5cXG4kY29sb3I0OiByZ2IoMjQwLCAyNDAsIDI0MCk7XFxuXFxuJGNvbG9yNTogIzU5NDQxYztcXG4kY29sb3I1TGlnaHRlcjogbGlnaHRlbigkY29sb3I1LCA1MCUpO1xcbiRjb2xvcjVMaWdodDogbGlnaHRlbigkY29sb3I1LCAyNSUpO1xcbiRjb2xvcjVEYXJrOiBkYXJrZW4oJGNvbG9yNSwgMTAlKTtcXG4kY29sb3I1RGFya2VyOiBkYXJrZW4oJGNvbG9yNSwgNDAlKTtcXG5cXG4kY29sb3JCYXNlR3JheTogcmdiKDEwNywgMTA3LCAxMDcpO1xcbiRjb2xvckJhc2VHcmF5TGlnaHRlcjogI2ViZWJlYjtcXG4kY29sb3JCYXNlR3JheUxpZ2h0OiAjY2NjYWNhO1xcbiRjb2xvckJhc2VHcmF5RGFyazogIzc4Nzg3ODtcXG4kY29sb3JCYXNlR3JheURhcmtlcjogIzUyNTI1MjtcXG5cXG5cXG5cXG4vLyBGT05UXFxuJGRlZmF1bHQtZm9udC1zaXplOiAxLjZyZW07XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY29udGFjdEZvcm1cIjogXCJDb250YWN0X2NvbnRhY3RGb3JtX195LVVhRlwiLFxuXHRcImNvbnRhY3RGb3JtX19pbnB1dFwiOiBcIkNvbnRhY3RfY29udGFjdEZvcm1fX2lucHV0X18zdGV4UlwiLFxuXHRcImNvbnRhY3RGb3JtX19pbnB1dE5hbWVcIjogXCJDb250YWN0X2NvbnRhY3RGb3JtX19pbnB1dE5hbWVfXzJCM3M1XCIsXG5cdFwiY29udGFjdEZvcm1fX2lucHV0UGhvbmVcIjogXCJDb250YWN0X2NvbnRhY3RGb3JtX19pbnB1dFBob25lX18yQzVOcFwiLFxuXHRcImNvbnRhY3RGb3JtX19tZXNzYWdlXCI6IFwiQ29udGFjdF9jb250YWN0Rm9ybV9fbWVzc2FnZV9fMlRablhcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/Contact/Contact.module.scss\n");

/***/ })

})