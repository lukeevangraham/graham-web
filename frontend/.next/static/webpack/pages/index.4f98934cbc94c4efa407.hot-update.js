webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/Projects/Project.module.scss":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./components/Projects/Project.module.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"/*\\n\\n0 - 600px:    Phone\\n600 - 900px:  Tablet portrait\\n900 - 1200px: Tablet landscape\\n[1200 - 1800] is where our normal styles apple\\n1800px + : Big desktop\\n\\n$breakpoint argument choices:\\n- phone\\n- tab-port\\n- tab-land\\n- big-desktop\\n\\nORDER:  Base + typography > general layout + grid > page layout > components\\n\\n1em = 16px (default broswer font size)\\n*/\\n.Project_project__1ijlA {\\n  width: 90%;\\n  margin: auto;\\n  padding: 2rem;\\n  border-radius: 5px;\\n  display: grid;\\n  grid-template-columns: repeat(2, minmax(min-content, 1fr));\\n  grid-template-rows: minmax(min-content, 40.875rem);\\n  grid-gap: 2rem;\\n  align-items: center;\\n  background-image: linear-gradient(to bottom right, rgba(107, 107, 107, 0.08), rgba(107, 107, 107, 0.04));\\n}\\n.Project_project__1ijlA .Project_image__YEYNx {\\n  position: relative;\\n  max-width: 65.4rem;\\n  max-height: 40.875rem;\\n  width: auto;\\n  height: auto;\\n  grid-row: 1/-1;\\n  height: 100%;\\n  border-radius: 5px;\\n  overflow: hidden;\\n}\\n@media only screen and (max-width: 56.25em) {\\n  .Project_project__1ijlA .Project_image__YEYNx {\\n    grid-column: 1/-1;\\n  }\\n}\\n.Project_project__1ijlA .Project_projectTextColumn__2cpVe {\\n  display: grid;\\n  grid-template-rows: repeat(4, min-content);\\n  align-content: space-between;\\n  justify-content: space-between;\\n  grid-gap: 1rem;\\n  font-size: 1.8rem;\\n}\\n.Project_project__1ijlA .Project_projectTextColumn__2cpVe .Project_title__ZcJ51 {\\n  grid-row: 1/1;\\n  font-size: 3.4rem;\\n  font-weight: 500;\\n  line-height: 1;\\n}\\n.Project_project__1ijlA .Project_projectTextColumn__2cpVe .Project_summary__1Ekwh {\\n  grid-row: 2/2;\\n  margin: -5px 0 0 0;\\n}\\n.Project_project__1ijlA .Project_projectTextColumn__2cpVe .Project_tools__3igv0 {\\n  grid-row: 3/3;\\n  display: grid;\\n  grid-template-columns: min-content 70%;\\n  grid-gap: 2rem;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://../../assets/css/sass/abstracts/_mixins.scss\",\"webpack://Project.module.scss\"],\"names\":[],\"mappings\":\"AAEA;;;;;;;;;;;;;;;;;CAAA;ACCA;EACE,UAAA;EACA,YAAA;EAGA,aAAA;EACA,kBAAA;EACA,aAAA;EACA,0DAAA;EACA,kDAAA;EACA,cAAA;EACA,mBAAA;EAEA,wGAAA;AAaF;AAHE;EACE,kBAAA;EACA,kBAAA;EACA,qBAAA;EACA,WAAA;EACA,YAAA;EAEA,cAAA;EACA,YAAA;EACA,kBAAA;EACA,gBAAA;AAIJ;ADZQ;ECFN;IAiBI,iBAAA;EACJ;AACF;AAME;EACE,aAAA;EACA,0CAAA;EACA,4BAAA;EACA,8BAAA;EACA,cAAA;EACA,iBAAA;AAJJ;AAMI;EACE,aAAA;EACA,iBAAA;EACA,gBAAA;EACA,cAAA;AAJN;AAOI;EACE,aAAA;EACA,kBAAA;AALN;AAOI;EACE,aAAA;EACA,aAAA;EACA,sCAAA;EACA,cAAA;AALN\",\"sourcesContent\":[\"// MEDIA QUERY MANAGER\\n\\n/*\\n\\n0 - 600px:    Phone\\n600 - 900px:  Tablet portrait\\n900 - 1200px: Tablet landscape\\n[1200 - 1800] is where our normal styles apple\\n1800px + : Big desktop\\n\\n$breakpoint argument choices:\\n- phone\\n- tab-port\\n- tab-land\\n- big-desktop\\n\\nORDER:  Base + typography > general layout + grid > page layout > components\\n\\n1em = 16px (default broswer font size)\\n*/\\n\\n@mixin respond($breakpoint) {\\n    @if $breakpoint == phone {\\n        @media only screen and (max-width: 37.5em) {  //600px\\n          @content;\\n        }\\n      }\\n      @if $breakpoint == tab-port {   //900px\\n        @media only screen and (max-width: 56.25em) {\\n          @content;\\n        }\\n      }\\n      @if $breakpoint == tab-land {   // 1200px\\n        @media only screen and (max-width: 75em) {\\n          @content;\\n        }\\n      }\\n      @if $breakpoint == big-desktop {    //1800px\\n        @media only screen and (min-width: 112.5em) {\\n          @content;\\n        }\\n      }\\n}\",\"@import \\\"../../assets/css/sass/abstracts/variables\\\";\\n@import \\\"../../assets/css/sass/abstracts/mixins\\\";\\n\\n.project {\\n  width: 90%;\\n  margin: auto;\\n  //   height: 40rem;\\n  //   background-color: orangered;\\n  padding: 2rem;\\n  border-radius: 5px;\\n  display: grid;\\n  grid-template-columns: repeat(2, minmax(min-content, 1fr));\\n  grid-template-rows: minmax(min-content, 40.875rem);\\n  grid-gap: 2rem;\\n  align-items: center;\\n  //   box-shadow: 0 0 5px 5px rgba($colorBaseGray, .7);\\n  background-image: linear-gradient(\\n    to bottom right,\\n    rgba($colorBaseGray, 0.08),\\n    rgba($colorBaseGray, 0.04)\\n  );\\n\\n//   @include respond(tab-port) {\\n//     grid-template-rows: repeat(auto-fit, minmax(100%, min-content));\\n//   }\\n\\n  .image {\\n    position: relative;\\n    max-width: 65.4rem;\\n    max-height: 40.875rem;\\n    width: auto;\\n    height: auto;\\n    // background-color: orangered;\\n    grid-row: 1 / -1;\\n    height: 100%;\\n    border-radius: 5px;\\n    overflow: hidden;\\n    // height: 100%;\\n    // width: 400px;\\n    // height: 400px;\\n    // background-color: orangered;\\n\\n    @include respond(tab-port) {\\n      grid-column: 1 / -1;\\n    }\\n\\n    .imageInner {\\n      // border-radius: 5px;\\n    }\\n  }\\n\\n  .projectTextColumn {\\n    display: grid;\\n    grid-template-rows: repeat(4, min-content);\\n    align-content: space-between;\\n    justify-content: space-between;\\n    grid-gap: 1rem;\\n    font-size: 1.8rem;\\n\\n    .title {\\n      grid-row: 1 / 1;\\n      font-size: 3.4rem;\\n      font-weight: 500;\\n      line-height: 1;\\n      // margin-bottom: -5px;\\n    }\\n    .summary {\\n      grid-row: 2 / 2;\\n      margin: -5px 0 0 0;\\n    }\\n    .tools {\\n      grid-row: 3 / 3;\\n      display: grid;\\n      grid-template-columns: min-content 70%;\\n      grid-gap: 2rem;\\n    }\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"project\": \"Project_project__1ijlA\",\n\t\"image\": \"Project_image__YEYNx\",\n\t\"projectTextColumn\": \"Project_projectTextColumn__2cpVe\",\n\t\"title\": \"Project_title__ZcJ51\",\n\t\"summary\": \"Project_summary__1Ekwh\",\n\t\"tools\": \"Project_tools__3igv0\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0cy9Qcm9qZWN0Lm1vZHVsZS5zY3NzPzM0ZDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxvSEFBeUQ7QUFDbkc7QUFDQTtBQUNBLDhCQUE4QixRQUFTLDZZQUE2WSxlQUFlLGlCQUFpQixrQkFBa0IsdUJBQXVCLGtCQUFrQiwrREFBK0QsdURBQXVELG1CQUFtQix3QkFBd0IsNkdBQTZHLEdBQUcsaURBQWlELHVCQUF1Qix1QkFBdUIsMEJBQTBCLGdCQUFnQixpQkFBaUIsbUJBQW1CLGlCQUFpQix1QkFBdUIscUJBQXFCLEdBQUcsK0NBQStDLG1EQUFtRCx3QkFBd0IsS0FBSyxHQUFHLDZEQUE2RCxrQkFBa0IsK0NBQStDLGlDQUFpQyxtQ0FBbUMsbUJBQW1CLHNCQUFzQixHQUFHLG1GQUFtRixrQkFBa0Isc0JBQXNCLHFCQUFxQixtQkFBbUIsR0FBRyxxRkFBcUYsa0JBQWtCLHVCQUF1QixHQUFHLG1GQUFtRixrQkFBa0Isa0JBQWtCLDJDQUEyQyxtQkFBbUIsR0FBRyxPQUFPLDZKQUE2SixLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssWUFBWSxLQUFLLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLG1jQUFtYyxnQ0FBZ0Msc0RBQXNELDhCQUE4QixXQUFXLFNBQVMscUNBQXFDLGlFQUFpRSxxQkFBcUIsV0FBVyxTQUFTLHFDQUFxQyxnRUFBZ0UscUJBQXFCLFdBQVcsU0FBUyx3Q0FBd0MsbUVBQW1FLHFCQUFxQixXQUFXLFNBQVMsR0FBRyx5REFBeUQscURBQXFELGNBQWMsZUFBZSxpQkFBaUIsdUJBQXVCLHFDQUFxQyxrQkFBa0IsdUJBQXVCLGtCQUFrQiwrREFBK0QsdURBQXVELG1CQUFtQix3QkFBd0IsMERBQTBELG1JQUFtSSxxQ0FBcUMseUVBQXlFLFFBQVEsY0FBYyx5QkFBeUIseUJBQXlCLDRCQUE0QixrQkFBa0IsbUJBQW1CLHFDQUFxQyx1QkFBdUIsbUJBQW1CLHlCQUF5Qix1QkFBdUIsc0JBQXNCLHNCQUFzQix1QkFBdUIscUNBQXFDLG9DQUFvQyw0QkFBNEIsT0FBTyxxQkFBcUIsOEJBQThCLE9BQU8sS0FBSywwQkFBMEIsb0JBQW9CLGlEQUFpRCxtQ0FBbUMscUNBQXFDLHFCQUFxQix3QkFBd0IsZ0JBQWdCLHdCQUF3QiwwQkFBMEIseUJBQXlCLHVCQUF1QiwrQkFBK0IsT0FBTyxnQkFBZ0Isd0JBQXdCLDJCQUEyQixPQUFPLGNBQWMsd0JBQXdCLHNCQUFzQiwrQ0FBK0MsdUJBQXVCLE9BQU8sS0FBSyxHQUFHLHFCQUFxQjtBQUM1dks7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPyEuL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdC5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qXFxuXFxuMCAtIDYwMHB4OiAgICBQaG9uZVxcbjYwMCAtIDkwMHB4OiAgVGFibGV0IHBvcnRyYWl0XFxuOTAwIC0gMTIwMHB4OiBUYWJsZXQgbGFuZHNjYXBlXFxuWzEyMDAgLSAxODAwXSBpcyB3aGVyZSBvdXIgbm9ybWFsIHN0eWxlcyBhcHBsZVxcbjE4MDBweCArIDogQmlnIGRlc2t0b3BcXG5cXG4kYnJlYWtwb2ludCBhcmd1bWVudCBjaG9pY2VzOlxcbi0gcGhvbmVcXG4tIHRhYi1wb3J0XFxuLSB0YWItbGFuZFxcbi0gYmlnLWRlc2t0b3BcXG5cXG5PUkRFUjogIEJhc2UgKyB0eXBvZ3JhcGh5ID4gZ2VuZXJhbCBsYXlvdXQgKyBncmlkID4gcGFnZSBsYXlvdXQgPiBjb21wb25lbnRzXFxuXFxuMWVtID0gMTZweCAoZGVmYXVsdCBicm9zd2VyIGZvbnQgc2l6ZSlcXG4qL1xcbi5Qcm9qZWN0X3Byb2plY3RfXzFpamxBIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW46IGF1dG87XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heChtaW4tY29udGVudCwgMWZyKSk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbm1heChtaW4tY29udGVudCwgNDAuODc1cmVtKTtcXG4gIGdyaWQtZ2FwOiAycmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsIHJnYmEoMTA3LCAxMDcsIDEwNywgMC4wOCksIHJnYmEoMTA3LCAxMDcsIDEwNywgMC4wNCkpO1xcbn1cXG4uUHJvamVjdF9wcm9qZWN0X18xaWpsQSAuUHJvamVjdF9pbWFnZV9fWUVZTngge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWF4LXdpZHRoOiA2NS40cmVtO1xcbiAgbWF4LWhlaWdodDogNDAuODc1cmVtO1xcbiAgd2lkdGg6IGF1dG87XFxuICBoZWlnaHQ6IGF1dG87XFxuICBncmlkLXJvdzogMS8tMTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYuMjVlbSkge1xcbiAgLlByb2plY3RfcHJvamVjdF9fMWlqbEEgLlByb2plY3RfaW1hZ2VfX1lFWU54IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICB9XFxufVxcbi5Qcm9qZWN0X3Byb2plY3RfXzFpamxBIC5Qcm9qZWN0X3Byb2plY3RUZXh0Q29sdW1uX18yY3BWZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgbWluLWNvbnRlbnQpO1xcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdyaWQtZ2FwOiAxcmVtO1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxufVxcbi5Qcm9qZWN0X3Byb2plY3RfXzFpamxBIC5Qcm9qZWN0X3Byb2plY3RUZXh0Q29sdW1uX18yY3BWZSAuUHJvamVjdF90aXRsZV9fWmNKNTEge1xcbiAgZ3JpZC1yb3c6IDEvMTtcXG4gIGZvbnQtc2l6ZTogMy40cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG4uUHJvamVjdF9wcm9qZWN0X18xaWpsQSAuUHJvamVjdF9wcm9qZWN0VGV4dENvbHVtbl9fMmNwVmUgLlByb2plY3Rfc3VtbWFyeV9fMUVrd2gge1xcbiAgZ3JpZC1yb3c6IDIvMjtcXG4gIG1hcmdpbjogLTVweCAwIDAgMDtcXG59XFxuLlByb2plY3RfcHJvamVjdF9fMWlqbEEgLlByb2plY3RfcHJvamVjdFRleHRDb2x1bW5fXzJjcFZlIC5Qcm9qZWN0X3Rvb2xzX18zaWd2MCB7XFxuICBncmlkLXJvdzogMy8zO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgNzAlO1xcbiAgZ3JpZC1nYXA6IDJyZW07XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uLi8uLi9hc3NldHMvY3NzL3Nhc3MvYWJzdHJhY3RzL19taXhpbnMuc2Nzc1wiLFwid2VicGFjazovL1Byb2plY3QubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQUE7QUNDQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBR0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDBEQUFBO0VBQ0Esa0RBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFFQSx3R0FBQTtBQWFGO0FBSEU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUlKO0FEWlE7RUNGTjtJQWlCSSxpQkFBQTtFQUNKO0FBQ0Y7QUFNRTtFQUNFLGFBQUE7RUFDQSwwQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFKSjtBQU1JO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBSk47QUFPSTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQUxOO0FBT0k7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNDQUFBO0VBQ0EsY0FBQTtBQUxOXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8vIE1FRElBIFFVRVJZIE1BTkFHRVJcXG5cXG4vKlxcblxcbjAgLSA2MDBweDogICAgUGhvbmVcXG42MDAgLSA5MDBweDogIFRhYmxldCBwb3J0cmFpdFxcbjkwMCAtIDEyMDBweDogVGFibGV0IGxhbmRzY2FwZVxcblsxMjAwIC0gMTgwMF0gaXMgd2hlcmUgb3VyIG5vcm1hbCBzdHlsZXMgYXBwbGVcXG4xODAwcHggKyA6IEJpZyBkZXNrdG9wXFxuXFxuJGJyZWFrcG9pbnQgYXJndW1lbnQgY2hvaWNlczpcXG4tIHBob25lXFxuLSB0YWItcG9ydFxcbi0gdGFiLWxhbmRcXG4tIGJpZy1kZXNrdG9wXFxuXFxuT1JERVI6ICBCYXNlICsgdHlwb2dyYXBoeSA+IGdlbmVyYWwgbGF5b3V0ICsgZ3JpZCA+IHBhZ2UgbGF5b3V0ID4gY29tcG9uZW50c1xcblxcbjFlbSA9IDE2cHggKGRlZmF1bHQgYnJvc3dlciBmb250IHNpemUpXFxuKi9cXG5cXG5AbWl4aW4gcmVzcG9uZCgkYnJlYWtwb2ludCkge1xcbiAgICBAaWYgJGJyZWFrcG9pbnQgPT0gcGhvbmUge1xcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNy41ZW0pIHsgIC8vNjAwcHhcXG4gICAgICAgICAgQGNvbnRlbnQ7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICAgIEBpZiAkYnJlYWtwb2ludCA9PSB0YWItcG9ydCB7ICAgLy85MDBweFxcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1Ni4yNWVtKSB7XFxuICAgICAgICAgIEBjb250ZW50O1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgICBAaWYgJGJyZWFrcG9pbnQgPT0gdGFiLWxhbmQgeyAgIC8vIDEyMDBweFxcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XFxuICAgICAgICAgIEBjb250ZW50O1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgICBAaWYgJGJyZWFrcG9pbnQgPT0gYmlnLWRlc2t0b3AgeyAgICAvLzE4MDBweFxcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMTIuNWVtKSB7XFxuICAgICAgICAgIEBjb250ZW50O1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG59XCIsXCJAaW1wb3J0IFxcXCIuLi8uLi9hc3NldHMvY3NzL3Nhc3MvYWJzdHJhY3RzL3ZhcmlhYmxlc1xcXCI7XFxuQGltcG9ydCBcXFwiLi4vLi4vYXNzZXRzL2Nzcy9zYXNzL2Fic3RyYWN0cy9taXhpbnNcXFwiO1xcblxcbi5wcm9qZWN0IHtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW46IGF1dG87XFxuICAvLyAgIGhlaWdodDogNDByZW07XFxuICAvLyAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZXJlZDtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KG1pbi1jb250ZW50LCAxZnIpKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWlubWF4KG1pbi1jb250ZW50LCA0MC44NzVyZW0pO1xcbiAgZ3JpZC1nYXA6IDJyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLy8gICBib3gtc2hhZG93OiAwIDAgNXB4IDVweCByZ2JhKCRjb2xvckJhc2VHcmF5LCAuNyk7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIHRvIGJvdHRvbSByaWdodCxcXG4gICAgcmdiYSgkY29sb3JCYXNlR3JheSwgMC4wOCksXFxuICAgIHJnYmEoJGNvbG9yQmFzZUdyYXksIDAuMDQpXFxuICApO1xcblxcbi8vICAgQGluY2x1ZGUgcmVzcG9uZCh0YWItcG9ydCkge1xcbi8vICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwMCUsIG1pbi1jb250ZW50KSk7XFxuLy8gICB9XFxuXFxuICAuaW1hZ2Uge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1heC13aWR0aDogNjUuNHJlbTtcXG4gICAgbWF4LWhlaWdodDogNDAuODc1cmVtO1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7XFxuICAgIGdyaWQtcm93OiAxIC8gLTE7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAvLyBoZWlnaHQ6IDEwMCU7XFxuICAgIC8vIHdpZHRoOiA0MDBweDtcXG4gICAgLy8gaGVpZ2h0OiA0MDBweDtcXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkO1xcblxcbiAgICBAaW5jbHVkZSByZXNwb25kKHRhYi1wb3J0KSB7XFxuICAgICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgfVxcblxcbiAgICAuaW1hZ2VJbm5lciB7XFxuICAgICAgLy8gYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB9XFxuICB9XFxuXFxuICAucHJvamVjdFRleHRDb2x1bW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCBtaW4tY29udGVudCk7XFxuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ3JpZC1nYXA6IDFyZW07XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcblxcbiAgICAudGl0bGUge1xcbiAgICAgIGdyaWQtcm93OiAxIC8gMTtcXG4gICAgICBmb250LXNpemU6IDMuNHJlbTtcXG4gICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICAgIC8vIG1hcmdpbi1ib3R0b206IC01cHg7XFxuICAgIH1cXG4gICAgLnN1bW1hcnkge1xcbiAgICAgIGdyaWQtcm93OiAyIC8gMjtcXG4gICAgICBtYXJnaW46IC01cHggMCAwIDA7XFxuICAgIH1cXG4gICAgLnRvb2xzIHtcXG4gICAgICBncmlkLXJvdzogMyAvIDM7XFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IDcwJTtcXG4gICAgICBncmlkLWdhcDogMnJlbTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJwcm9qZWN0XCI6IFwiUHJvamVjdF9wcm9qZWN0X18xaWpsQVwiLFxuXHRcImltYWdlXCI6IFwiUHJvamVjdF9pbWFnZV9fWUVZTnhcIixcblx0XCJwcm9qZWN0VGV4dENvbHVtblwiOiBcIlByb2plY3RfcHJvamVjdFRleHRDb2x1bW5fXzJjcFZlXCIsXG5cdFwidGl0bGVcIjogXCJQcm9qZWN0X3RpdGxlX19aY0o1MVwiLFxuXHRcInN1bW1hcnlcIjogXCJQcm9qZWN0X3N1bW1hcnlfXzFFa3doXCIsXG5cdFwidG9vbHNcIjogXCJQcm9qZWN0X3Rvb2xzX18zaWd2MFwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/Projects/Project.module.scss\n");

/***/ })

})