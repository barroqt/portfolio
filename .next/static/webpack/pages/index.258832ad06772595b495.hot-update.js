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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projects\": function() { return /* binding */ projects; },\n/* harmony export */   \"TimeLineData\": function() { return /* binding */ TimeLineData; }\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar projects = [{\n  title: 'DBS Marketplace',\n  description: \"Built an Extract Transform Load back end architecture from scratch for the Digital Bank of Singapore's marketplace. We needed to fetch big volumes of data from third parties APIs and serialize them before storing them. The middleware would then get the formatted data and cache it preemptively.\",\n  image: '/images/dbsmarketplace.png',\n  tags: ['AWS', 'DynamoDB', 'Node.js', 'Serverless', 'Redis'],\n  source: 'https://www.dbs.com.sg/personal/marketplace/',\n  id: 0\n}, {\n  title: 'NTUC Income portal',\n  description: \"Worked as a full-stack developer on the insurance portal of NTUC Income. I was in charge of handling the customer data transiting through the Node.js middleware, maintaining and testing the code. I was also sometimes building or improving the application's react components.\",\n  image: '/images/ntucincome.png',\n  tags: ['React', 'TypeScript', 'Node.js'],\n  source: 'https://www.income.com.sg/life-insurance/luv',\n  id: 1\n}, {\n  title: 'Esens',\n  description: \"Aside from being a consulting company, Esens has a research lab in which they build innovative projects for either business or learning purposes. I worked on an AI project in which I would train a neural network to recognize images from satellite maps fed via a web application.\",\n  image: '/images/esens.png',\n  tags: ['React', 'WebRTC'],\n  source: 'https://www.esensconsulting.com/le-lab',\n  id: 2\n}, {\n  title: 'Wild Palms Digital',\n  description: \"I was the first developer hired by wild palms digital, previously hiring consultants to build their applications. I set up the internal continuous integration pipeline. I also fixed and maintained two web applications after three weeks handover from the previous developers. I was in charge of onboarding the new developers coming to the company.\",\n  image: '/images/wildpalms.png',\n  tags: ['React', 'ChatEngine', 'Firebase'],\n  source: 'https://wildpalms.com.au/',\n  id: 3\n}, {\n  title: 'Mediarithmics',\n  description: \"Worked on the enhancement of mediarithmics, a Data Marketing Platform as Node.js developer. Developed and maintained REST APIs to process the customer's marketing campaign. Every now customer would require a specific endpoint.\",\n  image: '/images/mediarithmics.png',\n  tags: ['Node.js', 'Express.js'],\n  source: 'https://www.mediarithmics.com/',\n  id: 4\n}, {\n  title: 'Jobteaser',\n  description: \"Worked on improving the application posting and fetching job offers using Ruby on Rails for Jobteaser, a career platform. I also worked on the automation of the development workflow by running cron jobs and using software's (JIRA, GitHub, Slack and Toggl) APIs and webhooks.\",\n  image: '/images/jobteaser.png',\n  tags: ['Ruby', 'Ruby on Rails'],\n  source: 'https://www.jobteaser.com/en',\n  id: 5\n}];\nvar TimeLineData = [{\n  year: 2017,\n  text: 'Started my journey'\n}, {\n  year: 2018,\n  text: 'Worked as a freelance developer'\n}, {\n  year: 2019,\n  text: 'Founded JavaScript Mastery'\n}, {\n  year: 2020,\n  text: 'Shared my projects with the world'\n}, {\n  year: 2021,\n  text: 'Started my own platform'\n}];\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanM/ZTZmZCJdLCJuYW1lcyI6WyJwcm9qZWN0cyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsInRhZ3MiLCJzb3VyY2UiLCJpZCIsIlRpbWVMaW5lRGF0YSIsInllYXIiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTyxJQUFNQSxRQUFRLEdBQUcsQ0FDdEI7QUFDRUMsT0FBSyxFQUFFLGlCQURUO0FBRUVDLGFBQVcsRUFBRSx3U0FGZjtBQUdJQyxPQUFLLEVBQUUsNEJBSFg7QUFJSUMsTUFBSSxFQUFFLENBQUMsS0FBRCxFQUFRLFVBQVIsRUFBb0IsU0FBcEIsRUFBK0IsWUFBL0IsRUFBNkMsT0FBN0MsQ0FKVjtBQUtFQyxRQUFNLEVBQUUsOENBTFY7QUFNRUMsSUFBRSxFQUFFO0FBTk4sQ0FEc0IsRUFTdEI7QUFDRUwsT0FBSyxFQUFFLG9CQURUO0FBRUVDLGFBQVcsRUFBQyxvUkFGZDtBQUdFQyxPQUFLLEVBQUUsd0JBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLFlBQVYsRUFBd0IsU0FBeEIsQ0FKUjtBQUtFQyxRQUFNLEVBQUUsOENBTFY7QUFNRUMsSUFBRSxFQUFFO0FBTk4sQ0FUc0IsRUFpQnRCO0FBQ0VMLE9BQUssRUFBRSxPQURUO0FBRUVDLGFBQVcsRUFBRSx3UkFGZjtBQUdJQyxPQUFLLEVBQUUsbUJBSFg7QUFJSUMsTUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLFFBQVYsQ0FKVjtBQUtFQyxRQUFNLEVBQUUsd0NBTFY7QUFNRUMsSUFBRSxFQUFFO0FBTk4sQ0FqQnNCLEVBeUJ0QjtBQUNFTCxPQUFLLEVBQUUsb0JBRFQ7QUFFRUMsYUFBVyxFQUFFLDRWQUZmO0FBR0VDLE9BQUssRUFBRSx1QkFIVDtBQUlFQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsWUFBVixFQUF3QixVQUF4QixDQUpSO0FBS0VDLFFBQU0sRUFBRSwyQkFMVjtBQU1FQyxJQUFFLEVBQUU7QUFOTixDQXpCc0IsRUFpQ3RCO0FBQ0VMLE9BQUssRUFBRSxlQURUO0FBRUVDLGFBQVcsRUFBRSxvT0FGZjtBQUdJQyxPQUFLLEVBQUUsMkJBSFg7QUFJSUMsTUFBSSxFQUFFLENBQUMsU0FBRCxFQUFZLFlBQVosQ0FKVjtBQUtFQyxRQUFNLEVBQUUsZ0NBTFY7QUFNRUMsSUFBRSxFQUFFO0FBTk4sQ0FqQ3NCLEVBeUN0QjtBQUNFTCxPQUFLLEVBQUUsV0FEVDtBQUVFQyxhQUFXLEVBQUUsb1JBRmY7QUFHRUMsT0FBSyxFQUFFLHVCQUhUO0FBSUVDLE1BQUksRUFBRSxDQUFDLE1BQUQsRUFBUyxlQUFULENBSlI7QUFLRUMsUUFBTSxFQUFFLDhCQUxWO0FBTUVDLElBQUUsRUFBRTtBQU5OLENBekNzQixDQUFqQjtBQW1EQSxJQUFNQyxZQUFZLEdBQUcsQ0FDMUI7QUFBRUMsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBRDBCLEVBRTFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUYwQixFQUcxQjtBQUFFRCxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FIMEIsRUFJMUI7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBSjBCLEVBSzFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUwwQixDQUFyQiIsImZpbGUiOiIuL3NyYy9jb25zdGFudHMvY29uc3RhbnRzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHByb2plY3RzID0gW1xuICB7XG4gICAgdGl0bGU6ICdEQlMgTWFya2V0cGxhY2UnLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJ1aWx0IGFuIEV4dHJhY3QgVHJhbnNmb3JtIExvYWQgYmFjayBlbmQgYXJjaGl0ZWN0dXJlIGZyb20gc2NyYXRjaCBmb3IgdGhlIERpZ2l0YWwgQmFuayBvZiBTaW5nYXBvcmUncyBtYXJrZXRwbGFjZS4gV2UgbmVlZGVkIHRvIGZldGNoIGJpZyB2b2x1bWVzIG9mIGRhdGEgZnJvbSB0aGlyZCBwYXJ0aWVzIEFQSXMgYW5kIHNlcmlhbGl6ZSB0aGVtIGJlZm9yZSBzdG9yaW5nIHRoZW0uIFRoZSBtaWRkbGV3YXJlIHdvdWxkIHRoZW4gZ2V0IHRoZSBmb3JtYXR0ZWQgZGF0YSBhbmQgY2FjaGUgaXQgcHJlZW1wdGl2ZWx5LlwiLFxuICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2Ric21hcmtldHBsYWNlLnBuZycsXG4gICAgICB0YWdzOiBbJ0FXUycsICdEeW5hbW9EQicsICdOb2RlLmpzJywgJ1NlcnZlcmxlc3MnLCAnUmVkaXMnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL3d3dy5kYnMuY29tLnNnL3BlcnNvbmFsL21hcmtldHBsYWNlLycsXG4gICAgaWQ6IDAsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ05UVUMgSW5jb21lIHBvcnRhbCcsXG4gICAgZGVzY3JpcHRpb246XCJXb3JrZWQgYXMgYSBmdWxsLXN0YWNrIGRldmVsb3BlciBvbiB0aGUgaW5zdXJhbmNlIHBvcnRhbCBvZiBOVFVDIEluY29tZS4gSSB3YXMgaW4gY2hhcmdlIG9mIGhhbmRsaW5nIHRoZSBjdXN0b21lciBkYXRhIHRyYW5zaXRpbmcgdGhyb3VnaCB0aGUgTm9kZS5qcyBtaWRkbGV3YXJlLCBtYWludGFpbmluZyBhbmQgdGVzdGluZyB0aGUgY29kZS4gSSB3YXMgYWxzbyBzb21ldGltZXMgYnVpbGRpbmcgb3IgaW1wcm92aW5nIHRoZSBhcHBsaWNhdGlvbidzIHJlYWN0IGNvbXBvbmVudHMuXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL250dWNpbmNvbWUucG5nJyxcbiAgICB0YWdzOiBbJ1JlYWN0JywgJ1R5cGVTY3JpcHQnLCAnTm9kZS5qcyddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vd3d3LmluY29tZS5jb20uc2cvbGlmZS1pbnN1cmFuY2UvbHV2JyxcbiAgICBpZDogMSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnRXNlbnMnLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFzaWRlIGZyb20gYmVpbmcgYSBjb25zdWx0aW5nIGNvbXBhbnksIEVzZW5zIGhhcyBhIHJlc2VhcmNoIGxhYiBpbiB3aGljaCB0aGV5IGJ1aWxkIGlubm92YXRpdmUgcHJvamVjdHMgZm9yIGVpdGhlciBidXNpbmVzcyBvciBsZWFybmluZyBwdXJwb3Nlcy4gSSB3b3JrZWQgb24gYW4gQUkgcHJvamVjdCBpbiB3aGljaCBJIHdvdWxkIHRyYWluIGEgbmV1cmFsIG5ldHdvcmsgdG8gcmVjb2duaXplIGltYWdlcyBmcm9tIHNhdGVsbGl0ZSBtYXBzIGZlZCB2aWEgYSB3ZWIgYXBwbGljYXRpb24uXCIsXG4gICAgICBpbWFnZTogJy9pbWFnZXMvZXNlbnMucG5nJyxcbiAgICAgIHRhZ3M6IFsnUmVhY3QnLCAnV2ViUlRDJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly93d3cuZXNlbnNjb25zdWx0aW5nLmNvbS9sZS1sYWInLFxuICAgIGlkOiAyLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdXaWxkIFBhbG1zIERpZ2l0YWwnLFxuICAgIGRlc2NyaXB0aW9uOiBcIkkgd2FzIHRoZSBmaXJzdCBkZXZlbG9wZXIgaGlyZWQgYnkgd2lsZCBwYWxtcyBkaWdpdGFsLCBwcmV2aW91c2x5IGhpcmluZyBjb25zdWx0YW50cyB0byBidWlsZCB0aGVpciBhcHBsaWNhdGlvbnMuIEkgc2V0IHVwIHRoZSBpbnRlcm5hbCBjb250aW51b3VzIGludGVncmF0aW9uIHBpcGVsaW5lLiBJIGFsc28gZml4ZWQgYW5kIG1haW50YWluZWQgdHdvIHdlYiBhcHBsaWNhdGlvbnMgYWZ0ZXIgdGhyZWUgd2Vla3MgaGFuZG92ZXIgZnJvbSB0aGUgcHJldmlvdXMgZGV2ZWxvcGVycy4gSSB3YXMgaW4gY2hhcmdlIG9mIG9uYm9hcmRpbmcgdGhlIG5ldyBkZXZlbG9wZXJzIGNvbWluZyB0byB0aGUgY29tcGFueS5cIixcbiAgICBpbWFnZTogJy9pbWFnZXMvd2lsZHBhbG1zLnBuZycsXG4gICAgdGFnczogWydSZWFjdCcsICdDaGF0RW5naW5lJywgJ0ZpcmViYXNlJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly93aWxkcGFsbXMuY29tLmF1LycsXG4gICAgaWQ6IDMsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ01lZGlhcml0aG1pY3MnLFxuICAgIGRlc2NyaXB0aW9uOiBcIldvcmtlZCBvbiB0aGUgZW5oYW5jZW1lbnQgb2YgbWVkaWFyaXRobWljcywgYSBEYXRhIE1hcmtldGluZyBQbGF0Zm9ybSBhcyBOb2RlLmpzIGRldmVsb3Blci4gRGV2ZWxvcGVkIGFuZCBtYWludGFpbmVkIFJFU1QgQVBJcyB0byBwcm9jZXNzIHRoZSBjdXN0b21lcidzIG1hcmtldGluZyBjYW1wYWlnbi4gRXZlcnkgbm93IGN1c3RvbWVyIHdvdWxkIHJlcXVpcmUgYSBzcGVjaWZpYyBlbmRwb2ludC5cIixcbiAgICAgIGltYWdlOiAnL2ltYWdlcy9tZWRpYXJpdGhtaWNzLnBuZycsXG4gICAgICB0YWdzOiBbJ05vZGUuanMnLCAnRXhwcmVzcy5qcyddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vd3d3Lm1lZGlhcml0aG1pY3MuY29tLycsXG4gICAgaWQ6IDQsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0pvYnRlYXNlcicsXG4gICAgZGVzY3JpcHRpb246IFwiV29ya2VkIG9uIGltcHJvdmluZyB0aGUgYXBwbGljYXRpb24gcG9zdGluZyBhbmQgZmV0Y2hpbmcgam9iIG9mZmVycyB1c2luZyBSdWJ5IG9uIFJhaWxzIGZvciBKb2J0ZWFzZXIsIGEgY2FyZWVyIHBsYXRmb3JtLiBJIGFsc28gd29ya2VkIG9uIHRoZSBhdXRvbWF0aW9uIG9mIHRoZSBkZXZlbG9wbWVudCB3b3JrZmxvdyBieSBydW5uaW5nIGNyb24gam9icyBhbmQgdXNpbmcgc29mdHdhcmUncyAoSklSQSwgR2l0SHViLCBTbGFjayBhbmQgVG9nZ2wpIEFQSXMgYW5kIHdlYmhvb2tzLlwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy9qb2J0ZWFzZXIucG5nJyxcbiAgICB0YWdzOiBbJ1J1YnknLCAnUnVieSBvbiBSYWlscyddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vd3d3LmpvYnRlYXNlci5jb20vZW4nLFxuICAgIGlkOiA1LFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IFRpbWVMaW5lRGF0YSA9IFtcbiAgeyB5ZWFyOiAyMDE3LCB0ZXh0OiAnU3RhcnRlZCBteSBqb3VybmV5JywgfSxcbiAgeyB5ZWFyOiAyMDE4LCB0ZXh0OiAnV29ya2VkIGFzIGEgZnJlZWxhbmNlIGRldmVsb3BlcicsIH0sXG4gIHsgeWVhcjogMjAxOSwgdGV4dDogJ0ZvdW5kZWQgSmF2YVNjcmlwdCBNYXN0ZXJ5JywgfSxcbiAgeyB5ZWFyOiAyMDIwLCB0ZXh0OiAnU2hhcmVkIG15IHByb2plY3RzIHdpdGggdGhlIHdvcmxkJywgfSxcbiAgeyB5ZWFyOiAyMDIxLCB0ZXh0OiAnU3RhcnRlZCBteSBvd24gcGxhdGZvcm0nLCB9LFxuXTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/constants/constants.js\n");

/***/ })

});