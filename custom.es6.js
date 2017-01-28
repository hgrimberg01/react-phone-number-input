export { default as default } from './es6/input'

export
{
	parse as parse_phone_number,
	parse as parsePhoneNumber,
	format as format_phone_number,
	format as formatPhoneNumber,
	is_valid_number as is_valid_phone_number,
	is_valid_number as isValidPhoneNumber
}
from 'libphonenumber-js/custom.es6'