import { toast } from 'react-toastify';

const Notification = {
	success(message) {
		toast.success(message, {
			position: toast.POSITION.BOTTOM_CENTER,
			className: 'notification'
		});
	},
	danger(message) {
		toast.error(message, {
			position: toast.POSITION.BOTTOM_CENTER,
			className: 'notification'
		});
	},
	warning(message) {
		toast.warn(message, {
			position: toast.POSITION.BOTTOM_CENTER,
			className: 'notification'
		});
	},
	info(message) {
		toast.info(message, {
			position: toast.POSITION.BOTTOM_CENTER,
			className: 'notification'
		});
	}
}

export default Notification;