// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


// Cypress.Commands.add('mockArticlesRequest', () => {
//     Cypress.once('window:before:load', window => {
//       const script = window.document.createElement('script');
//       script.onload = function() {
//         window.xhook.after((request, response) => {
//           const { method, url, body } = request;
//           if (
//             method === 'POST' &&
//             (url.endsWith('/articles'))
//           ) {
//             const articlesResponses = require('../fixtures/responses.json');
//             const parsedBody = JSON.parse(body);
//             const newResponse = articlesResponses.find(({ matches }) =>
//               Object.keys(matches).every(
//                 key =>
//                   JSON.stringify(parsedBody[key]) === JSON.stringify(matches[key])
//               )
//             );
//             if (!newResponse) {
//               return;
//             }
//             response.data = JSON.stringify(newResponse.response);
//             response.text = JSON.stringify(newResponse.response);
//           }
//         });
//       };
//       script.src = '//unpkg.com/xhook@latest/dist/xhook.min.js';
//       script.id = 'xhook';
//       window.document.head.appendChild(script);
//     });
//   });