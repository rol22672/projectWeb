import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class NotificationService {
    static options = {
        position: "bottom-center",
        autoClose: 7000,
    }

    static success(message) {
        toast.success(message, this.options);
    }

    static info(message) {
        toast.info(message, this.options);
    }

    static warning(message) {
        toast.warning(message, this.options);
    }

    static error(message) {
        toast.error(message, this.options);
    }
}

export default NotificationService;
