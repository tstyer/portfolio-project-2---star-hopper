/** 
 * @jest-environment jsdom
 */

// ! NOTE: Notes in this file are also made for my learning, so they might be longer and more detailed than expected.

// 1: Tests Relating To The Music Toggle.

// First, import the function you are testing from the script.js file:
const { handleMusicToggle } = require("../script");

// Parent description of all Music Toggle tests
describe("Handle Music Toggle", () => {
    describe("on switch", () => {

        // Variables need to be described outside the beforeEach scope.
        let checkbox, audio;
            
            // Before each test... 
            beforeEach(() => {
                // Need to create mock checkbox and audio for this type of test
                checkbox = document.createElement("input");
                checkbox.type = "checkbox";

                audio = document.createElement("audio");
                audio.play = jest.fn();
                audio.pause = jest.fn();
            });

            // First test on music toggle

            test("plays music when checkbox is checked", () => {
            checkbox.checked = true;

            handleMusicToggle(checkbox, audio);

            expect(audio.play).toHaveBeenCalled();
            expect(audio.pause).not.toHaveBeenCalled();
            });
    });
});

// 2: Tests Relating To The Space Bug / Space Craft

const { createPlatform } = require("../script");

describe("Generate new platforms", () => {
  beforeEach(() => {
    // Mock the dom structure before each test, so the test runs smoothly. 
    document.body.innerHTML = `<div id="game-area"></div>`;
    global.gameArea = document.getElementById("game-area"); 
  });

  describe("New element named 'Platform' created", () => {
    test("The returned element should be a <div>", () => {
      const platform = createPlatform(100, 200);
      expect(platform).toBeInstanceOf(HTMLElement);
      expect(platform.tagName).toBe("DIV");
    });
  });
});


// Test 3: Using arrows to move the space bug

const { moveLeft } = require("../script");

describe("Space Bug moves when arrow keys pushed", () => {
  describe("Space Bug moves left on left key", () => {

    beforeEach(() => {
      document.body.innerHTML = 
      `<div class="space_bug" style="left: 100px; position: absolute;">
        <img src="assets/images/space_bug_right.PNG" />
      </div>`;

      global.spaceBug = document.querySelector(".space_bug");    // Assigns the varaibles spaceBug to a global scale. 
    });

    test("Space Bug continues left on left key down", () => {
      moveLeft(spaceBug);
      expect(spaceBug.style.left).toBe("95px");                  // Every left key down moev left by 5px.
    })
  })
})
 

