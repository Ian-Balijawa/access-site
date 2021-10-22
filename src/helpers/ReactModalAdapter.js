import Modal from 'react-modal';

/* This just wraps react-modal to allow styling the modal overlay, you shouldn't have the need to change this at all */
// eslint-disable-next-line import/no-anonymous-default-export
export default ({ className, ...props }) => {
	const contentClassName = `${className}__content`;
	const overlayClassName = `${className}__overlay`;
	return (
		<Modal
			className={contentClassName}
			overlayClassName={overlayClassName}
			{...props}
		/>
	);
};
