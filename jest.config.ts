module.exports = {
    roots: ['./tests'],
    coveragePathIgnorePatterns: [
        '/node_modules',
        '/tests/'
    ],
    collectCoverage: true,
    preset: 'ts-jest',
    testEnvironment: 'node',
    setupFiles: ['dotenv/config']
};