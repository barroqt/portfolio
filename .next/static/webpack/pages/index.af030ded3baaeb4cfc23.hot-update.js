/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projects\": function() { return /* binding */ projects; },\n/* harmony export */   \"TimeLineData\": function() { return /* binding */ TimeLineData; }\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar projects = [{\n  title: 'DBS Marketplace',\n  description: \"Built an Extract Transform Load back end architecture from scratch for the Digital Bank of Singapore's marketplace. We needed to fetch big volumes of data from third parties APIs and serialize them before storing them. The middleware would then get the formatted data and cache it preemptively.\",\n  image: '/images/dbsmarketplace.png',\n  tags: ['AWS', 'DynamoDB', 'Node.js', 'Serverless', 'Redis'],\n  source: 'https://www.dbs.com.sg/personal/marketplace/',\n  id: 0\n}, {\n  title: 'NTUC Income portal',\n  description: \"Worked as a full-stack developer on the insurance portal of NTUC Income. I was in charge of handling the customer data transiting through the Node.js middleware, maintaining and testing the code. I was also sometimes building or improving the application's react components.\",\n  image: '/images/ntucincome.png',\n  tags: ['React', 'TypeScript', 'Node.js'],\n  source: 'https://www.income.com.sg/life-insurance/luv',\n  id: 1\n}, {\n  title: 'Esens',\n  description: \"This is a code repository for the corresponding YouTube video. In this tutorial, we're going to build and deploy a React Video Chat Application using WebRTC.\",\n  image: '/images/esens.png',\n  tags: ['React', 'WebRTC'],\n  source: 'https://www.esensconsulting.com/le-lab',\n  id: 2\n}, {\n  title: 'Wild Palms Digital',\n  description: \"I was the first developer hired by wild palms digital, previously hiring consultants to build their applications. I set up the internal continuous integration pipeline. Maintained and build two web applications after three weeks handover from the previous developers. I was in charge of onboarding the new developers coming to the company.\",\n  image: '/images/wildpalms.png',\n  tags: ['React', 'ChatEngine', 'Firebase'],\n  source: 'https://wildpalms.com.au/',\n  id: 3\n}, {\n  title: 'Mediarithmics',\n  description: \"Worked on the enhancement of mediarithmics, a Data Marketing Platform as Node.js developer. Developed and maintained REST APIs to process the customer's marketing campaign. Every now customer would require a specific endpoint.\",\n  image: '/images/mediarithmics.png',\n  tags: ['Node.js', 'Express.js'],\n  source: 'https://www.mediarithmics.com/',\n  id: 4\n}, {\n  title: 'Jobteaser',\n  description: \"Worked on improving the application posting and fetching job offers using Ruby on Rails for Jobteaser, a career platform. I also worked on the automation of the development workflow by running cron jobs and using software's (JIRA, GitHub, Slack and Toggl) APIs and webhooks.\",\n  image: '/images/jobteaser.png',\n  tags: ['Ruby', 'Ruby on Rails'],\n  source: 'https://www.jobteaser.com/en',\n  id: 5\n}];\nvar TimeLineData = [{\n  year: 2017,\n  text: 'Started my journey'\n}, {\n  year: 2018,\n  text: 'Worked as a freelance developer'\n}, {\n  year: 2019,\n  text: 'Founded JavaScript Mastery'\n}, {\n  year: 2020,\n  text: 'Shared my projects with the world'\n}, {\n  year: 2021,\n  text: 'Started my own platform'\n}];\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanM/ZTZmZCJdLCJuYW1lcyI6WyJwcm9qZWN0cyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsInRhZ3MiLCJzb3VyY2UiLCJpZCIsIlRpbWVMaW5lRGF0YSIsInllYXIiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTyxJQUFNQSxRQUFRLEdBQUcsQ0FDdEI7QUFDRUMsT0FBSyxFQUFFLGlCQURUO0FBRUVDLGFBQVcsRUFBRSx3U0FGZjtBQUdJQyxPQUFLLEVBQUUsNEJBSFg7QUFJSUMsTUFBSSxFQUFFLENBQUMsS0FBRCxFQUFRLFVBQVIsRUFBb0IsU0FBcEIsRUFBK0IsWUFBL0IsRUFBNkMsT0FBN0MsQ0FKVjtBQUtFQyxRQUFNLEVBQUUsOENBTFY7QUFNRUMsSUFBRSxFQUFFO0FBTk4sQ0FEc0IsRUFTdEI7QUFDRUwsT0FBSyxFQUFFLG9CQURUO0FBRUVDLGFBQVcsRUFBQyxvUkFGZDtBQUdFQyxPQUFLLEVBQUUsd0JBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLFlBQVYsRUFBd0IsU0FBeEIsQ0FKUjtBQUtFQyxRQUFNLEVBQUUsOENBTFY7QUFNRUMsSUFBRSxFQUFFO0FBTk4sQ0FUc0IsRUFpQnRCO0FBQ0VMLE9BQUssRUFBRSxPQURUO0FBRUVDLGFBQVcsRUFBRSwrSkFGZjtBQUdJQyxPQUFLLEVBQUUsbUJBSFg7QUFJSUMsTUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLFFBQVYsQ0FKVjtBQUtFQyxRQUFNLEVBQUUsd0NBTFY7QUFNRUMsSUFBRSxFQUFFO0FBTk4sQ0FqQnNCLEVBeUJ0QjtBQUNFTCxPQUFLLEVBQUUsb0JBRFQ7QUFFRUMsYUFBVyxFQUFFLHFWQUZmO0FBR0VDLE9BQUssRUFBRSx1QkFIVDtBQUlFQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsWUFBVixFQUF3QixVQUF4QixDQUpSO0FBS0VDLFFBQU0sRUFBRSwyQkFMVjtBQU1FQyxJQUFFLEVBQUU7QUFOTixDQXpCc0IsRUFpQ3RCO0FBQ0VMLE9BQUssRUFBRSxlQURUO0FBRUVDLGFBQVcsRUFBRSxvT0FGZjtBQUdJQyxPQUFLLEVBQUUsMkJBSFg7QUFJSUMsTUFBSSxFQUFFLENBQUMsU0FBRCxFQUFZLFlBQVosQ0FKVjtBQUtFQyxRQUFNLEVBQUUsZ0NBTFY7QUFNRUMsSUFBRSxFQUFFO0FBTk4sQ0FqQ3NCLEVBeUN0QjtBQUNFTCxPQUFLLEVBQUUsV0FEVDtBQUVFQyxhQUFXLEVBQUUsb1JBRmY7QUFHRUMsT0FBSyxFQUFFLHVCQUhUO0FBSUVDLE1BQUksRUFBRSxDQUFDLE1BQUQsRUFBUyxlQUFULENBSlI7QUFLRUMsUUFBTSxFQUFFLDhCQUxWO0FBTUVDLElBQUUsRUFBRTtBQU5OLENBekNzQixDQUFqQjtBQW1EQSxJQUFNQyxZQUFZLEdBQUcsQ0FDMUI7QUFBRUMsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBRDBCLEVBRTFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUYwQixFQUcxQjtBQUFFRCxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FIMEIsRUFJMUI7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBSjBCLEVBSzFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUwwQixDQUFyQiIsImZpbGUiOiIuL3NyYy9jb25zdGFudHMvY29uc3RhbnRzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHByb2plY3RzID0gW1xuICB7XG4gICAgdGl0bGU6ICdEQlMgTWFya2V0cGxhY2UnLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJ1aWx0IGFuIEV4dHJhY3QgVHJhbnNmb3JtIExvYWQgYmFjayBlbmQgYXJjaGl0ZWN0dXJlIGZyb20gc2NyYXRjaCBmb3IgdGhlIERpZ2l0YWwgQmFuayBvZiBTaW5nYXBvcmUncyBtYXJrZXRwbGFjZS4gV2UgbmVlZGVkIHRvIGZldGNoIGJpZyB2b2x1bWVzIG9mIGRhdGEgZnJvbSB0aGlyZCBwYXJ0aWVzIEFQSXMgYW5kIHNlcmlhbGl6ZSB0aGVtIGJlZm9yZSBzdG9yaW5nIHRoZW0uIFRoZSBtaWRkbGV3YXJlIHdvdWxkIHRoZW4gZ2V0IHRoZSBmb3JtYXR0ZWQgZGF0YSBhbmQgY2FjaGUgaXQgcHJlZW1wdGl2ZWx5LlwiLFxuICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2Ric21hcmtldHBsYWNlLnBuZycsXG4gICAgICB0YWdzOiBbJ0FXUycsICdEeW5hbW9EQicsICdOb2RlLmpzJywgJ1NlcnZlcmxlc3MnLCAnUmVkaXMnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL3d3dy5kYnMuY29tLnNnL3BlcnNvbmFsL21hcmtldHBsYWNlLycsXG4gICAgaWQ6IDAsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ05UVUMgSW5jb21lIHBvcnRhbCcsXG4gICAgZGVzY3JpcHRpb246XCJXb3JrZWQgYXMgYSBmdWxsLXN0YWNrIGRldmVsb3BlciBvbiB0aGUgaW5zdXJhbmNlIHBvcnRhbCBvZiBOVFVDIEluY29tZS4gSSB3YXMgaW4gY2hhcmdlIG9mIGhhbmRsaW5nIHRoZSBjdXN0b21lciBkYXRhIHRyYW5zaXRpbmcgdGhyb3VnaCB0aGUgTm9kZS5qcyBtaWRkbGV3YXJlLCBtYWludGFpbmluZyBhbmQgdGVzdGluZyB0aGUgY29kZS4gSSB3YXMgYWxzbyBzb21ldGltZXMgYnVpbGRpbmcgb3IgaW1wcm92aW5nIHRoZSBhcHBsaWNhdGlvbidzIHJlYWN0IGNvbXBvbmVudHMuXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL250dWNpbmNvbWUucG5nJyxcbiAgICB0YWdzOiBbJ1JlYWN0JywgJ1R5cGVTY3JpcHQnLCAnTm9kZS5qcyddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vd3d3LmluY29tZS5jb20uc2cvbGlmZS1pbnN1cmFuY2UvbHV2JyxcbiAgICBpZDogMSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnRXNlbnMnLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBjb2RlIHJlcG9zaXRvcnkgZm9yIHRoZSBjb3JyZXNwb25kaW5nIFlvdVR1YmUgdmlkZW8uIEluIHRoaXMgdHV0b3JpYWwsIHdlJ3JlIGdvaW5nIHRvIGJ1aWxkIGFuZCBkZXBsb3kgYSBSZWFjdCBWaWRlbyBDaGF0IEFwcGxpY2F0aW9uIHVzaW5nIFdlYlJUQy5cIixcbiAgICAgIGltYWdlOiAnL2ltYWdlcy9lc2Vucy5wbmcnLFxuICAgICAgdGFnczogWydSZWFjdCcsICdXZWJSVEMnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL3d3dy5lc2Vuc2NvbnN1bHRpbmcuY29tL2xlLWxhYicsXG4gICAgaWQ6IDIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1dpbGQgUGFsbXMgRGlnaXRhbCcsXG4gICAgZGVzY3JpcHRpb246IFwiSSB3YXMgdGhlIGZpcnN0IGRldmVsb3BlciBoaXJlZCBieSB3aWxkIHBhbG1zIGRpZ2l0YWwsIHByZXZpb3VzbHkgaGlyaW5nIGNvbnN1bHRhbnRzIHRvIGJ1aWxkIHRoZWlyIGFwcGxpY2F0aW9ucy4gSSBzZXQgdXAgdGhlIGludGVybmFsIGNvbnRpbnVvdXMgaW50ZWdyYXRpb24gcGlwZWxpbmUuIE1haW50YWluZWQgYW5kIGJ1aWxkIHR3byB3ZWIgYXBwbGljYXRpb25zIGFmdGVyIHRocmVlIHdlZWtzIGhhbmRvdmVyIGZyb20gdGhlIHByZXZpb3VzIGRldmVsb3BlcnMuIEkgd2FzIGluIGNoYXJnZSBvZiBvbmJvYXJkaW5nIHRoZSBuZXcgZGV2ZWxvcGVycyBjb21pbmcgdG8gdGhlIGNvbXBhbnkuXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL3dpbGRwYWxtcy5wbmcnLFxuICAgIHRhZ3M6IFsnUmVhY3QnLCAnQ2hhdEVuZ2luZScsICdGaXJlYmFzZSddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vd2lsZHBhbG1zLmNvbS5hdS8nLFxuICAgIGlkOiAzLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdNZWRpYXJpdGhtaWNzJyxcbiAgICBkZXNjcmlwdGlvbjogXCJXb3JrZWQgb24gdGhlIGVuaGFuY2VtZW50IG9mIG1lZGlhcml0aG1pY3MsIGEgRGF0YSBNYXJrZXRpbmcgUGxhdGZvcm0gYXMgTm9kZS5qcyBkZXZlbG9wZXIuIERldmVsb3BlZCBhbmQgbWFpbnRhaW5lZCBSRVNUIEFQSXMgdG8gcHJvY2VzcyB0aGUgY3VzdG9tZXIncyBtYXJrZXRpbmcgY2FtcGFpZ24uIEV2ZXJ5IG5vdyBjdXN0b21lciB3b3VsZCByZXF1aXJlIGEgc3BlY2lmaWMgZW5kcG9pbnQuXCIsXG4gICAgICBpbWFnZTogJy9pbWFnZXMvbWVkaWFyaXRobWljcy5wbmcnLFxuICAgICAgdGFnczogWydOb2RlLmpzJywgJ0V4cHJlc3MuanMnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL3d3dy5tZWRpYXJpdGhtaWNzLmNvbS8nLFxuICAgIGlkOiA0LFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdKb2J0ZWFzZXInLFxuICAgIGRlc2NyaXB0aW9uOiBcIldvcmtlZCBvbiBpbXByb3ZpbmcgdGhlIGFwcGxpY2F0aW9uIHBvc3RpbmcgYW5kIGZldGNoaW5nIGpvYiBvZmZlcnMgdXNpbmcgUnVieSBvbiBSYWlscyBmb3IgSm9idGVhc2VyLCBhIGNhcmVlciBwbGF0Zm9ybS4gSSBhbHNvIHdvcmtlZCBvbiB0aGUgYXV0b21hdGlvbiBvZiB0aGUgZGV2ZWxvcG1lbnQgd29ya2Zsb3cgYnkgcnVubmluZyBjcm9uIGpvYnMgYW5kIHVzaW5nIHNvZnR3YXJlJ3MgKEpJUkEsIEdpdEh1YiwgU2xhY2sgYW5kIFRvZ2dsKSBBUElzIGFuZCB3ZWJob29rcy5cIixcbiAgICBpbWFnZTogJy9pbWFnZXMvam9idGVhc2VyLnBuZycsXG4gICAgdGFnczogWydSdWJ5JywgJ1J1Ynkgb24gUmFpbHMnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL3d3dy5qb2J0ZWFzZXIuY29tL2VuJyxcbiAgICBpZDogNSxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBUaW1lTGluZURhdGEgPSBbXG4gIHsgeWVhcjogMjAxNywgdGV4dDogJ1N0YXJ0ZWQgbXkgam91cm5leScsIH0sXG4gIHsgeWVhcjogMjAxOCwgdGV4dDogJ1dvcmtlZCBhcyBhIGZyZWVsYW5jZSBkZXZlbG9wZXInLCB9LFxuICB7IHllYXI6IDIwMTksIHRleHQ6ICdGb3VuZGVkIEphdmFTY3JpcHQgTWFzdGVyeScsIH0sXG4gIHsgeWVhcjogMjAyMCwgdGV4dDogJ1NoYXJlZCBteSBwcm9qZWN0cyB3aXRoIHRoZSB3b3JsZCcsIH0sXG4gIHsgeWVhcjogMjAyMSwgdGV4dDogJ1N0YXJ0ZWQgbXkgb3duIHBsYXRmb3JtJywgfSxcbl07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/constants/constants.js\n");

/***/ })

});