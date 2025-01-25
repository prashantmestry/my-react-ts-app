module.exports = {
  preset: "ts-jest", // Use ts-jest for handling TypeScript files
  testEnvironment: "jsdom", // Set the test environment, e.g., node or jsdom
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"], // Add this line
  transform: {
    // "^.+\\.tsx?$": "ts-jest", // Transform TypeScript files using ts-jest
    "^.+\\.[tj]sx?$": "babel-jest",
  },
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverage: true, // Enable coverage collection
  coverageDirectory: "coverage",
  //   transformIgnorePatterns: [
  //     "<rootDir>/node_modules/(?!mathletics-portal-communication-service)",
  //   ],
  coverageReporters: ["text", "lcov"], // Specify coverage reporters
};
