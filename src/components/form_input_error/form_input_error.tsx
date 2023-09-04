
interface ErrorInputProps {
	value: boolean,
	message: string | undefined
}

const ErrorInput = ({ value, message }: ErrorInputProps) => {
	return (
		<div className={"error_block"}>
			{value ? (
				<p className={"error_message"}>{message}</p>
			) : null}
		</div>
	)
}

export default ErrorInput
