webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/Projects/Project.module.scss":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./components/Projects/Project.module.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"/*\\n\\n0 - 600px:    Phone\\n600 - 900px:  Tablet portrait\\n900 - 1200px: Tablet landscape\\n[1200 - 1800] is where our normal styles apple\\n1800px + : Big desktop\\n\\n$breakpoint argument choices:\\n- phone\\n- tab-port\\n- tab-land\\n- big-desktop\\n\\nORDER:  Base + typography > general layout + grid > page layout > components\\n\\n1em = 16px (default broswer font size)\\n*/\\n.Project_project__1ijlA {\\n  width: 90%;\\n  margin: auto;\\n  padding: 2rem;\\n  border-radius: 5px;\\n  display: grid;\\n  grid-template-columns: repeat(2, minmax(min-content, 1fr));\\n  grid-gap: 2rem;\\n  align-items: center;\\n  background-image: linear-gradient(to bottom right, rgba(107, 107, 107, 0.08), rgba(107, 107, 107, 0.04));\\n}\\n@media only screen and (max-width: 56.25em) {\\n  .Project_project__1ijlA {\\n    grid-template-columns: 1fr;\\n  }\\n}\\n.Project_project__1ijlA .Project_imageWrapper__148L2 {\\n  width: 100%;\\n  grid-row: 1/-1;\\n}\\n.Project_project__1ijlA .Project_imageWrapper__148L2 .Project_image__YEYNx {\\n  position: relative;\\n  height: 100%;\\n  width: 100%;\\n  border-radius: 5px;\\n  overflow: hidden;\\n  padding-bottom: 62.5%;\\n}\\n@media only screen and (max-width: 56.25em) {\\n  .Project_project__1ijlA .Project_imageWrapper__148L2 .Project_image__YEYNx {\\n    grid-column: 1/-1;\\n  }\\n}\\n.Project_project__1ijlA .Project_projectTextColumn__2cpVe {\\n  display: grid;\\n  grid-template-rows: repeat(4, min-content);\\n  align-content: space-between;\\n  justify-content: space-between;\\n  grid-gap: 1rem;\\n  font-size: 1.8rem;\\n  height: 100%;\\n}\\n.Project_project__1ijlA .Project_projectTextColumn__2cpVe .Project_title__ZcJ51 {\\n  grid-row: 1/1;\\n  font-size: 3.4rem;\\n  font-weight: 500;\\n  line-height: 1;\\n}\\n.Project_project__1ijlA .Project_projectTextColumn__2cpVe .Project_summary__1Ekwh {\\n  grid-row: 2/2;\\n  margin: -5px 0 0 0;\\n}\\n.Project_project__1ijlA .Project_projectTextColumn__2cpVe .Project_tools__3igv0 {\\n  grid-row: 3/3;\\n  display: grid;\\n  grid-template-columns: min-content 70%;\\n  grid-gap: 2rem;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://../../assets/css/sass/abstracts/_mixins.scss\",\"webpack://Project.module.scss\"],\"names\":[],\"mappings\":\"AAEA;;;;;;;;;;;;;;;;;CAAA;ACCA;EACE,UAAA;EACA,YAAA;EAGA,aAAA;EACA,kBAAA;EACA,aAAA;EACA,0DAAA;EAGA,cAAA;EACA,mBAAA;EAEA,wGAAA;AAWF;ADQI;ECjCJ;IAqBI,0BAAA;EAQF;AACF;AAAE;EACE,WAAA;EAEA,cAAA;AACJ;AAGI;EACI,kBAAA;EAMA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,gBAAA;EAGA,qBAAA;AARR;ADTI;ECIA;IAkBI,iBAAA;EATN;AACF;AAiBE;EACE,aAAA;EACA,0CAAA;EACA,4BAAA;EACA,8BAAA;EACA,cAAA;EACA,iBAAA;EACA,YAAA;AAfJ;AAiBI;EACE,aAAA;EACA,iBAAA;EACA,gBAAA;EACA,cAAA;AAfN;AAkBI;EACE,aAAA;EACA,kBAAA;AAhBN;AAkBI;EACE,aAAA;EACA,aAAA;EACA,sCAAA;EACA,cAAA;AAhBN\",\"sourcesContent\":[\"// MEDIA QUERY MANAGER\\n\\n/*\\n\\n0 - 600px:    Phone\\n600 - 900px:  Tablet portrait\\n900 - 1200px: Tablet landscape\\n[1200 - 1800] is where our normal styles apple\\n1800px + : Big desktop\\n\\n$breakpoint argument choices:\\n- phone\\n- tab-port\\n- tab-land\\n- big-desktop\\n\\nORDER:  Base + typography > general layout + grid > page layout > components\\n\\n1em = 16px (default broswer font size)\\n*/\\n\\n@mixin respond($breakpoint) {\\n  @if $breakpoint == sm-phone {\\n    @media only screen and (max-width: 28.125em) {\\n      //450px\\n      @content;\\n    }\\n  }\\n  @if $breakpoint == phone {\\n    @media only screen and (max-width: 37.5em) {\\n      //600px\\n      @content;\\n    }\\n  }\\n  @if $breakpoint == tab-port {\\n    //900px\\n    @media only screen and (max-width: 56.25em) {\\n      @content;\\n    }\\n  }\\n  @if $breakpoint == tab-land {\\n    // 1200px\\n    @media only screen and (max-width: 75em) {\\n      @content;\\n    }\\n  }\\n  @if $breakpoint == big-desktop {\\n    //1800px\\n    @media only screen and (min-width: 112.5em) {\\n      @content;\\n    }\\n  }\\n}\\n\",\"@import \\\"../../assets/css/sass/abstracts/variables\\\";\\n@import \\\"../../assets/css/sass/abstracts/mixins\\\";\\n\\n.project {\\n  width: 90%;\\n  margin: auto;\\n  //   height: 40rem;\\n  //   background-color: orangered;\\n  padding: 2rem;\\n  border-radius: 5px;\\n  display: grid;\\n  grid-template-columns: repeat(2, minmax(min-content, 1fr));\\n//   grid-template-rows: minmax(min-content, 40.875rem);\\n//   grid-template-rows: minmax(min-content, max-content);\\n  grid-gap: 2rem;\\n  align-items: center;\\n  //   box-shadow: 0 0 5px 5px rgba($colorBaseGray, .7);\\n  background-image: linear-gradient(\\n    to bottom right,\\n    rgba($colorBaseGray, 0.08),\\n    rgba($colorBaseGray, 0.04)\\n  );\\n\\n  @include respond(tab-port) {\\n    grid-template-columns: 1fr;\\n  }\\n//   @include respond(phone) {\\n//     grid-template-rows: minmax(min-content, 30rem);\\n//   }\\n//   @include respond(sm-phone) {\\n//     grid-template-rows: minmax(min-content, 16.5rem);\\n//   }\\n\\n  .imageWrapper {\\n    width: 100%;\\n    // padding-bottom: 62.5%;\\n    grid-row: 1 / -1;\\n    // background-color: orangered;\\n    // position: relative;\\n    \\n    .image {\\n        position: relative;\\n        // max-width: 65.4rem;\\n        //   max-height: 40.875rem;\\n        //   width: auto;\\n        // height: auto;\\n        //   background-color: orangered;\\n        height: 100%;\\n        width: 100%;\\n        border-radius: 5px;\\n        overflow: hidden;\\n        // height: 100%;\\n        // width: 400px;\\n        padding-bottom: 62.5%;\\n      // height: 400px;\\n      // background-color: orangered;\\n\\n      @include respond(tab-port) {\\n        grid-column: 1 / -1;\\n      }\\n\\n      .imageInner {\\n        // border-radius: 5px;\\n      }\\n    }\\n  }\\n\\n  .projectTextColumn {\\n    display: grid;\\n    grid-template-rows: repeat(4, min-content);\\n    align-content: space-between;\\n    justify-content: space-between;\\n    grid-gap: 1rem;\\n    font-size: 1.8rem;\\n    height: 100%;\\n\\n    .title {\\n      grid-row: 1 / 1;\\n      font-size: 3.4rem;\\n      font-weight: 500;\\n      line-height: 1;\\n      // margin-bottom: -5px;\\n    }\\n    .summary {\\n      grid-row: 2 / 2;\\n      margin: -5px 0 0 0;\\n    }\\n    .tools {\\n      grid-row: 3 / 3;\\n      display: grid;\\n      grid-template-columns: min-content 70%;\\n      grid-gap: 2rem;\\n    }\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"project\": \"Project_project__1ijlA\",\n\t\"imageWrapper\": \"Project_imageWrapper__148L2\",\n\t\"image\": \"Project_image__YEYNx\",\n\t\"projectTextColumn\": \"Project_projectTextColumn__2cpVe\",\n\t\"title\": \"Project_title__ZcJ51\",\n\t\"summary\": \"Project_summary__1Ekwh\",\n\t\"tools\": \"Project_tools__3igv0\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0cy9Qcm9qZWN0Lm1vZHVsZS5zY3NzPzM0ZDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxvSEFBeUQ7QUFDbkc7QUFDQTtBQUNBLDhCQUE4QixRQUFTLDZZQUE2WSxlQUFlLGlCQUFpQixrQkFBa0IsdUJBQXVCLGtCQUFrQiwrREFBK0QsbUJBQW1CLHdCQUF3Qiw2R0FBNkcsR0FBRywrQ0FBK0MsNkJBQTZCLGlDQUFpQyxLQUFLLEdBQUcsd0RBQXdELGdCQUFnQixtQkFBbUIsR0FBRyw4RUFBOEUsdUJBQXVCLGlCQUFpQixnQkFBZ0IsdUJBQXVCLHFCQUFxQiwwQkFBMEIsR0FBRywrQ0FBK0MsZ0ZBQWdGLHdCQUF3QixLQUFLLEdBQUcsNkRBQTZELGtCQUFrQiwrQ0FBK0MsaUNBQWlDLG1DQUFtQyxtQkFBbUIsc0JBQXNCLGlCQUFpQixHQUFHLG1GQUFtRixrQkFBa0Isc0JBQXNCLHFCQUFxQixtQkFBbUIsR0FBRyxxRkFBcUYsa0JBQWtCLHVCQUF1QixHQUFHLG1GQUFtRixrQkFBa0Isa0JBQWtCLDJDQUEyQyxtQkFBbUIsR0FBRyxPQUFPLDZKQUE2SixLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLE1BQU0sWUFBWSxLQUFLLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLFlBQVksS0FBSyxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxLQUFLLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLG9jQUFvYyxpQ0FBaUMsb0RBQW9ELGdDQUFnQyxPQUFPLEtBQUssOEJBQThCLGtEQUFrRCxnQ0FBZ0MsT0FBTyxLQUFLLGlDQUFpQyxnRUFBZ0UsaUJBQWlCLE9BQU8sS0FBSyxpQ0FBaUMsK0RBQStELGlCQUFpQixPQUFPLEtBQUssb0NBQW9DLGlFQUFpRSxpQkFBaUIsT0FBTyxLQUFLLEdBQUcsMkRBQTJELHFEQUFxRCxjQUFjLGVBQWUsaUJBQWlCLHVCQUF1QixxQ0FBcUMsa0JBQWtCLHVCQUF1QixrQkFBa0IsK0RBQStELDBEQUEwRCw0REFBNEQsbUJBQW1CLHdCQUF3QiwwREFBMEQsbUlBQW1JLGtDQUFrQyxpQ0FBaUMsS0FBSyxnQ0FBZ0Msd0RBQXdELFFBQVEsbUNBQW1DLDBEQUEwRCxRQUFRLHFCQUFxQixrQkFBa0IsK0JBQStCLHVCQUF1QixxQ0FBcUMsNEJBQTRCLG9CQUFvQiw2QkFBNkIsZ0NBQWdDLHFDQUFxQywyQkFBMkIsMEJBQTBCLDJDQUEyQyx1QkFBdUIsc0JBQXNCLDZCQUE2QiwyQkFBMkIsMEJBQTBCLDBCQUEwQixnQ0FBZ0MseUJBQXlCLHVDQUF1QyxzQ0FBc0MsOEJBQThCLFNBQVMsdUJBQXVCLGdDQUFnQyxTQUFTLE9BQU8sS0FBSywwQkFBMEIsb0JBQW9CLGlEQUFpRCxtQ0FBbUMscUNBQXFDLHFCQUFxQix3QkFBd0IsbUJBQW1CLGdCQUFnQix3QkFBd0IsMEJBQTBCLHlCQUF5Qix1QkFBdUIsK0JBQStCLE9BQU8sZ0JBQWdCLHdCQUF3QiwyQkFBMkIsT0FBTyxjQUFjLHdCQUF3QixzQkFBc0IsK0NBQStDLHVCQUF1QixPQUFPLEtBQUssR0FBRyxxQkFBcUI7QUFDamhNO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPyEuL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdC5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qXFxuXFxuMCAtIDYwMHB4OiAgICBQaG9uZVxcbjYwMCAtIDkwMHB4OiAgVGFibGV0IHBvcnRyYWl0XFxuOTAwIC0gMTIwMHB4OiBUYWJsZXQgbGFuZHNjYXBlXFxuWzEyMDAgLSAxODAwXSBpcyB3aGVyZSBvdXIgbm9ybWFsIHN0eWxlcyBhcHBsZVxcbjE4MDBweCArIDogQmlnIGRlc2t0b3BcXG5cXG4kYnJlYWtwb2ludCBhcmd1bWVudCBjaG9pY2VzOlxcbi0gcGhvbmVcXG4tIHRhYi1wb3J0XFxuLSB0YWItbGFuZFxcbi0gYmlnLWRlc2t0b3BcXG5cXG5PUkRFUjogIEJhc2UgKyB0eXBvZ3JhcGh5ID4gZ2VuZXJhbCBsYXlvdXQgKyBncmlkID4gcGFnZSBsYXlvdXQgPiBjb21wb25lbnRzXFxuXFxuMWVtID0gMTZweCAoZGVmYXVsdCBicm9zd2VyIGZvbnQgc2l6ZSlcXG4qL1xcbi5Qcm9qZWN0X3Byb2plY3RfXzFpamxBIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW46IGF1dG87XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heChtaW4tY29udGVudCwgMWZyKSk7XFxuICBncmlkLWdhcDogMnJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCByZ2JhKDEwNywgMTA3LCAxMDcsIDAuMDgpLCByZ2JhKDEwNywgMTA3LCAxMDcsIDAuMDQpKTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1Ni4yNWVtKSB7XFxuICAuUHJvamVjdF9wcm9qZWN0X18xaWpsQSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgfVxcbn1cXG4uUHJvamVjdF9wcm9qZWN0X18xaWpsQSAuUHJvamVjdF9pbWFnZVdyYXBwZXJfXzE0OEwyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZ3JpZC1yb3c6IDEvLTE7XFxufVxcbi5Qcm9qZWN0X3Byb2plY3RfXzFpamxBIC5Qcm9qZWN0X2ltYWdlV3JhcHBlcl9fMTQ4TDIgLlByb2plY3RfaW1hZ2VfX1lFWU54IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBhZGRpbmctYm90dG9tOiA2Mi41JTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1Ni4yNWVtKSB7XFxuICAuUHJvamVjdF9wcm9qZWN0X18xaWpsQSAuUHJvamVjdF9pbWFnZVdyYXBwZXJfXzE0OEwyIC5Qcm9qZWN0X2ltYWdlX19ZRVlOeCB7XFxuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgfVxcbn1cXG4uUHJvamVjdF9wcm9qZWN0X18xaWpsQSAuUHJvamVjdF9wcm9qZWN0VGV4dENvbHVtbl9fMmNwVmUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIG1pbi1jb250ZW50KTtcXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBncmlkLWdhcDogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uUHJvamVjdF9wcm9qZWN0X18xaWpsQSAuUHJvamVjdF9wcm9qZWN0VGV4dENvbHVtbl9fMmNwVmUgLlByb2plY3RfdGl0bGVfX1pjSjUxIHtcXG4gIGdyaWQtcm93OiAxLzE7XFxuICBmb250LXNpemU6IDMuNHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuLlByb2plY3RfcHJvamVjdF9fMWlqbEEgLlByb2plY3RfcHJvamVjdFRleHRDb2x1bW5fXzJjcFZlIC5Qcm9qZWN0X3N1bW1hcnlfXzFFa3doIHtcXG4gIGdyaWQtcm93OiAyLzI7XFxuICBtYXJnaW46IC01cHggMCAwIDA7XFxufVxcbi5Qcm9qZWN0X3Byb2plY3RfXzFpamxBIC5Qcm9qZWN0X3Byb2plY3RUZXh0Q29sdW1uX18yY3BWZSAuUHJvamVjdF90b29sc19fM2lndjAge1xcbiAgZ3JpZC1yb3c6IDMvMztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IDcwJTtcXG4gIGdyaWQtZ2FwOiAycmVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi4vLi4vYXNzZXRzL2Nzcy9zYXNzL2Fic3RyYWN0cy9fbWl4aW5zLnNjc3NcIixcIndlYnBhY2s6Ly9Qcm9qZWN0Lm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztDQUFBO0FDQ0E7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUdBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSwwREFBQTtFQUdBLGNBQUE7RUFDQSxtQkFBQTtFQUVBLHdHQUFBO0FBV0Y7QURRSTtFQ2pDSjtJQXFCSSwwQkFBQTtFQVFGO0FBQ0Y7QUFBRTtFQUNFLFdBQUE7RUFFQSxjQUFBO0FBQ0o7QUFHSTtFQUNJLGtCQUFBO0VBTUEsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBR0EscUJBQUE7QUFSUjtBRFRJO0VDSUE7SUFrQkksaUJBQUE7RUFUTjtBQUNGO0FBaUJFO0VBQ0UsYUFBQTtFQUNBLDBDQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFmSjtBQWlCSTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQWZOO0FBa0JJO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FBaEJOO0FBa0JJO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLGNBQUE7QUFoQk5cIixcInNvdXJjZXNDb250ZW50XCI6W1wiLy8gTUVESUEgUVVFUlkgTUFOQUdFUlxcblxcbi8qXFxuXFxuMCAtIDYwMHB4OiAgICBQaG9uZVxcbjYwMCAtIDkwMHB4OiAgVGFibGV0IHBvcnRyYWl0XFxuOTAwIC0gMTIwMHB4OiBUYWJsZXQgbGFuZHNjYXBlXFxuWzEyMDAgLSAxODAwXSBpcyB3aGVyZSBvdXIgbm9ybWFsIHN0eWxlcyBhcHBsZVxcbjE4MDBweCArIDogQmlnIGRlc2t0b3BcXG5cXG4kYnJlYWtwb2ludCBhcmd1bWVudCBjaG9pY2VzOlxcbi0gcGhvbmVcXG4tIHRhYi1wb3J0XFxuLSB0YWItbGFuZFxcbi0gYmlnLWRlc2t0b3BcXG5cXG5PUkRFUjogIEJhc2UgKyB0eXBvZ3JhcGh5ID4gZ2VuZXJhbCBsYXlvdXQgKyBncmlkID4gcGFnZSBsYXlvdXQgPiBjb21wb25lbnRzXFxuXFxuMWVtID0gMTZweCAoZGVmYXVsdCBicm9zd2VyIGZvbnQgc2l6ZSlcXG4qL1xcblxcbkBtaXhpbiByZXNwb25kKCRicmVha3BvaW50KSB7XFxuICBAaWYgJGJyZWFrcG9pbnQgPT0gc20tcGhvbmUge1xcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI4LjEyNWVtKSB7XFxuICAgICAgLy80NTBweFxcbiAgICAgIEBjb250ZW50O1xcbiAgICB9XFxuICB9XFxuICBAaWYgJGJyZWFrcG9pbnQgPT0gcGhvbmUge1xcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3LjVlbSkge1xcbiAgICAgIC8vNjAwcHhcXG4gICAgICBAY29udGVudDtcXG4gICAgfVxcbiAgfVxcbiAgQGlmICRicmVha3BvaW50ID09IHRhYi1wb3J0IHtcXG4gICAgLy85MDBweFxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2LjI1ZW0pIHtcXG4gICAgICBAY29udGVudDtcXG4gICAgfVxcbiAgfVxcbiAgQGlmICRicmVha3BvaW50ID09IHRhYi1sYW5kIHtcXG4gICAgLy8gMTIwMHB4XFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzVlbSkge1xcbiAgICAgIEBjb250ZW50O1xcbiAgICB9XFxuICB9XFxuICBAaWYgJGJyZWFrcG9pbnQgPT0gYmlnLWRlc2t0b3Age1xcbiAgICAvLzE4MDBweFxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDExMi41ZW0pIHtcXG4gICAgICBAY29udGVudDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIixcIkBpbXBvcnQgXFxcIi4uLy4uL2Fzc2V0cy9jc3Mvc2Fzcy9hYnN0cmFjdHMvdmFyaWFibGVzXFxcIjtcXG5AaW1wb3J0IFxcXCIuLi8uLi9hc3NldHMvY3NzL3Nhc3MvYWJzdHJhY3RzL21peGluc1xcXCI7XFxuXFxuLnByb2plY3Qge1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIC8vICAgaGVpZ2h0OiA0MHJlbTtcXG4gIC8vICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgobWluLWNvbnRlbnQsIDFmcikpO1xcbi8vICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW5tYXgobWluLWNvbnRlbnQsIDQwLjg3NXJlbSk7XFxuLy8gICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbm1heChtaW4tY29udGVudCwgbWF4LWNvbnRlbnQpO1xcbiAgZ3JpZC1nYXA6IDJyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLy8gICBib3gtc2hhZG93OiAwIDAgNXB4IDVweCByZ2JhKCRjb2xvckJhc2VHcmF5LCAuNyk7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIHRvIGJvdHRvbSByaWdodCxcXG4gICAgcmdiYSgkY29sb3JCYXNlR3JheSwgMC4wOCksXFxuICAgIHJnYmEoJGNvbG9yQmFzZUdyYXksIDAuMDQpXFxuICApO1xcblxcbiAgQGluY2x1ZGUgcmVzcG9uZCh0YWItcG9ydCkge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIH1cXG4vLyAgIEBpbmNsdWRlIHJlc3BvbmQocGhvbmUpIHtcXG4vLyAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW5tYXgobWluLWNvbnRlbnQsIDMwcmVtKTtcXG4vLyAgIH1cXG4vLyAgIEBpbmNsdWRlIHJlc3BvbmQoc20tcGhvbmUpIHtcXG4vLyAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW5tYXgobWluLWNvbnRlbnQsIDE2LjVyZW0pO1xcbi8vICAgfVxcblxcbiAgLmltYWdlV3JhcHBlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICAvLyBwYWRkaW5nLWJvdHRvbTogNjIuNSU7XFxuICAgIGdyaWQtcm93OiAxIC8gLTE7XFxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZXJlZDtcXG4gICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBcXG4gICAgLmltYWdlIHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIC8vIG1heC13aWR0aDogNjUuNHJlbTtcXG4gICAgICAgIC8vICAgbWF4LWhlaWdodDogNDAuODc1cmVtO1xcbiAgICAgICAgLy8gICB3aWR0aDogYXV0bztcXG4gICAgICAgIC8vIGhlaWdodDogYXV0bztcXG4gICAgICAgIC8vICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgLy8gaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgLy8gd2lkdGg6IDQwMHB4O1xcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDYyLjUlO1xcbiAgICAgIC8vIGhlaWdodDogNDAwcHg7XFxuICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkO1xcblxcbiAgICAgIEBpbmNsdWRlIHJlc3BvbmQodGFiLXBvcnQpIHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgICAgfVxcblxcbiAgICAgIC5pbWFnZUlubmVyIHtcXG4gICAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5wcm9qZWN0VGV4dENvbHVtbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIG1pbi1jb250ZW50KTtcXG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBncmlkLWdhcDogMXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgIGhlaWdodDogMTAwJTtcXG5cXG4gICAgLnRpdGxlIHtcXG4gICAgICBncmlkLXJvdzogMSAvIDE7XFxuICAgICAgZm9udC1zaXplOiAzLjRyZW07XFxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgICBsaW5lLWhlaWdodDogMTtcXG4gICAgICAvLyBtYXJnaW4tYm90dG9tOiAtNXB4O1xcbiAgICB9XFxuICAgIC5zdW1tYXJ5IHtcXG4gICAgICBncmlkLXJvdzogMiAvIDI7XFxuICAgICAgbWFyZ2luOiAtNXB4IDAgMCAwO1xcbiAgICB9XFxuICAgIC50b29scyB7XFxuICAgICAgZ3JpZC1yb3c6IDMgLyAzO1xcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCA3MCU7XFxuICAgICAgZ3JpZC1nYXA6IDJyZW07XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwicHJvamVjdFwiOiBcIlByb2plY3RfcHJvamVjdF9fMWlqbEFcIixcblx0XCJpbWFnZVdyYXBwZXJcIjogXCJQcm9qZWN0X2ltYWdlV3JhcHBlcl9fMTQ4TDJcIixcblx0XCJpbWFnZVwiOiBcIlByb2plY3RfaW1hZ2VfX1lFWU54XCIsXG5cdFwicHJvamVjdFRleHRDb2x1bW5cIjogXCJQcm9qZWN0X3Byb2plY3RUZXh0Q29sdW1uX18yY3BWZVwiLFxuXHRcInRpdGxlXCI6IFwiUHJvamVjdF90aXRsZV9fWmNKNTFcIixcblx0XCJzdW1tYXJ5XCI6IFwiUHJvamVjdF9zdW1tYXJ5X18xRWt3aFwiLFxuXHRcInRvb2xzXCI6IFwiUHJvamVjdF90b29sc19fM2lndjBcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/Projects/Project.module.scss\n");

/***/ })

})