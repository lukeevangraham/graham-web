webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/Projects/Project.module.scss":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./components/Projects/Project.module.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"/*\\n\\n0 - 600px:    Phone\\n600 - 900px:  Tablet portrait\\n900 - 1200px: Tablet landscape\\n[1200 - 1800] is where our normal styles apple\\n1800px + : Big desktop\\n\\n$breakpoint argument choices:\\n- phone\\n- tab-port\\n- tab-land\\n- big-desktop\\n\\nORDER:  Base + typography > general layout + grid > page layout > components\\n\\n1em = 16px (default broswer font size)\\n*/\\n.Project_project__1ijlA {\\n  width: 90%;\\n  margin: auto;\\n  padding: 2rem;\\n  border-radius: 5px;\\n  display: grid;\\n  grid-template-columns: repeat(2, minmax(min-content, 1fr));\\n  grid-template-rows: minmax(26vw, min-content);\\n  grid-gap: 2rem;\\n  align-items: center;\\n  background-image: linear-gradient(to bottom right, rgba(107, 107, 107, 0.08), rgba(107, 107, 107, 0.04));\\n}\\n@media only screen and (max-width: 56.25em) {\\n  .Project_project__1ijlA {\\n    grid-template-rows: repeat(auto-fit, minmax(100%, min-content));\\n  }\\n}\\n.Project_project__1ijlA .Project_image__YEYNx {\\n  position: relative;\\n  max-width: 43.6rem;\\n  max-height: 27.25rem;\\n  background-color: orangered;\\n  grid-row: 1/-1;\\n  height: 100%;\\n  border-radius: 5px;\\n  overflow: hidden;\\n}\\n@media only screen and (max-width: 56.25em) {\\n  .Project_project__1ijlA .Project_image__YEYNx {\\n    grid-column: 1/-1;\\n  }\\n}\\n.Project_project__1ijlA .Project_projectTextColumn__2cpVe {\\n  display: grid;\\n  grid-template-rows: repeat(4, min-content);\\n  align-content: space-between;\\n  justify-content: space-between;\\n  grid-gap: 1rem;\\n  font-size: 1.8rem;\\n}\\n.Project_project__1ijlA .Project_projectTextColumn__2cpVe .Project_title__ZcJ51 {\\n  grid-row: 1/1;\\n  font-size: 3.4rem;\\n  font-weight: 500;\\n  line-height: 1;\\n}\\n.Project_project__1ijlA .Project_projectTextColumn__2cpVe .Project_summary__1Ekwh {\\n  grid-row: 2/2;\\n  margin: -5px 0 0 0;\\n}\\n.Project_project__1ijlA .Project_projectTextColumn__2cpVe .Project_tools__3igv0 {\\n  grid-row: 3/3;\\n  display: grid;\\n  grid-template-columns: min-content 70%;\\n  grid-gap: 2rem;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://../../assets/css/sass/abstracts/_mixins.scss\",\"webpack://Project.module.scss\"],\"names\":[],\"mappings\":\"AAEA;;;;;;;;;;;;;;;;;CAAA;ACCA;EACE,UAAA;EACA,YAAA;EAGA,aAAA;EACA,kBAAA;EACA,aAAA;EACA,0DAAA;EACA,6CAAA;EACA,cAAA;EACA,mBAAA;EAEA,wGAAA;AAaF;ADDQ;ECzBR;IAoBI,+DAAA;EAUF;AACF;AARE;EACE,kBAAA;EACA,kBAAA;EACA,oBAAA;EACA,2BAAA;EACA,cAAA;EACA,YAAA;EACA,kBAAA;EACA,gBAAA;AAUJ;ADhBQ;ECFN;IAeI,iBAAA;EAOJ;AACF;AAAE;EACE,aAAA;EACA,0CAAA;EACA,4BAAA;EACA,8BAAA;EACA,cAAA;EACA,iBAAA;AAEJ;AAAI;EACE,aAAA;EACA,iBAAA;EACA,gBAAA;EACA,cAAA;AAEN;AACI;EACE,aAAA;EACA,kBAAA;AACN;AACI;EACE,aAAA;EACA,aAAA;EACA,sCAAA;EACA,cAAA;AACN\",\"sourcesContent\":[\"// MEDIA QUERY MANAGER\\n\\n/*\\n\\n0 - 600px:    Phone\\n600 - 900px:  Tablet portrait\\n900 - 1200px: Tablet landscape\\n[1200 - 1800] is where our normal styles apple\\n1800px + : Big desktop\\n\\n$breakpoint argument choices:\\n- phone\\n- tab-port\\n- tab-land\\n- big-desktop\\n\\nORDER:  Base + typography > general layout + grid > page layout > components\\n\\n1em = 16px (default broswer font size)\\n*/\\n\\n@mixin respond($breakpoint) {\\n    @if $breakpoint == phone {\\n        @media only screen and (max-width: 37.5em) {  //600px\\n          @content;\\n        }\\n      }\\n      @if $breakpoint == tab-port {   //900px\\n        @media only screen and (max-width: 56.25em) {\\n          @content;\\n        }\\n      }\\n      @if $breakpoint == tab-land {   // 1200px\\n        @media only screen and (max-width: 75em) {\\n          @content;\\n        }\\n      }\\n      @if $breakpoint == big-desktop {    //1800px\\n        @media only screen and (min-width: 112.5em) {\\n          @content;\\n        }\\n      }\\n}\",\"@import \\\"../../assets/css/sass/abstracts/variables\\\";\\n@import \\\"../../assets/css/sass/abstracts/mixins\\\";\\n\\n.project {\\n  width: 90%;\\n  margin: auto;\\n  //   height: 40rem;\\n  //   background-color: orangered;\\n  padding: 2rem;\\n  border-radius: 5px;\\n  display: grid;\\n  grid-template-columns: repeat(2, minmax(min-content, 1fr));\\n  grid-template-rows: minmax(26vw, min-content);\\n  grid-gap: 2rem;\\n  align-items: center;\\n  //   box-shadow: 0 0 5px 5px rgba($colorBaseGray, .7);\\n  background-image: linear-gradient(\\n    to bottom right,\\n    rgba($colorBaseGray, 0.08),\\n    rgba($colorBaseGray, 0.04)\\n  );\\n\\n  @include respond(tab-port) {\\n    grid-template-rows: repeat(auto-fit, minmax(100%, min-content));\\n  }\\n\\n  .image {\\n    position: relative;\\n    max-width: 43.6rem;\\n    max-height: 27.25rem;\\n    background-color: orangered;\\n    grid-row: 1 / -1;\\n    height: 100%;\\n    border-radius: 5px;\\n    overflow: hidden;\\n    // height: 100%;\\n    // width: 400px;\\n    // height: 400px;\\n    // background-color: orangered;\\n\\n    @include respond(tab-port) {\\n      grid-column: 1 / -1;\\n    }\\n\\n    .imageInner {\\n      // border-radius: 5px;\\n    }\\n  }\\n\\n  .projectTextColumn {\\n    display: grid;\\n    grid-template-rows: repeat(4, min-content);\\n    align-content: space-between;\\n    justify-content: space-between;\\n    grid-gap: 1rem;\\n    font-size: 1.8rem;\\n\\n    .title {\\n      grid-row: 1 / 1;\\n      font-size: 3.4rem;\\n      font-weight: 500;\\n      line-height: 1;\\n      // margin-bottom: -5px;\\n    }\\n    .summary {\\n      grid-row: 2 / 2;\\n      margin: -5px 0 0 0;\\n    }\\n    .tools {\\n      grid-row: 3 / 3;\\n      display: grid;\\n      grid-template-columns: min-content 70%;\\n      grid-gap: 2rem;\\n    }\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"project\": \"Project_project__1ijlA\",\n\t\"image\": \"Project_image__YEYNx\",\n\t\"projectTextColumn\": \"Project_projectTextColumn__2cpVe\",\n\t\"title\": \"Project_title__ZcJ51\",\n\t\"summary\": \"Project_summary__1Ekwh\",\n\t\"tools\": \"Project_tools__3igv0\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0cy9Qcm9qZWN0Lm1vZHVsZS5zY3NzPzM0ZDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxvSEFBeUQ7QUFDbkc7QUFDQTtBQUNBLDhCQUE4QixRQUFTLDZZQUE2WSxlQUFlLGlCQUFpQixrQkFBa0IsdUJBQXVCLGtCQUFrQiwrREFBK0Qsa0RBQWtELG1CQUFtQix3QkFBd0IsNkdBQTZHLEdBQUcsK0NBQStDLDZCQUE2QixzRUFBc0UsS0FBSyxHQUFHLGlEQUFpRCx1QkFBdUIsdUJBQXVCLHlCQUF5QixnQ0FBZ0MsbUJBQW1CLGlCQUFpQix1QkFBdUIscUJBQXFCLEdBQUcsK0NBQStDLG1EQUFtRCx3QkFBd0IsS0FBSyxHQUFHLDZEQUE2RCxrQkFBa0IsK0NBQStDLGlDQUFpQyxtQ0FBbUMsbUJBQW1CLHNCQUFzQixHQUFHLG1GQUFtRixrQkFBa0Isc0JBQXNCLHFCQUFxQixtQkFBbUIsR0FBRyxxRkFBcUYsa0JBQWtCLHVCQUF1QixHQUFHLG1GQUFtRixrQkFBa0Isa0JBQWtCLDJDQUEyQyxtQkFBbUIsR0FBRyxPQUFPLDZKQUE2SixLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssTUFBTSxZQUFZLEtBQUssS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsbWNBQW1jLGdDQUFnQyxzREFBc0QsOEJBQThCLFdBQVcsU0FBUyxxQ0FBcUMsaUVBQWlFLHFCQUFxQixXQUFXLFNBQVMscUNBQXFDLGdFQUFnRSxxQkFBcUIsV0FBVyxTQUFTLHdDQUF3QyxtRUFBbUUscUJBQXFCLFdBQVcsU0FBUyxHQUFHLHlEQUF5RCxxREFBcUQsY0FBYyxlQUFlLGlCQUFpQix1QkFBdUIscUNBQXFDLGtCQUFrQix1QkFBdUIsa0JBQWtCLCtEQUErRCxrREFBa0QsbUJBQW1CLHdCQUF3QiwwREFBMEQsbUlBQW1JLGtDQUFrQyxzRUFBc0UsS0FBSyxjQUFjLHlCQUF5Qix5QkFBeUIsMkJBQTJCLGtDQUFrQyx1QkFBdUIsbUJBQW1CLHlCQUF5Qix1QkFBdUIsc0JBQXNCLHNCQUFzQix1QkFBdUIscUNBQXFDLG9DQUFvQyw0QkFBNEIsT0FBTyxxQkFBcUIsOEJBQThCLE9BQU8sS0FBSywwQkFBMEIsb0JBQW9CLGlEQUFpRCxtQ0FBbUMscUNBQXFDLHFCQUFxQix3QkFBd0IsZ0JBQWdCLHdCQUF3QiwwQkFBMEIseUJBQXlCLHVCQUF1QiwrQkFBK0IsT0FBTyxnQkFBZ0Isd0JBQXdCLDJCQUEyQixPQUFPLGNBQWMsd0JBQXdCLHNCQUFzQiwrQ0FBK0MsdUJBQXVCLE9BQU8sS0FBSyxHQUFHLHFCQUFxQjtBQUNoM0s7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPyEuL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdC5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qXFxuXFxuMCAtIDYwMHB4OiAgICBQaG9uZVxcbjYwMCAtIDkwMHB4OiAgVGFibGV0IHBvcnRyYWl0XFxuOTAwIC0gMTIwMHB4OiBUYWJsZXQgbGFuZHNjYXBlXFxuWzEyMDAgLSAxODAwXSBpcyB3aGVyZSBvdXIgbm9ybWFsIHN0eWxlcyBhcHBsZVxcbjE4MDBweCArIDogQmlnIGRlc2t0b3BcXG5cXG4kYnJlYWtwb2ludCBhcmd1bWVudCBjaG9pY2VzOlxcbi0gcGhvbmVcXG4tIHRhYi1wb3J0XFxuLSB0YWItbGFuZFxcbi0gYmlnLWRlc2t0b3BcXG5cXG5PUkRFUjogIEJhc2UgKyB0eXBvZ3JhcGh5ID4gZ2VuZXJhbCBsYXlvdXQgKyBncmlkID4gcGFnZSBsYXlvdXQgPiBjb21wb25lbnRzXFxuXFxuMWVtID0gMTZweCAoZGVmYXVsdCBicm9zd2VyIGZvbnQgc2l6ZSlcXG4qL1xcbi5Qcm9qZWN0X3Byb2plY3RfXzFpamxBIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW46IGF1dG87XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heChtaW4tY29udGVudCwgMWZyKSk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbm1heCgyNnZ3LCBtaW4tY29udGVudCk7XFxuICBncmlkLWdhcDogMnJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCByZ2JhKDEwNywgMTA3LCAxMDcsIDAuMDgpLCByZ2JhKDEwNywgMTA3LCAxMDcsIDAuMDQpKTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1Ni4yNWVtKSB7XFxuICAuUHJvamVjdF9wcm9qZWN0X18xaWpsQSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTAwJSwgbWluLWNvbnRlbnQpKTtcXG4gIH1cXG59XFxuLlByb2plY3RfcHJvamVjdF9fMWlqbEEgLlByb2plY3RfaW1hZ2VfX1lFWU54IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1heC13aWR0aDogNDMuNnJlbTtcXG4gIG1heC1oZWlnaHQ6IDI3LjI1cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkO1xcbiAgZ3JpZC1yb3c6IDEvLTE7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2LjI1ZW0pIHtcXG4gIC5Qcm9qZWN0X3Byb2plY3RfXzFpamxBIC5Qcm9qZWN0X2ltYWdlX19ZRVlOeCB7XFxuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgfVxcbn1cXG4uUHJvamVjdF9wcm9qZWN0X18xaWpsQSAuUHJvamVjdF9wcm9qZWN0VGV4dENvbHVtbl9fMmNwVmUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIG1pbi1jb250ZW50KTtcXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBncmlkLWdhcDogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbn1cXG4uUHJvamVjdF9wcm9qZWN0X18xaWpsQSAuUHJvamVjdF9wcm9qZWN0VGV4dENvbHVtbl9fMmNwVmUgLlByb2plY3RfdGl0bGVfX1pjSjUxIHtcXG4gIGdyaWQtcm93OiAxLzE7XFxuICBmb250LXNpemU6IDMuNHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuLlByb2plY3RfcHJvamVjdF9fMWlqbEEgLlByb2plY3RfcHJvamVjdFRleHRDb2x1bW5fXzJjcFZlIC5Qcm9qZWN0X3N1bW1hcnlfXzFFa3doIHtcXG4gIGdyaWQtcm93OiAyLzI7XFxuICBtYXJnaW46IC01cHggMCAwIDA7XFxufVxcbi5Qcm9qZWN0X3Byb2plY3RfXzFpamxBIC5Qcm9qZWN0X3Byb2plY3RUZXh0Q29sdW1uX18yY3BWZSAuUHJvamVjdF90b29sc19fM2lndjAge1xcbiAgZ3JpZC1yb3c6IDMvMztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IDcwJTtcXG4gIGdyaWQtZ2FwOiAycmVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi4vLi4vYXNzZXRzL2Nzcy9zYXNzL2Fic3RyYWN0cy9fbWl4aW5zLnNjc3NcIixcIndlYnBhY2s6Ly9Qcm9qZWN0Lm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztDQUFBO0FDQ0E7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUdBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSwwREFBQTtFQUNBLDZDQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBRUEsd0dBQUE7QUFhRjtBRERRO0VDekJSO0lBb0JJLCtEQUFBO0VBVUY7QUFDRjtBQVJFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFVSjtBRGhCUTtFQ0ZOO0lBZUksaUJBQUE7RUFPSjtBQUNGO0FBQUU7RUFDRSxhQUFBO0VBQ0EsMENBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBRUo7QUFBSTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUVOO0FBQ0k7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUFDTjtBQUNJO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLGNBQUE7QUFDTlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvLyBNRURJQSBRVUVSWSBNQU5BR0VSXFxuXFxuLypcXG5cXG4wIC0gNjAwcHg6ICAgIFBob25lXFxuNjAwIC0gOTAwcHg6ICBUYWJsZXQgcG9ydHJhaXRcXG45MDAgLSAxMjAwcHg6IFRhYmxldCBsYW5kc2NhcGVcXG5bMTIwMCAtIDE4MDBdIGlzIHdoZXJlIG91ciBub3JtYWwgc3R5bGVzIGFwcGxlXFxuMTgwMHB4ICsgOiBCaWcgZGVza3RvcFxcblxcbiRicmVha3BvaW50IGFyZ3VtZW50IGNob2ljZXM6XFxuLSBwaG9uZVxcbi0gdGFiLXBvcnRcXG4tIHRhYi1sYW5kXFxuLSBiaWctZGVza3RvcFxcblxcbk9SREVSOiAgQmFzZSArIHR5cG9ncmFwaHkgPiBnZW5lcmFsIGxheW91dCArIGdyaWQgPiBwYWdlIGxheW91dCA+IGNvbXBvbmVudHNcXG5cXG4xZW0gPSAxNnB4IChkZWZhdWx0IGJyb3N3ZXIgZm9udCBzaXplKVxcbiovXFxuXFxuQG1peGluIHJlc3BvbmQoJGJyZWFrcG9pbnQpIHtcXG4gICAgQGlmICRicmVha3BvaW50ID09IHBob25lIHtcXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzcuNWVtKSB7ICAvLzYwMHB4XFxuICAgICAgICAgIEBjb250ZW50O1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgICBAaWYgJGJyZWFrcG9pbnQgPT0gdGFiLXBvcnQgeyAgIC8vOTAwcHhcXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYuMjVlbSkge1xcbiAgICAgICAgICBAY29udGVudDtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgICAgQGlmICRicmVha3BvaW50ID09IHRhYi1sYW5kIHsgICAvLyAxMjAwcHhcXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzVlbSkge1xcbiAgICAgICAgICBAY29udGVudDtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgICAgQGlmICRicmVha3BvaW50ID09IGJpZy1kZXNrdG9wIHsgICAgLy8xODAwcHhcXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTEyLjVlbSkge1xcbiAgICAgICAgICBAY29udGVudDtcXG4gICAgICAgIH1cXG4gICAgICB9XFxufVwiLFwiQGltcG9ydCBcXFwiLi4vLi4vYXNzZXRzL2Nzcy9zYXNzL2Fic3RyYWN0cy92YXJpYWJsZXNcXFwiO1xcbkBpbXBvcnQgXFxcIi4uLy4uL2Fzc2V0cy9jc3Mvc2Fzcy9hYnN0cmFjdHMvbWl4aW5zXFxcIjtcXG5cXG4ucHJvamVjdCB7XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgLy8gICBoZWlnaHQ6IDQwcmVtO1xcbiAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heChtaW4tY29udGVudCwgMWZyKSk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbm1heCgyNnZ3LCBtaW4tY29udGVudCk7XFxuICBncmlkLWdhcDogMnJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAvLyAgIGJveC1zaGFkb3c6IDAgMCA1cHggNXB4IHJnYmEoJGNvbG9yQmFzZUdyYXksIC43KTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXG4gICAgdG8gYm90dG9tIHJpZ2h0LFxcbiAgICByZ2JhKCRjb2xvckJhc2VHcmF5LCAwLjA4KSxcXG4gICAgcmdiYSgkY29sb3JCYXNlR3JheSwgMC4wNClcXG4gICk7XFxuXFxuICBAaW5jbHVkZSByZXNwb25kKHRhYi1wb3J0KSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTAwJSwgbWluLWNvbnRlbnQpKTtcXG4gIH1cXG5cXG4gIC5pbWFnZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWF4LXdpZHRoOiA0My42cmVtO1xcbiAgICBtYXgtaGVpZ2h0OiAyNy4yNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkO1xcbiAgICBncmlkLXJvdzogMSAvIC0xO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgLy8gaGVpZ2h0OiAxMDAlO1xcbiAgICAvLyB3aWR0aDogNDAwcHg7XFxuICAgIC8vIGhlaWdodDogNDAwcHg7XFxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZXJlZDtcXG5cXG4gICAgQGluY2x1ZGUgcmVzcG9uZCh0YWItcG9ydCkge1xcbiAgICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgIH1cXG5cXG4gICAgLmltYWdlSW5uZXIge1xcbiAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgfVxcbiAgfVxcblxcbiAgLnByb2plY3RUZXh0Q29sdW1uIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgbWluLWNvbnRlbnQpO1xcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdyaWQtZ2FwOiAxcmVtO1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG5cXG4gICAgLnRpdGxlIHtcXG4gICAgICBncmlkLXJvdzogMSAvIDE7XFxuICAgICAgZm9udC1zaXplOiAzLjRyZW07XFxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgICBsaW5lLWhlaWdodDogMTtcXG4gICAgICAvLyBtYXJnaW4tYm90dG9tOiAtNXB4O1xcbiAgICB9XFxuICAgIC5zdW1tYXJ5IHtcXG4gICAgICBncmlkLXJvdzogMiAvIDI7XFxuICAgICAgbWFyZ2luOiAtNXB4IDAgMCAwO1xcbiAgICB9XFxuICAgIC50b29scyB7XFxuICAgICAgZ3JpZC1yb3c6IDMgLyAzO1xcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCA3MCU7XFxuICAgICAgZ3JpZC1nYXA6IDJyZW07XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwicHJvamVjdFwiOiBcIlByb2plY3RfcHJvamVjdF9fMWlqbEFcIixcblx0XCJpbWFnZVwiOiBcIlByb2plY3RfaW1hZ2VfX1lFWU54XCIsXG5cdFwicHJvamVjdFRleHRDb2x1bW5cIjogXCJQcm9qZWN0X3Byb2plY3RUZXh0Q29sdW1uX18yY3BWZVwiLFxuXHRcInRpdGxlXCI6IFwiUHJvamVjdF90aXRsZV9fWmNKNTFcIixcblx0XCJzdW1tYXJ5XCI6IFwiUHJvamVjdF9zdW1tYXJ5X18xRWt3aFwiLFxuXHRcInRvb2xzXCI6IFwiUHJvamVjdF90b29sc19fM2lndjBcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/Projects/Project.module.scss\n");

/***/ })

})