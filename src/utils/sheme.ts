import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
	product_name: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	creator: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	rating: Yup.number()
		.min(1, 'Too Short!')
		.max(11, 'Too Long!')
		.required('Required'),
	yearPublication: Yup.number().required('Required')
});
