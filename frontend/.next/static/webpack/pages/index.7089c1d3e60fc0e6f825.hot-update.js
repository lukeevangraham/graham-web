webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/Projects/Project.module.scss":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./components/Projects/Project.module.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"/*\\n\\n0 - 600px:    Phone\\n600 - 900px:  Tablet portrait\\n900 - 1200px: Tablet landscape\\n[1200 - 1800] is where our normal styles apple\\n1800px + : Big desktop\\n\\n$breakpoint argument choices:\\n- phone\\n- tab-port\\n- tab-land\\n- big-desktop\\n\\nORDER:  Base + typography > general layout + grid > page layout > components\\n\\n1em = 16px (default broswer font size)\\n*/\\n.Project_projectWrapper__2yiJ1 {\\n  max-width: 140rem;\\n  margin: auto;\\n  display: grid;\\n  grid-template-rows: repeat(auto-fit, max-content);\\n  grid-gap: 5rem;\\n}\\n.Project_projectWrapper__2yiJ1 .Project_project__1ijlA {\\n  width: 90%;\\n  margin: auto;\\n  padding: 3rem 2rem;\\n  border-radius: 5px;\\n  display: grid;\\n  grid-template-columns: repeat(2, minmax(min-content, 1fr));\\n  grid-gap: 2rem;\\n  align-items: center;\\n  background-image: linear-gradient(to bottom right, rgba(120, 120, 120, 0.8) 0, #cccaca 20%, #ebebeb 100%);\\n}\\n@media only screen and (max-width: 56.25em) {\\n  .Project_projectWrapper__2yiJ1 .Project_project__1ijlA {\\n    grid-template-columns: 1fr;\\n  }\\n}\\n.Project_projectWrapper__2yiJ1 .Project_project__1ijlA .Project_imageWrapper__148L2 {\\n  width: 100%;\\n  grid-row: 1/-1;\\n}\\n.Project_projectWrapper__2yiJ1 .Project_project__1ijlA .Project_imageWrapper__148L2 .Project_image__YEYNx {\\n  position: relative;\\n  height: 100%;\\n  width: 100%;\\n  border-radius: 5px;\\n  overflow: hidden;\\n  padding-bottom: 62.5%;\\n}\\n@media only screen and (max-width: 56.25em) {\\n  .Project_projectWrapper__2yiJ1 .Project_project__1ijlA .Project_imageWrapper__148L2 .Project_image__YEYNx {\\n    grid-column: 1/-1;\\n  }\\n}\\n.Project_projectWrapper__2yiJ1 .Project_project__1ijlA .Project_projectTextColumn__2cpVe {\\n  display: grid;\\n  grid-template-rows: repeat(4, min-content);\\n  align-content: center;\\n  grid-gap: 1rem;\\n  font-size: 1.8rem;\\n  height: 100%;\\n}\\n.Project_projectWrapper__2yiJ1 .Project_project__1ijlA .Project_projectTextColumn__2cpVe .Project_title__ZcJ51 {\\n  grid-row: 1/1;\\n  font-size: 3.4rem;\\n  font-weight: 500;\\n  line-height: 1;\\n}\\n.Project_projectWrapper__2yiJ1 .Project_project__1ijlA .Project_projectTextColumn__2cpVe .Project_summary__1Ekwh {\\n  grid-row: 2/2;\\n  margin: -5px 0 0 0;\\n}\\n.Project_projectWrapper__2yiJ1 .Project_project__1ijlA .Project_projectTextColumn__2cpVe .Project_tools__3igv0 {\\n  grid-row: 3/3;\\n  display: grid;\\n  grid-template-columns: min-content 70%;\\n  grid-gap: 2rem;\\n}\\n.Project_projectWrapper__2yiJ1 .Project_project__1ijlA .Project_projectTextColumn__2cpVe .Project_tools__3igv0 .Project_linkLabel__3hCUg {\\n  align-self: center;\\n}\\n.Project_projectWrapper__2yiJ1 .Project_project__1ijlA .Project_projectTextColumn__2cpVe .Project_tools__3igv0 .Project_links__29VgR {\\n  grid-column: 1/-1;\\n  display: grid;\\n  grid-template-columns: repeat(2, max-content);\\n  grid-gap: 1rem;\\n}\\n.Project_projectWrapper__2yiJ1 .Project_project__1ijlA:hover .Project_image__YEYNx {\\n  box-shadow: 0 0 8px 1px rgba(120, 120, 120, 0.8);\\n}\\n.Project_projectWrapper__2yiJ1 .Project_projectFlipped__2J4yD {\\n  background-image: linear-gradient(to bottom left, #525252 0, #cccaca 27%, #ebebeb 100%);\\n}\\n.Project_projectWrapper__2yiJ1 .Project_projectFlipped__2J4yD .Project_imageWrapper__148L2 {\\n  grid-column: 2/-1;\\n}\\n@media only screen and (max-width: 56.25em) {\\n  .Project_projectWrapper__2yiJ1 .Project_projectFlipped__2J4yD .Project_imageWrapper__148L2 {\\n    grid-column: 1/-1;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://../../assets/css/sass/abstracts/_mixins.scss\",\"webpack://Project.module.scss\"],\"names\":[],\"mappings\":\"AAEA;;;;;;;;;;;;;;;;;CAAA;ACCA;EACE,iBAAA;EACA,YAAA;EACA,aAAA;EACA,iDAAA;EACA,cAAA;AAgBF;AAdE;EACE,UAAA;EACA,YAAA;EAGA,kBAAA;EACA,kBAAA;EACA,aAAA;EACA,0DAAA;EAGA,cAAA;EACA,mBAAA;EAEA,yGAAA;AAWJ;ADCI;EC1BF;IAsBI,0BAAA;EAOJ;AACF;AACI;EACE,WAAA;EAEA,cAAA;AAAN;AAIM;EACE,kBAAA;EAMA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,gBAAA;EAIA,qBAAA;AAVR;ADhBI;ECYE;IAmBI,iBAAA;EAXR;AACF;AAmBI;EACE,aAAA;EACA,0CAAA;EACA,qBAAA;EAEA,cAAA;EACA,iBAAA;EACA,YAAA;AAlBN;AAoBM;EACE,aAAA;EACA,iBAAA;EACA,gBAAA;EACA,cAAA;AAlBR;AAqBM;EACE,aAAA;EACA,kBAAA;AAnBR;AAqBM;EACE,aAAA;EACA,aAAA;EACA,sCAAA;EACA,cAAA;AAnBR;AAqBQ;EACE,kBAAA;AAnBV;AAsBQ;EACE,iBAAA;EACA,aAAA;EACA,6CAAA;EACA,cAAA;AApBV;AAyBI;EACE,gDAAA;AAvBN;AA2BE;EAEE,uFAAA;AA1BJ;AAiCI;EACE,iBAAA;AA/BN;AD/DI;EC6FA;IAII,iBAAA;EA9BN;AACF\",\"sourcesContent\":[\"// MEDIA QUERY MANAGER\\n\\n/*\\n\\n0 - 600px:    Phone\\n600 - 900px:  Tablet portrait\\n900 - 1200px: Tablet landscape\\n[1200 - 1800] is where our normal styles apple\\n1800px + : Big desktop\\n\\n$breakpoint argument choices:\\n- phone\\n- tab-port\\n- tab-land\\n- big-desktop\\n\\nORDER:  Base + typography > general layout + grid > page layout > components\\n\\n1em = 16px (default broswer font size)\\n*/\\n\\n@mixin respond($breakpoint) {\\n  @if $breakpoint == sm-phone {\\n    @media only screen and (max-width: 28.125em) {\\n      //450px\\n      @content;\\n    }\\n  }\\n  @if $breakpoint == phone {\\n    @media only screen and (max-width: 37.5em) {\\n      //600px\\n      @content;\\n    }\\n  }\\n  @if $breakpoint == tab-port {\\n    //900px\\n    @media only screen and (max-width: 56.25em) {\\n      @content;\\n    }\\n  }\\n  @if $breakpoint == tab-land {\\n    // 1200px\\n    @media only screen and (max-width: 75em) {\\n      @content;\\n    }\\n  }\\n  @if $breakpoint == big-desktop {\\n    //1800px\\n    @media only screen and (min-width: 112.5em) {\\n      @content;\\n    }\\n  }\\n}\\n\",\"@import \\\"../../assets/css/sass/abstracts/variables\\\";\\n@import \\\"../../assets/css/sass/abstracts/mixins\\\";\\n\\n.projectWrapper {\\n  max-width: 140rem;\\n  margin: auto;\\n  display: grid;\\n  grid-template-rows: repeat(auto-fit, max-content);\\n  grid-gap: 5rem;\\n\\n  .project {\\n    width: 90%;\\n    margin: auto;\\n    //   height: 40rem;\\n    //   background-color: orangered;\\n    padding: 3rem 2rem;\\n    border-radius: 5px;\\n    display: grid;\\n    grid-template-columns: repeat(2, minmax(min-content, 1fr));\\n    //   grid-template-rows: minmax(min-content, 40.875rem);\\n    //   grid-template-rows: minmax(min-content, max-content);\\n    grid-gap: 2rem;\\n    align-items: center;\\n    //   box-shadow: 0 0 5px 5px rgba($colorBaseGray, .7);\\n    background-image: linear-gradient(\\n      to bottom right,\\n      rgba($colorBaseGrayDark, 0.8) 0,\\n      rgba($colorBaseGrayLight, 1) 20%,\\n      rgba($colorBaseGrayLighter, 1) 100%\\n    );\\n\\n    @include respond(tab-port) {\\n      grid-template-columns: 1fr;\\n    }\\n    //   @include respond(phone) {\\n    //     grid-template-rows: minmax(min-content, 30rem);\\n    //   }\\n    //   @include respond(sm-phone) {\\n    //     grid-template-rows: minmax(min-content, 16.5rem);\\n    //   }\\n\\n    .imageWrapper {\\n      width: 100%;\\n      // padding-bottom: 62.5%;\\n      grid-row: 1 / -1;\\n      // background-color: orangered;\\n      // position: relative;\\n\\n      .image {\\n        position: relative;\\n        // max-width: 65.4rem;\\n        //   max-height: 40.875rem;\\n        //   width: auto;\\n        // height: auto;\\n        //   background-color: orangered;\\n        height: 100%;\\n        width: 100%;\\n        border-radius: 5px;\\n        overflow: hidden;\\n\\n        // height: 100%;\\n        // width: 400px;\\n        padding-bottom: 62.5%;\\n        // height: 400px;\\n        // background-color: orangered;\\n\\n        @include respond(tab-port) {\\n          grid-column: 1 / -1;\\n        }\\n\\n        .imageInner {\\n          // border-radius: 5px;\\n        }\\n      }\\n    }\\n\\n    .projectTextColumn {\\n      display: grid;\\n      grid-template-rows: repeat(4, min-content);\\n      align-content: center;\\n      // justify-content: space-between;\\n      grid-gap: 1rem;\\n      font-size: 1.8rem;\\n      height: 100%;\\n\\n      .title {\\n        grid-row: 1 / 1;\\n        font-size: 3.4rem;\\n        font-weight: 500;\\n        line-height: 1;\\n        // margin-bottom: -5px;\\n      }\\n      .summary {\\n        grid-row: 2 / 2;\\n        margin: -5px 0 0 0;\\n      }\\n      .tools {\\n        grid-row: 3 / 3;\\n        display: grid;\\n        grid-template-columns: min-content 70%;\\n        grid-gap: 2rem;\\n\\n        .linkLabel {\\n          align-self: center;\\n        }\\n\\n        .links {\\n          grid-column: 1 / -1;\\n          display: grid;\\n          grid-template-columns: repeat(2, max-content);\\n          grid-gap: 1rem;\\n        }\\n      }\\n    }\\n\\n    &:hover .image {\\n      box-shadow: 0 0 8px 1px rgba($colorBaseGrayDark, 0.8);\\n    }\\n  }\\n\\n  .projectFlipped {\\n    // background-color: orangered;\\n    background-image: linear-gradient(\\n      to bottom left,\\n      rgba($colorBaseGrayDarker, 1) 0,\\n      rgba($colorBaseGrayLight, 1) 27%,\\n      rgba($colorBaseGrayLighter, 1) 100%\\n    );\\n\\n    .imageWrapper {\\n      grid-column: 2 / -1;\\n\\n      @include respond(tab-port) {\\n        grid-column: 1 / -1;\\n      }\\n    }\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"projectWrapper\": \"Project_projectWrapper__2yiJ1\",\n\t\"project\": \"Project_project__1ijlA\",\n\t\"imageWrapper\": \"Project_imageWrapper__148L2\",\n\t\"image\": \"Project_image__YEYNx\",\n\t\"projectTextColumn\": \"Project_projectTextColumn__2cpVe\",\n\t\"title\": \"Project_title__ZcJ51\",\n\t\"summary\": \"Project_summary__1Ekwh\",\n\t\"tools\": \"Project_tools__3igv0\",\n\t\"linkLabel\": \"Project_linkLabel__3hCUg\",\n\t\"links\": \"Project_links__29VgR\",\n\t\"projectFlipped\": \"Project_projectFlipped__2J4yD\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0cy9Qcm9qZWN0Lm1vZHVsZS5zY3NzPzM0ZDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxvSEFBeUQ7QUFDbkc7QUFDQTtBQUNBLDhCQUE4QixRQUFTLG9aQUFvWixzQkFBc0IsaUJBQWlCLGtCQUFrQixzREFBc0QsbUJBQW1CLEdBQUcsMERBQTBELGVBQWUsaUJBQWlCLHVCQUF1Qix1QkFBdUIsa0JBQWtCLCtEQUErRCxtQkFBbUIsd0JBQXdCLDhHQUE4RyxHQUFHLCtDQUErQyw0REFBNEQsaUNBQWlDLEtBQUssR0FBRyx1RkFBdUYsZ0JBQWdCLG1CQUFtQixHQUFHLDZHQUE2Ryx1QkFBdUIsaUJBQWlCLGdCQUFnQix1QkFBdUIscUJBQXFCLDBCQUEwQixHQUFHLCtDQUErQywrR0FBK0csd0JBQXdCLEtBQUssR0FBRyw0RkFBNEYsa0JBQWtCLCtDQUErQywwQkFBMEIsbUJBQW1CLHNCQUFzQixpQkFBaUIsR0FBRyxrSEFBa0gsa0JBQWtCLHNCQUFzQixxQkFBcUIsbUJBQW1CLEdBQUcsb0hBQW9ILGtCQUFrQix1QkFBdUIsR0FBRyxrSEFBa0gsa0JBQWtCLGtCQUFrQiwyQ0FBMkMsbUJBQW1CLEdBQUcsNElBQTRJLHVCQUF1QixHQUFHLHdJQUF3SSxzQkFBc0Isa0JBQWtCLGtEQUFrRCxtQkFBbUIsR0FBRyxzRkFBc0YscURBQXFELEdBQUcsaUVBQWlFLDRGQUE0RixHQUFHLDhGQUE4RixzQkFBc0IsR0FBRywrQ0FBK0MsZ0dBQWdHLHdCQUF3QixLQUFLLEdBQUcsT0FBTyw2SkFBNkosS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLE1BQU0sWUFBWSxLQUFLLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLFlBQVksS0FBSyxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sbWNBQW1jLGlDQUFpQyxvREFBb0QsZ0NBQWdDLE9BQU8sS0FBSyw4QkFBOEIsa0RBQWtELGdDQUFnQyxPQUFPLEtBQUssaUNBQWlDLGdFQUFnRSxpQkFBaUIsT0FBTyxLQUFLLGlDQUFpQywrREFBK0QsaUJBQWlCLE9BQU8sS0FBSyxvQ0FBb0MsaUVBQWlFLGlCQUFpQixPQUFPLEtBQUssR0FBRywyREFBMkQscURBQXFELHFCQUFxQixzQkFBc0IsaUJBQWlCLGtCQUFrQixzREFBc0QsbUJBQW1CLGdCQUFnQixpQkFBaUIsbUJBQW1CLHlCQUF5Qix1Q0FBdUMseUJBQXlCLHlCQUF5QixvQkFBb0IsaUVBQWlFLDhEQUE4RCxnRUFBZ0UscUJBQXFCLDBCQUEwQiw0REFBNEQsb01BQW9NLG9DQUFvQyxtQ0FBbUMsT0FBTyxvQ0FBb0MsNERBQTRELFlBQVksdUNBQXVDLDhEQUE4RCxZQUFZLHVCQUF1QixvQkFBb0IsaUNBQWlDLHlCQUF5Qix1Q0FBdUMsOEJBQThCLGtCQUFrQiw2QkFBNkIsZ0NBQWdDLHFDQUFxQywyQkFBMkIsMEJBQTBCLDJDQUEyQyx1QkFBdUIsc0JBQXNCLDZCQUE2QiwyQkFBMkIsNEJBQTRCLDBCQUEwQixnQ0FBZ0MsMkJBQTJCLHlDQUF5Qyx3Q0FBd0MsZ0NBQWdDLFdBQVcseUJBQXlCLGtDQUFrQyxXQUFXLFNBQVMsT0FBTyw0QkFBNEIsc0JBQXNCLG1EQUFtRCw4QkFBOEIsMENBQTBDLHVCQUF1QiwwQkFBMEIscUJBQXFCLGtCQUFrQiwwQkFBMEIsNEJBQTRCLDJCQUEyQix5QkFBeUIsaUNBQWlDLFNBQVMsa0JBQWtCLDBCQUEwQiw2QkFBNkIsU0FBUyxnQkFBZ0IsMEJBQTBCLHdCQUF3QixpREFBaUQseUJBQXlCLHdCQUF3QiwrQkFBK0IsV0FBVyxvQkFBb0IsZ0NBQWdDLDBCQUEwQiwwREFBMEQsMkJBQTJCLFdBQVcsU0FBUyxPQUFPLHdCQUF3Qiw4REFBOEQsT0FBTyxLQUFLLHVCQUF1QixxQ0FBcUMsbU1BQW1NLHVCQUF1Qiw0QkFBNEIsc0NBQXNDLDhCQUE4QixTQUFTLE9BQU8sS0FBSyxHQUFHLHFCQUFxQjtBQUNqdFI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8hLi9jb21wb25lbnRzL1Byb2plY3RzL1Byb2plY3QubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcblxcbjAgLSA2MDBweDogICAgUGhvbmVcXG42MDAgLSA5MDBweDogIFRhYmxldCBwb3J0cmFpdFxcbjkwMCAtIDEyMDBweDogVGFibGV0IGxhbmRzY2FwZVxcblsxMjAwIC0gMTgwMF0gaXMgd2hlcmUgb3VyIG5vcm1hbCBzdHlsZXMgYXBwbGVcXG4xODAwcHggKyA6IEJpZyBkZXNrdG9wXFxuXFxuJGJyZWFrcG9pbnQgYXJndW1lbnQgY2hvaWNlczpcXG4tIHBob25lXFxuLSB0YWItcG9ydFxcbi0gdGFiLWxhbmRcXG4tIGJpZy1kZXNrdG9wXFxuXFxuT1JERVI6ICBCYXNlICsgdHlwb2dyYXBoeSA+IGdlbmVyYWwgbGF5b3V0ICsgZ3JpZCA+IHBhZ2UgbGF5b3V0ID4gY29tcG9uZW50c1xcblxcbjFlbSA9IDE2cHggKGRlZmF1bHQgYnJvc3dlciBmb250IHNpemUpXFxuKi9cXG4uUHJvamVjdF9wcm9qZWN0V3JhcHBlcl9fMnlpSjEge1xcbiAgbWF4LXdpZHRoOiAxNDByZW07XFxuICBtYXJnaW46IGF1dG87XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIG1heC1jb250ZW50KTtcXG4gIGdyaWQtZ2FwOiA1cmVtO1xcbn1cXG4uUHJvamVjdF9wcm9qZWN0V3JhcHBlcl9fMnlpSjEgLlByb2plY3RfcHJvamVjdF9fMWlqbEEge1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBhZGRpbmc6IDNyZW0gMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgobWluLWNvbnRlbnQsIDFmcikpO1xcbiAgZ3JpZC1nYXA6IDJyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgcmdiYSgxMjAsIDEyMCwgMTIwLCAwLjgpIDAsICNjY2NhY2EgMjAlLCAjZWJlYmViIDEwMCUpO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2LjI1ZW0pIHtcXG4gIC5Qcm9qZWN0X3Byb2plY3RXcmFwcGVyX18yeWlKMSAuUHJvamVjdF9wcm9qZWN0X18xaWpsQSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgfVxcbn1cXG4uUHJvamVjdF9wcm9qZWN0V3JhcHBlcl9fMnlpSjEgLlByb2plY3RfcHJvamVjdF9fMWlqbEEgLlByb2plY3RfaW1hZ2VXcmFwcGVyX18xNDhMMiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGdyaWQtcm93OiAxLy0xO1xcbn1cXG4uUHJvamVjdF9wcm9qZWN0V3JhcHBlcl9fMnlpSjEgLlByb2plY3RfcHJvamVjdF9fMWlqbEEgLlByb2plY3RfaW1hZ2VXcmFwcGVyX18xNDhMMiAuUHJvamVjdF9pbWFnZV9fWUVZTngge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcGFkZGluZy1ib3R0b206IDYyLjUlO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2LjI1ZW0pIHtcXG4gIC5Qcm9qZWN0X3Byb2plY3RXcmFwcGVyX18yeWlKMSAuUHJvamVjdF9wcm9qZWN0X18xaWpsQSAuUHJvamVjdF9pbWFnZVdyYXBwZXJfXzE0OEwyIC5Qcm9qZWN0X2ltYWdlX19ZRVlOeCB7XFxuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgfVxcbn1cXG4uUHJvamVjdF9wcm9qZWN0V3JhcHBlcl9fMnlpSjEgLlByb2plY3RfcHJvamVjdF9fMWlqbEEgLlByb2plY3RfcHJvamVjdFRleHRDb2x1bW5fXzJjcFZlIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCBtaW4tY29udGVudCk7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBncmlkLWdhcDogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uUHJvamVjdF9wcm9qZWN0V3JhcHBlcl9fMnlpSjEgLlByb2plY3RfcHJvamVjdF9fMWlqbEEgLlByb2plY3RfcHJvamVjdFRleHRDb2x1bW5fXzJjcFZlIC5Qcm9qZWN0X3RpdGxlX19aY0o1MSB7XFxuICBncmlkLXJvdzogMS8xO1xcbiAgZm9udC1zaXplOiAzLjRyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcbi5Qcm9qZWN0X3Byb2plY3RXcmFwcGVyX18yeWlKMSAuUHJvamVjdF9wcm9qZWN0X18xaWpsQSAuUHJvamVjdF9wcm9qZWN0VGV4dENvbHVtbl9fMmNwVmUgLlByb2plY3Rfc3VtbWFyeV9fMUVrd2gge1xcbiAgZ3JpZC1yb3c6IDIvMjtcXG4gIG1hcmdpbjogLTVweCAwIDAgMDtcXG59XFxuLlByb2plY3RfcHJvamVjdFdyYXBwZXJfXzJ5aUoxIC5Qcm9qZWN0X3Byb2plY3RfXzFpamxBIC5Qcm9qZWN0X3Byb2plY3RUZXh0Q29sdW1uX18yY3BWZSAuUHJvamVjdF90b29sc19fM2lndjAge1xcbiAgZ3JpZC1yb3c6IDMvMztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IDcwJTtcXG4gIGdyaWQtZ2FwOiAycmVtO1xcbn1cXG4uUHJvamVjdF9wcm9qZWN0V3JhcHBlcl9fMnlpSjEgLlByb2plY3RfcHJvamVjdF9fMWlqbEEgLlByb2plY3RfcHJvamVjdFRleHRDb2x1bW5fXzJjcFZlIC5Qcm9qZWN0X3Rvb2xzX18zaWd2MCAuUHJvamVjdF9saW5rTGFiZWxfXzNoQ1VnIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuLlByb2plY3RfcHJvamVjdFdyYXBwZXJfXzJ5aUoxIC5Qcm9qZWN0X3Byb2plY3RfXzFpamxBIC5Qcm9qZWN0X3Byb2plY3RUZXh0Q29sdW1uX18yY3BWZSAuUHJvamVjdF90b29sc19fM2lndjAgLlByb2plY3RfbGlua3NfXzI5VmdSIHtcXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1heC1jb250ZW50KTtcXG4gIGdyaWQtZ2FwOiAxcmVtO1xcbn1cXG4uUHJvamVjdF9wcm9qZWN0V3JhcHBlcl9fMnlpSjEgLlByb2plY3RfcHJvamVjdF9fMWlqbEE6aG92ZXIgLlByb2plY3RfaW1hZ2VfX1lFWU54IHtcXG4gIGJveC1zaGFkb3c6IDAgMCA4cHggMXB4IHJnYmEoMTIwLCAxMjAsIDEyMCwgMC44KTtcXG59XFxuLlByb2plY3RfcHJvamVjdFdyYXBwZXJfXzJ5aUoxIC5Qcm9qZWN0X3Byb2plY3RGbGlwcGVkX18ySjR5RCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIGxlZnQsICM1MjUyNTIgMCwgI2NjY2FjYSAyNyUsICNlYmViZWIgMTAwJSk7XFxufVxcbi5Qcm9qZWN0X3Byb2plY3RXcmFwcGVyX18yeWlKMSAuUHJvamVjdF9wcm9qZWN0RmxpcHBlZF9fMko0eUQgLlByb2plY3RfaW1hZ2VXcmFwcGVyX18xNDhMMiB7XFxuICBncmlkLWNvbHVtbjogMi8tMTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1Ni4yNWVtKSB7XFxuICAuUHJvamVjdF9wcm9qZWN0V3JhcHBlcl9fMnlpSjEgLlByb2plY3RfcHJvamVjdEZsaXBwZWRfXzJKNHlEIC5Qcm9qZWN0X2ltYWdlV3JhcHBlcl9fMTQ4TDIge1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4uLy4uL2Fzc2V0cy9jc3Mvc2Fzcy9hYnN0cmFjdHMvX21peGlucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vUHJvamVjdC5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBQTtBQ0NBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlEQUFBO0VBQ0EsY0FBQTtBQWdCRjtBQWRFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFHQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDBEQUFBO0VBR0EsY0FBQTtFQUNBLG1CQUFBO0VBRUEseUdBQUE7QUFXSjtBRENJO0VDMUJGO0lBc0JJLDBCQUFBO0VBT0o7QUFDRjtBQUNJO0VBQ0UsV0FBQTtFQUVBLGNBQUE7QUFBTjtBQUlNO0VBQ0Usa0JBQUE7RUFNQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFJQSxxQkFBQTtBQVZSO0FEaEJJO0VDWUU7SUFtQkksaUJBQUE7RUFYUjtBQUNGO0FBbUJJO0VBQ0UsYUFBQTtFQUNBLDBDQUFBO0VBQ0EscUJBQUE7RUFFQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBbEJOO0FBb0JNO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBbEJSO0FBcUJNO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FBbkJSO0FBcUJNO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLGNBQUE7QUFuQlI7QUFxQlE7RUFDRSxrQkFBQTtBQW5CVjtBQXNCUTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLDZDQUFBO0VBQ0EsY0FBQTtBQXBCVjtBQXlCSTtFQUNFLGdEQUFBO0FBdkJOO0FBMkJFO0VBRUUsdUZBQUE7QUExQko7QUFpQ0k7RUFDRSxpQkFBQTtBQS9CTjtBRC9ESTtFQzZGQTtJQUlJLGlCQUFBO0VBOUJOO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLy8gTUVESUEgUVVFUlkgTUFOQUdFUlxcblxcbi8qXFxuXFxuMCAtIDYwMHB4OiAgICBQaG9uZVxcbjYwMCAtIDkwMHB4OiAgVGFibGV0IHBvcnRyYWl0XFxuOTAwIC0gMTIwMHB4OiBUYWJsZXQgbGFuZHNjYXBlXFxuWzEyMDAgLSAxODAwXSBpcyB3aGVyZSBvdXIgbm9ybWFsIHN0eWxlcyBhcHBsZVxcbjE4MDBweCArIDogQmlnIGRlc2t0b3BcXG5cXG4kYnJlYWtwb2ludCBhcmd1bWVudCBjaG9pY2VzOlxcbi0gcGhvbmVcXG4tIHRhYi1wb3J0XFxuLSB0YWItbGFuZFxcbi0gYmlnLWRlc2t0b3BcXG5cXG5PUkRFUjogIEJhc2UgKyB0eXBvZ3JhcGh5ID4gZ2VuZXJhbCBsYXlvdXQgKyBncmlkID4gcGFnZSBsYXlvdXQgPiBjb21wb25lbnRzXFxuXFxuMWVtID0gMTZweCAoZGVmYXVsdCBicm9zd2VyIGZvbnQgc2l6ZSlcXG4qL1xcblxcbkBtaXhpbiByZXNwb25kKCRicmVha3BvaW50KSB7XFxuICBAaWYgJGJyZWFrcG9pbnQgPT0gc20tcGhvbmUge1xcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI4LjEyNWVtKSB7XFxuICAgICAgLy80NTBweFxcbiAgICAgIEBjb250ZW50O1xcbiAgICB9XFxuICB9XFxuICBAaWYgJGJyZWFrcG9pbnQgPT0gcGhvbmUge1xcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3LjVlbSkge1xcbiAgICAgIC8vNjAwcHhcXG4gICAgICBAY29udGVudDtcXG4gICAgfVxcbiAgfVxcbiAgQGlmICRicmVha3BvaW50ID09IHRhYi1wb3J0IHtcXG4gICAgLy85MDBweFxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2LjI1ZW0pIHtcXG4gICAgICBAY29udGVudDtcXG4gICAgfVxcbiAgfVxcbiAgQGlmICRicmVha3BvaW50ID09IHRhYi1sYW5kIHtcXG4gICAgLy8gMTIwMHB4XFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzVlbSkge1xcbiAgICAgIEBjb250ZW50O1xcbiAgICB9XFxuICB9XFxuICBAaWYgJGJyZWFrcG9pbnQgPT0gYmlnLWRlc2t0b3Age1xcbiAgICAvLzE4MDBweFxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDExMi41ZW0pIHtcXG4gICAgICBAY29udGVudDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIixcIkBpbXBvcnQgXFxcIi4uLy4uL2Fzc2V0cy9jc3Mvc2Fzcy9hYnN0cmFjdHMvdmFyaWFibGVzXFxcIjtcXG5AaW1wb3J0IFxcXCIuLi8uLi9hc3NldHMvY3NzL3Nhc3MvYWJzdHJhY3RzL21peGluc1xcXCI7XFxuXFxuLnByb2plY3RXcmFwcGVyIHtcXG4gIG1heC13aWR0aDogMTQwcmVtO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCBtYXgtY29udGVudCk7XFxuICBncmlkLWdhcDogNXJlbTtcXG5cXG4gIC5wcm9qZWN0IHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICAvLyAgIGhlaWdodDogNDByZW07XFxuICAgIC8vICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkO1xcbiAgICBwYWRkaW5nOiAzcmVtIDJyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KG1pbi1jb250ZW50LCAxZnIpKTtcXG4gICAgLy8gICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbm1heChtaW4tY29udGVudCwgNDAuODc1cmVtKTtcXG4gICAgLy8gICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbm1heChtaW4tY29udGVudCwgbWF4LWNvbnRlbnQpO1xcbiAgICBncmlkLWdhcDogMnJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLy8gICBib3gtc2hhZG93OiAwIDAgNXB4IDVweCByZ2JhKCRjb2xvckJhc2VHcmF5LCAuNyk7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXG4gICAgICB0byBib3R0b20gcmlnaHQsXFxuICAgICAgcmdiYSgkY29sb3JCYXNlR3JheURhcmssIDAuOCkgMCxcXG4gICAgICByZ2JhKCRjb2xvckJhc2VHcmF5TGlnaHQsIDEpIDIwJSxcXG4gICAgICByZ2JhKCRjb2xvckJhc2VHcmF5TGlnaHRlciwgMSkgMTAwJVxcbiAgICApO1xcblxcbiAgICBAaW5jbHVkZSByZXNwb25kKHRhYi1wb3J0KSB7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIH1cXG4gICAgLy8gICBAaW5jbHVkZSByZXNwb25kKHBob25lKSB7XFxuICAgIC8vICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbm1heChtaW4tY29udGVudCwgMzByZW0pO1xcbiAgICAvLyAgIH1cXG4gICAgLy8gICBAaW5jbHVkZSByZXNwb25kKHNtLXBob25lKSB7XFxuICAgIC8vICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbm1heChtaW4tY29udGVudCwgMTYuNXJlbSk7XFxuICAgIC8vICAgfVxcblxcbiAgICAuaW1hZ2VXcmFwcGVyIHtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAvLyBwYWRkaW5nLWJvdHRvbTogNjIuNSU7XFxuICAgICAgZ3JpZC1yb3c6IDEgLyAtMTtcXG4gICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7XFxuICAgICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICAgIC5pbWFnZSB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAvLyBtYXgtd2lkdGg6IDY1LjRyZW07XFxuICAgICAgICAvLyAgIG1heC1oZWlnaHQ6IDQwLjg3NXJlbTtcXG4gICAgICAgIC8vICAgd2lkdGg6IGF1dG87XFxuICAgICAgICAvLyBoZWlnaHQ6IGF1dG87XFxuICAgICAgICAvLyAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZXJlZDtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG4gICAgICAgIC8vIGhlaWdodDogMTAwJTtcXG4gICAgICAgIC8vIHdpZHRoOiA0MDBweDtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA2Mi41JTtcXG4gICAgICAgIC8vIGhlaWdodDogNDAwcHg7XFxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7XFxuXFxuICAgICAgICBAaW5jbHVkZSByZXNwb25kKHRhYi1wb3J0KSB7XFxuICAgICAgICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuaW1hZ2VJbm5lciB7XFxuICAgICAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3RUZXh0Q29sdW1uIHtcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIG1pbi1jb250ZW50KTtcXG4gICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgIGdyaWQtZ2FwOiAxcmVtO1xcbiAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICAgIGhlaWdodDogMTAwJTtcXG5cXG4gICAgICAudGl0bGUge1xcbiAgICAgICAgZ3JpZC1yb3c6IDEgLyAxO1xcbiAgICAgICAgZm9udC1zaXplOiAzLjRyZW07XFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgICAgICAvLyBtYXJnaW4tYm90dG9tOiAtNXB4O1xcbiAgICAgIH1cXG4gICAgICAuc3VtbWFyeSB7XFxuICAgICAgICBncmlkLXJvdzogMiAvIDI7XFxuICAgICAgICBtYXJnaW46IC01cHggMCAwIDA7XFxuICAgICAgfVxcbiAgICAgIC50b29scyB7XFxuICAgICAgICBncmlkLXJvdzogMyAvIDM7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCA3MCU7XFxuICAgICAgICBncmlkLWdhcDogMnJlbTtcXG5cXG4gICAgICAgIC5saW5rTGFiZWwge1xcbiAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAubGlua3Mge1xcbiAgICAgICAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtYXgtY29udGVudCk7XFxuICAgICAgICAgIGdyaWQtZ2FwOiAxcmVtO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmOmhvdmVyIC5pbWFnZSB7XFxuICAgICAgYm94LXNoYWRvdzogMCAwIDhweCAxcHggcmdiYSgkY29sb3JCYXNlR3JheURhcmssIDAuOCk7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5wcm9qZWN0RmxpcHBlZCB7XFxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZXJlZDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcbiAgICAgIHRvIGJvdHRvbSBsZWZ0LFxcbiAgICAgIHJnYmEoJGNvbG9yQmFzZUdyYXlEYXJrZXIsIDEpIDAsXFxuICAgICAgcmdiYSgkY29sb3JCYXNlR3JheUxpZ2h0LCAxKSAyNyUsXFxuICAgICAgcmdiYSgkY29sb3JCYXNlR3JheUxpZ2h0ZXIsIDEpIDEwMCVcXG4gICAgKTtcXG5cXG4gICAgLmltYWdlV3JhcHBlciB7XFxuICAgICAgZ3JpZC1jb2x1bW46IDIgLyAtMTtcXG5cXG4gICAgICBAaW5jbHVkZSByZXNwb25kKHRhYi1wb3J0KSB7XFxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJwcm9qZWN0V3JhcHBlclwiOiBcIlByb2plY3RfcHJvamVjdFdyYXBwZXJfXzJ5aUoxXCIsXG5cdFwicHJvamVjdFwiOiBcIlByb2plY3RfcHJvamVjdF9fMWlqbEFcIixcblx0XCJpbWFnZVdyYXBwZXJcIjogXCJQcm9qZWN0X2ltYWdlV3JhcHBlcl9fMTQ4TDJcIixcblx0XCJpbWFnZVwiOiBcIlByb2plY3RfaW1hZ2VfX1lFWU54XCIsXG5cdFwicHJvamVjdFRleHRDb2x1bW5cIjogXCJQcm9qZWN0X3Byb2plY3RUZXh0Q29sdW1uX18yY3BWZVwiLFxuXHRcInRpdGxlXCI6IFwiUHJvamVjdF90aXRsZV9fWmNKNTFcIixcblx0XCJzdW1tYXJ5XCI6IFwiUHJvamVjdF9zdW1tYXJ5X18xRWt3aFwiLFxuXHRcInRvb2xzXCI6IFwiUHJvamVjdF90b29sc19fM2lndjBcIixcblx0XCJsaW5rTGFiZWxcIjogXCJQcm9qZWN0X2xpbmtMYWJlbF9fM2hDVWdcIixcblx0XCJsaW5rc1wiOiBcIlByb2plY3RfbGlua3NfXzI5VmdSXCIsXG5cdFwicHJvamVjdEZsaXBwZWRcIjogXCJQcm9qZWN0X3Byb2plY3RGbGlwcGVkX18ySjR5RFwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/Projects/Project.module.scss\n");

/***/ })

})