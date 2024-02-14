/* eslint-disable no-undef */


describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001/' || 'http://localhost:3000/', { failOnStatusCode: false })
    cy.contains('Phonebook')
    cy.contains('Add a new name and number to the list:')
  })


  it("user can add the name and phone number of a person", () => {
    cy.contains("name:")
    cy.contains("number:")
    cy.wait(1000)
    cy.get("#name").type("Otto Puss")
    cy.get("#number").type("040-1234567")
    cy.get("#submit").click()
    cy.contains("Otto Puss")
   

  })

  it("user can delete the name and phone number of a person", () => {
    cy.contains("name:")
    cy.contains("number:")
    cy.contains("filter the name you are looking for here")

    cy.wait(1000)
    cy.get("#filter").type("Otto")
    cy.contains("Otto Puss")
    cy.contains("Delete")
    cy.get("#delete").click()

  })






})




// import "cypress-file-upload";

// describe("template spec", () => {
//   beforeEach(() => {
//     cy.visit("http://localhost:5173", { failOnStatusCode: false });
//   });

//   it.only("can access rent in your area", () => {
//     cy.contains("MODERN HOUSING SOLUTIONS");
//     cy.get("#rentInYourArea").click();
//   });
//   it("can access buy in your area", () => {
//     cy.get("#buyInYourArea").click();
//   });

//   it("user can log in with valid credentials and add a house for sale", () => {
//     cy.get("#navBar").should("be.visible");
//     cy.get("#authorizedArea").should("be.visible").click();
//     cy.get("#signInNow").click();
//     cy.get("#email").type("giuliperus@gmail.com");
//     cy.get("#password").type("password");
//     cy.get("#signInButton").click();
//     cy.get("#actionPage").should("be.visible");
//     cy.contains("choose your next step");
//     cy.contains("Sell a house").click();
//     cy.contains("add a property for sale to the listing");

//     cy.get("#title").type("house for sale");
//     cy.get("#description").type(
//       "house for sale with the best view in Helsinki"
//     );
//     cy.get("#price").type("1300000");
//     cy.get("#address")
//       .type("Vilhonvuorenkatu 11, 00500 Helsinki")
//       .wait(2000)
//       .type("{downarrow}")
//       .wait(2000)
//       .type("{enter}");

//     cy.fixture("pexels-belle-co-672916.jpg").then((fileContent) => {
//       cy.get("#imageUrl").attachFile({
//         fileContent: fileContent,
//         fileName: "pexels-belle-co-672916.jpg",
//         mimeType: "image/jpeg",
//       });
//     });

//     cy.get("#imageUploadButton").click();

//     cy.wait(10000);
//     cy.get("#year").type("2021");
//     cy.get("#bedrooms").type("1");
//     cy.get("#bathrooms").type("1").wait(2000);

//     cy.get("#status").click();
//     cy.get("#status").trigger("keydown", {
//       keyCode: 40,
//       which: 40,
//       force: true,
//     }); 
//     cy.get("#status").trigger("keydown", {
//       keyCode: 13,
//       which: 13,
//       force: true,
//     });

//     cy.get("#submit").click();

     
//   });
// });