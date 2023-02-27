const config = {
  moduleFileExtensions: ["js", "ts", "tsx"],
  transformIgnorePatterns: ["/node_modules/"],
  testMatch: ["**/__tests__/**/*.(j|t)s?(x)"],
  roots: ["<rootDir>"],
  transform: {
    "^.+\\.(t|j)sx?$": "esbuild-jest",
  },
  testEnvironment: "jsdom",
};

export default config;
