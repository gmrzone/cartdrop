/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

module.exports = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    globals: {
        "ts-jest": {
            tsconfig: "./tsconfig.jest.json",
        },
    },
    setupFilesAfterEnv: ["./jest.setup.ts"],
    coverageThreshold: {
        global: {
            branches: 60,
            functions: 60,
            lines: 60,
            statements: 60,
        },
    },
};
