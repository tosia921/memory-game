module.exports = {
	env: {
		browser: true,
		amd: true,
		node: true,
	},
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:@typescript-eslint/recommended'],
	rules: {
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': [
			'warn', // or "error"
			{
				argsIgnorePattern: '^_',
				varsIgnorePattern: '^_',
				caughtErrorsIgnorePattern: '^_',
			},
		],
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'no-restricted-imports': 'off',
		'@typescript-eslint/no-restricted-imports': [
			'warn',
			{
				name: 'react-redux',
				importNames: ['useSelector', 'useDispatch'],
				message: 'Use typed hooks `useAppDispatch` and `useAppSelector` instead.',
			},
		],
	},
};
