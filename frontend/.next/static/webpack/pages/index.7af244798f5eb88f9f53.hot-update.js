webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/Projects/Project.module.scss":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./components/Projects/Project.module.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"/*\\n\\n0 - 600px:    Phone\\n600 - 900px:  Tablet portrait\\n900 - 1200px: Tablet landscape\\n[1200 - 1800] is where our normal styles apple\\n1800px + : Big desktop\\n\\n$breakpoint argument choices:\\n- phone\\n- tab-port\\n- tab-land\\n- big-desktop\\n\\nORDER:  Base + typography > general layout + grid > page layout > components\\n\\n1em = 16px (default broswer font size)\\n*/\\n.Project_project__1ijlA {\\n  width: 90%;\\n  margin: auto;\\n  padding: 2rem;\\n  border-radius: 5px;\\n  display: grid;\\n  grid-template-columns: repeat(2, minmax(min-content, 1fr));\\n  grid-template-rows: minmax(min-content, 40.875rem);\\n  grid-gap: 2rem;\\n  align-items: center;\\n  background-image: linear-gradient(to bottom right, rgba(107, 107, 107, 0.08), rgba(107, 107, 107, 0.04));\\n}\\n@media only screen and (max-width: 56.25em) {\\n  .Project_project__1ijlA {\\n    grid-template-columns: 1fr;\\n  }\\n}\\n@media only screen and (max-width: 37.5em) {\\n  .Project_project__1ijlA {\\n    grid-template-rows: minmax(min-content, 30rem);\\n  }\\n}\\n@media only screen and (max-width: 28.125em) {\\n  .Project_project__1ijlA {\\n    grid-template-rows: minmax(min-content, 16.5rem);\\n  }\\n}\\n.Project_project__1ijlA .Project_imageWrapper__148L2 {\\n  width: 100%;\\n  padding-bottom: 62.5%;\\n}\\n.Project_project__1ijlA .Project_imageWrapper__148L2 .Project_image__YEYNx {\\n  position: relative;\\n  max-height: 40.875rem;\\n  width: auto;\\n  background-color: orangered;\\n  grid-row: 1/-1;\\n  height: 100%;\\n  border-radius: 5px;\\n  overflow: hidden;\\n}\\n@media only screen and (max-width: 56.25em) {\\n  .Project_project__1ijlA .Project_imageWrapper__148L2 .Project_image__YEYNx {\\n    grid-column: 1/-1;\\n  }\\n}\\n.Project_project__1ijlA .Project_projectTextColumn__2cpVe {\\n  display: grid;\\n  grid-template-rows: repeat(4, min-content);\\n  align-content: space-between;\\n  justify-content: space-between;\\n  grid-gap: 1rem;\\n  font-size: 1.8rem;\\n}\\n.Project_project__1ijlA .Project_projectTextColumn__2cpVe .Project_title__ZcJ51 {\\n  grid-row: 1/1;\\n  font-size: 3.4rem;\\n  font-weight: 500;\\n  line-height: 1;\\n}\\n.Project_project__1ijlA .Project_projectTextColumn__2cpVe .Project_summary__1Ekwh {\\n  grid-row: 2/2;\\n  margin: -5px 0 0 0;\\n}\\n.Project_project__1ijlA .Project_projectTextColumn__2cpVe .Project_tools__3igv0 {\\n  grid-row: 3/3;\\n  display: grid;\\n  grid-template-columns: min-content 70%;\\n  grid-gap: 2rem;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://../../assets/css/sass/abstracts/_mixins.scss\",\"webpack://Project.module.scss\"],\"names\":[],\"mappings\":\"AAEA;;;;;;;;;;;;;;;;;CAAA;ACCA;EACE,UAAA;EACA,YAAA;EAGA,aAAA;EACA,kBAAA;EACA,aAAA;EACA,0DAAA;EACA,kDAAA;EACA,cAAA;EACA,mBAAA;EAEA,wGAAA;AAaF;ADOI;ECjCJ;IAoBI,0BAAA;EAUF;AACF;ADLI;EC1BJ;IAuBI,8CAAA;EAYF;AACF;ADhBI;ECpBJ;IA0BI,gDAAA;EAcF;AACF;AAZE;EACI,WAAA;EACA,qBAAA;AAcN;AAZI;EACE,kBAAA;EAEA,qBAAA;EACA,WAAA;EAEA,2BAAA;EACA,cAAA;EACA,YAAA;EACA,kBAAA;EACA,gBAAA;AAYN;ADtBI;ECAA;IAiBI,iBAAA;EASN;AACF;AADE;EACE,aAAA;EACA,0CAAA;EACA,4BAAA;EACA,8BAAA;EACA,cAAA;EACA,iBAAA;AAGJ;AADI;EACE,aAAA;EACA,iBAAA;EACA,gBAAA;EACA,cAAA;AAGN;AAAI;EACE,aAAA;EACA,kBAAA;AAEN;AAAI;EACE,aAAA;EACA,aAAA;EACA,sCAAA;EACA,cAAA;AAEN\",\"sourcesContent\":[\"// MEDIA QUERY MANAGER\\n\\n/*\\n\\n0 - 600px:    Phone\\n600 - 900px:  Tablet portrait\\n900 - 1200px: Tablet landscape\\n[1200 - 1800] is where our normal styles apple\\n1800px + : Big desktop\\n\\n$breakpoint argument choices:\\n- phone\\n- tab-port\\n- tab-land\\n- big-desktop\\n\\nORDER:  Base + typography > general layout + grid > page layout > components\\n\\n1em = 16px (default broswer font size)\\n*/\\n\\n@mixin respond($breakpoint) {\\n  @if $breakpoint == sm-phone {\\n    @media only screen and (max-width: 28.125em) {\\n      //450px\\n      @content;\\n    }\\n  }\\n  @if $breakpoint == phone {\\n    @media only screen and (max-width: 37.5em) {\\n      //600px\\n      @content;\\n    }\\n  }\\n  @if $breakpoint == tab-port {\\n    //900px\\n    @media only screen and (max-width: 56.25em) {\\n      @content;\\n    }\\n  }\\n  @if $breakpoint == tab-land {\\n    // 1200px\\n    @media only screen and (max-width: 75em) {\\n      @content;\\n    }\\n  }\\n  @if $breakpoint == big-desktop {\\n    //1800px\\n    @media only screen and (min-width: 112.5em) {\\n      @content;\\n    }\\n  }\\n}\\n\",\"@import \\\"../../assets/css/sass/abstracts/variables\\\";\\n@import \\\"../../assets/css/sass/abstracts/mixins\\\";\\n\\n.project {\\n  width: 90%;\\n  margin: auto;\\n  //   height: 40rem;\\n  //   background-color: orangered;\\n  padding: 2rem;\\n  border-radius: 5px;\\n  display: grid;\\n  grid-template-columns: repeat(2, minmax(min-content, 1fr));\\n  grid-template-rows: minmax(min-content, 40.875rem);\\n  grid-gap: 2rem;\\n  align-items: center;\\n  //   box-shadow: 0 0 5px 5px rgba($colorBaseGray, .7);\\n  background-image: linear-gradient(\\n    to bottom right,\\n    rgba($colorBaseGray, 0.08),\\n    rgba($colorBaseGray, 0.04)\\n  );\\n\\n  @include respond(tab-port) {\\n    grid-template-columns: 1fr;\\n  }\\n  @include respond(phone) {\\n    grid-template-rows: minmax(min-content, 30rem);\\n  }\\n  @include respond(sm-phone) {\\n    grid-template-rows: minmax(min-content, 16.5rem);\\n  }\\n\\n  .imageWrapper {\\n      width: 100%;\\n      padding-bottom: 62.5%;\\n\\n    .image {\\n      position: relative;\\n      // max-width: 65.4rem;\\n      max-height: 40.875rem;\\n      width: auto;\\n      // height: auto;\\n      background-color: orangered;\\n      grid-row: 1 / -1;\\n      height: 100%;\\n      border-radius: 5px;\\n      overflow: hidden;\\n      // height: 100%;\\n      // width: 400px;\\n      // height: 400px;\\n      // background-color: orangered;\\n\\n      @include respond(tab-port) {\\n        grid-column: 1 / -1;\\n      }\\n\\n      .imageInner {\\n        // border-radius: 5px;\\n      }\\n    }\\n  }\\n\\n  .projectTextColumn {\\n    display: grid;\\n    grid-template-rows: repeat(4, min-content);\\n    align-content: space-between;\\n    justify-content: space-between;\\n    grid-gap: 1rem;\\n    font-size: 1.8rem;\\n\\n    .title {\\n      grid-row: 1 / 1;\\n      font-size: 3.4rem;\\n      font-weight: 500;\\n      line-height: 1;\\n      // margin-bottom: -5px;\\n    }\\n    .summary {\\n      grid-row: 2 / 2;\\n      margin: -5px 0 0 0;\\n    }\\n    .tools {\\n      grid-row: 3 / 3;\\n      display: grid;\\n      grid-template-columns: min-content 70%;\\n      grid-gap: 2rem;\\n    }\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"project\": \"Project_project__1ijlA\",\n\t\"imageWrapper\": \"Project_imageWrapper__148L2\",\n\t\"image\": \"Project_image__YEYNx\",\n\t\"projectTextColumn\": \"Project_projectTextColumn__2cpVe\",\n\t\"title\": \"Project_title__ZcJ51\",\n\t\"summary\": \"Project_summary__1Ekwh\",\n\t\"tools\": \"Project_tools__3igv0\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0cy9Qcm9qZWN0Lm1vZHVsZS5zY3NzPzM0ZDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxvSEFBeUQ7QUFDbkc7QUFDQTtBQUNBLDhCQUE4QixRQUFTLDZZQUE2WSxlQUFlLGlCQUFpQixrQkFBa0IsdUJBQXVCLGtCQUFrQiwrREFBK0QsdURBQXVELG1CQUFtQix3QkFBd0IsNkdBQTZHLEdBQUcsK0NBQStDLDZCQUE2QixpQ0FBaUMsS0FBSyxHQUFHLDhDQUE4Qyw2QkFBNkIscURBQXFELEtBQUssR0FBRyxnREFBZ0QsNkJBQTZCLHVEQUF1RCxLQUFLLEdBQUcsd0RBQXdELGdCQUFnQiwwQkFBMEIsR0FBRyw4RUFBOEUsdUJBQXVCLDBCQUEwQixnQkFBZ0IsZ0NBQWdDLG1CQUFtQixpQkFBaUIsdUJBQXVCLHFCQUFxQixHQUFHLCtDQUErQyxnRkFBZ0Ysd0JBQXdCLEtBQUssR0FBRyw2REFBNkQsa0JBQWtCLCtDQUErQyxpQ0FBaUMsbUNBQW1DLG1CQUFtQixzQkFBc0IsR0FBRyxtRkFBbUYsa0JBQWtCLHNCQUFzQixxQkFBcUIsbUJBQW1CLEdBQUcscUZBQXFGLGtCQUFrQix1QkFBdUIsR0FBRyxtRkFBbUYsa0JBQWtCLGtCQUFrQiwyQ0FBMkMsbUJBQW1CLEdBQUcsT0FBTyw2SkFBNkosS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLE1BQU0sWUFBWSxLQUFLLEtBQUssS0FBSyxNQUFNLFlBQVksS0FBSyxLQUFLLE1BQU0sTUFBTSxZQUFZLEtBQUssS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLFlBQVksS0FBSyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxtY0FBbWMsaUNBQWlDLG9EQUFvRCxnQ0FBZ0MsT0FBTyxLQUFLLDhCQUE4QixrREFBa0QsZ0NBQWdDLE9BQU8sS0FBSyxpQ0FBaUMsZ0VBQWdFLGlCQUFpQixPQUFPLEtBQUssaUNBQWlDLCtEQUErRCxpQkFBaUIsT0FBTyxLQUFLLG9DQUFvQyxpRUFBaUUsaUJBQWlCLE9BQU8sS0FBSyxHQUFHLDJEQUEyRCxxREFBcUQsY0FBYyxlQUFlLGlCQUFpQix1QkFBdUIscUNBQXFDLGtCQUFrQix1QkFBdUIsa0JBQWtCLCtEQUErRCx1REFBdUQsbUJBQW1CLHdCQUF3QiwwREFBMEQsbUlBQW1JLGtDQUFrQyxpQ0FBaUMsS0FBSyw2QkFBNkIscURBQXFELEtBQUssZ0NBQWdDLHVEQUF1RCxLQUFLLHFCQUFxQixvQkFBb0IsOEJBQThCLGdCQUFnQiwyQkFBMkIsOEJBQThCLDhCQUE4QixvQkFBb0Isd0JBQXdCLG9DQUFvQyx5QkFBeUIscUJBQXFCLDJCQUEyQix5QkFBeUIsd0JBQXdCLHdCQUF3Qix5QkFBeUIsdUNBQXVDLHNDQUFzQyw4QkFBOEIsU0FBUyx1QkFBdUIsZ0NBQWdDLFNBQVMsT0FBTyxLQUFLLDBCQUEwQixvQkFBb0IsaURBQWlELG1DQUFtQyxxQ0FBcUMscUJBQXFCLHdCQUF3QixnQkFBZ0Isd0JBQXdCLDBCQUEwQix5QkFBeUIsdUJBQXVCLCtCQUErQixPQUFPLGdCQUFnQix3QkFBd0IsMkJBQTJCLE9BQU8sY0FBYyx3QkFBd0Isc0JBQXNCLCtDQUErQyx1QkFBdUIsT0FBTyxLQUFLLEdBQUcscUJBQXFCO0FBQ3p0TTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8hLi9jb21wb25lbnRzL1Byb2plY3RzL1Byb2plY3QubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcblxcbjAgLSA2MDBweDogICAgUGhvbmVcXG42MDAgLSA5MDBweDogIFRhYmxldCBwb3J0cmFpdFxcbjkwMCAtIDEyMDBweDogVGFibGV0IGxhbmRzY2FwZVxcblsxMjAwIC0gMTgwMF0gaXMgd2hlcmUgb3VyIG5vcm1hbCBzdHlsZXMgYXBwbGVcXG4xODAwcHggKyA6IEJpZyBkZXNrdG9wXFxuXFxuJGJyZWFrcG9pbnQgYXJndW1lbnQgY2hvaWNlczpcXG4tIHBob25lXFxuLSB0YWItcG9ydFxcbi0gdGFiLWxhbmRcXG4tIGJpZy1kZXNrdG9wXFxuXFxuT1JERVI6ICBCYXNlICsgdHlwb2dyYXBoeSA+IGdlbmVyYWwgbGF5b3V0ICsgZ3JpZCA+IHBhZ2UgbGF5b3V0ID4gY29tcG9uZW50c1xcblxcbjFlbSA9IDE2cHggKGRlZmF1bHQgYnJvc3dlciBmb250IHNpemUpXFxuKi9cXG4uUHJvamVjdF9wcm9qZWN0X18xaWpsQSB7XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgobWluLWNvbnRlbnQsIDFmcikpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW5tYXgobWluLWNvbnRlbnQsIDQwLjg3NXJlbSk7XFxuICBncmlkLWdhcDogMnJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCByZ2JhKDEwNywgMTA3LCAxMDcsIDAuMDgpLCByZ2JhKDEwNywgMTA3LCAxMDcsIDAuMDQpKTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1Ni4yNWVtKSB7XFxuICAuUHJvamVjdF9wcm9qZWN0X18xaWpsQSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3LjVlbSkge1xcbiAgLlByb2plY3RfcHJvamVjdF9fMWlqbEEge1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbm1heChtaW4tY29udGVudCwgMzByZW0pO1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI4LjEyNWVtKSB7XFxuICAuUHJvamVjdF9wcm9qZWN0X18xaWpsQSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWlubWF4KG1pbi1jb250ZW50LCAxNi41cmVtKTtcXG4gIH1cXG59XFxuLlByb2plY3RfcHJvamVjdF9fMWlqbEEgLlByb2plY3RfaW1hZ2VXcmFwcGVyX18xNDhMMiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctYm90dG9tOiA2Mi41JTtcXG59XFxuLlByb2plY3RfcHJvamVjdF9fMWlqbEEgLlByb2plY3RfaW1hZ2VXcmFwcGVyX18xNDhMMiAuUHJvamVjdF9pbWFnZV9fWUVZTngge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWF4LWhlaWdodDogNDAuODc1cmVtO1xcbiAgd2lkdGg6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7XFxuICBncmlkLXJvdzogMS8tMTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYuMjVlbSkge1xcbiAgLlByb2plY3RfcHJvamVjdF9fMWlqbEEgLlByb2plY3RfaW1hZ2VXcmFwcGVyX18xNDhMMiAuUHJvamVjdF9pbWFnZV9fWUVZTngge1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gIH1cXG59XFxuLlByb2plY3RfcHJvamVjdF9fMWlqbEEgLlByb2plY3RfcHJvamVjdFRleHRDb2x1bW5fXzJjcFZlIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCBtaW4tY29udGVudCk7XFxuICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ3JpZC1nYXA6IDFyZW07XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG59XFxuLlByb2plY3RfcHJvamVjdF9fMWlqbEEgLlByb2plY3RfcHJvamVjdFRleHRDb2x1bW5fXzJjcFZlIC5Qcm9qZWN0X3RpdGxlX19aY0o1MSB7XFxuICBncmlkLXJvdzogMS8xO1xcbiAgZm9udC1zaXplOiAzLjRyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcbi5Qcm9qZWN0X3Byb2plY3RfXzFpamxBIC5Qcm9qZWN0X3Byb2plY3RUZXh0Q29sdW1uX18yY3BWZSAuUHJvamVjdF9zdW1tYXJ5X18xRWt3aCB7XFxuICBncmlkLXJvdzogMi8yO1xcbiAgbWFyZ2luOiAtNXB4IDAgMCAwO1xcbn1cXG4uUHJvamVjdF9wcm9qZWN0X18xaWpsQSAuUHJvamVjdF9wcm9qZWN0VGV4dENvbHVtbl9fMmNwVmUgLlByb2plY3RfdG9vbHNfXzNpZ3YwIHtcXG4gIGdyaWQtcm93OiAzLzM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCA3MCU7XFxuICBncmlkLWdhcDogMnJlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4uLy4uL2Fzc2V0cy9jc3Mvc2Fzcy9hYnN0cmFjdHMvX21peGlucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vUHJvamVjdC5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBQTtBQ0NBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFHQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsMERBQUE7RUFDQSxrREFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUVBLHdHQUFBO0FBYUY7QURPSTtFQ2pDSjtJQW9CSSwwQkFBQTtFQVVGO0FBQ0Y7QURMSTtFQzFCSjtJQXVCSSw4Q0FBQTtFQVlGO0FBQ0Y7QURoQkk7RUNwQko7SUEwQkksZ0RBQUE7RUFjRjtBQUNGO0FBWkU7RUFDSSxXQUFBO0VBQ0EscUJBQUE7QUFjTjtBQVpJO0VBQ0Usa0JBQUE7RUFFQSxxQkFBQTtFQUNBLFdBQUE7RUFFQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQVlOO0FEdEJJO0VDQUE7SUFpQkksaUJBQUE7RUFTTjtBQUNGO0FBREU7RUFDRSxhQUFBO0VBQ0EsMENBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBR0o7QUFESTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUdOO0FBQUk7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUFFTjtBQUFJO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLGNBQUE7QUFFTlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvLyBNRURJQSBRVUVSWSBNQU5BR0VSXFxuXFxuLypcXG5cXG4wIC0gNjAwcHg6ICAgIFBob25lXFxuNjAwIC0gOTAwcHg6ICBUYWJsZXQgcG9ydHJhaXRcXG45MDAgLSAxMjAwcHg6IFRhYmxldCBsYW5kc2NhcGVcXG5bMTIwMCAtIDE4MDBdIGlzIHdoZXJlIG91ciBub3JtYWwgc3R5bGVzIGFwcGxlXFxuMTgwMHB4ICsgOiBCaWcgZGVza3RvcFxcblxcbiRicmVha3BvaW50IGFyZ3VtZW50IGNob2ljZXM6XFxuLSBwaG9uZVxcbi0gdGFiLXBvcnRcXG4tIHRhYi1sYW5kXFxuLSBiaWctZGVza3RvcFxcblxcbk9SREVSOiAgQmFzZSArIHR5cG9ncmFwaHkgPiBnZW5lcmFsIGxheW91dCArIGdyaWQgPiBwYWdlIGxheW91dCA+IGNvbXBvbmVudHNcXG5cXG4xZW0gPSAxNnB4IChkZWZhdWx0IGJyb3N3ZXIgZm9udCBzaXplKVxcbiovXFxuXFxuQG1peGluIHJlc3BvbmQoJGJyZWFrcG9pbnQpIHtcXG4gIEBpZiAkYnJlYWtwb2ludCA9PSBzbS1waG9uZSB7XFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjguMTI1ZW0pIHtcXG4gICAgICAvLzQ1MHB4XFxuICAgICAgQGNvbnRlbnQ7XFxuICAgIH1cXG4gIH1cXG4gIEBpZiAkYnJlYWtwb2ludCA9PSBwaG9uZSB7XFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzcuNWVtKSB7XFxuICAgICAgLy82MDBweFxcbiAgICAgIEBjb250ZW50O1xcbiAgICB9XFxuICB9XFxuICBAaWYgJGJyZWFrcG9pbnQgPT0gdGFiLXBvcnQge1xcbiAgICAvLzkwMHB4XFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYuMjVlbSkge1xcbiAgICAgIEBjb250ZW50O1xcbiAgICB9XFxuICB9XFxuICBAaWYgJGJyZWFrcG9pbnQgPT0gdGFiLWxhbmQge1xcbiAgICAvLyAxMjAwcHhcXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XFxuICAgICAgQGNvbnRlbnQ7XFxuICAgIH1cXG4gIH1cXG4gIEBpZiAkYnJlYWtwb2ludCA9PSBiaWctZGVza3RvcCB7XFxuICAgIC8vMTgwMHB4XFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTEyLjVlbSkge1xcbiAgICAgIEBjb250ZW50O1xcbiAgICB9XFxuICB9XFxufVxcblwiLFwiQGltcG9ydCBcXFwiLi4vLi4vYXNzZXRzL2Nzcy9zYXNzL2Fic3RyYWN0cy92YXJpYWJsZXNcXFwiO1xcbkBpbXBvcnQgXFxcIi4uLy4uL2Fzc2V0cy9jc3Mvc2Fzcy9hYnN0cmFjdHMvbWl4aW5zXFxcIjtcXG5cXG4ucHJvamVjdCB7XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgLy8gICBoZWlnaHQ6IDQwcmVtO1xcbiAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heChtaW4tY29udGVudCwgMWZyKSk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbm1heChtaW4tY29udGVudCwgNDAuODc1cmVtKTtcXG4gIGdyaWQtZ2FwOiAycmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC8vICAgYm94LXNoYWRvdzogMCAwIDVweCA1cHggcmdiYSgkY29sb3JCYXNlR3JheSwgLjcpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcbiAgICB0byBib3R0b20gcmlnaHQsXFxuICAgIHJnYmEoJGNvbG9yQmFzZUdyYXksIDAuMDgpLFxcbiAgICByZ2JhKCRjb2xvckJhc2VHcmF5LCAwLjA0KVxcbiAgKTtcXG5cXG4gIEBpbmNsdWRlIHJlc3BvbmQodGFiLXBvcnQpIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICB9XFxuICBAaW5jbHVkZSByZXNwb25kKHBob25lKSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWlubWF4KG1pbi1jb250ZW50LCAzMHJlbSk7XFxuICB9XFxuICBAaW5jbHVkZSByZXNwb25kKHNtLXBob25lKSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWlubWF4KG1pbi1jb250ZW50LCAxNi41cmVtKTtcXG4gIH1cXG5cXG4gIC5pbWFnZVdyYXBwZXIge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIHBhZGRpbmctYm90dG9tOiA2Mi41JTtcXG5cXG4gICAgLmltYWdlIHtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgLy8gbWF4LXdpZHRoOiA2NS40cmVtO1xcbiAgICAgIG1heC1oZWlnaHQ6IDQwLjg3NXJlbTtcXG4gICAgICB3aWR0aDogYXV0bztcXG4gICAgICAvLyBoZWlnaHQ6IGF1dG87XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkO1xcbiAgICAgIGdyaWQtcm93OiAxIC8gLTE7XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgIC8vIGhlaWdodDogMTAwJTtcXG4gICAgICAvLyB3aWR0aDogNDAwcHg7XFxuICAgICAgLy8gaGVpZ2h0OiA0MDBweDtcXG4gICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7XFxuXFxuICAgICAgQGluY2x1ZGUgcmVzcG9uZCh0YWItcG9ydCkge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgICB9XFxuXFxuICAgICAgLmltYWdlSW5uZXIge1xcbiAgICAgICAgLy8gYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgLnByb2plY3RUZXh0Q29sdW1uIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgbWluLWNvbnRlbnQpO1xcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdyaWQtZ2FwOiAxcmVtO1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG5cXG4gICAgLnRpdGxlIHtcXG4gICAgICBncmlkLXJvdzogMSAvIDE7XFxuICAgICAgZm9udC1zaXplOiAzLjRyZW07XFxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgICBsaW5lLWhlaWdodDogMTtcXG4gICAgICAvLyBtYXJnaW4tYm90dG9tOiAtNXB4O1xcbiAgICB9XFxuICAgIC5zdW1tYXJ5IHtcXG4gICAgICBncmlkLXJvdzogMiAvIDI7XFxuICAgICAgbWFyZ2luOiAtNXB4IDAgMCAwO1xcbiAgICB9XFxuICAgIC50b29scyB7XFxuICAgICAgZ3JpZC1yb3c6IDMgLyAzO1xcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCA3MCU7XFxuICAgICAgZ3JpZC1nYXA6IDJyZW07XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwicHJvamVjdFwiOiBcIlByb2plY3RfcHJvamVjdF9fMWlqbEFcIixcblx0XCJpbWFnZVdyYXBwZXJcIjogXCJQcm9qZWN0X2ltYWdlV3JhcHBlcl9fMTQ4TDJcIixcblx0XCJpbWFnZVwiOiBcIlByb2plY3RfaW1hZ2VfX1lFWU54XCIsXG5cdFwicHJvamVjdFRleHRDb2x1bW5cIjogXCJQcm9qZWN0X3Byb2plY3RUZXh0Q29sdW1uX18yY3BWZVwiLFxuXHRcInRpdGxlXCI6IFwiUHJvamVjdF90aXRsZV9fWmNKNTFcIixcblx0XCJzdW1tYXJ5XCI6IFwiUHJvamVjdF9zdW1tYXJ5X18xRWt3aFwiLFxuXHRcInRvb2xzXCI6IFwiUHJvamVjdF90b29sc19fM2lndjBcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/Projects/Project.module.scss\n");

/***/ })

})