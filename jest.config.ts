module.exports = {
    roots: ['./tests'],
    coveragePathIgnorePatterns: [
        '/node_modules',
        '/tests/'
    ],
    collectCoverage: true,
    preset: 'ts-jest/presets/default-esm',
    testEnvironment: 'node',
    setupFiles: ['dotenv/config'],
    globals: {
    	tsJest: {
	    useESM: true
	}
    },
};
