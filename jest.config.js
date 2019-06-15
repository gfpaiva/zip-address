// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ],

  // An array of directory names to be searched recursively up from the requiring module's location
  moduleDirectories: [
    "node_modules"
  ],

  // The root directory that Jest should scan for tests and modules within
  // rootDir: 'src',

  // A list of paths to snapshot serializer modules Jest should use for snapshot testing
  snapshotSerializers: ["enzyme-to-json/serializer"],

  // The glob patterns Jest uses to detect test files
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: [
    "/node_modules/"
  ],

  // This option sets the URL for the jsdom environment. It is reflected in properties such as location.href
  testURL: "http://localhost:3000",

  // Indicates whether each individual test should be reported during the run
  verbose: true,

  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
};
